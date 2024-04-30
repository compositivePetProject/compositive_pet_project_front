import { css } from "@emotion/react";

export const header = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    border-bottom: 1px solid #00005cff;
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
    width: 70px;
    height: 30px;
    font-size: 16px;
    font-family: 'Spoqa Han Sans Neo', 'Noto Sans KR', sans-serif;
    font-weight: 600;
    overflow: hidden;
    text-decoration: none;
    color: #333333;
    cursor: pointer;

    &:hover {
        font-weight: 700;
        color: #00005cff;
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
    width: 160px;
    height: 65px;
    font-size: 16px;
    font-family: 'Spoqa Han Sans Neo', 'Noto Sans KR', sans-serif;
    font-weight: 600;
    color: #333333;
    background-color: transparent;
    cursor: pointer;

    &:hover {
        font-weight: 700;
        /* transition: font-weight 0.3s, color 0.5s;
        border-bottom: 5px solid rgb(15, 19, 23); */
        border-bottom: 6px solid #00005cff;
        color: #00005cff;
    }
`;



export const sidebar = (isHovering) => css`
    transition: top 0.4s ease-in-out, height 0.4s ease-in-out; 
    position: absolute;
    top: 75px;
    opacity: ${isHovering ? 1 : 0};
    left: 0;
    width: 100%;
    height: ${isHovering ? "200px" : "0px"};
    background-color: white;
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
    font-weight: 600;

    &:hover {
        font-weight: 700;
        color: #00005cff;
    }
`;




