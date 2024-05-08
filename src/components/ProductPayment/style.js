import { css } from "@emotion/react";

export const background = css`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgba(140, 149, 159, 0.2);
`;

export const layout = css`
    box-sizing: border-box;
    position: relative;  
    padding: 20px 40px;
    margin: 0px auto;
    border: 1px solid #fafafa;
    border-radius: 8px;
    width: 55%;
    height: 80%;
    color: rgb(30, 30, 35);
    font-family: -apple-system, BlinkMacSystemFont, helvetica, "Apple SD Gothic Neo", 나눔고딕, NanumGothic, "맑은 고딕", MalgunGothic, sans-serif;
    background-color: white;
    overflow-x: hidden;
`;

export const storeContainer = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 20px;
    width: 80%;
    color: rgb(30, 30, 35);
`;



export const orderBox = css`
    display: flex;
    justify-content: space-between;

    & > div:nth-of-type(1) {
        color: rgb(64, 64, 72);
        font-size: 17px;
        font-weight: 700;
    }

    & > div:nth-of-type(2) {
        color : rgb(118, 118, 120);
        font-size: 15px;
        font-weight: 500;
    }
`;

export const productContainer = css`
    display: flex;
    margin-top: 10px;
`;

export const productContainer2 = css`
    display: flex;
    flex-direction: column;
    color: rgb(64, 64, 72);
    font-size: 16px;
    font-weight: 500;

    & > div:nth-of-type(1) {
        margin-bottom: 7px;
    }
    & > div:nth-of-type(2) {
        font-size: 14px;
        margin-bottom: 7px;
    }
    & > div:nth-of-type(3) {
        font-weight: 700;
    }
`;


export const productContainer3 = css`
    display: flex;
    color: rgb(64, 64, 72);
    font-size: 16px;
    font-weight: 500;

    & > div:nth-of-type(1) {
        color: rgb(146, 146, 148);
        font-size: 12px;
        border: 1px solid rgb(220, 222, 224);
        border-radius: 4px;
        padding: 0px 3px;
        margin-right: 5px;
    }
    
`;

export const inputBox = css`
    display: flex;
    flex-direction: column;
    row-gap: 8px;

    & > div:nth-of-type(1) {
        color: rgb(64, 64, 72);
        font-size: 17px;
        font-weight: 700;
    }

    & > div:nth-of-type(2) {
        color: rgb(118, 118, 120);
        font-size: 15px;
        font-weight: 500;
    }

`;

export const productImg = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    margin-right: 10px;
    width: 70px;
    height: 70px;
    overflow: hidden;
    & > img {
        height: 100%;
        width: 100%;
    }
`;


export const storeContainer2 = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    padding: 10px 20px;
    margin-bottom: 20px;
    width: 80%;
    color: rgb(30, 30, 35);
    background-color: rgba(68, 106, 232, 0.6);

    & > div {
        color: rgb(64, 64, 72);
        font-size: 17px;
        font-weight: 700;
    }
`;

export const storeContainer3 = css`
    box-sizing: border-box;
    display: flex;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    padding: 10px 5px;
    margin-bottom: 20px;
    width: 80%;
    font-size: 17px;
    font-weight: 700;
    font-family: "Noto Sans KR", system-ui, AppleSDGothicNeo, sans-serif;
    color: rgb(30, 30, 35);
    background-color: rgb(255, 235, 0);

    & > input {
        cursor: pointer;
        margin-right: 7px;
    }
`;

export const productDetailButtons = css`
    color: #3d3a35;
    font-weight: 700;
    background-color: #eeeeee;
    padding: 3px;
    margin-right: 5px;
    border: none;
    border-radius: 5%;
    width: 15%;
    height: 50px;
    cursor: pointer;

    &:hover {
        background-color: #dedede;
    }
    &:active {
        background-color: #d7d7d7;
    }
`;
