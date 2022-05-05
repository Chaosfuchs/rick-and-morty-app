import Link from 'next/link';
import { StyledButton } from '../components/button';

export default function Episodes() {
  return (
    <>
      <h1>Episodes</h1>
      <StyledNavbar>
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
      </StyledNavbar>
    </>
  );
}
