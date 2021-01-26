import styled from 'styled-components';
import { device } from 'theme/app.styled';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

export const Input = styled.input`
  width: 250px;
  padding: 13px;
  border-radius: 5px;
  border: 0;
  outline: 0;
  border: 3px solid rgba(81, 203, 238, 1);
  background: transparent;
  color: ${(props) => props.theme.white};
  transition: ${(props) => props.theme.basicTransition};
  &:focus {
    box-shadow: 0 0 10px rgba(81, 203, 238, 1);
  }

  @media ${device.tablet} {
    width: 400px;
  }
`;
