import styled from 'styled-components';
import { device } from 'theme/app.styled';

export const Title = styled.h1`
  font-family: 'Monoton', cursive;
  color: ${(props) => props.theme.greenHighlight};
  font-size: 50px;
  font-weight: ${(props) => props.theme.regular};
  margin: 0 0 50px;
  text-align: center;

  @media ${device.tablet} {
    font-size: 80px;
  }
`;
