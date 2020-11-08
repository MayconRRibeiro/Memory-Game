import styled from 'styled-components';

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

    margin-left: auto;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 0 0 10px 10px;

  li {
    list-style: none;
    font-size: 16px;
    padding: 10px;

    strong {
      color: #0f4c75;

      width: 100%;
      height: 100%;
    }

    span {
      color: #3282b8;
      text-align: right;
    }
  }
`;
