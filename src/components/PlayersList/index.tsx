import React from 'react';

import {
  ContainerOrderedList,
  ContainerList,
  PlayerName,
  RecordCount,
} from './styles';

interface PlayersListProps {
  key: string;
  name: string;
  rounds: number;
}

const PlayersList: React.FC<PlayersListProps> = ({ key, name, rounds }) => {
  return (
    <ContainerOrderedList key={key}>
      <ContainerList>
        <PlayerName>{name}</PlayerName>
        <RecordCount>{`${rounds} Rodadas`}</RecordCount>
      </ContainerList>
    </ContainerOrderedList>
  );
};

export default PlayersList;
