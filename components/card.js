import { useEffect, useState } from 'react';
import styled from 'styled-components';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(data);

  useEffect(() => {
    if (url) {
      fetch(url)
        .then(response => response.json())
        .then(json => {
          setData(json);
          setLoading(false);
        })
        .catch(error_ => {
          setError(error_);
        });
    }
  }, [url]);

  return { data, loading, error };
}

export default function CharacterCard() {
  const { data, loading, error } = useFetch(
    'https://rickandmortyapi.com/api/character'
  );
  console.log(data);
  return (
    <div>
      {data?.results.map(character => (
        <StyledCard>
          <ul>
            <li>Name:{character.name}</li>
            <li>Status:{character.status} </li>
            <li>Species:{character.species} </li>
            <li>Type:{character.type}</li>
            <li>Gender:{character.gender} </li>
            <li>Origin:{character.origin.name}</li>
            <li>Location:{character.location.name}</li>
          </ul>
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
