"use client";

import { useEffect, useMemo, useState } from "react";
import { levelMeta } from "@/game/data";
import { loadGameState, saveGameState } from "@/game/storage";
import { type GamePhase, type GameState, INITIAL_GAME_STATE } from "@/game/types";
import ProgressRail from "./ProgressRail";
import IntroScreen from "./screens/IntroScreen";
import LevelFourScreen from "./screens/LevelFourScreen";
import LevelOneScreen from "./screens/LevelOneScreen";
import LevelThreeScreen from "./screens/LevelThreeScreen";
import LevelTwoScreen from "./screens/LevelTwoScreen";
import LockScreen from "./screens/LockScreen";
import SurpriseScreen from "./screens/SurpriseScreen";
import playTone from "./playTone";

type Reward = { number: number; nextLevel: number | "lock" } | null;

export default function GameShell() {
  const [state, setState] = useState<GameState>(INITIAL_GAME_STATE);
  const [hydrated, setHydrated] = useState(false);
  const [phase, setPhase] = useState<GamePhase>("intro");
  const [reward, setReward] = useState<Reward>(null);
  const [wrong, setWrong] = useState(0);

  useEffect(() => {
    const restore = window.setTimeout(() => {
      const saved = loadGameState();
      setState(saved);
      setPhase(saved.giftUnlocked ? "surprise" : saved.gameStarted ? saved.completedLevels.length === 4 ? "lock" : "level" : "intro");
      setHydrated(true);
    }, 0);
    return () => window.clearTimeout(restore);
  }, []);

  useEffect(() => {
    if (hydrated) saveGameState(state);
  }, [state, hydrated]);

  const currentMeta = useMemo(() => levelMeta.find((level) => level.number === state.currentLevel), [state.currentLevel]);

  const completeLevel = (level: number, number: number) => {
    if (state.completedLevels.includes(level)) return;
    const completedLevels = [...state.completedLevels, level];
    setState((current) => ({
      ...current,
      completedLevels,
      collectedNumbers: [...current.collectedNumbers, number],
      currentLevel: level < 4 ? level + 1 : 4,
    }));
    setReward({ number, nextLevel: level < 4 ? level + 1 : "lock" });
    playTone(state.musicEnabled, 720, 0.18);
  };

  const start = () => {
    setState((current) => ({ ...current, gameStarted: true, currentLevel: 1 }));
    setPhase("level");
  };

  const continueJourney = () => {
    if (reward?.nextLevel === "lock") setPhase("lock");
    else setPhase("level");
    setReward(null);
  };

  const toggleSound = () => setState((current) => ({ ...current, musicEnabled: !current.musicEnabled }));
  const markWrong = () => {
    setWrong((value) => value + 1);
    window.setTimeout(() => setWrong(0), 350);
    playTone(state.musicEnabled, 180);
  };
  const unlock = () => {
    setState((current) => ({ ...current, giftUnlocked: true }));
    setPhase("surprise");
  };
  const replay = () => {
    setState(INITIAL_GAME_STATE);
    setPhase("intro");
    setReward(null);
  };

  if (phase === "intro") return <IntroScreen onStart={start} soundEnabled={state.musicEnabled} />;
  if (phase === "lock") return <LockScreen state={state} onUnlock={unlock} onToggleSound={toggleSound} />;
  if (phase === "surprise") return <SurpriseScreen onReplay={replay} />;

  return (
    <main className={`game-screen accent-${currentMeta?.accent ?? "violet"} ${wrong ? "has-error" : ""}`}>
      <ProgressRail state={state} onToggleSound={toggleSound} />
      <div className="level-progress"><span>0{state.currentLevel}</span><i /><small>04</small></div>
      {state.currentLevel === 1 && <LevelOneScreen onComplete={() => completeLevel(1, 1)} />}
      {state.currentLevel === 2 && <LevelTwoScreen onWrong={markWrong} onComplete={() => completeLevel(2, 9)} />}
      {state.currentLevel === 3 && <LevelThreeScreen onComplete={() => completeLevel(3, 1)} />}
      {state.currentLevel === 4 && <LevelFourScreen onComplete={() => completeLevel(4, 0)} />}
      {reward && (
        <div className="reward-layer">
          <div className="reward-card">
            <span className="reward-kicker">TÌM THẤY MẢNH GHÉP</span>
            <strong>?</strong>
            <p>Cánh cửa tiếp theo đã đang chờ.</p>
            <button className="primary-button visible" onClick={continueJourney}>
              <span>{reward.nextLevel === "lock" ? "ĐẾN GẦN KHÓA" : "MỞ CỬA TIẾP THEO"}</span><b>↗</b>
            </button>
          </div>
        </div>
      )}
    </main>
  );
}