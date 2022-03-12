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
      <div css={totalTool}>
        <div css={ImgTool}>
          <img src={currentStore?.img} css={Img} alt="restaurant" />
        </div>

        <div css={Tool}>
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
  padding: 15px 90px 0px 30px;
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

const menuTool = css`
  min-height: 68%;
  max-height: 100%;
  margin-top: 30px;
`;

const menuWrapper = css`
  max-width: 90%;
`;
const menuList = css`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
`;
