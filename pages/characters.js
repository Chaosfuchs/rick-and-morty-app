import { Title } from '../components/header';
import Navbar from '../components/navbar';
import CharacterCard from '../components/characterCard';

export default function Characters() {
  return (
    <>
      <Title>Characters</Title>
      <CharacterCard />
      <Navbar></Navbar>
    </>
  );
}
