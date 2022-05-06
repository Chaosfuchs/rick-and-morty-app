import { Title } from '../components/header';
import { StyledCard } from '../components/card';
import Navbar from '../components/navbar';
import useFetch from '../hooks/fetch';

export default function Episodes() {
  const { data, loading, error } = useFetch(
    'https://rickandmortyapi.com/api/character'
  );
  return (
    <>
      <Title>Episodes with</Title>
      <div>
        {data?.results.map(character => (
          <StyledCard>
            <ul>
              <li>Name:{character.name}</li>
              {data.results.map(episode => (
                <li>Episode:{episode.episode}</li>
              ))}
            </ul>
          </StyledCard>
        ))}
      </div>

      <Navbar></Navbar>
    </>
  );
}
