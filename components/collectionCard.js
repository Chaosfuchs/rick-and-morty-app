import styled from 'styled-components';
import useFetch from '../hooks/fetch';
import StyledLoader from '../components/loader';

export default function CollectionCard() {
  const { data, loading, error } = useFetch(
    'https://rickandmortyapi.com/api/character/?page=5'
  );

  return (
    <div>
      <StyledCollectionContainer>
        {loading && <StyledLoader />}
        {error && <div>{error.message}</div>}
        <h3>My collected Cards</h3>
        {data?.results.map(character => (
          <StyledCollectedCard>
            <img src={character.image}></img>
            <p>{character.name}</p>
          </StyledCollectedCard>
        ))}
      </StyledCollectionContainer>
    </div>
  );
}

const StyledCollectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #f6bd60;
  border-radius: 20px;
  border: 2px solid black;
  box-shadow: 3px 3px 3px grey;
  margin: 10px;
  height: 450px;

  h3 {
    text-align: center;
    font-size: 25px;
    color: #290363;
    text-decoration: underline overline;
    font-family: rickAndMortyFonts;
  }
`;

const StyledCollectedCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  margin: 5px;
  padding: 10px;
  background-color: #0bf41b;
  border-radius: 20px;
  width: 130px;
  height: 150px;
  box-shadow: 3px 3px 3px grey;

  img {
    width: 100px;
    border-radius: 999px;
    border: 2px solid green;
    box-shadow: 3px 3px 3px grey;
    padding: 0;
    margin: 0;
  }

  p {
    font-size: 20px;
    text-align: center;
    padding: 0;
    margin: 0;
  }
`;
