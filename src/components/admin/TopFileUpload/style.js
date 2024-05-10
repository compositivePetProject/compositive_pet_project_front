import { css } from "@emotion/react";

export const item = css`
    display: flex;
    border: 1px solid #0e004a24;
    border-radius: 5px;
    margin: 0px 5px;
    height: 40px;
    overflow: hidden;
`

export const label = css`
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
    cursor: default;
`;

export const inputBox = css`
    box-sizing: border-box;
    padding: 0;
`;

export const input = (inputSize) => css`
    box-sizing: border-box;
    border: none;
    outline: none;
    padding: 0px 10px;
    width: ${inputSize * 20}px;
    height: 100%;
    font-size: 16px;
    cursor: pointer;
    &:disabled {
        cursor: not-allowed;
    }
`

export const file = css`
    display: none;
`

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
`