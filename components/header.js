import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 35px;
  text-align: center;
  margin: 0;
  padding: 15px;
  font-family: rickAndMortyFonts;
  background-color: #290363;
  color: ${({ theme }) => theme.colors.primary};
`;
