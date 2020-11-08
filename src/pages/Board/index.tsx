import React, { useState } from 'react';

import Card from '../../components/Card';

import generateCards from '../../utils/generateCards';

import { Container, CardListContainer, RoundCounter } from './styles';

const Board: React.FC = () => {
  const [cards, setCards] = useState(generateCards);

  return (
    <Container>
      <CardListContainer>
        {cards.map(card => (
          <Card key={card.id} imageURL={card.imageURL} />
        ))}
      </CardListContainer>
      <RoundCounter>Rodadas: 0</RoundCounter>
    </Container>
  );
};

export default Board;
