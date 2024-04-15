import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 100%;
    background-color: white;
`;

export const sideImg = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 40%;
    height: 100%;
    background-color: white;
`;


export const productImg = css`
    display: flex;
    justify-content: center;
    width: 500px;
    height: 700px;
    & > img {
        height: 100%;
        width: 100%;
    }
`;

export const productBox = css`
    overflow-x: hidden;
    scrollbar-width: thin;
    scrollbar-color: red;   
    box-sizing: border-box;
    width: 100%;
    padding: 0px 50px;
    background-color: transparent;
`;

export const productBoxHeader = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 120px;
    border-bottom: 2px solid #3a3a35;

    & > div {
        color: #3d3a35;
        font-family: 'Spoqa Han Sans Neo', 'Noto Sans KR', sans-serif
    }

    & > div:nth-of-type(1) {
        font-size: 30px;
        font-weight: bold;
        padding-bottom: 3px;
        margin: 10px 0px;
    }
    & > div:nth-of-type(2) {
        font-size: 26px;
        font-weight: 600;
        margin-bottom: 20px;
    }
`;


export const contentBox = css`
    display: flex;
    justify-content: space-between;
    width: 100%;

    & > button {
        border: none;
        background-color: transparent;
        font-size: 40px;
        font-weight: 700;
    }
`;
export const productBody = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

`;

export const productFooter = css`
    width: 100%;
    height: 20%;
    border-top: 2px solid #3a3a35;
`;