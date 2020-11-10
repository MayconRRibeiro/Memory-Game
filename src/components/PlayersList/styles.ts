import styled from 'styled-components';

export const ContainerOrderedList = styled.ol`
  counter-increment: selection;

  li {
    display: flex;

    width: 100%;

    font-size: 16px;

    padding: 10px;

    &::before {
      content: counter(selection);
      color: #1b262c;

      margin-right: 10px;
    }

    strong {
      color: #0f4c75;

      margin-right: 16px;
    }

    span {
      color: #3282b8;

      margin-left: auto;
    }
  }
`;
