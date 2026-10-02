export type GamePhase = "intro" | "level" | "lock" | "surprise";

export type GameState = {
  currentLevel: number;
  completedLevels: number[];
  collectedNumbers: number[];
  musicEnabled: boolean;
  giftUnlocked: boolean;
  gameStarted: boolean;
};

export const INITIAL_GAME_STATE: GameState = {
  currentLevel: 0,
  completedLevels: [],
  collectedNumbers: [],
  musicEnabled: true,
  giftUnlocked: false,
  gameStarted: false,
};

export const SECRET_CODE = "1910";
export const STORAGE_KEY = "birthday-quest-progress";
