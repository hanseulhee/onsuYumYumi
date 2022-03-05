/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav css={navStyle}>
      <Link to="/">
        <h1 css={logoStyle}>온수냠냐미</h1>
      </Link>

      <div>
        <a href="#1" css={button}>
          혼밥
        </a>
        <a href="#2" css={button}>
          회식
        </a>
        <a href="#3" css={button}>
          가성비
        </a>
        <a href="#4" css={button}>
          해장
        </a>
      </div>
    </nav>
  );
}

export default Nav;

const navStyle = css`
  position: sticky;
  display: flex;
  top: 0;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 6px 23px;
  border-bottom: 1px solid #f2f2f2;
  background-color: white;
  box-shadow: 0 0px 3px 4px rgba(0, 0, 0, 0.02);
  z-index: 10;
`;

const logoStyle = (theme: Theme) => css`
  font-size: 1.56rem;
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.color.yellow};

  ${theme.mediaQuery.mobile} {
    font-size: 1.25rem;
  }
`;

const button = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.normal};
  padding: 7px 15px;
  margin-right: 0.8rem;
  font-size: 0.94rem;

  &:focus {
    background-color: #f3f3f3;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.06),
      0 1px 2px -1px rgba(0, 0, 0, 0.03);
  }
`;
