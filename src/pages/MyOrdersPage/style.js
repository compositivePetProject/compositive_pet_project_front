import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 100%;
`;


export const userDetails = css`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    flex-grow: 1;
    height: 740px;
    margin-top: 45px;
    padding: 0px 80px 80px 40px;
    color: #263747;
    font-weight: 600;
    font-size: 15px;
    overflow-x: hidden;

    & > div:nth-of-type(2) {
        margin-bottom: 10px;
    }
`;

export const title = css`
    font-size: 25px;
    margin-bottom: 24px;
`;


export const container = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #d7e2eb;
    border-radius: 15px;
    margin-bottom: 10px;
    padding: 5px 20px 10px;
`;

export const orderHeader = css`
    width: 100px;
    color: #1e1e23;
    font-weight: bold;
    font-size: 17px;

    & > div:nth-of-type(1) {
        cursor: default;
    }
`;

export const orderCreateDate = css`
    width: 100%;
    display: flex;
    & > div {
        font-weight: block;
        font-size: 13px;
        color: #aaaaac;
    }
`;


export const container2 = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 15px;
    width: 100%;
    background-color: #ffffff;
`;

export const container3 = css`
    display: flex;
    align-items: center;
    margin-right: 20px;
    flex-grow: 1;
    border-right: 1px solid #d7e2eb;
    background-color: transparent;
`;


export const imgBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 90px;
    border-radius: 8px;
    margin-top: 10px;
    overflow: hidden;
    cursor: pointer;
    & > img {
        height: 100%;   
    }  
`;

export const container4 = css`
    height: 100px;
    padding: 35px 10px 10px;
    flex-grow: 1;
    cursor: default;

    & > div:nth-of-type(2) {
        margin-bottom: 5px;
        cursor: pointer;
    }
    & > div {
        margin-bottom: 5px;
    }
`;

export const container5 = css`
    display: flex;
    justify-content: space-between;
    background-color: transparent;
`;

export const buttons3 = css`
    box-sizing: border-box;
    border: 1px solid #0e004a24;
    border-radius: 5px;
    width: 150px;
    padding: 10px 20px;
    margin-right: 5px;
    background-color: white;
    color: #222222;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        color: rgb(255, 64, 129);
        background-color: #dbdbdb29;
    }
`;


export const container6 = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    & > button:nth-of-type(1) {
        margin-bottom: 10px;
    }
    & > button:nth-of-type(2) {
        margin-bottom: 5px;
    }
`;

export const container7 = css`
    display: flex;
    color: #1e1e23;
    font-size: 15px;
    font-weight: 700;
`;

export const editBox = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: 10px;
`;


export const productDeliveryBox = css`
    display: flex;
    position: relative;

    & > button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        padding: 0px 10px;
    }
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






