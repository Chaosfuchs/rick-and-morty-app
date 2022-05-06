import Link from 'next/link';
import { Title } from '../components/header';
import { StyledButton } from '../components/button';
import { StyledNavbar } from '../components/navbar';
import { StyledCard } from '../components/card';

export default function Home() {
  return (
    <>
      <Title>Rick and Morty API</Title>
      <section>
        <StyledCard>
          <ul>
            <li>Name: </li>
            <li>Status: </li>
            <li>Species: </li>
            <li>Type: </li>
            <li>Gender: </li>
            <li>Origin: </li>
            <li>Location: </li>
          </ul>
          <img></img>
        </StyledCard>
        <StyledCard>
          <ul>
            <li>Name: </li>
            <li>Status: </li>
            <li>Species: </li>
            <li>Type: </li>
            <li>Gender: </li>
            <li>Origin: </li>
            <li>Location: </li>
          </ul>
          <img></img>
        </StyledCard>
        <StyledCard>
          <ul>
            <li>Name: </li>
            <li>Status: </li>
            <li>Species: </li>
            <li>Type: </li>
            <li>Gender: </li>
            <li>Origin: </li>
            <li>Location: </li>
          </ul>
          <img></img>
        </StyledCard>
        <StyledCard>
          <ul>
            <li>Name: </li>
            <li>Status: </li>
            <li>Species: </li>
            <li>Type: </li>
            <li>Gender: </li>
            <li>Origin: </li>
            <li>Location: </li>
          </ul>
          <img></img>
        </StyledCard>
      </section>

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
    </>
  );
}
