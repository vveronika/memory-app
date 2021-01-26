import React from 'react';
import { CounterWrapper } from './click-counter.styled';

interface Props {
  clicksQty: number;
}

const ClickCounter: React.FC<Props> = (props) => {
  return (
    <CounterWrapper>Number of your moves: {props.clicksQty}</CounterWrapper>
  );
};

export default ClickCounter;
