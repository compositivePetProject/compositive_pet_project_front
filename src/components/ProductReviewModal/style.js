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

export const starButtons = css`
    background-color: transparent;
    border: none;
`;

export const starButton = css`
    background-color: transparent;
    font-size: 30px;
    cursor: pointer;
`;

export const activeStarButton = css`
    color: gold;
    font-size: 30px;
    cursor: pointer;
`;

export const reviewBox = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 25px 100px 50px 0px;
    & > div:nth-of-type(1) {
        margin-bottom: 20px;
        width: 90px;
    }
`;

export const buttons3 = css`
    width: 150px;
    padding: 10px 20px;
    margin-right: 5px;
    border: 1px solid #0e004a24;
    border-radius: 5px;
    background-color: white;
    font-weight: 600;
    color: #222222;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: rgb(255, 64, 129);
        background-color: #dbdbdb29;
    }
`;

