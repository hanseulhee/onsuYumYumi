/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";
import { Link, useNavigate } from "react-router-dom";
import faq from "assets/images/faq.jpg";

function Faq() {
  const navigate = useNavigate();

  function onClickRestaurant() {
    navigate(-1);
  }

  return (
    <div css={totalTool}>
      <div css={ImgTool}>
        <img src={faq} css={Img} alt="restaurant" />
      </div>

      <div css={Tool}>
        <nav css={nav}>
          <ul>
            <li css={li} onClick={onClickRestaurant}>
              Restaurant
            </li>
            <Link to="/faq">
              <li css={li}>FAQ</li>
            </Link>
            <Link to="/">
              <li css={li}>Home</li>
            </Link>
          </ul>
        </nav>

        <div css={summaryTool}>
          <div css={summary}>
            <div css={content}>
              <h1 css={title}>FAQ</h1>
              <div css={smallTitle}></div>
              <div css={informTool}>
                <span>
                  {" "}
                  온수냠냐미는 온수역의 식당들을 소개하는 서비스입니다.
                </span>
              </div>
              <div css={informTool}>
                <span>
                  "오늘 뭐 먹지?", "맛집이 어딜까?"라는 고민해보셨나요?
                  <br />그 고민 <b>온수냠냐미</b>가 해결해드리겠습니다. 😊
                </span>
              </div>
              <div css={informTool}>
                <span>
                  온수냠냐미의 식당은 개발자의 경험으로 나온 리스트로 아직
                  포함되지 않은 맛집들이 있다는 점 양해 부탁드립니다.
                  <br />
                  온수냠냐미의 성장을 위해 맛집을 알고 계신다면 제보해주시면
                  감사하겠습니다. 🤗💪🏻
                  <br />
                  온수역의 맛집 제보 혹은 문의는 onsuyumyumi@gmail.com으로
                  부탁드립니다.
                  <br />
                  식당 제보 시 식당 명과 위치를 보내주시면 관리자의 확인 후
                  업데이트 처리됩니다.
                </span>
              </div>
              <div css={informTool}>
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

const totalTool = css`
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const ImgTool = css`
  position: absolute;
  height: 100vh;
  width: 50%;
  padding: 0 62px 0 0;
`;

const Img = css`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

const Tool = css`
  float: right;
  width: 50%;
  padding: 0 0 0 55px;
  overflow-y: hidden;
  height: 100vh;
`;

const nav = css`
  border-left: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 25px 30px 22px;
`;

const li = css`
  margin-right: 30px;
`;

const summaryTool = css`
  border-left: 1px solid #ccc;
  height: 100%;
`;

const summary = css`
  border-bottom: 1px solid #ccc;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
`;

const title = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.bold};
  font-size: 2.125rem;
`;
const smallTitle = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.normal};
  font-size: 0.875rem;
  height: 30px;
  border-bottom: 1px solid #d2d2d2;
`;

const content = css`
  padding: 15px 90px 0px 30px;
`;

const informTool = css`
  padding-top: 25px;
`;
