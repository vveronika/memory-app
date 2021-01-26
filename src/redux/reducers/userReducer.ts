import { User, UserAction } from 'types';
import { CHANGE_USER_NAME, UPDATE_SCORE, SET_WINNER } from '../actionTypes';

const initialState: User = {
  userName: '',
  score: 0,
  winner: false,
};

const userReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case CHANGE_USER_NAME:
      return {
        ...state,
        userName: action.userName,
      };
    case UPDATE_SCORE:
      return {
        ...state,
        score: action.score,
      };
    case SET_WINNER:
      return {
        ...state,
        winner: action.winner,
      };
    default:
      return state;
  }
};

export default userReducer;
