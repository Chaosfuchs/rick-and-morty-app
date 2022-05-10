import styled from 'styled-components';
import useFetch from '../hooks/fetch';
import StyledLoader from '../components/loader';

export default function CharacterCard() {
  const { data, loading, error } = useFetch(
    'https://rickandmortyapi.com/api/character/?page=5' // Page manuell ändern
  );
  console.log(data);
  return (
    <div>
      {loading && <StyledLoader />}
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
          <button>Collect</button>
        </StyledCard>
      ))}
    </div>
  );
}

export const StyledCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 15px;
  background-color: #0bf41b;
  border-radius: 20px;
  border: 2px solid black;
  box-shadow: 3px 3px 3px grey;

  img {
    width: 150px;
    border-radius: 999px;
    margin: 15px;
    border: 3px solid green;
  }

  button {
    border-radius: 999px;
    height: 50px;
    margin: 10px;
  }
`;
