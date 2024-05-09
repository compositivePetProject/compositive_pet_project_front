import { css } from "@emotion/react";
export const boardCard = css`
    box-sizing: border-box;
    width: 300px;
    height: 250px;
    border: 1px solid #dbdbdb;
    border-radius: 15px;
    box-shadow: 0 0 25px -10px rgba(0, 0, 0, 0.5);
    cursor: pointer;
`;

export const imageBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;

    & > img {
        width: 100%;
        height: 150px;
    }
`

export const contentBox = css`
    box-sizing: border-box;
    padding: 10px 20px;
    height: 50px;
    font-size: 18px;

    & > div {
        position: relative;

        & > div:nth-of-type(2) {
            position: absolute;
            right: 0;
            color: #dbdbdb;
            font-weight: 400;
            font-size: 14px;
        }
    }
`

export const buttonBox = css`
    box-sizing: border-box;
    padding-right: 10px;
    display: flex;
    justify-content: end;
    align-items: center;
    height: 50px;
`;

export const button = css`
    box-sizing: border-box;
    margin: 5px 5px 5px 0px;
    border: 1px solid #0e004a24;
    border-radius: 5px;
    padding: 2.5px 10px;
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
`;