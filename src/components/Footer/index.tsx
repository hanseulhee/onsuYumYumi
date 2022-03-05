/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer css={footerTool}>
      <div css={title}>
        <h1 css={summary}>온수냠냐미</h1>
        <h1 css={summary}> - onsuyumyumi</h1>
      </div>
      <div>
        <h1 css={madeby}>Develop, Design by onsuyumyumi.</h1>
      </div>
    </footer>
  );
}

export default Footer;

const footerTool = css`
  width: 100vw;
  height: 15vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: black;
`;

const title = css`
  display: flex;
  flex-direction: row;
`;

const summary = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.bold};
  font-size: 17px;
  margin-left: 3px;
  color: white;
`;

const madeby = (theme: Theme) => css`
  font-size: 13px;
  color: rgb(73, 73, 73);
`;
