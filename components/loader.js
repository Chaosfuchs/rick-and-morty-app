import styled from 'styled-components';

export default function Loader() {
  return (
    <>
      <StyledLoader className="loader">
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <span>Loading…</span>
      </StyledLoader>
    </>
  );
}

const StyledLoader = styled.div`
  .loader {
    width: 120px;
    height: 75px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-between;
  }
  .loader span {
    color: white;
    font-size: 25px;
    text-transform: uppercase;
    margin: auto;
  }
  .ball {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: white;
    animation: bounce 0.5s alternate infinite;
  }
  .ball:nth-child(2) {
    animation-delay: 0.16s;
  }
  .ball:nth-child(3) {
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
