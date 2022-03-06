/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";

function Faq() {
  return (
    <div css={summaryTool}>
      <div css={summary}>
        <div css={contentTool}>
          <h1 css={title}>FAQ</h1>
          <div css={pQroup}>
            <p css={content}>
              온수냠냐미는 온수역의 식당들을 소개하는 서비스입니다.
            </p>
            <p css={content}>
              온수역의 맛집 제보 혹은 문의는 onsuyumyumi@gmail.com 으로
              부탁드립니다.
              <br />
              식당제보 시 식당 명과 위치를 보내주시면 관리자의 확인 후 업데이트
              처리됩니다.
            </p>
            <p css={content}>
              온수냠냐미에서 맛있는 하루 보내시길 바랍니다. 🙂
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Faq;

const summaryTool = css`
  border-left: 1px solid #ccc;
  height: 100%;
`;
const summary = css`
  overflow-y: scroll;
  width: 100%;
  height: 100%;
`;
const contentTool = css`
  display: flex;
  flex-direction: column;
  padding: 15px 90px 0px 30px;
`;

const title = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.bold};
  font-size: 2.125rem;
`;

const content = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.normal};
  font-size: 0.9rem;
`;

const pQroup = css`
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: space-evenly;
`;
