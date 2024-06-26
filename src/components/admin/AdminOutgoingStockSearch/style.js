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
`;

export const label = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    border: 1px solid #dbdbdb;
    font-size: 14px;
    font-weight: 600;
    background-color: #212121;
    color: #eee;
    cursor: default;

    &:nth-of-type(1) {
        width: 10%;
        border-top-left-radius: 5px;
    }
    &:nth-of-type(2) {
        width: 50%;
        overflow-x: auto;
    }
    &:nth-of-type(3) {
        width: 15%;
    }
    &:nth-of-type(4) {
        width: 15%;
    }
    &:nth-of-type(5) {
        width: 30%;
        border-top-right-radius: 5px;
    }
`;

export const productTable = css`
    margin-bottom: 10px;
`;

export const rowData = css`
    width: 100%;
    display: flex;
    box-sizing: border-box;
`;

export const labelData = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    border: 1px solid #dbdbdb;

    font-size: 14px;
    font-weight: 600;
    cursor: default;

    &:nth-of-type(1) {
        width: 10%;
        justify-content: right;
    }
    &:nth-of-type(2) {
        width: 50%;
        justify-content: left;
    }
    &:nth-of-type(3) {
        width: 15%;
        justify-content: left;
    }
    &:nth-of-type(4) {
        width: 15%;
        justify-content: right;
    }
    &:nth-of-type(5) {
        width: 30%;
        justify-content: left;
    }
`;