import { css } from "@emotion/react";
export const boardCard = css`
    box-sizing: border-box;
    width: 350px;
    height: 300px;
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
        height: 200px;
    }
`

export const contentBox = css`
    padding: 10px 20px;

    & > div {
        position: relative;

        & > div:nth-of-type(2) {
            position: absolute;
            top: 60px;
            right: 0px;
            color: #dbdbdb;
            font-weight: 400;
            font-size: 14px;
        }
    }
`