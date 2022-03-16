/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";

interface Props {
  name: string;
  summary: string;
  img: string;
}

function MainCard({ name, summary, img }: Props) {
  return (
    <Link to={`/detail/${name}`}>
      <div css={CardTool}>
        <div css={CardContent}>
          <span css={CardTitle}>{name}</span>
          <span css={CardSummary}>{summary}</span>
          <div css={ImgContainer}>
            <img src={img} alt="restaurant" css={CardImg} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MainCard;

const CardTool = (theme: Theme) => css`
  position: relative;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  box-shadow: 0px 1px 1px 1px rgb(0 0 0 / 6%);
  border: 1px solid #f1f1f1;
  border-radius: 3px;
  cursor: pointer;

  ${theme.mediaQuery.mobile} {
    height: 200px;
  }
`;

const CardContent = (theme: Theme) => css`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  height: 350px;
  ${theme.mediaQuery.mobile} {
    height: 230px;
    padding: 25px 0px;
  }
`;

const ImgContainer = (theme: Theme) => css`
  display: flex;
  justify-content: center;
`;

const CardImg = (theme: Theme) => css`
  width: 230px;
  height: 225px;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.16) 1px 1px 5px;
  margin-top: 10px;
  ${theme.mediaQuery.mobile} {
    width: 126px;
    height: 121px;

    max-width: 135px;
    max-height: 130px;
  }
`;

const CardTitle = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.bold};
  font-size: 1.24rem;

  ${theme.mediaQuery.mobile} {
    font-size: 0.93rem;
  }
`;

const CardSummary = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.light};
  font-size: 0.92rem;
  color: #8b95a1;
  ${theme.mediaQuery.mobile} {
    font-size: 0.65rem;
    color: rgb(73, 73, 73);
  }
`;
