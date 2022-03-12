/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";

interface Props {
  category: string;
}

function TagLink({ category }: Props) {
  return (
    <div css={tag}>
      <span id={category}></span>
    </div>
  );
}

export default TagLink;

const tag = (theme: Theme) => css`
  display: flex;
  flex-direction: row;

  margin: 50px 0px;
  ${theme.mediaQuery.mobile} {
    margin: 40px 0px;
  }
`;
