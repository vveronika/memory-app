import React from 'react';
import { Score } from 'types';
import {
  BoxWrapper,
  Row,
  LabelWrapper,
  ValueWrapper,
} from './rating-box.styled';

interface Props {
  rating: Score;
}

const RatingBox: React.FC<Props> = ({ rating }) => {
  return (
    <BoxWrapper>
      <Row>
        <LabelWrapper>Username:</LabelWrapper>
        <ValueWrapper>{rating.userName}</ValueWrapper>
      </Row>
      <Row>
        <LabelWrapper>Score:</LabelWrapper>
        <ValueWrapper>{rating.score}</ValueWrapper>
      </Row>
    </BoxWrapper>
  );
};

export default RatingBox;
