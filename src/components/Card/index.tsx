import React from 'react';

import reactImg from '../../assets/CardBack/reactJS.png';
import { Container, CardFront, CardBack } from './styles';

interface CardProps {
  imageURL: string;
  imageName: string;
  isFlipped: boolean;
  onCardClick(): void;
}

const Card: React.FC<CardProps> = ({
  imageURL,
  imageName,
  isFlipped,
  onCardClick,
}) => {
  return (
    <Container isFlipped={isFlipped} onClick={onCardClick}>
      <CardFront>
        <img draggable={false} src={imageURL} alt={imageName} />
      </CardFront>
      <CardBack>
        <img draggable={false} src={reactImg} alt="ReactJS" />
      </CardBack>
    </Container>
  );
};

export default Card;
