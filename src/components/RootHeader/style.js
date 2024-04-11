import { css } from "@emotion/react";

export const header = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    border-bottom: 1px solid #dbdbdb;
    padding: 0px 10px;
    width: 100%;
    height: 60px;
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
    height: 100%;
    overflow: hidden;
    & > img {
        height: 100%;
    }
`;

export const centerSpace = css`
    display: flex;
    flex-grow: 1; 
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
    padding-right: 10px;
    width: 60px;
    height: 30px;
    font-size: 14px;
    font-weight: 500;
    overflow: hidden;
    text-decoration: none;
    color: rgb(15, 19, 23);;
    cursor: pointer;

    &:hover {
        font-weight: 700;
        color: rgb(0, 120, 255);;
    }
`;

export const imgBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
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
    width: 95%;
    height: 95%;
    overflow: hidden;
    & > img {
        height: 100%;
    }
`;


export const buttons = css`
    box-sizing: border-box;
    border: none;
    padding: 20px;
    width: 150px;
    height: 65px;
    font-size: 14px;
    font-weight: 500;
    color: rgb(15, 19, 23);
    background-color: transparent;
    cursor: pointer;

    &:hover {
        font-weight: 700;
        border-bottom: 3px solid rgb(15, 19, 23);
    }
`;



export const sidebar = css`
    position: absolute;
    top: 75px;
    left: 0;
    width: 100%;
    height: 200px;
    background-color: white;
    padding: 16px 30px 24px;
    z-index: 99;
    border-bottom: 1px solid #dbdbdb;
`;

export const category = css`
    padding: 10px 0px;
`;

export const categoryText = css`
    text-decoration: none;
    font-size: 14px;
    color: rgb(15, 19, 23);
    font-weight: 500;

    &:hover {
        font-weight: 700;
        color: rgb(0, 120, 255);;
    }
`;




