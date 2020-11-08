import React, { useCallback, useState } from 'react';

import reactImg from '../../assets/CardBack/reactJS.png';
import { Container, CardFront, CardBack } from './styles';

interface CardProps {
  imageURL: string;
}

const Card: React.FC<CardProps> = ({ imageURL }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = useCallback(() => {
    setIsFlipped(!isFlipped);
  }, [isFlipped]);

  return (
    <Container isFlipped={isFlipped} onClick={handleCardFlip}>
      <CardFront>
        <img src={imageURL} alt={imageURL} />
      </CardFront>
      <CardBack>
        <img src={reactImg} alt="ReactJS" />
      </CardBack>
    </Container>
  );
};

export default Card;
