import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    border: 1px solid #0e004a24;
    border-radius: 10px;
    padding: 0px 10px;
    overflow: hidden;
`

export const row = css`
    display: flex;
    margin: 5px 0px;
`;

export const buttons = css`
    display: flex;
    justify-content: flex-start;
    padding-left: 10px;
    width: 100%;
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