import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 30px;
  text-align: center;
  margin: 0;
  padding: 15px;
  color: #0bf41b;
  background-color: #290363;
  color: ${({ theme }) => theme.colors.primary};
`;
