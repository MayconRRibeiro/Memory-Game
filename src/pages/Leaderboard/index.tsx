import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { useUser } from '../../hooks/UserContext';

import badgeTrophyImg from '../../assets/badgeTrophy.png';
import { Container, Board, Header, Content } from './styles';

interface playerData {
  id: string;
  name: string;
  rounds: number;
}

interface LocationState {
  rounds: string;
}

const Leaderboard: React.FC = () => {
  const [playersList, setPlayersList] = useState<playerData[]>(() => {
    const players = localStorage.getItem('@MemoryGame:leaderboard');
    return players !== null ? JSON.parse(players) : [];
  });

  const { data } = useUser();
  const location = useLocation<LocationState>();

  useEffect(() => {
    if (!data || !data.name) return;

    const { rounds } = location.state;

    const player = {
      id: uuidv4(),
      name: data.name,
      rounds: Number(rounds),
    };

    const updatedPlayersList = [...playersList, player];

    setPlayersList(updatedPlayersList);

    localStorage.setItem(
      '@MemoryGame:leaderboard',
      JSON.stringify(updatedPlayersList),
    );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Container>
      <Board>
        <Header>
          <img src={badgeTrophyImg} alt="Badge Trophy" />
          <span>Leaderboard</span>
        </Header>
        <Content>
          {playersList.map(player => (
            <ol key={player.id}>
              <li>
                <strong>{player.name}</strong>
                <span>{`${player.rounds} Rodadas`}</span>
              </li>
            </ol>
          ))}
        </Content>
      </Board>
    </Container>
  );
};

export default Leaderboard;
