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
    height: 85px;
    background-color: white;
    border-bottom: 1px solid #00005cff;;
`;

export const menuList = css`
    box-sizing: border-box;
    height: 100%;
    display: flex;
    align-items: center;
`;

export const linkButtons = css`
    box-sizing: border-box;
    text-decoration: none;
    color: #333333;
    display: flex;
    align-items: center;
    font-size: 16px;
    justify-content: center;
    width: 150px;
    height: 100%;
    font-family: 'Spoqa Han Sans Neo', 'Noto Sans KR', sans-serif;
    font-weight: 600;
    &:hover {
        font-weight: 700;
        border-bottom: 3px solid #00005cff;
        color: #00005cff;
    }
`;

export const searchBar = css`
    box-sizing: border-box;
    display: flex;
    justify-content: right;
    align-items: center;
    width: 600px;
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
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
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
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    &:disabled {
        cursor: not-allowed;
    }
`;

export const searchBarButton = css`
    margin-left: 5px;
    width: 50px;
    height: 40px;
    box-sizing: border-box;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #0e004a24;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        border: 1px solid #2400c4cb;
    }

    &:active {
        background-color: #00005cff;
        color: #eeeeee;
    }
`;

export const shoppingFilter = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px auto;
    padding: 0px 0px 0px 10px;
    width: 100%;
    height: 70px;
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
    flex-direction: column;
    box-sizing: border-box;
    margin-bottom: 20px;
    width: 350px;
    height: 450px;
    
    cursor: pointer;
    & > img {
        width: 100%;
    }
`;

export const nameBox = css`
    margin: 10px 0 20px 0;
    font-size: 22px;
    font-weight: 700;
    color: #333333;
`;

export const moneyBox = css`
    text-align: right;
    font-size: 18px;
    font-weight: 500;
    color: #333333;
`;


