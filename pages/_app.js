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
    min-height: 100vh;
    display: grid;
    grid-template-rows: 4rem 1fr 4rem;
    background-color:#f0ffa3;
  }
  #__next {
    display: contents;
  }
`;

const theme = {
  colors: {
    primary: '#6bffc6',
  },
};
