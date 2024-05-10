import { css } from "@emotion/react";
export const boardCard = css`
    box-sizing: border-box;
    width: 350px;
    height: 450px;
    border: 1px solid #dbdbdb;
    border-radius: 15px;
    box-shadow: 0 0 25px -10px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    transition: all 0.3s;

    &:hover{
        transform: translate(0, -10px);
    }
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
        height: 200px;
    }
`

export const contentBox = css`
    padding: 20px;
    color: rgb(15, 19, 23);
    font-weight: 700;
    font-size: 16px;

    & > div:nth-of-type(1) {
        position: relative;
        height: 170px;
        border-bottom: 1px solid #dbdbdb;
        margin-bottom: 10px;

        & > div:nth-of-type(2) {
            position: absolute;
            top: 150px;
            right: 0;

            color: #dbdbdb;
            font-weight: 400;
            font-size: 14px;
        }
    }
   & > div:nth-of-type(2) {
        display: flex;
        justify-content: space-between;
        margin-top: 15px;

        & > div:nth-of-type(1) {
            display: flex;
            align-items: center;

            &:nth-of-type(1) > span {
                font-size: 14px;
            }
        }
    }
`

export const countBox = css`
    display: flex;
    justify-content: center;

    & > div {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & > div:nth-of-type(2) {
        margin: 0px 5px;
    }
`;