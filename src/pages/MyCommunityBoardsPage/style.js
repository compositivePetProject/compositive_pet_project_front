import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 100%;
`;

export const containerIn = css`
    display: flex;
    flex-direction: column;
    border: 1px solid #d7e2eb;
    border-radius: 15px;
    margin-bottom: 10px;
    padding: 10px 20px;
    row-gap: 10px;
    background-color: #ffffff;
`;

export const container = css`
    display: flex;
    flex-direction: column;
    width: 70%;
    border: 1px solid #d7e2eb;
    border-radius: 15px;
    margin-bottom: 10px;
    padding: 10px 20px;
    background-color: #ffffff;
`;
