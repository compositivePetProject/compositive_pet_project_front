import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    display: flex;
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

export const table = css`
    border: 1px solid #dbdbdb;
    border-collapse: collapse;

    & th, & td {
        border: 1px solid #dbdbdb;
    }
`;


