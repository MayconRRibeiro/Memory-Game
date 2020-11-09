import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
`;

export const Content = styled.div`
  form {
    display: flex;
    flex-direction: column;

    h1 {
      color: #fff;
      font-size: 36px;
      font-weight: 300;
      user-select: none;

      margin-bottom: 24px;
    }

    input {
      color: #fff;
      font-size: 20px;
      font-weight: 300;
      text-align: center;

      background-color: rgba(255, 255, 255, 0.3);
      border: 1px solid rgba(255, 255, 255, 0.6);
      border-radius: 3px;

      padding: 5px 15px;

      &:focus::placeholder {
        color: transparent;
      }

      ::placeholder {
        color: #fff;
        opacity: 1; /* Firefox */
      }
    }

    button {
      color: #47a1f7;
      font-size: 18px;
      font-weight: 500;

      border: 0;
      border-radius: 8px;

      margin-top: 20px;
      padding: 5px 0;

      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#fff')};
      }
    }
  }
`;
