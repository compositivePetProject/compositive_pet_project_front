import { css } from "@emotion/react";

export const search = css`
    display: flex;
    align-items: center;
    width: 100%;

    & > div > * {
        width: 100%;
    }

    & > input {
        box-sizing: border-box;
        width: 80%;
        padding: 10px;
    }

    & > button {
        width: 10%;
        height: 100%;
    }
`

export const optionsBox = css`
    width: 150px;
`;

export const searchInputBox = css`
    outline: none;
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
`;

export const searchButton = css`
    border: none;
    outline: none;
    border-radius: 3px;
    padding: 10px;

    &:hover {
        background-color: #ddd;
    }
    &:active {
        background-color: #ccc;
    }
`;

export const tableHeader = css`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    align-items: center;
    border: 1px solid #dbdbdb;

    & > div {
        border-right: 1px solid #dbdbdb;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 65px;
    }

    & > div:nth-of-type(1) {
        border-left: 1px solid #dbdbdb;
        width: 5%;
    }
    & > div:nth-of-type(2) {
        width: 10%;
    }
    & > div:nth-of-type(3) {
        width: 10%;
    }
    & > div:nth-of-type(4) {
        width: 15%;
    }
    & > div:nth-of-type(5) {
        width: 15%;
    }
    & > div:nth-of-type(6) {
        width: 15%;
    }
    & > div:nth-of-type(7) {
        width: 15%;
    }
    & > div:nth-of-type(8) {
        border-right: none;
        width: 15%;
    }
`;

export const tableBody = css`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    align-items: center;
    border: 1px solid #dbdbdb;

    & > div {
        border-right: 1px solid #dbdbdb;
        text-align: center;
        display: flex;
        align-items: center;
        height: 65px;
    }

    & > div:nth-of-type(1) {
        justify-content: center;
        border-left: 1px solid #dbdbdb;
        width: 5%;
    }
    & > div:nth-of-type(2) {
        justify-content: right;
        width: 10%;
    }
    & > div:nth-of-type(3) {
        justify-content: right;
        width: 10%;
    }
    & > div:nth-of-type(4) {
        width: 15%;
    }
    & > div:nth-of-type(5) {
        width: 15%;
        justify-content: right;
    }
    & > div:nth-of-type(6) {
        width: 15%;
    }
    & > div:nth-of-type(7) {
        width: 15%;
    }
    & > div:nth-of-type(8) {
        border-right: none;
        width: 15%;
        justify-content: right;
    }
`;

export const pagination = css`
    width: 100%;
    & * {

        margin: 10px auto;
    }
`;