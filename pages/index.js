import { Title } from '../components/header';
import Navbar from '../components/navbar';
import useFetch from '../hooks/fetch';
import StyledLoader from '../components/loader';
import handleCollect from './api/collection';

export default function Home() {
  const { data, loading, error } = useFetch(
    'https://rickandmortyapi.com/api/character'
  );

  async function handleCollect() {
    const response = await fetch('/api/collection.js');
    const data = await response.text();
    console.log(data);
  }

  return (
    <>
      <Title>Rick and Morty 4-Life</Title>
      {loading && <StyledLoader />}
      {error && <div>{error.message}</div>}

      <Navbar></Navbar>
    </>
  );
}
