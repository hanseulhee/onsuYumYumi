/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav css={navStyle}>
      <Link to="/">
        <h1 css={logoStyle}>온수냠냐미</h1>
      </Link>
    </nav>
  );
}

export default Nav;

const navStyle = css`
  position: sticky;
  top: 0;
  width: 100%;

  padding: 6px 23px;
  border-bottom: 1px solid #f2f2f2;
  box-shadow: 0 0px 3px 4px rgba(0, 0, 0, 0.02);
`;

const logoStyle = (theme: Theme) => css`
  font-size: 25px;
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.color.yellow};

  ${theme.mediaQuery.mobile} {
    font-size: 20px;
  }
`;
