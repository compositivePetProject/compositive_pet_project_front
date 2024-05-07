import { css } from "@emotion/react";

export const title = css`
    font-size: 25px;
    margin-bottom: 15px;
`;

export const commentcontainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #d7e2eb;
    border-radius: 15px;
    margin-bottom: 10px;
    padding: 10px 20px;
    row-gap: 10px;
    background-color: #ffffff;
`;


export const writebutton = css`

box-sizing: border-box;
    margin-top: 50px;
    border: 1px solid #ccc;
    padding: 10px;
    width: 100%;
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



export const commentUpdateButton = css`
    box-sizing: border-box;
    margin-top: 50px;
    border: 1px solid #ccc;
    padding: 10px;
    width: 100%;
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


