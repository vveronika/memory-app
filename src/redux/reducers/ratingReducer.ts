import { RatingAction, RatingStore } from 'types';
import { SAVE_SCORE } from '../actionTypes';

const initialState: RatingStore = {
  rating: [],
};

const ratingReducer = (state = initialState, action: RatingAction) => {
  switch (action.type) {
    case SAVE_SCORE:
      return {
        ...state,
        rating: [...state.rating, action.score],
      };
    default:
      return state;
  }
};

export default ratingReducer;
