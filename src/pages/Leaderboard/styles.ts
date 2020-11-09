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

  a {
    background-color: #47a1f7;
    text-decoration: none;

    width: 100%;
    max-width: 200px;
    height: 36px;

    border-radius: 10px;

    display: flex;
    flex-direction: center;
    align-items: center;

    margin: 20px;

    strong {
      flex: 1;
      text-align: center;
      color: #fff;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: #c7ede6;

  width: 400px;

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

  background-color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 0 0 10px 10px;

  li {
    display: flex;
    justify-content: space-between;

    list-style: none;
    font-size: 16px;

    padding: 10px;

    strong {
      color: #0f4c75;
    }

    span {
      color: #3282b8;
    }
  }
`;

export const GroupButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
