import { css } from "@emotion/react";

export const layout = css`
    margin-top : 15px;
    box-sizing: border-box;
    border: 1px solid #0e004a24;
    border-radius: 10px;
    padding: 0px 10px;
    overflow: hidden;
`

export const row = css`
    width: 100%;
    display: flex;
    margin: 5px 0px 0px 0px;
    box-sizing: border-box;
`;

export const label = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    
    padding: 0px 30px;
    font-size: 14px;
    font-weight: 600;
    background-color: #00005cff;
    color: #eee;
    cursor: default;
`;

export const productTable = css`
    margin-bottom: 10px;
`;