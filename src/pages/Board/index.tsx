import React from 'react';

import Card from '../../components/Card';

import { Container, CardListContainer, RoundCounter } from './styles';

const Board: React.FC = () => (
  <Container>
    <CardListContainer>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </CardListContainer>
    <RoundCounter>Rodadas: 0</RoundCounter>
  </Container>
);

export default Board;
