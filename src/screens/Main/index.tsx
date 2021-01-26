import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import GameBoard from 'components/GameBoard';
import { connect } from 'react-redux';
import ClickCounter from 'components/ui/ClickCounter';
import {
  MainWrapper,
  CounterWrapper,
  CongratulationsWrapper,
  CongratulationsText,
} from './main.styled';
import BaseButton from 'components/ui/BaseButton';
import { RootState, Score } from 'types';
import { onSaveScore } from 'redux/actions';

interface Props extends RouteComponentProps<any> {
  score: number;
  winner: boolean;
  userName: string;
  onSaveScore: (value: Score) => void;
}

const Main: React.FC<Props> = (props) => {
  useEffect(() => {
    if (props.userName === '') {
      props.history.push('/');
    }
  }, []);
  const clickHandler = () => {
    props.onSaveScore({ userName: props.userName, score: props.score });
    props.history.push('success');
  };
  return (
    <MainWrapper>
      <CounterWrapper>
        <ClickCounter clicksQty={props.score} />
      </CounterWrapper>
      <GameBoard />
      <CongratulationsWrapper>
        {props.winner && (
          <>
            <CongratulationsText>You won!</CongratulationsText>
            <BaseButton onClick={clickHandler} label="See rating" />
          </>
        )}
      </CongratulationsWrapper>
    </MainWrapper>
  );
};

const mapStateToProps = (state: RootState) => {
  const score = state.userReducer.score;
  const winner = state.userReducer.winner;
  const userName = state.userReducer.userName;
  return {
    score,
    winner,
    userName,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    onSaveScore: (score: Score) => dispatch(onSaveScore(score)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
