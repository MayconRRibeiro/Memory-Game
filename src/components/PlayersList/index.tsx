import React from 'react';

import { ContainerOrderedList } from './styles';

interface PlayersListProps {
  key: string;
  name: string;
  rounds: number;
}

const PlayersList: React.FC<PlayersListProps> = ({ key, name, rounds }) => {
  return (
    <ContainerOrderedList key={key}>
      <li>
        <strong>{name}</strong>
        <span>{`${rounds} Rodadas`}</span>
      </li>
    </ContainerOrderedList>
  );
};

export default PlayersList;
