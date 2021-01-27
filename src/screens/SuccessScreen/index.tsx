import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  ScreenWrapper,
  SuccessMessage,
  ScoreMessage,
  ButtonsWrapper,
} from './success-screen.styled';
import BaseButton from 'components/ui/BaseButton';
import { RootState, Score } from 'types';
import Rating from 'components/Rating';
import { compareScores } from 'helpers/helperFunctions';

interface Props extends RouteComponentProps<any> {
  userName: string;
  score: number;
  rating: Score[];
}

const SuccessScreen: React.FC<Props> = (props: Props) => {
  useEffect(() => {
    if (props.userName === '') {
      props.history.push('/');
    }
  }, []);

  const playAgainHandler = () => {
    props.history.push('memo');
  };

  const changeUserHandler = () => {
    props.history.push('/');
  };

  const sortedRating = props.rating.sort(compareScores)
  return (
    <ScreenWrapper>
      <SuccessMessage>Congratulations, {props.userName}!</SuccessMessage>
      <ScoreMessage>
        You paired all images with {props.score} moves.
      </ScoreMessage>
      <ButtonsWrapper>
        <BaseButton label="Play again!" onClick={playAgainHandler} />
        <BaseButton label="Change user" onClick={changeUserHandler} />
      </ButtonsWrapper>
      {props.rating.length > 0 && <Rating rating={sortedRating} />}
    </ScreenWrapper>
  );
};

const mapStateToProps = (state: RootState) => {
  const score = state.userReducer.score;
  const userName = state.userReducer.userName;
  const rating = state.ratingReducer.rating;
  return {
    score,
    userName,
    rating,
  };
};

export default connect(mapStateToProps)(SuccessScreen);
