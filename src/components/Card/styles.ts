import styled, { css } from 'styled-components';

interface ContainerProps {
  isFlipped: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  width: 120px;
  height: 160px;

  user-select: none;
  cursor: pointer;

  border: 2px solid #1b262c;
  border-radius: 4px;

  transform: perspective(1000px);
  transform-style: preserve-3d;
  transition: transform 0.5s ease-in-out;

  ${props =>
    props.isFlipped &&
    css`
      transform: rotateY(180deg);
    `}
`;

const CardBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  width: 100%;
  height: 100%;

  backface-visibility: hidden;
`;

export const CardFront = styled(CardBody)`
  background-color: #bbe1fa;
  transform: rotateY(180deg);
`;

export const CardBack = styled(CardBody)`
  background-color: #192965;
`;
