import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    width: 100%;
`;

export const userDetails = css`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    flex-grow: 1;
    width: 1000px;
    height: 100%;
    margin-top: 45px;
    padding: 0px 80px 80px 40px;
    color: #263747;
    font-weight: 600;
    font-size: 15px;

    & > div:nth-of-type(1) {
        display: flex;
        justify-content: space-between;
    }
`;

export const title = css`
    font-size: 25px;
    margin-bottom: 24px;
`;

export const writeButton = css`
    box-sizing: border-box;
    border: 1px solid #0e004a24;
    border-radius: 5px;
    padding: 0px 15px;
    background-color: white;
    font-weight: 600;
    height: 40px;
    cursor: pointer;
    &:hover {
        border: 1px solid rgb(255, 64, 129);
        background-color: #dbdbdb29;
    }

    &:active {
        background-color: #dbdbdb49;
    }
`;


export const boardListItem = css`
    border: 1px solid #d7e2eb;
    height: 610px;
    padding: 25px 25px 25px 30px;
    overflow: auto;
    box-sizing: border-box;
    gap: 40px;
    flex-wrap: wrap;
    display: flex;
    border-radius: 8px;
`;