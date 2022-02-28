/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";
import lineLottieData from "assets/lottie/line.json";
import LottieWrapper from "components/common/LottieWrapper";

function Line() {
  return (
    <div css={lottieLineStyle}>
      <LottieWrapper lottieData={lineLottieData} />
    </div>
  );
}

export default Line;

const lottieLineStyle = css`
  width: 100px;
`;
