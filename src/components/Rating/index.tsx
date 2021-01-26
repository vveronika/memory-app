import React from 'react';
import RatingBox from 'components/ui/RatingBox';
import { Score } from 'types';
import { CounterWrapper, TextWrapper, RatingWrapper } from './rating.styled';

interface Props {
  rating: Score[];
}

const Rating: React.FC<Props> = ({ rating }) => {
  return (
    <CounterWrapper>
      <TextWrapper>Rating:</TextWrapper>
      <RatingWrapper>
        {rating.map((r) => (
          <RatingBox rating={r} />
        ))}
      </RatingWrapper>
    </CounterWrapper>
  );
};

export default Rating;
