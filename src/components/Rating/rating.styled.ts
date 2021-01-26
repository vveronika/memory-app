import styled from 'styled-components';
import { device } from 'theme/app.styled';

export const CounterWrapper = styled.div`
  width: 100%;
  margin-top: 50px;

  @media ${device.tablet} {
    width: 520px;
  }
`;

export const RatingWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const TextWrapper = styled.p`
  font-family: 'Monoton', cursive;
  color: ${(props) => props.theme.greenHighlight};
  font-weight: ${(props) => props.theme.regular};
  font-size: 22px;
  margin-bottom: 10px;
`;
