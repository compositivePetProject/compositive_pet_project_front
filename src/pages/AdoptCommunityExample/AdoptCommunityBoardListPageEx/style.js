import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    display: flex;
    flex-direction: column;
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

export const writeButton = css`
    margin-left: 5px;
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
    

    & > div {
        margin: 0 auto;
        width: 1120px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;

        & > * {
            margin-bottom: 15px;
        }

        & > *:nth-of-type(3n - 1) {
            margin-left: 35px;
            margin-right: 35px;
        }
    }

`;



export const pagination = css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

