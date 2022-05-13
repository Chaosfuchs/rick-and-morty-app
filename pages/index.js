import { Title } from '../components/header';
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
          <div>
            Signed in as {session.user.name} <br />
            <button onClick={() => signOut()}>Logout</button>
            <CollectionCard />
          </div>
        </div>
        <Navbar></Navbar>
      </>
    );
  }
  return (
    <>
      <Title>Rick and Morty 4-Life</Title>
      <div>
        <button onClick={() => signIn('github')}>Sign in with GitHub</button>
        <button onClick={() => signIn('google')}>Sign in with Google</button>
      </div>
    </>
  );
}
