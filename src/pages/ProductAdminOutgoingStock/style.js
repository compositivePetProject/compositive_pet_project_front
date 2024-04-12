import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    display: flex;
    background-color: gray;
`

export const left = css`
    display: flex;
    flex-direction: column;
    width: 20%;
    background-color: yellow;

    & > div {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 50px;
        background-color: green;
        cursor: pointer;
        transition: all 0.3s;
    }

    & > div:nth-of-type(1):hover {
        background-color: aliceblue;
    }
    & > div:nth-of-type(2):hover {
        background-color: aliceblue;
    }
    & > div:nth-of-type(3):hover {
        background-color: aliceblue;
    }
    & > div:nth-of-type(4):hover {
        background-color: aliceblue;
    }
    & > div:nth-of-type(5):hover {
        background-color: aliceblue;
    }
`;

export const right = css`
    display: flex;
    flex-direction: column;
    width: 80%;
`;

export const productRegister = css`
    width: 100%;
    background-color: aquamarine;

    & > div:nth-of-type(1) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 10px;
    }
`;

export const productRegisterTable = css`
    box-sizing: border-box;
    width: 100%;
`;

export const stock = css`
    display: flex;
`;

export const incomingStock = css`
    width: 50%;

    & > div:nth-of-type(1) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 10px;
    }
`;

export const currentStock = css`
    width: 50%;

    & > div:nth-of-type(1) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 10px;
    }
`;

export const order = css`
    display: flex;
`;

export const orderStock = css`
    width: 50%;
    & > div:nth-of-type(1) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 10px;
    }
`;

export const outgoingStock = css`
    width: 50%;
    & > div:nth-of-type(1) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 10px;
    }
`;

