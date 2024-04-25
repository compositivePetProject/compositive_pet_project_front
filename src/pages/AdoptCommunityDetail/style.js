import { css } from "@emotion/react";

export const container = css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 90%;
`;

export const boardTitle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 20px;
    border: 1px solid #dbdbdb;
`

export const boardContent = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 800px;
    height: 300px;
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

export const toUpdateButton = css`
    position: absolute;
    top:10px;
    right: 20px;
    box-sizing: border-box;
    margin-top: 50px;
    border: 1px solid #ccc;
    padding: 10px;
    width: 30%;
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