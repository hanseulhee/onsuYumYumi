/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

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

const tag = css`
  display: flex;
  flex-direction: row;

  margin: 50px 0px;
`;
