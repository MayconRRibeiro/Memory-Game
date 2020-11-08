import React, { useContext } from 'react';

import UserContext from '../../context/UserContext';

import badgeTrophyImg from '../../assets/badgeTrophy.png';
import { Container, Board, Header, Content } from './styles';

const Leaderboard: React.FC = () => {
  const { name } = useContext(UserContext);

  console.log(name);

  return (
    <Container>
      <Board>
        <Header>
          <img src={badgeTrophyImg} alt="Badge Trophy" />
          <span>Leaderboard</span>
        </Header>
        <Content>
          <ol>
            <li>
              <strong>Miguel Perez</strong>
              <span>7 Rodadas</span>
            </li>
          </ol>
          <ol>
            <li>
              <strong>Douglas Delapria</strong>
              <span>10 Rodadas</span>
            </li>
          </ol>
          <ol>
            <li>
              <strong>Mike Ribeiro</strong>
              <span>21 Rodadas</span>
            </li>
          </ol>
          <ol>
            <li>
              <strong>Random Guy</strong>
              <span>222 Rodadas</span>
            </li>
          </ol>
        </Content>
      </Board>
    </Container>
  );
};

export default Leaderboard;
