import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 100%;
`;

export const userInfoBox = css`
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    margin-top: 45px;
    width: 300px;
    height: 100%;
`;

export const infoBox = css`
    border-radius: 15px;
    width: 80%;
    height: 500px;
    padding: 0px 24px;
    border: 1px solid #d7e2eb;

    & > h3:nth-of-type(1) {
        color: #333333;
        font-size: 14px;
        font-weight: 800;
        margin: 40px 0px 15px;
    }

    & > h3:nth-of-type(2) {
        color: #333333;
        font-size: 14px;
        font-weight: 800;
    }
`;

export const buttons = css`
    padding: 10px 15px;
    border-radius: 5px;
    margin-bottom: 2px;
    color: #333333;
    font-weight: 800;
    cursor: pointer;
    &:hover {
        background-color: #fafafa;
        color : #00005cff;
        font-weight: 800;
    }
`;


export const userDetails = css`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    flex-grow: 1;
    height: 100%;
    margin-top: 45px;
    padding: 0px 80px 80px 40px;
    color: #263747;
    font-weight: 600;
    font-size: 15px;

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
    padding: 10px 20px;
    row-gap: 10px;
    background-color: #ffffff;
`;

export const orderHeader = css`
    width: 100%;
    display: flex;
`;
export const orderCreateDate = css`
    width: 100%;
    display: flex;
    & > div {
        font-size: 12px;
        color: #aaaaac;
    }
`;


export const container2 = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 15px;
    width: 100%;
    padding: 5px;
    row-gap: 10px;
    background-color: #ffffff;
`;

export const container3 = css`
    display: flex;
    align-items: center;
    margin-right: 20px;
    padding: 5px;
    flex-grow: 1;
    border-right: 1px solid #d7e2eb;
    background-color: transparent;
`;


export const imgBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 120px;
    overflow: hidden;
    cursor: pointer;
    & > img {
        height: 100%;   
    }  
`;

export const container4 = css`
    height: 100px;
    padding: 10px;
    flex-grow: 1;
    
    & > div:nth-of-type(1) {
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
    width: 150px;
    padding: 10px 20px;
    margin-right: 5px;
    border: none;
    border-radius: 5px;
    background-color: #e6f2ff;
    color: #0078ff;
    text-decoration: none;
    cursor: pointer;
`;


export const container6 = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & > button:nth-of-type(1) {
        margin-bottom: 10px;
    }
    & > button:nth-of-type(2) {
        margin-bottom: 5px;
    }
`;

export const container7 = css`
    display: flex;
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






