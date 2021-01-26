import React, { useEffect, useState } from 'react';
import { BoardWrapper } from './game-board.styled';
import { SYMBOLS } from 'helpers/data';
import GameCard from 'components/ui/GameCard';
import { shuffleArray } from 'helpers/helperFunctions';
import { RootState, Symbol } from 'types';
import { onScoreUpdate, onSetWinner } from 'redux/actions';
import { connect } from 'react-redux';

interface Props {
  onScoreUpdate: (value: number) => void;
  onSetWinner: (value: boolean) => void;
  score: number;
}

const GameBoard: React.FC<Props> = ({ onScoreUpdate, score, onSetWinner }) => {
  const [cards, setCards] = useState<Symbol[]>([]);
  const [openCards, setOpenCards] = useState<Symbol[]>([]);
  const [finishedCards, setFinishedCards] = useState<Symbol[]>([]);
  const [disableCardClick, setDisabled] = useState<boolean>(false);

  useEffect(() => {
    onScoreUpdate(0);
    onSetWinner(false);
  }, []);

  useEffect(() => {
    let cardsArray: Symbol[] = [];
    let shuffledSymbols = shuffleArray([...SYMBOLS, ...SYMBOLS]);
    shuffledSymbols.map((symbol, index) =>
      cardsArray.push({ ...symbol, id: index }),
    );
    setCards(cardsArray);
  }, []);

  useEffect(() => {
    if (openCards.length === 2) {
      setDisabled(true);
      checkCards();
    }
  }, [openCards]);

  useEffect(() => {
    if (
      finishedCards.length !== 0 &&
      finishedCards.length === cards.length / 2
    ) {
      onSetWinner(true);
    }
  });

  const onCardClick = (symbol: Symbol) => {
    if (symbol.isFlipped) {
      return;
    }
    reverseCard(symbol);
    setOpenCards((prevOpenCards) => [
      ...prevOpenCards,
      { ...symbol, isFlipped: true },
    ]);
  };

  const reverseCard = (symbol: Symbol) => {
    let flippedSymbol = { ...symbol, isFlipped: !symbol.isFlipped };
    let cardsArray = [...cards];
    cardsArray[symbol.id] = flippedSymbol;
    setCards(cardsArray);
  };

  const reverseCards = () => {
    let cardsArray = [...cards];
    cardsArray[openCards[0].id] = { ...openCards[0], isFlipped: false };
    cardsArray[openCards[1].id] = { ...openCards[1], isFlipped: false };
    setCards(cardsArray);
  };

  const checkCards = () => {
    if (openCards[0].name === openCards[1].name) {
      setFinishedCards((prevFinishedCards: Symbol[]) => [
        ...prevFinishedCards,
        openCards[0],
      ]);
      setDisabled(false);
    } else {
      setTimeout(() => {
        reverseCards();
        setDisabled(false);
      }, 700);
    }
    onScoreUpdate(score + 1);
    setOpenCards([]);
  };

  return (
    <BoardWrapper>
      {cards.map((symbol: Symbol) => (
        <GameCard
          key={`${symbol.name}${Math.random()}`}
          symbol={symbol}
          clickHandler={() => onCardClick(symbol)}
          disableCardClick={disableCardClick}
        />
      ))}
    </BoardWrapper>
  );
};

const mapStateToProps = (state: RootState) => {
  const score = state.userReducer.score;
  return {
    score,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    onScoreUpdate: (score: number) => dispatch(onScoreUpdate(score)),
    onSetWinner: (winner: boolean) => dispatch(onSetWinner(winner)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
