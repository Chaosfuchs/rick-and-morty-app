import { Title } from '../components/header';
import Navbar, { StyledNavbar } from '../components/navbar';
import CharacterCard from '../components/card';

export default function Characters() {
  return (
    <>
      <Title>Characters</Title>
      <section>
        <CharacterCard></CharacterCard>
      </section>
      <Navbar></Navbar>
    </>
  );
}
