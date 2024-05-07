import { css } from "@emotion/react";

export const item = css`
    display: flex;
    border-radius: 5px;
    margin-right: 5px;
    height: 35px;
    overflow: hidden;
    &:hover {
        border: 1px solid #0e004a24;
    }
`

export const inputBox = css`
    box-sizing: border-box;
    padding: 0;
`;

export const select = css`
    box-sizing: border-box;
    border: none;
    outline: none;
    padding: 0px 10px;
    width: 480px;
    height: 100%;
    font-size: 16px;
    cursor: pointer;
    &:disabled {
        cursor: not-allowed;
    }
    & option {
        font-size: 16px;
    }
`