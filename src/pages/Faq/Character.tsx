/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";

import LottieWrapper from "components/common/LottieWrapper";
import bgLottieData from "assets/lottie/character.json";

function Character() {
  return (
    <div css={wrapper}>
      <LottieWrapper lottieData={bgLottieData} />
    </div>
  );
}

export default Character;

const wrapper = (theme: Theme) => css`
  width: 100%;
  height: 100%;
  ${theme.mediaQuery.mobile} {
    height: 45vh;
    width: 100vw;
  }
`;
