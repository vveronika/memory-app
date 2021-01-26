import styled from 'styled-components';
import questionmark from 'assets/questionmark.png';

export const CardWrapper = styled.div`
  margin: 15px;
  width: 150px;
  height: 150px;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.greenGlowBoxShadow};
  border: 1px solid ${(props) => props.theme.greenHighlight};
`;

export const FrontCard = styled.button`
  background: url(${questionmark}) no-repeat center center;
  background-size: cover;
  width: 150px;
  height: 150px;
  color: white;
`;

export const BackCard = styled.button`
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 150px;
  height: 150px;
`;
