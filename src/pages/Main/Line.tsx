/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";
import LottieLine from "pages/Main/LottieLine";
import lineLottieData from "assets/lottie/line.json";

function Line() {
  return (
    <div css={lottieLineStyle}>
      <LottieLine lottieData={lineLottieData} />
    </div>
  );
}

export default Line;

const lottieLineStyle = css`
  width: 100px;
`;
