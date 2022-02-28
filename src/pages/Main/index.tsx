/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";
import { motion } from "framer-motion";
import Nav from "components/Nav";
import theme from "styles/theme";
import Background from "pages/Main/Background";
import MainCard from "components/MainCard";
import Line from "components/common/Line";

import storeData from "assets/stores";

function Main() {
  console.log(storeData);

  return (
    <>
      <Nav />
      <div css={TitleBox}>
        <h1 css={Title}>
          성공회대 온수역 맛집, <b>온수냠냐미</b>에서
        </h1>
        <Background />
      </div>
      <div css={layoutStyle}>
        <span css={menuCategory}>가성비좋은곳</span>

        <Line />
        {storeData.가성비좋은곳.map((store) => (
          <MainCard
            key={store.name}
            name={store.name}
            summary={store.summary}
          />
        ))}
      </div>
    </>
  );
}

export default Main;

const TitleBox = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 50px;
  width: 100%;
  height: 84vh;

  ${theme.mediaQuery.mobile} {
    padding: 0px 23px;
    margin-top: 0px;
  }
`;

const Title = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.normal};
  font-size: 2.68rem;
  margin-bottom: 23px;

  ${theme.mediaQuery.mobile} {
    font-size: 1.56rem;
  }
`;

const menuCategory = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.bold};
  font-size: 1.56rem;
`;

const layoutStyle = css`
  padding: 30px 23px;
`;
