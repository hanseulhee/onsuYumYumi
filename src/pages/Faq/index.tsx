/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";
import faq from "assets/images/faq.jpg";
import ServeNav from "components/Nav/ServeNav";

function Faq() {
  return (
    <div css={totalWrapper}>
      <div css={ImgWrapper}>
        <img src={faq} css={Img} alt="restaurant" />
      </div>

      <div css={Container}>
        <ServeNav />

        <div css={summaryTool}>
          <div css={summary}>
            <div css={content}>
              <h1 css={title}>FAQ</h1>
              <div css={smallTitle}></div>
              <div css={informWrapper}>
                <span>
                  온수냠냐미는 온수역의 식당들을 소개하는 서비스입니다.
                </span>
              </div>
              <div css={informWrapper}>
                <span>
                  "오늘 뭐 먹지?", "맛집이 어딜까?"라는 고민해보셨나요?
                  <br />그 고민 <b>온수냠냐미</b>가 해결해드리겠습니다. 😊
                </span>
              </div>
              <div css={informWrapper}>
                <span>
                  온수냠냐미의 식당은 개발자의 경험으로 나온 리스트로 아직
                  포함되지 않은 맛집들이 있다는 점 양해 부탁드립니다.
                  <br />
                  온수냠냐미의 성장을 위해 맛집을 알고 계신다면 제보해주시면
                  감사하겠습니다. 🤗💪🏻
                  <br />
                  <br />
                  온수역의 맛집 제보 혹은 문의는 onsuyumyumi@gmail.com으로
                  부탁드립니다.
                  <br />
                  식당 제보 시 식당 명과 위치를 보내주시면 관리자의 확인 후
                  업데이트 처리됩니다.
                </span>
              </div>
              <div css={informWrapper}>
                <span>
                  <br />
                  온수냠냐미에서 맛있는 하루 보내시길 바랍니다. 🙂
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Faq;

const totalWrapper = css`
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const ImgWrapper = (theme: Theme) => css`
  position: absolute;
  height: 100%;
  width: 50%;
  padding: 0 62px 0 0;

  ${theme.mediaQuery.mobile} {
    position: relative;
    top: 0;
    height: 50vh;
    width: 100vw;
  }
`;

const Img = (theme: Theme) => css`
  width: 100%;
  height: 100%;
  object-fit: fill;
  ${theme.mediaQuery.mobile} {
    height: 50vh;
    width: 100vw;
    border-radius: 3px;
  }
`;

const Container = (theme: Theme) => css`
  float: right;
  width: 50%;
  padding: 0 0 0 55px;
  overflow-y: hidden;
  height: 100vh;
  ${theme.mediaQuery.mobile} {
    height: 50vh;
    width: 100vw;
    padding: 0px;
  }
`;

const summaryTool = css`
  border-left: 1px solid #ccc;
  height: 100%;
`;

const summary = css`
  overflow-y: scroll;
  width: 100%;
  height: 100%;
`;

const title = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.bold};
  font-size: 2.125rem;
  ${theme.mediaQuery.mobile} {
    font-size: 1.8rem;
  }
`;
const smallTitle = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.normal};
  font-size: 0.875rem;
  height: 30px;
  border-bottom: 1px solid #d2d2d2;
  ${theme.mediaQuery.mobile} {
    font-size: 0.65rem;
  }
`;
const content = (theme: Theme) => css`
  padding: 15px 90px 0px 30px;
  height: 100%;
  ${theme.mediaQuery.mobile} {
    padding: 15px 30px 0px 30px;
    height: 100vh;
  }
`;

const informWrapper = (theme: Theme) => css`
  padding-top: 25px;
  ${theme.mediaQuery.mobile} {
    font-size: 0.85rem;
  }
`;
