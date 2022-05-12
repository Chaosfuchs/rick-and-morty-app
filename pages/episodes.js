import { Title } from '../components/header';
import Navbar from '../components/navbar';
import EpisodeCard from '../components/episodeCard';

export default function Episodes() {
  return (
    <>
      <Title>Episodes with</Title>
      <EpisodeCard></EpisodeCard>
      <Navbar></Navbar>
    </>
  );
}
