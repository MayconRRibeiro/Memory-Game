import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 36px;
`;

export const CardListContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 12px;
`;

export const RoundCounter = styled.strong`
  color: #d9faff;
  font-size: 36px;
  text-align: center;

  margin-top: 35px;
`;
