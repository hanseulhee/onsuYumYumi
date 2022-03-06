/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import img from "assets/images/nang.jpg";

function Detail() {
  // const { id } = useParams();
  // const [storeDetail, setStoreDetail] = useState([]);

  // useEffect(() => {
  //   storeDetail();
  // }, []);
  return (
    <>
      <div css={totalTool}>
        <div css={ImgTool}>
          <img src={img} css={Img} alt="restaurant" />
        </div>

        <div css={Tool}>
          <nav css={nav}>
            <ul>
              <li css={li}>Restaurant</li>
              <li css={li}>FAQ</li>
              <Link to="/">
                <li css={li}>Home</li>
              </Link>
            </ul>
          </nav>

          <div css={summaryTool}>
            <div css={summary}>
              <div css={content}>
                <h1 css={title}>식당 이름</h1>
                <h2 css={smallTitle}>식당 소개</h2>

                <div css={informTool}>
                  <h2 css={informTitle}>위치</h2>
                  <span css={inform}>뭐라뭐라</span>
                </div>

                <div css={informTool}>
                  <h2 css={informTitle}>전화번호</h2>
                  <span css={inform}>뭐라뭐라</span>
                </div>
                <div css={informTool}>
                  <h2 css={informTitle}>영업시간</h2>
                  <span css={inform}>뭐라뭐라</span>
                </div>

                <div css={menuTool}>
                  <h2>Menu</h2>
                  <div css={informTool}>
                    <li css={inform}>메뉴</li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;

const totalTool = css`
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const ImgTool = css`
  position: relative;
  width: 50%;
  margin: 0;
  padding: 0 62px 0 0;
`;

const Img = css`
  position: absolute;
  width: 100%;
`;

const Tool = css`
  float: right;
  width: 50%;
  padding: 0 0 0 66px;
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
  font-size: 14px;
  height: 30px;
  border-bottom: 1px solid #d2d2d2;
`;

const content = css`
  padding: 15px 90px 0px 30px;
`;

const informTool = css`
  padding-top: 25px;
`;

const informTitle = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.bold};
  font-size: 0.875rem;
`;
const inform = (theme: Theme) => css``;

const menuTool = css`
  margin-top: 30px;
`;
