import { css } from "@emotion/react";

export const layout = css`
    margin-top : 15px;
    box-sizing: border-box;
    border: 1px solid #0e004a24;
    border-radius: 10px;
    padding: 10px 10px;
    overflow: hidden;
`

export const row = css`
    width: 100%;
    display: flex;
    margin: 5px 0px 0px 0px;
    box-sizing: border-box;

    & > div:nth-of-type(1) {
        border-top-left-radius: 5px;
        width: 5%;
        border-right: 1px solid #eee;
    }
    & > div:nth-of-type(2) {
        width: 5%;
        border-right: 1px solid #eee;
    }
    & > div:nth-of-type(3) {
        width: 30%;
        border-right: 1px solid #eee;
    }
    & > div:nth-of-type(4) {
        width: 30%;
        border-right: 1px solid #eee;
    }
    & > div:nth-of-type(5) {
        width: 15%;
        border-right: 1px solid #eee;
    }
    & > div:nth-of-type(6) {
        width: 15%;
        border-top-right-radius: 5px;
    }
`;

export const label = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    font-size: 14px;
    font-weight: 600;
    background-color: #212121;
    color: #eee;
    cursor: default;
`;

export const productTable = css`
    margin-bottom: 10px;
`;

export const rowData = css`
    width: 100%;
    display: flex;

    & > div:nth-of-type(1) {
        width: 5%;
        justify-content: center;
    }
    & > div:nth-of-type(2) {
        width: 5%;
        text-align:right;
    }
    & > div:nth-of-type(3) {
        width: 30%;
        justify-content: left;
    }
    & > div:nth-of-type(4) {
        width: 30%;
        justify-content: right;
    }
    & > div:nth-of-type(5) {
        width: 15%;
        justify-content: left;
    }
    & > div:nth-of-type(6) {
        width: 15%;
        justify-content: left;
    }
`;

export const labelData = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border: 1px solid #0e004a24;
    font-size: 14px;
    font-weight: 600;
    height: 40px;
    cursor: default;
`;