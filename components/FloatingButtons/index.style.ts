import styled from '@emotion/styled';

export const FloatingButtons = styled.div`
  position: fixed;
  right: 24px;
  bottom: 24px;
  display: flex;
  flex-direction: column;
  z-index: 2;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border: 2px solid black;
  border-radius: 50%;
  background-color: black;
  color: white;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    background-color: #202020;
    outline: 1px solid black;
  }
`;
