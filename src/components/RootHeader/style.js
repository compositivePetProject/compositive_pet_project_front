import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    background-color: white;
`;

export const headerOut = css`
    box-sizing: border-box;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1907px;
    height: 90px;
    z-index: 100;
    background-color: white;
`;


export const header = css`
    box-sizing: border-box;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    width: 1344px;
    height: 90px;
    z-index: 100;
    background-color: white;
`;


export const logoBox = css`
    box-sizing: border-box;
    width: 19%;
`;

export const logoButton = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 178px;
    height: 100%;
    cursor: pointer;
`;

export const logoimage = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 95%;
    overflow: hidden;
    & > img {
        height: 95%;
    }
`;

export const centerSpace = css`
    display: flex;
`;

export const loginBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    width: 20%;
    height: 100%;
`;

export const accountItems = css`
    display: flex;
    align-items: center;
    height: 100%;
`;

export const login = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 15px;
    font-size: 23px;
    font-family: "montserrat", "NanumGothicCoding", sans-serif;
    font-weight: 600;
    overflow: hidden;
    text-decoration: none;
    color: #333333;
    cursor: pointer;

    &:hover {
        transition: all 0.2s ease-in-out;
        font-weight: 700;
        color: rgb(255, 64, 129);
    }
`;


export const imgBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 100%;
    cursor: pointer;
`;


export const profileImg = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #dbdbdb;
    border-radius: 50%;
    width: 90%;
    height: 80%;
    overflow: hidden;
    & > img {
        height: 100%;
    }
`;


export const buttons = css`
    box-sizing: border-box;
    border: none;
    padding: 0px 30px;
    font-size: 15px;
    font-family: 'montserrat', 'NanumGothicCoding', sans-serif;
    font-weight: 700;
    color: #212121;
    background-color: transparent;
    cursor: pointer;

    &:hover {
        transition: all 0.2s ease-in-out;
        font-weight: 700;
        color: rgb(255, 64, 129);
    }
    

`;



export const sidebar = (isHovering) => css`
    transition: top 0.3s ease-in-out, height 0.3s ease-in-out; 
    position: absolute;
    top: 85%;
    opacity: ${isHovering ? 1 : 0};
    padding: 20px;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);
    z-index: 99;
    background-color: white;
`;




export const category = css`
    padding: 10px 0px;
`;


export const categoryText = css`
    text-decoration: none;
    font-size: 14px;
    color: rgb(15, 19, 23);
    font-weight: 600;

    &:hover {
        transition: all 0.2s ease-in-out;
        font-weight: 700;
        color: rgb(255, 64, 129);
    }
`;




