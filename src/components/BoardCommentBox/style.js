import { css } from "@emotion/react";
export const commentCard = css`
    margin:10px 0px;
    padding: 10px;
    box-sizing: border-box;
    width: 100%;
    height: 120px;
    overflow: auto;
    border-radius: 5px;
    border: 1px solid #0e004a24;
`;
export const commentHeader = css`
    padding-left: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const userInfo = css`
    display: flex;
    align-items: center;
`;

export const nickname = css`
    text-align: center;
    font-weight: 600;
    font-size: 18px;
`;


export const updateDate = css`
    color: #dbdbdb;
    font-size: 12px;
    text-align: center;
    margin-left: 10px
`;


export const commentContent = css`
    
`;

export const button = css`
    box-sizing: border-box;
    margin: 5px 5px 5px 0px;
    border: 1px solid #0e004a24;
    border-radius: 5px;
    padding: 5px 10px;
    background-color: white;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        color: rgb(255, 64, 129);
        background-color: #dbdbdb29;
    }

    &:active {
        background-color: #dbdbdb49;
    }
`;