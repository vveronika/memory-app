export type RootState = {
  userReducer: User;
  ratingReducer: RatingStore;
};

export type RatingStore = {
  rating: Score[];
};

export type Symbol = {
  name: string;
  img: string;
  isFlipped: boolean;
  isFinished: boolean;
  id: number;
};

export type User = {
  userName: string;
  score: number;
  winner: boolean;
};

export type Score = {
  userName: string;
  score: number;
};

interface changeUserNameAction {
  type: 'CHANGE_USER_NAME';
  userName: string;
}

interface updateScoreAction {
  type: 'UPDATE_SCORE';
  score: number;
}

interface setWinnerAction {
  type: 'SET_WINNER';
  winner: boolean;
}

interface saveScoreAction {
  type: 'SAVE_SCORE';
  score: Score[];
}

export type UserAction =
  | changeUserNameAction
  | updateScoreAction
  | setWinnerAction;

export type RatingAction = saveScoreAction;
