import { Title } from '../components/header';
import Navbar from '../components/navbar';
import Pages from '../hooks/paging';

export default function Test() {
  return (
    <>
      <Title>Testpage</Title>
      <div>
        <Pages />
      </div>
      <Navbar></Navbar>
    </>
  );
}
