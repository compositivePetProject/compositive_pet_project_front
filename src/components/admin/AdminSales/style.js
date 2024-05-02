import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
`;

export const title = css`
    font-size: 22px;
    padding-left: 10px;
`

export const container = css`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin-bottom: 15px;
    border: 1px solid #0e004a24;
    border-radius: 10px;
    padding: 0px 10px;
    overflow: hidden;
`;

export const animalCategorySalesBox = css`
    display: flex;
    cursor: default;
`;

export const productCategorySalesBox = css`
    display: flex;
    cursor: default;

    & div:nth-of-type(4) > div:nth-of-type(1) {
        width: 200px;
    }
`;

export const row = css`
    display: flex;
    margin: 5px 0px;
`;

export const label = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #0e004a24;
    width: 150px;
    height: 40px;
    font-size: 14px;
    font-weight: 600;
    background-color: #00005cff;
    color: #eee;
    cursor: default;
    border-top-left-radius : 5px;
    border-bottom-left-radius : 5px;


`;

export const data = css`
    margin-right: 5px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 40px;
    border: 1px solid #0e004a24;
    border-top-right-radius : 5px;
    border-bottom-right-radius : 5px;
`;