import styled from 'styled-components';
import useFetch from '../hooks/fetch';

export default function CharacterCard() {
  const { data, loading, error } = useFetch(
    'https://rickandmortyapi.com/api/character'
  );
  console.log(data);
  return (
    <div>
      {loading && <div>Loading…</div>}
      {error && <div>{error.message}</div>}
      {data?.results.map(character => (
        <StyledCard key={character.id}>
          <ul>
            <li>Name:{character.name}</li>
            <li>Status:{character.status} </li>
            <li>Species:{character.species} </li>
            <li>Type:{character.type}</li>
            <li>Gender:{character.gender} </li>
            <li>Origin:{character.origin.name}</li>
            <li>Location:{character.location.name}</li>
          </ul>
          <div>
            <img src={character.image}></img>
          </div>
        </StyledCard>
      ))}
    </div>
  );
}

export const StyledCard = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px;
  background-color: #0bf41b;
  border-radius: 20px;
  border: 2px solid black;
  box-shadow: 3px 3px 3px grey;
`;
