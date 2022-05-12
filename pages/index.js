import { Title } from '../components/header';
import Navbar from '../components/navbar';
import CollectionCard from '../components/collectionCard';

export default function Home() {
  return (
    <>
      <Title>Rick and Morty 4-Life</Title>
      <CollectionCard />
      <Navbar></Navbar>
    </>
  );
}
