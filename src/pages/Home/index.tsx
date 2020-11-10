import React, { ChangeEvent, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useUser } from '../../hooks/UserContext';

import { Container, Content } from './styles';

interface HomeFormData {
  name: string;
}

const Home: React.FC = () => {
  const [formData, setFormData] = useState<HomeFormData>({ name: '' });

  const { playGame } = useUser();
  const history = useHistory();

  const handleSubmit = useCallback(() => {
    try {
      if (!formData.name) return;

      playGame({ name: formData.name });

      history.push('/Board');
    } catch (err) {
      throw new Error(err);
    }
  }, [playGame, formData, history]);

  const handleOnChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      const { value } = event.target;
      setFormData({ name: value });
    },
    [],
  );

  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit}>
          <h1>Jogo de Memória</h1>

          <input
            type="text"
            placeholder="Digite seu nome"
            value={formData.name}
            onChange={handleOnChange}
            required
          />
          <button type="submit">Jogar</button>
        </form>
      </Content>
    </Container>
  );
};

export default Home;
