import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
`;

export const Board = styled.div`
  width: auto;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: #c7ede6;

  width: auto;

  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px 10px 0 0;

  padding: 10px 15px;

  img {
    max-width: 40px;
  }

  span {
    color: #fff;
    font-size: 32px;
    font-weight: 300;
    user-select: none;

    margin-left: 12px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 0 0 10px 10px;
`;

export const GroupButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s;

  a {
    display: flex;
    flex-direction: center;
    align-items: center;

    width: 100%;
    max-width: 200px;
    height: 46px;

    border-radius: 10px;
    margin: 20px;

    background-color: #47a1f7;
    transition: background-color 0.2s;
    text-decoration: none;

    &:hover {
      background: ${shade(0.2, '#47a1f7')};
    }

    strong {
      flex: 1;
      text-align: center;
      color: #fff;
    }
  }
`;
