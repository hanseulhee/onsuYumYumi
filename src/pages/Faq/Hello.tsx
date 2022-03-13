/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";

import LottieWrapper from "components/common/LottieWrapper";
import bgLottieData from "assets/lottie/hello.json";

function Hello() {
  return (
    <div css={wrapper}>
      <LottieWrapper lottieData={bgLottieData} />
    </div>
  );
}

export default Hello;

const wrapper = (theme: Theme) => css`
  width: 100%;
  height: 100%;
  ${theme.mediaQuery.mobile} {
    height: 50vh;
    width: 100vw;
  }
`;
