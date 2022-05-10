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

@font-face {
  font-family: rickAndMortyFonts;
    src: url(/get_schwifty.ttf);
}
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    min-height: 100vh;
    display: grid;
    grid-template-rows: 4rem 1fr 4rem;
    background-image: url(/background.jpeg);
    background-repeat: none;
    background-size: 100%;
  }
  #__next {
    display: contents;
  }

  h3 {
    text-align: center;
    padding: 10px;
    margin: 5px;
  }

`;

const theme = {
  colors: {
    primary: '#0bf41b',
  },
};
