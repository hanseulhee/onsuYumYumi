import ReactDOM from "react-dom";
import App from "components/App";
import { ThemeProvider } from "@emotion/react";
import theme from "styles/theme";
import GlobalStyle from "styles/GlobalStyle";
import ReactGA from 'react-ga';

ReactGA.initialize("UA-222845679-1");
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
