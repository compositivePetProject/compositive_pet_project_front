import { css } from "@emotion/react";

export const item = css`
    display: flex;
    border-radius: 5px;
    margin-right: 5px;
    height: 30px;
    overflow: hidden;
    border: 1px solid #0e004a24;

    &:hover {
        border: 1px solid rgb(119, 119, 119);
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
    width: 350px;
    height: 100%;
    padding: 0px 5px;
    font-size: 16px;
    cursor: pointer;
    &:disabled {
        cursor: not-allowed;
    }
    & option {
        font-size: 16px;
    }
`