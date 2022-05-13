import { Title } from '../components/header';
import styled from 'styled-components';
import Navbar from '../components/navbar';
import CollectionCard from '../components/collectionCard';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <Title>Rick and Morty 4-Life</Title>
        <div>
          <StyledProfilSection>
            Signed in as {session.user.name} <br />
            <button onClick={() => signOut()}>Logout</button>
          </StyledProfilSection>
          <CollectionCard />
        </div>
        <Navbar></Navbar>
      </>
    );
  }
  return (
    <>
      <Title>Rick and Morty 4-Life</Title>
      <StyledHomeContainer>
        <StyledLogin>
          <button onClick={() => signIn('github')}>Sign in with GitHub</button>
          <button onClick={() => signIn('google')}>Sign in with Google</button>
        </StyledLogin>
      </StyledHomeContainer>
    </>
  );
}

const StyledProfilSection = styled.div`
  background-color: grey;
  margin: 10px;
  padding: 5px;
  text-align: center;
  border-radius: 10px;
  border: 2px solid black;

  button {
    border-radius: 5px;
    padding: 10px;
  }
`;

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  background-color: grey;
  margin: 20px;
  padding: 20px;
  text-align: center;
  height: 150px;
  border-radius: 20px;
  border: 2px solid black;

  button {
    height: 50px;
    border-radius: 10px;
  }
`;

const StyledHomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
