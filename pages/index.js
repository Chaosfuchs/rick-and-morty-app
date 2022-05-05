import styled from "styled-components";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;



export default function Home() {
  return (
    <>
      <h1>Rick and Morty API Wiki</h1>
      <div>
        <span>Name:</span>
        <span>Picture:</span>
      </div>
    </>
  );
}
