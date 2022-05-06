import styled from 'styled-components';
import Link from 'next/link';
import { StyledButton } from '../components/button';
import { StyledNavbar } from '../components/navbar';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  return (
    <div>
      <h1>Rick and Morty API</h1>
      <section></section>

      <StyledNavbar>
        <Link passHref href="/">
          <StyledButton as="a">Home</StyledButton>
        </Link>
        <Link passHref href="/characters">
          <StyledButton as="a">
            <a>Characters</a>
          </StyledButton>
        </Link>
        <Link passHref href="/episodes">
          <StyledButton as="a">
            <a>Episodes</a>
          </StyledButton>
        </Link>
      </StyledNavbar>
    </div>
  );
}
