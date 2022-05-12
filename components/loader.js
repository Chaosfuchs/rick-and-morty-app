import styled from 'styled-components';

export default function Loader() {
  return (
    <StyledLoader>
      <StyledBall></StyledBall>
      <StyledBall></StyledBall>
      <StyledBall></StyledBall>
      <StyledSpan>Loading…</StyledSpan>
    </StyledLoader>
  );
}

const StyledLoader = styled.div`
  width: 120px;
  height: 75px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  position: fixed;
  top: 110px;
  left: 120px;
  font-family: rickAndMortyFonts;
`;

const StyledSpan = styled.span`
  color: white;
  font-size: 25px;
  text-transform: uppercase;
  margin: auto;
`;

const StyledBall = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: white;
  animation: bounce 0.5s alternate infinite;

  :nth-child(2) {
    animation-delay: 0.16s;
  }
  :nth-child(3) {
    animation-delay: 0.32s;
  }
  @keyframes bounce {
    from {
      transform: scaleX(1.25);
    }
    to {
      transform: translateY(-50px) scaleX(1);
    }
  }
`;
