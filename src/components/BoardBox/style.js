import { css } from "@emotion/react";
export const boardCard = css`
    width: 350px;
    height: 380px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 92, 0.42);
`;

export const imageBox = css`
    width: 100%;
    height: 200px;
`

export const contentBox = css`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    height: 130px;
    padding: 20px;
    border-top: 1px solid rgba(0, 0, 92, 0.42);


    & > div:nth-of-type(1) {
        font-size: 18px;
        font-weight: 600;
    }

    & > div:nth-of-type(2) {
        margin-top: 50px;
        display: flex;
        justify-content: flex-end;
        color: #cccccc;
    }

`

export const writerInfoBox = css`
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    padding: 0px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(0, 0, 92, 0.42);

    & > div:nth-of-type(1) {
        font-weight: 600;
    }

`;

export const iconBox = css`
    display: flex;
    padding-top: 5px;
    align-items: center;

    & > div > * {
        font-size: 24px;
    }
`