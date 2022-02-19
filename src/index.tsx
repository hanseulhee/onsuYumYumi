import ReactDOM from "react-dom";
import App from "components/App";
import { ThemeProvider } from "@emotion/react";
import theme from "styles/theme";
import GlobalStyle from "styles/GlobalStyle";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
