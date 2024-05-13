import { css } from "@emotion/react";
import { CiCompass1 } from "react-icons/ci";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

export const userInfoBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-top: 45px;
    width: 80%;
    height: 100%;
    z-index: 80;
`;


export const title = css`
    color: #263747; 
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 24px;
`;

export const container = css`
    display: flex;
    color: #263747;
    font-size: 18px;
    font-weight: 500;
    & > div:nth-of-type(1) {
        margin-right: 3px;
    }

`;

export const userDetails = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 5px; 
    color: #263747;
    font-size: 14px;

`;




export const container1 = css`
    display: flex;
    width: 100%;
    border: 1px solid #d7e2eb;
    border-radius: 15px;
    margin-bottom: 10px;
    background-color: #ffffff;
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
        margin-bottom: 10px;
        font-size: 20px;
        font-weight: 700;
        cursor: pointer;
    }

    & > div:nth-of-type(2) {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 5px;
    }
`;


export const productDeliveryBox = css`
    display: flex;
    position: relative;
    padding-top: 5px;
    & > button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        padding: 0px 10px;
    }
    & > div {
        font-size: 17px;
    }
`;

export const buttons3 = css`
    width: 200px;
    padding: 10px 20px;
    margin-right: 5px;
    border-radius: 5px;
    border: 1px solid #0e004a24;
    background-color: white;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: rgb(255, 64, 129);
        background-color: #dbdbdb29;
    }

    &:active {
        background-color: #dbdbdb49;
    }
`;

export const totalContainer = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 700px;
    //임시
    background-color: white;
`;


export const totalBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 10px;
    top: 120px;
    left: 50px;
    width: 90%;
    height: 100%;
`;

export const totalBoxIn = css`
    display: flex;
    flex-direction: column;
    width: 60%;
    row-gap: 10px;

    & > div:nth-of-type(2){
        padding-bottom: 15px;
        border-bottom: 1px solid #dbdbdb;
    }
`;

export const totalBoxIn2 = css`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;



export const buttons4 = css`
    width: 100%;
    padding: 10px 20px;
    margin: 5px 5px 0px 0px;
    border-radius: 5px;
    border: 1px solid #0e004a24;
    background-color: white;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        color: rgb(255, 64, 129);
        background-color: #dbdbdb29;
    }

    &:active {
        background-color: #dbdbdb49;
    }
`;

export const totalBoxInPrice = css`
    display: flex;
    justify-content: flex-end;
`;

