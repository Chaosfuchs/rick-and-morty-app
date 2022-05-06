import Link from 'next/link';
import { Title } from '../components/header';
import { StyledButton } from '../components/button';
import { StyledNavbar } from '../components/navbar';

export default function Characters() {
  return (
    <div>
      <Title>Characters</Title>
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
