import Link from 'next/link';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { StyledButton } from '../components/button';
import { StyledNavbar } from '../components/navbar';

export default function Characters() {
  return (
    <div>
      <h1>Characters</h1>
      <nav>
        <StyledButton>
          <Link href="/">
            <a>Home</a>
          </Link>
        </StyledButton>
        <StyledButton>
          <Link href="/characters">
            <a>Characters</a>
          </Link>
        </StyledButton>
        <StyledButton>
          <Link href="/episodes">
            <a>Episodes</a>
          </Link>
        </StyledButton>
      </nav>
    </div>
  );
}
