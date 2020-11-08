import React, { useCallback, useEffect, useState } from 'react';

import Card from '../../components/Card';
import generateCards from '../../utils/generateCards';

import CardDTO from '../../dtos/CardDTO';

import { Container, CardListContainer, RoundCounter } from './styles';

const Board: React.FC = () => {
  const [cards, setCards] = useState(generateCards);
  const [firstCard, setFirstCard] = useState<CardDTO>();
  const [secondCard, setSecondCard] = useState<CardDTO>();

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

  const onSuccessGuess = useCallback(() => {
    if (!firstCard || !secondCard) return;

    console.log('Acertei'); // eslint-disable-line
  }, [firstCard, secondCard]);

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
    if (!firstCard || !secondCard) return;

    firstCard.imageURL === secondCard.imageURL
      ? onSuccessGuess()
      : onFailureGuess();

    resetSelectedCards();
  }, [
    firstCard,
    secondCard,
    onSuccessGuess,
    onFailureGuess,
    resetSelectedCards,
  ]);

  const onCardClick = useCallback(
    (card: CardDTO) => {
      if (card.isFlipped) return;

      card.isFlipped = true; // eslint-disable-line no-param-reassign

      firstCard ? setSecondCard(card) : setFirstCard(card);
    },
    [firstCard],
  );

  return (
    <Container>
      <CardListContainer>
        {cards.map(card => (
          <Card
            key={card.id}
            imageURL={card.imageURL}
            onCardClick={() => onCardClick(card)}
            isFlipped={card.isFlipped}
          />
        ))}
      </CardListContainer>
      <RoundCounter>Rodadas: 0</RoundCounter>
    </Container>
  );
};

export default Board;
