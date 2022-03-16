/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";
import "aos/dist/aos.css";
import Nav from "components/Nav";
import theme from "styles/theme";
import Background from "pages/Main/Background";
import MainCard from "components/MainCard";
import storeData from "assets/stores";
import Footer from "components/Footer";
import TagLink from "components/common/TagLink";

function Main() {
  return (
    <>
      <Nav />
      <div css={TitleBox}>
        <h1 css={Title}>
          성공회대 온수역 맛집, <b>온수냠냐미</b>에서
        </h1>
        <Background />
      </div>

      <div css={layoutTool}>
        <div css={layoutStyle}>
          <TagLink category="혼밥" />
          <span css={menuCategory}>혼밥하기좋은곳</span>

          <div css={cardStyle}>
            {storeData.혼밥하기좋은곳.map((store) => (
              <MainCard
                key={store.name}
                name={store.name}
                summary={store.summary}
                img={store.img}
              />
            ))}
          </div>

          <TagLink category="회식" />
          <span css={menuCategory}>회식하기좋은곳</span>

          <div css={cardStyle}>
            {storeData.회식하기좋은곳.map((store) => (
              <MainCard
                key={store.name}
                name={store.name}
                summary={store.summary}
                img={store.img}
              />
            ))}
          </div>
          <TagLink category="가성비" />
          <span css={menuCategory}>가성비좋은곳</span>

          <div css={cardStyle}>
            {storeData.가성비좋은곳.map((store) => (
              <MainCard
                key={store.name}
                name={store.name}
                summary={store.summary}
                img={store.img}
              />
            ))}
          </div>
          <TagLink category="해장" />
          <span css={menuCategory}>해장하기좋은곳</span>

          <div css={cardStyle}>
            {storeData.해장하기좋은곳.map((store) => (
              <MainCard
                key={store.name}
                name={store.name}
                summary={store.summary}
                img={store.img}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
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
  ${theme.mediaQuery.mobile} {
    font-size: 1.5rem;
  }
`;

const layoutTool = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  ${theme.mediaQuery.mobile} {
    padding: 0px 23px;
    margin-top: 0px;
  }
`;

const layoutStyle = css`
  display: flex;
  flex-direction: column;
  padding: 25px 0 0;
  width: 1140px;
  height: 100%;

  max-width: 1200px;
  ${theme.mediaQuery.mobile} {
    width: 100%;
  }
`;

const cardStyle = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, 280px);
  gap: 5px;
  align-items: stretch;
  justify-items: stretch;
  margin: 30px 0px;
  ${theme.mediaQuery.mobile} {
    grid-template-columns: repeat(auto-fill, 145px);
    gap: 2px;
  }
`;
