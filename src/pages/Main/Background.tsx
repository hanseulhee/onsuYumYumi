import LottieWrapper from "components/common/LottieWrapper";
import bgLottieData from "assets/lottie/restaurantBg.json";

function Background() {
  return (
    <div>
      <LottieWrapper lottieData={bgLottieData} />
    </div>
  );
}

export default Background;
