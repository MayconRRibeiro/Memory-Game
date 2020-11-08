import React, { useCallback, useState } from 'react';

import { Container, CardFront, CardBack } from './styles';

const Card: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = useCallback(() => {
    setIsFlipped(!isFlipped);
  }, [isFlipped]);

  return (
    <Container isFlipped={isFlipped} onClick={handleCardFlip}>
      <CardFront>
        <h1>Frente</h1>
      </CardFront>
      <CardBack>
        <h1>Verso</h1>
      </CardBack>
    </Container>
  );
};

export default Card;
