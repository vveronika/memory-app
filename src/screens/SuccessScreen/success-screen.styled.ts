import styled from 'styled-components';
import { device } from 'theme/app.styled';

export const ScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const SuccessMessage = styled.p`
  color: ${props => props.theme.pinkHighlight};
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
`;

export const ScoreMessage = styled.p`
  color: ${props => props.theme.pinkHighlight};
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0 0 30px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  min-height: 110px;
  justify-content: space-between;

  @media ${device.tablet} {
    width: 500px;
    flex-direction: row;
    align-items: center;
  }
`;