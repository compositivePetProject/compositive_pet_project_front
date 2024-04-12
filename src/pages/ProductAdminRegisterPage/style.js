import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    display: flex;
    /* background-color: gray; */
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

export const rightTop = css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div button {
        margin-left: 10px;
        width: 50px;
        border: none;
        background-color: #dbdbdb;
        border-radius: 3px;
        cursor: pointer;
    }

    & > div button:active {
        background-color: #cccccc;
    }

    & > div button:hover{
        background-color: #eeeeee;
    }
`;

export const registerTable = css`
    box-sizing: border-box;
    border-collapse: collapse;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    width: 100%;
    background-color: #fdfdfd;

    & td {
        box-sizing: border-box;
        border: 1px solid #dbdbdb;
        background-color: white;
    }
`;

export const registerTh = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    padding: 5px;
    /* width: 100%; */
    cursor: default;
    font-size: 14px;
`;

export const preview = css`
    width: 300px;
    height: 180px;
    background-color: red;
`