import styled from 'styled-components';

export const BoxWrapper = styled.div`
  border-radius: 3px;
  cursor: pointer;
  border: 3px solid #ff0095;
  box-shadow: 0 0 20px #ff0095;
  margin: 10px;
  width: 200px;
  padding: 5px 15px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 10px 0;
  border-bottom: 1px solid ${(props) => props.theme.grey};
`;

export const LabelWrapper = styled.div`
  margin: 0;
  color: #00ffff;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 10px;
`;

export const ValueWrapper = styled.div`
  margin: 0;
  color: #00ffff;
  font-size: 18px;
`;
