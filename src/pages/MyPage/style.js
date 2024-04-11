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

    & > h3 {
        color: #9b9b9b;
        font-size: 14px;
        font-weight: 700;
        margin: 40px 0px 15px;
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
    padding: 0px 0px 40px 60px;
    color: #263747;
    font-weight: 700;

    & > div:nth-of-type(1) {
        font-size: 25px;
        margin-bottom: 24px;
    } 
    
    div:not(:first-of-type) > div {
        font-size: 18px;
    }
`;

export const box = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #d7e2eb;
    border-radius: 15px;
    padding: 40px;
    row-gap: 10px;
    background-color: #ffffff;
    
`;

export const imgBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 124px;
    height: 124px;
    direction: none;
    
`;

export const editimgBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 124px;
    height: 124px;
    cursor: pointer;
    position: relative;
    
    & > div:nth-of-type(2) {
        box-sizing: border-box;
        position: absolute;
        bottom: 0; 
        right: 0; 
        font-size: 30px; 
    }
`;



export const nicknameEditBox = css`
    width: 100%;
`;

export const nicknameEdit = css`
    width: 100%;
    color: #424242;
    font-size: 12px;
`;

export const nickInputEdit = css`
    flex-grow: 1;
    padding: 10px 20px;
    margin-right: 15px;
    border: 2px solid #e6eef5;
    border-radius: 5px;
    width: 80%;
    color: #424242;
    font-size: 12px;
    background-color: #fbfbfd;
`;

export const nickCheckButton = css`
    width: 147px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #e6f2ff;
    color: #0078ff;
    text-decoration: none;
    cursor: pointer;
`;


export const profileImg = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #dbdbdb;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    overflow: hidden;
    & > img {
        height: 100%;   
    }
    
   
`;




