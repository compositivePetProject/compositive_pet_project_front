import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    /* background-color: #dbdbdb; */
    overflow: hidden;
`;

export const categoryHeader = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    background-color: white;
`;

export const menuList = css`
    box-sizing: border-box;
    height: 100%;
    display: flex;
    align-items: center;
`;

export const linkButtons = (isSelected) => css`
    box-sizing: border-box;
    text-decoration: none;
    color: ${isSelected ? "rgb(255, 64, 129)" : "#333333"};
    display: flex;
    align-items: center;
    font-size: 16px;
    justify-content: center;
    font-family: 'Spoqa Han Sans Neo', 'Noto Sans KR', sans-serif;
    font-weight: 600;
    border: 1px solid #dbdbdbb6;
    border-radius: 8px;
    padding: 10px 20px;
    margin-right: 10px;
    background-color: transparent;

    &:hover {
        transition: all 0.2s ease-in-out;
        font-weight: 700;
        color: ${isSelected ? "rgb(255, 64, 129)" : "#333333"};
        background-color: rgb(248, 248, 248);
    }
    &:active {
        transition: all 0.2s ease-in-out;
        font-weight: 700;
        background-color: rgba(231, 231, 231, 0.75);
    }
`;

export const searchBar = css`
    box-sizing: border-box;
    display: flex;
    justify-content: right;
    align-items: center;
    width: 650px;
    height: 50px;
`;

export const searchLabel = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #0e004a24;
    width: 100px;
    height: 40px;
    font-size: 14px;
    font-weight: 600;
    background-color: #00005cff;
    color: #eee;
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
    cursor: default;
`;

export const searchBarInput = css`
    width: 300px;
    padding: 0px 45px;
    box-sizing: border-box;
    border: none;
    outline: none;
    padding: 0px 10px;
    height: 40px;
    font-size: 16px;
    border-top: 1px solid #0e004a24;
    border-right: 1px solid #0e004a24;
    border-bottom: 1px solid #0e004a24;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    &:disabled {
        cursor: not-allowed;
    }
`;

export const searchBarButton = css`
    margin-left: 2px;
    width: 50px;
    height: 40px;
    box-sizing: border-box;
    background-color: white;
    border-radius: 8px;
    border: 1px solid #0e004a24;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        border: 1px solid rgb(255, 64, 129);
        background-color: #dbdbdb29;
    }

    &:active {
        background-color: #dbdbdb49;
    }
`;


export const shoppingFilter = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 0px 0px 10px;
    width: 100%;
    height: 50px;
    background-color: white;

    & > div {
        font-size: 15px;
        font-family: 'Spoqa Han Sans Neo', 'Noto Sans KR', sans-serif;
        color: #777777;
    }
`;

export const span = css`
    font-weight: 800;
    color:#00005cff;;
    font-size: 18px;
`;

export const productLikeButtons = css`
    display: flex;
    align-items: center;
    color: black;
    font-weight: 800;
    font-size: 15px;
    background-color: transparent;
    padding: 3px;
    border: none;
    width: 100%;
    height: 50px;
    cursor: pointer;

    &:hover{
        color: #00005cff;
    }
    
    & * {
        color: #00005cff;
        font-weight: 700;
    }
`;


export const shoppingContainer = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    background-color: white;
`;

export const imageBox = css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    margin: 0px 0px 30px 0px;
    width: 245px;
    height: 305px;
    cursor: pointer;
    & > img {
        width: 100%;
        border-radius: 8px;
    }
    &:nth-of-type(5n) {
        margin-right: 0;
    }
`;

export const nameBox = css`
    padding: 10px 0;
    height: 25px;
    font-size: 12px;
    font-weight: 600;
    color: #333333;
`;

export const moneyBox = css`
    text-align: right;
    font-size: 15px;
    font-weight: 700;
    color: #202020;
`;


