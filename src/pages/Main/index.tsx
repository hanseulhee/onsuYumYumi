/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";
import { motion } from "framer-motion";
import Nav from "components/Nav";
import theme from "styles/theme";
import Background from "./Background";

function Main() {
  return (
    <>
      <Nav />
      <div css={mainTitleBox}>
        <h1 css={mainTitle}>
          성공회대 온수역 맛집, <b>온수냠냐미</b>에서
        </h1>
        <Background />
      </div>
    </>
  );
}

export default Main;

const mainTitleBox = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 50px;
  width: 100%;
  height: 80vh;

  ${theme.mediaQuery.mobile} {
    padding: 0px 23px;
    margin-top: 0px;
  }
`;

const mainTitle = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.normal};
  font-size: 43px;
  margin-bottom: 23px;

  ${theme.mediaQuery.mobile} {
    font-size: 25px;
  }
`;
