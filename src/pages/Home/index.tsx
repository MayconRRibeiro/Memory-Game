import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Content } from './styles';

const Home: React.FC = () => {
  const history = useHistory();

  const handleSubmit = useCallback(() => {
    history.push('/Board');
  }, [history]);

  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit}>
          <h1>Jogo de Memória</h1>

          <input type="text" placeholder="nome" />
          <button type="submit">Jogar</button>
        </form>
      </Content>
    </Container>
  );
};

export default Home;
