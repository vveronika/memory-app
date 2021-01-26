import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 20px;
  min-width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  outline: none;
  transition: ${(props) => props.theme.basicTransition};
  color: ${(props) => props.theme.greenHighlight};
  border: 3px solid ${(props) => props.theme.greenHighlight};
  background-color: transparent;
  box-shadow: 0 0 10px rgba(81, 203, 238, 1);
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  &:hover:not([disabled]) {
    cursor: pointer;
    box-shadow: 0 0 15px rgba(81, 203, 238, 1);
  }
  &:disabled {
    opacity: 0.5;
    box-shadow: none;
  }
`;
