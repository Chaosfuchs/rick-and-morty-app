import { Title } from '../components/header';
import Navbar from '../components/navbar';
import useFetch from '../hooks/fetch';

export default function Home() {
  const { data, loading, error } = useFetch(
    'https://rickandmortyapi.com/api/character'
  );
  return (
    <>
      <Title>Rick and Morty 4-Life</Title>
      {loading && <div>Loading…</div>}
      {error && <div>{error.message}</div>}
      <Navbar></Navbar>
    </>
  );
}
