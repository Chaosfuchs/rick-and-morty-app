import { createGlobalStyle, ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1 {
    text-align: center;
    margin: 0;
    padding: 10px;
    color: #0bf41b;
    background-color: #290363;
  }

  div {
    height: 100vh;
    display: grid;
    grid-template-rows: 5rem 1fr 50px;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};
