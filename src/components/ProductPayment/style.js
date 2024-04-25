import { css } from "@emotion/react";

export const background = css`
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

export const layout = css`
    box-sizing: border-box;
    position: relative;
    padding: 15px;
    margin: 0px auto;
    border: 1px solid #fafafa;
    width: 60%;
    height: 80%;
    background-color: white;
    overflow-x: hidden;
`;



export const storeContainer = css`
    display: flex;
    position: absolute;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    padding: 20px;
    width: 100%;
`;

export const productContainer = css`
    margin: 10px;
    width: 30%;
    height: 120px;
    cursor: pointer;
`;

export const inputBox = css`
    display: flex;
    flex-direction: column;
    row-gap: 3px;
`;