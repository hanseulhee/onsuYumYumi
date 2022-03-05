/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  summary: string;
  img: string;
}

function MainCard({ name, summary, img }: Props) {
  return (
    <div css={CardTool}>
      <div css={CardContent}>
        <span css={CardTitle}>{name}</span>
        <span css={CardSummary}>{summary}</span>
        <img src={img} alt="restaurant" css={CardImg} />
      </div>
    </div>
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

  border-radius: 9px;
  box-shadow: 0px 1px 1px 1px rgb(0 0 0 / 6%);
  border: 1px solid #f1f1f1;
  border-radius: 3px;

  cursor: pointer;
`;

const CardContent = css`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 10px 10px;
  height: 350px;
  background-color: #fafafa;
`;

const CardImg = css`
  width: 230px;
  height: 225px;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.16) 1px 1px 5px;
  margin-top: 10px;
`;

const CardTitle = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.bold};
  font-size: 1.24rem;

  ${theme.mediaQuery.mobile} {
    font-size: 1.063rem;
  }
`;

const CardSummary = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.light};
  font-size: 0.92rem;
  color: #8b95a1;
`;
