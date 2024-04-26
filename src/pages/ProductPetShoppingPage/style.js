import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #dbdbdb;
    overflow: hidden;
`;

export const categoryHeader = css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 85px;
    background-color: white;
    border-bottom: 1px solid rgba(60, 57, 52, 0.2);
`;

export const linkButtons = css`
    box-sizing: border-box;
    text-decoration: none;
    color: rgb(15, 19, 23);
    padding: 30px;
    font-size: 16px;
    font-family: 'Spoqa Han Sans Neo', 'Noto Sans KR', sans-serif;
    font-weight: 500;
    &:hover {
        font-weight: 700;
        transition: font-weight 0.3s, color 0.5s;
        border-bottom: 3px solid rgb(15, 19, 23);
    }
`;

export const searchBar = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    width: 18%;
    height: 50px;
`;

export const searchBarInput = css`
    padding: 0px 45px;
    border: none;
    width: 100%;
    height: 80%;
    outline: none;
    font-size: 15px;
    background-color: transparent;
`;

export const searchBarButton = css`
    font-size: 27px;
    border: none;
    background-color: transparent;
    cursor: pointer;
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
    color: black;
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
    
    /* background-color: #dbdbdb; */
    cursor: pointer;
    & > img {
        /* height: 100%; */
        width: 100%;
    }
`;

export const nameBox = css`
    /* position: absolute;
    bottom: -60px; */
    margin: 10px 0 20px 0;
    font-size: 22px;
    font-weight: 700;
    color: #3d3a35;
`;

export const moneyBox = css`
    /* position: absolute;
    bottom: -85px;
    margin-bottom: 20px;
    right: 0; */
    text-align: right;
    font-size: 18px;
    font-weight: 500;
    color: #3d3a35;
`;


