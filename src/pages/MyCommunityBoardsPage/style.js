import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 100%;
`;

export const userDetails = css`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    flex-grow: 1;
    height: 100%;
    margin-top: 45px;
    padding: 0px 0px 40px 60px;
    color: #263747;
    font-weight: 700;
    font-size: 18px;
    border: 1px solid green;
`;

export const boardListItem = css`
    flex-wrap: wrap;
    display: flex; 
`;



export const writeButton = css`
    box-sizing: border-box;
    margin-top: 50px;
    border: 1px solid #ccc;
    padding: 10px;
    margin-right: 10px;
    width: 25%;
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
    width: 90%;
    border: 1px solid #d7e2eb;
    border-radius: 15px;
    margin: 45px;
    padding: 10px 30px;
    background-color: #ffffff;
`;


export const board = css`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding-left: 2px;
    cursor: pointer;

    & > * {
        margin-bottom: 15px;
    }

    & > *:nth-of-type(3n - 2) {
        margin-left: 25px;
    }

    & > *:nth-of-type(3n - 1) {
        margin: 0px 25px;
    }
`;


export const buttonBox = css`
    display: flex;
    justify-content: flex-end;
`;


export const button = css`
    box-sizing: border-box;
    margin: 5px 5px 5px 0px;
    border: 1px solid #0e004a24;
    border-radius: 5px;
    padding: 5px 10px;
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


export const modarBackground = css`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgba(140, 149, 159, 0.2);
`;

export const modarLayout = css`
    box-sizing: border-box;
    position: relative;
    padding: 30px;
    margin: 0px auto;
    border: 1px solid #fafafa;
    width: 60%;
    height: 80%;
    background-color: white;
    overflow-x: hidden;
`;