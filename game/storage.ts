import { GameState, INITIAL_GAME_STATE, STORAGE_KEY } from "./types";

export function loadGameState(): GameState {
  if (typeof window === "undefined") return INITIAL_GAME_STATE;

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return INITIAL_GAME_STATE;

    const parsed = JSON.parse(saved) as Partial<GameState>;
    return {
      ...INITIAL_GAME_STATE,
      ...parsed,
      completedLevels: Array.isArray(parsed.completedLevels) ? parsed.completedLevels : [],
      collectedNumbers: Array.isArray(parsed.collectedNumbers) ? parsed.collectedNumbers : [],
    };
  } catch {
    return INITIAL_GAME_STATE;
  }
}

export function saveGameState(state: GameState) {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }
}
