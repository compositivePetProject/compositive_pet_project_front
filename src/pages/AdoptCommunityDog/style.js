import { css } from "@emotion/react";
export const container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
`;

export const button = css`
    margin-top: 20px;
`;

export const title = css`
    background-color: #dbdbdb;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 5px;
    margin: 20px;
   

    th {
        padding: 8px 20px;
        text-align: center;
        cursor: pointer;
    }

    th:hover {
        background-color: #ccc;
    }

    th:not(:last-child) {
        border-right: 1px solid #aaa;
    }
`;

export const boardList = css`
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
    background-color: #fff;
    border-radius: 0 0 5px 5px;

    h1 {
        text-align: center;
    }
`;

export const table = css`
    width: 70%;
    border-collapse: collapse;
`;
