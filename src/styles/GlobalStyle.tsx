import { Global, css } from "@emotion/react";

function GlobalStyle() {
  return <Global styles={globalStyle} />;
}

export default GlobalStyle;

const globalStyle = css`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;400;700&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Noto Sans KR", sans-serif;
    word-break: keep-all;
  }

  html,
  body {
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    scroll-behavior: smooth;
    box-sizing: border-box;
  }

  button,
  a,
  h1 {
    all: unset;
    cursor: pointer;
  }
`;
