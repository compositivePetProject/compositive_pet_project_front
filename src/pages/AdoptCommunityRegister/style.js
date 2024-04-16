import { css } from "@emotion/react";


export const container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
`;

export const submitButton = css`
    box-sizing: border-box;
    margin-top: 50px;
    border: 1px solid #ccc;
    padding: 10px;
    width: 90%;
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

