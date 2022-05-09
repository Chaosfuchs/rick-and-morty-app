import styled from 'styled-components';
import useFetch from '../hooks/fetch';

export default function EpisodeCard() {
  const { data, loading, error } = useFetch(
    'https://rickandmortyapi.com/api/character'
  );
  console.log(data?.results);
  return (
    <>
      {loading && <div>Loading…</div>}
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
    </>
  );
}

const StyledList = styled.ul`
  list-style: none;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
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
  margin: 0;
  padding: 0;

  img {
    width: 100px;
  }
`;
