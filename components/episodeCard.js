import styled from 'styled-components';
import { useEffect } from 'react';
import StyledLoader from '../components/loader';
import useStore from '../hooks/useStore';
import useFetch from '../hooks/fetch';

export default function EpisodeCard() {
  /*  const fetchSomething = useStore(state => state.fetchSomething);
  const fetchedEpisode = useStore(state => state.fetchedCharacters);
  const loading = useStore(state => state.loading);
  const error = useStore(state => state.error);

  useEffect(() => {
    fetchSomething('https://rickandmortyapi.com/api/character/?page=5');
  }, [fetchSomething]);
  */

  const { data, loading, error } = useFetch(
    'https://rickandmortyapi.com/api/character/?page=1'
  );

  return (
    <main>
      {loading && <StyledLoader />}
      {error && <div>{error.message}</div>}
      {data?.results.map(character => (
        <StyledDiv key={character.id}>
          <StyledContainer>
            <h3>{character.name}</h3>
            <img src={character.image} />
          </StyledContainer>
          <StyledList>
            {character.episode.map(episode => {
              return <li key={episode}>{episode}</li>;
            })}
          </StyledList>
        </StyledDiv>
      ))}
    </main>
  );
}

const StyledList = styled.ul`
  list-style: none;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 0;
  background-color: #0bf41b;
  border-radius: 20px;
  border: 2px solid black;
  box-shadow: 3px 3px 3px grey;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
  margin: 10px;
  padding: 0;

  img {
    width: 100px;
    border-radius: 999px;
    border: 2px solid green;
    box-shadow: 3px 3px 3px grey;
  }

  h3 {
    text-align: center;
    padding: 10px;
    margin: 5px;
  }
`;
