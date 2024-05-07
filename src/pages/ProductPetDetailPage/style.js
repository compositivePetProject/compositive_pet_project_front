import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 75%;
    height: 28%;
    margin: 0px auto;
    border: 1px solid rgb(237, 237, 237);
    border-radius: 8px;
    background-color: white;
    overflow: hidden;
`;

export const sideImg = css`
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 50%;
    height: 100%;
    background-color: white;
`;


export const productImg = css`
    display: flex;
    justify-content: center;
    width: 480px;
    height: 480px;
    cursor: pointer;
    & > img {
        height: 100%;
        width: 100%;
        border-radius: 8px;
    }
`;

export const productBox = css`
    box-sizing: border-box;
    width: 100%;
    height: 600px;
    border-left: 1px solid rgb(237, 237, 237);
    margin-top: 6px;
    padding: 4px 40px 30px 39px;
    background-color: transparent;
`;

export const productBoxHeader = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 105px;
    cursor: default;

    & > div {
        color: #333333;
        font-family: 'Spoqa Han Sans Neo', 'Noto Sans KR', sans-serif
    }

    & > div:nth-of-type(1) {
        font-size: 18px;
        font-weight: bold;
        padding-bottom: 3px;
        margin: 10px 0px 5px;
    }
    & > div:nth-of-type(2) {
        font-size: 26px;
        font-weight: 600;
    }
    & > div:nth-of-type(3) {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 10px;
    }
`;

export const titleContainer = css`
    display: flex;
    align-items: center;
    color: rgb(149, 149, 149);
`;

export const icons = css`
    display: flex;
    align-items: center;
    color: rgb(149, 149, 149);
    
    & > div {
        color: rgb(39, 39, 39);
        font-size: 11px;
        padding: 3px;
        border-radius: 4px;
    }
`;

export const kakaoImg = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;

    & > img {
        margin: 2px 0px 0px 20px;
        width: 100%;
    }
`;


export const contentBox = css`
    display: flex;
    justify-content: flex-end;
    width: 100%;

    & > div {
        font-size: 18px;
        color: rgb(212, 0, 34);
    }
/*     
    & > button {
        box-sizing: border-box;
        border: none;
        background-color: transparent;
        font-size: 32px;
        font-weight: 700;
        
    } */
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
    cursor: default;
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 14px;
    color: #333333;
    border-top: 1px solid rgb(237, 237, 237);
    border-bottom: 1px solid rgb(237, 237, 237);
    padding: 5px 0px;
    margin-bottom: 10px;
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
    box-sizing: border-box;
    display: flex;
    position: relative;
    align-items: center;
    height: 35px;

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

export const selectedSizeTypeOnBox = css`
    box-sizing: border-box;
    display: flex;

    & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 46px;
        height: 32px;
        background-color: #ffffff;
        border: 1px solid rgba(16, 16, 16, 0.3);
    }
    
    & > button {
        width: 34px;
        height: 34px;
        background-color: rgb(241, 242, 244);
        border: 1px solid rgba(16, 16, 16, 0.3);
        cursor: pointer;
        padding: 0px 10px;
    }
`;

export const productDeliveryBox = css`
    display: flex;
    position: relative;    

    & > div:nth-of-type(1) {
        width: 80px;
    }

    & > div:nth-of-type(2) {
        color : #777777;
    }
`;


export const productDeliveryBox2 = css`
    display: flex;
    justify-content: space-between;
    margin: 10px 0px;

    & > div:nth-of-type(1) {
        font-size: 14px;
        font-weight: 700;
    }

    & > div:nth-of-type(2) {
        font-size: 16px;
        font-weight: 700;
        color: rgb(212, 0, 34);
    }
`;

export const productDeliveryBox3 = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 10px 0px;
    border-bottom: 1px solid rgb(237, 237, 237);

    & > div:nth-of-type(1) {
        font-size: 14px;
        font-weight: 700;
        margin-bottom: 10px;
    }

    & > div:nth-of-type(2) {
        font-size: 16px;
        font-weight: 700;
    }
`;


export const productOrderPayButton = css`
    box-sizing: border-box;
    color: #333333;
    font-weight: 700;
    background-color: #ffffff;
    padding: 3px;
    border: 1px solid rgba(0, 0, 0, 0.53);
    width: 100%;
    height: 50px;
    cursor: pointer;
    border-radius: 5px;
    margin-bottom: 5px;

    & > button:nth-of-type(1) {
        margin-right: 20px;
    }

    &:hover {
        background-color: #fafafa;
    }
`;

export const productOrderButtons = css`
    box-sizing: border-box;
    font-weight: 700;
    padding: 3px;
    border: none;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.53);
    width: 140px;
    height: 50px;
    background-color: #ffffff;
    cursor: pointer;

    & > button:nth-of-type(1) {
        margin-right: 20px;
    }

    &:hover {
        background-color: #fafafa;
    }
`;

export const productOrderButton = css` 
    color: #eeeeee;
    font-weight: 700;
    background-color: #00005cff;
    border: none;
    padding: 15px;
    border-radius: 5px;
    cursor: pointer;
    
    & > button:nth-of-type(1) {
        margin-right: 20px;
    }

    &:hover {
        background-color: #00003bff;
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
    color: #eeeeee;
    font-weight: 700;
    background-color: #00005cff;
    padding: 3px;
    border: none;
    width: 100%;
    height: 50px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #00003bff;
    }
`;


export const productDetailBox2 = css`
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;

    & > img {
        height: 100%;
        width: 100%;
    }
`;

export const contentBox2 = css`
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
    & > img {
        
        height: 100%;
        width: 100%;
    }
`;

export const productFooter = css` 
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 75%;
    height: 100%;
    margin: 40px auto;
    color: rgb(60, 57, 52);
    font-family: "Spoqa Han Sans Neo", "Noto Sans KR", sans-serif;
    background-color: transparent;
`;

export const reviewBox = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    font-weight: 700;
    line-height: 85px;
    border-bottom: 2px solid #00005cff;
    color: #333333;
`;

export const ratingBox = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 28px;
    font-weight: 700;
    border-bottom: 2px solid #00005cff;
    color: #333333;
    flex-grow: 1;
    & > div:nth-of-type(2) {
        margin: 20px 0px;
        border-left: 1px solid;
    }
`;

export const ratingBox1 = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 40%;
    row-gap: 15px;
    & > div:nth-of-type(2) {
        font-size: 12px;
    }
`;

export const reviewBox1 = css`
    display: flex;
    padding: 32px 0px;
    border-bottom: 1px solid rgb(60, 57, 52);
`;

export const reviewBox2 = css`
    width: 65%;
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

export const activeStarButton2 = css`
    color: gold;
    font-size: 30px;
`;

export const reviewBox4 = css`
    font-size: 12px;
    padding-left: 20px;
`;

