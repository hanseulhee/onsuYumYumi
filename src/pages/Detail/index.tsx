/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { objectedStores, IStore } from "assets/stores";
import ItemWrapper from "components/common/ItemWrapper";
import ServeNav from "components/Nav/ServeNav";

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
  }, [name, navigate]);

  return (
    <>
      <div css={totalWrapper}>
        <div css={ImgWrapper}>
          <img src={currentStore?.img} css={Img} alt="restaurant" />
        </div>

        <div css={Container}>
          <ServeNav />
          <div css={summaryTool}>
            <div css={summary}>
              <h1 css={title}>{currentStore?.name}</h1>
              <h2 css={smallTitle}>{currentStore?.summary}</h2>

              <ItemWrapper category="위치" value={currentStore?.location} />
              <ItemWrapper category="전화번호" value={currentStore?.phone} />
              <ItemWrapper category="영업시간" value={currentStore?.time} />
              <div css={menuTool}>
                <h2>Menu</h2>
                <div css={menuWrapper}>
                  <ul>
                    {currentStore?.menu.map((eachMenu) => (
                      <li css={menuList}>{eachMenu}</li>
                    ))}
                  </ul>
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

const totalWrapper = (theme: Theme) => css`
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  ${theme.mediaQuery.mobile} {
  }
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

const summaryTool = (theme: Theme) => css`
  border-left: 1px solid #ccc;
  height: 100%;
`;

const summary = (theme: Theme) => css`
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  padding: 15px 90px 0px 30px;
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

const menuTool = (theme: Theme) => css`
  min-height: 70%;
  max-height: 100%;
  margin-top: 30px;
  ${theme.mediaQuery.mobile} {
    min-height: 100%;
  }
`;

const menuWrapper = css`
  border-top: 1px solid #ccc;
  max-width: 90%;
  margin-top: 0.5rem;
`;
const menuList = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  ${theme.mediaQuery.mobile} {
    font-size: 0.8rem;
  }
`;
