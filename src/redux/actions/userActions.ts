import * as actionTypes from '../actionTypes';

export function onNameChange(userName: string) {
  return {
    type: actionTypes.CHANGE_USER_NAME,
    userName,
  };
}

export function onScoreUpdate(score: number) {
  return {
    type: actionTypes.UPDATE_SCORE,
    score,
  };
}

export function onSetWinner(winner: boolean) {
  return {
    type: actionTypes.SET_WINNER,
    winner,
  };
}
