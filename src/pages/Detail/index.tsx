/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { objectedStores, IStore } from "assets/stores";

function Detail() {
  const { name } = useParams();
  const [currentStore, setCurrentStore] = useState<IStore | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (typeof name !== "string") {
      navigate("/");
      return;
    }
    if (!objectedStores[name]) {
      navigate("/");
      return;
    }
    setCurrentStore(objectedStores[name]);
  }, []);

  return (
    <>
      <div css={totalTool}>
        <div css={ImgTool}>
          <img src={currentStore?.img} css={Img} alt="restaurant" />
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
                <h1 css={title}>{currentStore?.name}</h1>
                <h2 css={smallTitle}>{currentStore?.summary}</h2>

                <div css={informTool}>
                  <h2 css={informTitle}>위치</h2>
                  <span css={inform}>{currentStore?.location}</span>
                </div>

                <div css={informTool}>
                  <h2 css={informTitle}>전화번호</h2>
                  <span css={inform}>{currentStore?.phone}</span>
                </div>
                <div css={informTool}>
                  <h2 css={informTitle}>영업시간</h2>
                  <span css={inform}>{currentStore?.time}</span>
                </div>

                <div css={menuTool}>
                  <h2>Menu</h2>
                  <div css={informTool}>
                    <div>
                      <span css={inform}>{currentStore?.menu}</span>
                    </div>
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

const totalTool = (theme: Theme) => css`
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  ${theme.mediaQuery.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

const ImgTool = (theme: Theme) => css`
  position: absolute;
  height: 100vh;
  width: 50%;
  padding: 0 62px 0 0;
  ${theme.mediaQuery.mobile} {
    height: 50%;
    width: 100%;
    padding: 0px;
  }
`;

const Img = css`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

const Tool = (theme: Theme) => css`
  float: right;
  width: 50%;
  padding: 0 0 0 55px;
  overflow-y: hidden;
  height: 100vh;
  ${theme.mediaQuery.mobile} {
    width: 100%;
    padding: 10px;
  }
`;

const nav = (theme: Theme) => css`
  border-left: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 25px 30px 22px;

  ${theme.mediaQuery.mobile} {
    width: 100%;
    padding: 0px;
    border-left: 0px solid #ccc;
  }
`;



const li = css`
  margin-right: 30px;
`;

const summaryTool = (theme: Theme) => css`
  border-left: 1px solid #ccc;
  height: 100%;
  ${theme.mediaQuery.mobile} {
    position: relative;
    border-left: 0px solid #ccc;
  }
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

const informTitle = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.bold};
  font-size: 0.875rem;
`;
const inform = (theme: Theme) => css``;

const menuTool = css`
  margin-top: 30px;
`;
