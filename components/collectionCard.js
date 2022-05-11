import styled from 'styled-components';
import useFetch from '../hooks/fetch';
import StyledLoader from '../components/loader';
import StyledCard from '../components/characterCard';

export default function CollectionCard() {
  const { data, loading, error } = useFetch('/api/collection');

  return (
    <>
      {loading && <StyledLoader />}
      {error && <div>{error.message}</div>}
      <StyledCollectionContainer>
        <h3>My collected Cards</h3>
        <StyledCard />
      </StyledCollectionContainer>
    </>
  );
}

const StyledCollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f6bd60;
  font-family: rickAndMortyFonts;
  border-radius: 20px;
  border: 2px solid black;
  box-shadow: 3px 3px 3px grey;
  margin: 20px;

  h3 {
    font-size: 40px;
    color: #290363;
    text-decoration: underline overline;
  }
`;
