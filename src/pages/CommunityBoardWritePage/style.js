import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    width: 96%;
    height: 100%;
    margin: 10px auto;

    & > div:nth-of-type(1) {
        margin: 20px 0px 5px;
        font-size: 22px;
        font-weight: 700;
    }
`;


export const container = css`
    display: flex;
    justify-content: space-between;
    height: 45px;
    font-size: 14px;
    margin: 10px 0px;
`;

export const writeContainer = css`
    display: flex;
`;

export const selectContainer = css`
    box-sizing: border-box;
    display: flex;
    border: 1px solid #0e004a24;
    border-radius: 5px;
    margin-right: 5px;
    width: 225px;
    height: 45px;
    overflow: hidden;
`

export const selectLabel = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #0e004a24;
    padding: 0px 30px;
    font-size: 14px;
    font-weight: 600;
    background-color: #212121;
    color: #eee;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    cursor: default;
`

export const select = css`
    box-sizing: border-box;
    border: none;
    outline: none;
    padding: 0px 10px;
    width: 100px;
    height: 100%;
    font-size: 16px;
    cursor: pointer;
    &:disabled {
        cursor: not-allowed;
    }
    & option {
        font-size: 16px;
    }
`;

export const inputContainer = css`
    box-sizing: border-box;
    display: flex;
    border: 1px solid #0e004a24;
    border-radius: 5px;
    margin-right: 5px;
    width: 300px;
    height: 45px;
    overflow: hidden;
`

export const input = css`   

    width: 200px;
    box-sizing: border-box;
    padding: 5px;
    border: none;
    outline: none;
    padding: 0px 10px;
    font-size: 16px;
    cursor: pointer;
    &:disabled {
        cursor: not-allowed;
    }
`;


export const submitButton = css`
    box-sizing: border-box;
    color: #222222;
    font-weight: 700;
    background-color: white;
    border: 1px solid #0e004a24;
    border-radius: 5px;
    padding: 3px;
    width: 110px;
    height: 45px;
    cursor: pointer;

    & > button:nth-of-type(1) {
        margin-right: 20px;
    }

    &:hover {
        color: rgb(255, 64, 129);
        background-color: #dbdbdb29;
    }

    &:active {
        background-color: #dbdbdb49;
    }
`;
