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
        color: #9b9b9b;
        font-size: 14px;
        font-weight: 700;
        margin: 40px 0px 15px;
    }

    & > h3:nth-of-type(2) {
        color: #9b9b9b;
        font-size: 14px;
        font-weight: 700;
    }
`;

export const buttons = css`
    padding: 10px 15px;
    border-radius: 5px;
    margin-bottom: 2px;
    cursor: pointer;
    &:hover {
        background-color: #fafafa;
        color : #0078ff;
        font-weight: 700;
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
    font-weight: 700;
    font-size: 18px;

`;

export const title = css`
    font-size: 25px;
    margin-bottom: 15px;
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
    padding: 18px;
    border-bottom: 1px solid #d7e2eb;
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

export const container2 = css`
    & > div:nth-of-type(1) {
        font-size: 20px;
    }
    & > div {
        padding: 5px;
    }
`;
export const container1 = css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    width: 100%;
    padding: 10px;
`;

export const starButtons = css`
    background-color: transparent;
    border: none;
`;

export const starButton = css`
    background-color: transparent;
    font-size: 30px;
    cursor: pointer;
`;

export const activeStarButton = css`
    color: gold;
    font-size: 30px;
    cursor: pointer;
`;

export const reviewBox = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 15px 0px 50px;
    & > div:nth-of-type(1) {
        margin-bottom: 20px;
        width: 90px;
    }
`;

export const box = css`
    display: flex;
    position: relative;
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










