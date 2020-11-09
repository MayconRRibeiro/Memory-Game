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
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 1rem;

  width: 90%;
  max-width: 470px;
`;

export const RoundCounter = styled.strong`
  color: #d9faff;
  font-size: 36px;
  text-align: center;

  margin-top: 35px;
`;
