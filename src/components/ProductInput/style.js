import { css } from "@emotion/react";

export const inputBox = css`
    box-sizing: border-box;
    /* border: none; */
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    outline: none;
    padding: 8px;
    width: 100%;
    height: 100%;
    &:disabled {
        background-color: white;
    }
`;