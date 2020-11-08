import React from 'react';

import { Container, Content } from './styles';

const Home: React.FC = () => (
  <Container>
    <Content>
      <form>
        <h1>Jogo de Memória</h1>

        <input type="text" placeholder="nome" />
        <button type="submit">Jogar</button>
      </form>
    </Content>
  </Container>
);

export default Home;
