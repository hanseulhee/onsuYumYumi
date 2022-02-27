/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  summary: string;
}

function MainCard({ name, summary }: Props) {
  return (
    <div css={CardTool}>
      <img src="assets/images/dondon.png" alt="restaurant" />
      <div css={CardContentTool}>
        <span css={CardTitle}>{name}</span>
        <span css={CardSummary}>{summary}</span>
      </div>
    </div>
  );
}

export default MainCard;

const CardTool = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 330px;
  height: 360px;
  border-radius: 7px;
  background-color: #faf9f9;
  :hover {
    box-shadow: 0px 0px 0px 1px rgb(0 0 0 / 5%);
    cursor: pointer;
  }

  ${theme.mediaQuery.mobile} {
    width: 150px;
    height: 170px;
  }
`;

const CardContentTool = css`
  display: flex;
  flex-direction: column;
`;
const CardTitle = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.bold};
  font-size: 1.5rem;
`;

const CardSummary = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.light};
  font-size: 0.93rem;
  color: #8b95a1;
`;
