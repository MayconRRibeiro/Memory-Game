import React from 'react';

import reactImg from '../../assets/CardBack/reactJS.png';
import { Container, CardFront, CardBack } from './styles';

interface CardProps {
  imageURL: string;
  isFlipped: boolean;
  onCardClick(): void;
}

const Card: React.FC<CardProps> = ({ imageURL, isFlipped, onCardClick }) => {
  return (
    <Container isFlipped={isFlipped} onClick={onCardClick}>
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
