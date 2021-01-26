import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { Symbol } from 'types';
import { CardWrapper, FrontCard, BackCard } from './game-card.styled';

interface Props {
  clickHandler: () => void;
  symbol: Symbol;
  disableCardClick: boolean;
}

const GameCard: React.FC<Props> = (props) => {
  return (
    <CardWrapper>
      <ReactCardFlip
        isFlipped={props.symbol.isFlipped}
        flipDirection="horizontal"
      >
        <FrontCard
          disabled={props.disableCardClick}
          onClick={props.clickHandler}
        />
        <BackCard
          disabled={props.disableCardClick}
          style={{ backgroundImage: `url(${props.symbol.img})` }}
          onClick={props.clickHandler}
        />
      </ReactCardFlip>
    </CardWrapper>
  );
};

export default GameCard;
