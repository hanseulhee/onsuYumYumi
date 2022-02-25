import { css } from "@emotion/react";

import LottieWrapper from "pages/Main/LottieWrapper";
import bgLottieData from "assets/lottie/restaurantBg.json";

function Background() {
  return (
    <div>
      <LottieWrapper lottieData={bgLottieData} />
    </div>
  );
}

export default Background;

