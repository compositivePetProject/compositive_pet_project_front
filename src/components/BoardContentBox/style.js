import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
`;

export const boardHeader = css`
    display: flex;
    flex-direction: column;
    & > div:nth-of-type(2) {
        margin-top: 30px;
        display: flex;
        align-items: center;
        
    }
`;

export const boardContent = css`
    margin-top: 30px;
    border-top: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
    width: 100%;
    height: 80%;
`;

export const title = css`
    font-size: 48px;
    font-weight: 600;
`;

export const userNickname = css`
    font-size: 16px;
    font-weight: 600;
    color: #222222;
    margin-right: 15px;
`;

export const writeDate = css`
    font-size: 16px;
    color: #222222;
    font-weight: 600;
`;

