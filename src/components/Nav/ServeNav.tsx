/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

function ServeNav() {
  //   const { name } = useParams();
  const navigate = useNavigate();
  function onClickRestaurant() {
    navigate(-1);
  }
  return (
    <div css={nav}>
      <ul>
        <li css={button} onClick={onClickRestaurant}>
          Restaurant
        </li>
        {/* <li
          css={button}
          onClick={(name) =>
            `/detail/${name}` ? onClickRestaurant : navigate(-1)
          }
        >
          Restaurant
        </li> */}
        <Link to="/faq">
          <li css={button}>FAQ</li>
        </Link>
        <Link to="/">
          <li css={button}>Home</li>
        </Link>
      </ul>
    </div>
  );
}

export default ServeNav;

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

const button = css`
  margin-right: 30px;
`;
