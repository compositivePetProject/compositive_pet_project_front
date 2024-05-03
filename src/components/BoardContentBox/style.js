import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
   
`;

export const boardHeader = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;



export const boardContent = css`
    border: 1px solid #dbdbdb;
    width: 100%;
    height: 80%;
`;

export const title = css`
    font-size: 26px;
    font-weight: 600;
`;

export const userNickname = css`
    font-size: 18px;
    font-weight: 600;
`;

export const writeDate = css`
    color: #cccccc;
`;