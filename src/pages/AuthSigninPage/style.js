import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    margin-top: 72px;
    width: 100%;
    height: 100%;
`;

export const font = css`
    font-size: 32px;
    margin-bottom: 24px;
    color: #00005cff;
    font-weight: 700;
    text-align: center;
    margin-top: 72px;
`;

export const loginContainer = css`
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    width: 600px;
    height: 500px;
    padding: 20px 24px;
    row-gap: 10px;
    border: 1px solid #d7e2eb;
`;

export const buttons = css`
    width: 120px;
    padding: 10px 20px;
    margin-right: 5px;
    border: none;
    border-radius: 5px;
    background-color: #00005cff;
    color: #eeeeee;
    font-weight: 800;
    font-size: 14px;
    text-decoration: none;
    cursor: pointer;
`;

export const imgBox = css`
    margin: 10px;
    display: flex;
`;


export const img = css`
    width: 80px;
    height: 80px    ;
    margin-right: 15px;
`;
