import * as actionTypes from '../actionTypes';
import { Score } from 'types';

export function onSaveScore(score: Score) {
  return {
    type: actionTypes.SAVE_SCORE,
    score,
  };
}
