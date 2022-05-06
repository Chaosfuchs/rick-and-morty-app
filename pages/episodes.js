import Link from 'next/link';
import { StyledButton } from '../components/button';
import { StyledNavbar } from '../components/navbar';

export default function Episodes() {
  return (
    <div>
      <h1>Episodes</h1>
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
