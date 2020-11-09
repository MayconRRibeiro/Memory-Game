import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useUser } from '../../hooks/UserContext';

import Card from '../../components/Card';
import generateCards from '../../utils/generateCards';

import CardDTO from '../../dtos/CardDTO';

import { Container, CardListContainer, RoundCounter } from './styles';

const Board: React.FC = () => {
  const [cards, setCards] = useState<CardDTO[]>(generateCards);
  const [firstCard, setFirstCard] = useState<CardDTO>();
  const [secondCard, setSecondCard] = useState<CardDTO>();
  const [roundCounter, setRoundCounter] = useState(0);

  const { data } = useUser();
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      setCards(prevCards =>
        prevCards.map(card => ({ ...card, isFlipped: false })),
      );
    }, 1500);
  }, []);

  const resetSelectedCards = useCallback(() => {
    setFirstCard(undefined);
    setSecondCard(undefined);
  }, []);

  const setCardIsFlipped = useCallback((cardID, isFlipped) => {
    setCards(prevCards =>
      prevCards.map(card => {
        if (card.id === cardID) return { ...card, isFlipped };

        return card;
      }),
    );
  }, []);

  const onFailureGuess = useCallback(() => {
    if (!firstCard || !secondCard) return;

    setTimeout(() => {
      setCardIsFlipped(firstCard.id, false);
    }, 500);

    setTimeout(() => {
      setCardIsFlipped(secondCard.id, false);
    }, 500);
  }, [firstCard, secondCard, setCardIsFlipped]);

  useEffect(() => {
    const MIN_ROUNDS_TO_WIN = 10;
    if (roundCounter < MIN_ROUNDS_TO_WIN) return;

    const checkVictory = () => {
      const winCondition = cards.every(card => card.isFlipped);

      if (winCondition) {
        history.push({
          pathname: '/leaderboard',
          state: { rounds: roundCounter },
        });
      }
    };

    checkVictory();
  }, [roundCounter]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!firstCard || !secondCard) return;

    if (firstCard.imageURL !== secondCard.imageURL) {
      onFailureGuess();
    }

    resetSelectedCards();
    setRoundCounter(prevState => prevState + 1);
  }, [firstCard, secondCard, onFailureGuess, resetSelectedCards]);

  const onCardClick = useCallback(
    (card: CardDTO) => {
      if (card.isFlipped) return;

      card.isFlipped = true; // eslint-disable-line no-param-reassign

      firstCard ? setSecondCard(card) : setFirstCard(card);
    },
    [firstCard],
  );

  useEffect(() => {
    if (!data || !data.name) {
      history.push('/');
    }
  }, [data, history]);

  return (
    <Container>
      <CardListContainer>
        {cards.map(card => (
          <Card
            key={card.id}
            imageURL={card.imageURL}
            imageName={card.imageName}
            onCardClick={() => onCardClick(card)}
            isFlipped={card.isFlipped}
          />
        ))}
      </CardListContainer>
      <RoundCounter>{`Rodadas: ${roundCounter}`}</RoundCounter>
    </Container>
  );
};

export default Board;
