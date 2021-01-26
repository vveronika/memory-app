import styled from 'styled-components';
import { device } from 'theme/app.styled';

export const BoardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;

  @media ${device.tablet} {
    width: 760px;
  }
`;
