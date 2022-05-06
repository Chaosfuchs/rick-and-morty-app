import { Title } from '../components/header';
import styled from 'styled-components';
import { StyledCard } from '../components/card';
import Navbar from '../components/navbar';
import useFetch from '../hooks/fetch';

export default function Episodes() {
  const { data, loading, error } = useFetch(
    'https://rickandmortyapi.com/api/character'
  );
  console.log(data?.results);
  return (
    <>
      <Title>Episodes with</Title>
      <div>
        {data?.results.map(character => (
          <StyledDiv>
            <h3>{character.name}</h3>
            <StyledList>
              {character.episode.map(episode => {
                return <li>{episode}</li>;
              })}
            </StyledList>
          </StyledDiv>
        ))}
      </div>

      <Navbar></Navbar>
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
