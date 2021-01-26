import styled from 'styled-components';

export const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const CounterWrapper = styled.section`
  margin-bottom: 50px;
`;

export const CongratulationsWrapper = styled.div`
  min-height: 110px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CongratulationsText = styled.p`
  font-family: 'Press Start 2P', cursive;
  color: ${props => props.theme.pinkHighlight};
`;
