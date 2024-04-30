import { css } from "@emotion/react";


export const layout = css`
    position: fixed;
    top: 20%;
    right: 35px; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 150px;
    border-radius: 5px;
    border: 1px solid #0e004a24;
    padding-top: 75px;

    & > div:nth-of-type(4) {
        box-sizing: border-box;
        border-top: 1px solid #eeeeee;
        border-bottom: 1px solid #eeeeee;
    }

    & > div:nth-of-type(5) {
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
    background-color: #00005cff;
    color: #eeeeee;
`;

export const info = css`
    flex-direction: column;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    width: 100px;
    color: #333333;
    font-weight: 600;
    & > img {
        border-radius: 50%;
    }

    & > div {
        text-align: center ;
    }
`;

export const auth = css`
    width: 100%;
    background-color: #00005cff;
    color: #eeeeee;
`;

export const menuContainer = css`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00005cff;
    color: #eeeeee;
    cursor: pointer;
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
        background-color: #00003cff;
    }

    &:active {
        background-color: #00002cff;
    }
`;