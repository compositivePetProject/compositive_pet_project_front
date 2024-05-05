import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
`;

export const search = css`
    margin: 20px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const searchTitle = css`
    box-sizing: border-box;
    font-size: 22px;
    font-weight: 600;
    padding-left: 10px;
`;

export const searchBox = css`
    box-sizing: border-box;
    display: flex;
    padding-right: 10px;
`;

export const searchButton = css`
    box-sizing: border-box;
    border: 1px solid #0e004a24;
    border-radius: 5px;
    padding: 0px 15px;
    background-color: white;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        border: 1px solid #2400c4cb;
    }

    &:active {
        background-color: #00005cff;
        color: #eeeeee;
    }

`;

export const board = css`
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    & > * {
        margin-bottom: 15px;
    }

    & > *:nth-of-type(4n - 2) {
        margin-left: 35px;
    }

    & > *:nth-of-type(4n - 1) {
        margin: 0px 35px;
    }
`;



export const pagination = css`

`;

