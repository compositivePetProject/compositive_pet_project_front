import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
`;

export const boardContent = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    height: 100%;
    border: 1px solid #dbdbdb;
`

export const toListButton = css`
    box-sizing: border-box;
    margin-top: 50px;
    border: 1px solid #ccc;
    padding: 10px;
    width: 50%;
    background-color: white;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        background-color: #fafafa;
    }
    &:active {
        background-color: #eee;
    }
`;