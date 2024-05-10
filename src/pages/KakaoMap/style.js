import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 14px;
`;

export const layoutContainer = css`
    width: 80%;
`;

export const container = css`
    display: flex;
    height: 40px;
    font-size: 14px;
    margin: 23px 0px;
`;

export const selectContainer = css`
    display: flex;
    border: 1px solid #0e004a24;
    border-radius: 5px;
    margin-right: 5px;
    height: 40px;
    overflow: hidden;
`

export const selectLabel = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #0e004a24;
    padding: 0px 30px;
    font-size: 14px;
    font-weight: 600;
    background-color: #00005cff;
    color: #eee;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    cursor: default;
`

export const select = css`
    box-sizing: border-box;
    border: none;
    outline: none;
    padding: 0px 10px;
    width: 140px;
    height: 100%;
    font-size: 16px;
    cursor: pointer;
    &:disabled {
        cursor: not-allowed;
    }
    & option {
        font-size: 16px;
    }
`;

export const input = css`   
    width: 300px;
    box-sizing: border-box;
    padding: 5px;
    border: none;
    outline: none;
    padding: 0px 10px;
    font-size: 16px;
    cursor: pointer;
    &:disabled {
        cursor: not-allowed;
    }
`;

export const button = css`
    width: 50px;
    height: 40px;
    box-sizing: border-box;
    background-color: white;
    border-radius: 5px;
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

export const listContainer = css`
    box-sizing: border-box;
    margin-top: 85px;
    width: 24%;
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    height: 700px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
        background-color: #eeeeee;
        border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #00005cff;
        border-radius: 5px;
    }
`;


export const listItem = css`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    border: 1px solid #00005c6b;
    border-radius: 5px;
    padding: 10px;
    width: 250px;
    color:  rgb(51, 51, 51);
    font-family: "Malgun Gothic", dotum, 돋움, sans-serif;
    font-size: 15px;
    cursor: pointer;

    & > div:nth-of-type(1) {
        font-weight: 700;
        font-size: 16px;
    }

    & > div:nth-of-type(4) {
        font-weight: 500;
        
        font-size: 14px;
        color:rgb(0, 153, 0);
    }

    & > div:nth-of-type(5) {
        & > a {
            text-decoration: none;
        }
    }
`;
