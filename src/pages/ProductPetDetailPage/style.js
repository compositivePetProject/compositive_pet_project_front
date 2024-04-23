import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 100%;
    background-color: white;
    overflow: hidden;
`;

export const sideImg = css`
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 40%;
    height: 100%;
    background-color: white;
`;


export const productImg = css`
    display: flex;
    padding-top: 30px;
    width: 700px;
    height: 600px;
    cursor: pointer;
    & > img {
        height: 100%;
        width: 100%;
    }
`;

export const productBox = css`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
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
        box-sizing: border-box;
        border: none;
        background-color: transparent;
        font-size: 35px;
        font-weight: 700;
        
    }
`;

export const totalCount = css`
    font-size: 12px;
`;

export const fillHeartIcon = css`
    color: red; 
`;

export const productBody = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;


export const productOrderContainer = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 14px;
    color: #3d3a35;
    font-family: 'Spoqa Han Sans Neo','Noto Sans KR',sans-serif;
    & > div { 
        padding: 10px 0px;
    }
`;

export const productDetailBox = css`
    display: flex;
    position: relative;    

    & > div:nth-of-type(1) {
        width: 80px;
    }

    & > div:nth-of-type(2) {
        color : #777777;
    }
`;

export const productSizeBox = css`
    display: flex;
    position: relative;
    align-items: center;

    & > div:nth-of-type(1) {
        width: 80px;
    }

    & > div:nth-of-type(2) {
        flex-grow: 1;
    }
`;

export const inputBox = css`
    display: flex;
    flex-direction: column;
    row-gap: 3px;
`;

export const productDeliveryBox = css`
    display: flex;
    position: relative;
    
    & > div:nth-of-type(1) {
        color : #777777;
        width: 80px;   
    }

    & > button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        padding: 0px 10px;
    }
`;


export const productOrderButtons = css`
    color: #e2e2e2;
    font-weight: 700;
    background-color: #444444;
    padding: 3px;
    border: none;
    width: 30%;
    height: 50px;
    cursor: pointer;
    
    & > button:nth-of-type(1) {
        margin-right: 20px;
    }

    &:hover {
        background-color: #333333;
    }
`;

export const productOrderbox = css`
    display: flex;
    justify-content: space-between;

    & > div {
        width: 30%;
    } 
`;

export const productDetailButtons = css`
    color: #3d3a35;
    font-weight: 700;
    background-color: #eeeeee;
    padding: 3px;
    border: none;
    width: 100%;
    height: 50px;
    cursor: pointer;

    &:hover {
        background-color: #dbdbdb;
    }
`;


export const productDetailBox2 = css`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
    // css 안 먹음 quill
    & > img {
        height: 100%;
        width: 100%;
    }
`;

export const productFooter = css`
    width: 100%;
    height: 100%;
    margin-top: 30px;
    border-top: 2px solid #3a3a35;
    color: rgb(60, 57, 52);
    font-family: "Spoqa Han Sans Neo", "Noto Sans KR", sans-serif;
    background-color: transparent;
`;

export const reviewBox = css`
    font-size: 18px;
    font-weight: 700;
    line-height: 85px;
    border-bottom: 1px solid rgb(60, 57, 52);
`;

export const reviewBox1 = css`
    display: flex;
    padding: 32px 0px;
    border-bottom: 1px solid rgb(60, 57, 52);
`;

export const reviewBox2 = css`
    width: 70%;
    border-right: 1px solid rgb(216, 221, 229);
    padding-right: 40px;
    
`;

export const reviewBox3 = css`
    display: flex;
    justify-content: space-between;
    margin-bottom: 7px;

    & > div:nth-of-type(2) {
        font-size: 12px;
        color: rgb(112, 118, 128)
        line-height 18px;
    }
`;


export const starButton = css`
    background-color: transparent;
    font-size: 25px;
`;

export const activeStarButton = css`
    color: gold;
    font-size: 25px;
`;

export const reviewBox4 = css`
    padding-left: 20px;
`;

