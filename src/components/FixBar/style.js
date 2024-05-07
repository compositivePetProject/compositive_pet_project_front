import { css } from "@emotion/react";

export const layout = css`
    position: fixed;
    top: 20%;
    right: 80px; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 150px;
    border-radius: 5px;
    border: 1px solid #0e004a24;
    padding-top: 50px;
    background: #F8F8F8;

    & > div:nth-of-type(3) {
        box-sizing: border-box;
        border-top: 1px solid #0e004a24;
    }

    & > div:nth-of-type(4) {
        box-sizing: border-box;
        border-top: 1px solid #0e004a24;
        border-bottom: 1px solid #0e004a24;
    }

    & > div:nth-of-type(5) {
        box-sizing: border-box;
        border-bottom: 1px solid #0e004a24;
    }

    & > div:nth-of-type(6) {
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }
`;

export const title = css`
    width: 100%;
    height: 50px;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    color: #222222;
    border-bottom: 1px solid #0e004a24;
    font-weight: 600;
    cursor: default;
`;

export const info = css`
    flex-direction: column;
    display: flex;
    justify-content: center;
    padding: 20px 0px;
    width: 100%;
    align-items: center;
    color: #333333;
    background-color: white;
    font-weight: 700;
    & > img {
        width: 100px;
        border-radius: 50%;
    }

    & > div {
        text-align: center ;
    }
`;

export const auth = css`
    width: 100%;
    color: #222222;
`;

export const menuContainer = css`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #222222;
    cursor: pointer;
    font-weight: 600;
    & > div:nth-of-type(1) {
        width: 30%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    & > div:nth-of-type(2) {
        width: 70%;
    }

    &:hover {
        color: rgb(255, 64, 129);
    }

    &:active {
        color: rgb(255, 64, 129);
    }
`;