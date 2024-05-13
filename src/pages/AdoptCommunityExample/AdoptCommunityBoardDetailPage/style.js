import { css } from "@emotion/react";
export const layout = css`
    position: relative;
    box-sizing: border-box;
    display: flex;
    padding: 0px 200px 0px 160px;
    width: 100%;
    height: 100%;

    & > div:nth-of-type(1) {
        position: sticky;
        top: 0px;
        margin-right: 20px;
        height: max-content;
    }
`;

export const topIconBox = css`
    padding-top: 200px;
`

export const buttonBox = css`
    display: flex;
    justify-content: end;
    align-items: center;
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

export const inputContainer = css`
    margin-bottom: 10px;
    box-sizing: border-box;
    display: flex;
    border: 1px solid #0e004a24;
    border-radius: 5px;
    margin-right: 5px;
    width: 300px;
    height: 45px;
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
    background-color: #212121;
    color: #eee;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    cursor: default;
`

export const input = css`   

    width: 200px;
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


export const statusBox = css`
    display: flex;
`;

export const boardCommentBox = css`
`;

export const commentBox = css`
    margin: 30px 0px;
    display: flex;
    flex-direction: column;

    & > div:nth-of-type(2) {
        display:flex;
        justify-content: end;
    }
    
    & > div > button {
        box-sizing: border-box;
        padding: 5px 10px;
        border: 1px solid #0e004a24;
        background-color: white;
        font-weight: 600;
        cursor: pointer;
        width: 100px;
        border-radius: 5px;

        &:hover {
            color: rgb(255, 64, 129);
            background-color: #dbdbdb29;
        }

        &:active {
            background-color: #dbdbdb49;
        }
    }
`;


export const commentContent = css`
    display: flex;
    
`;

export const iconBox = css`
    display: flex;
    flex-direction: column;
    background-color: red;
    width: 50px;
    padding-top: 5px;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    background: #F8F8F8;
    border: 1px solid #0e004a24;

    & > div {
       display: flex;
       align-items: center; 
    }

    & > div > * {
        font-size: 24px;
        margin: 5px 0px;
    }
`

export const countBox = css`
    display: flex;
    flex-direction: column;
    &>div:nth-of-type(2) {
        font-size: 14px;
        color: #222222;
    }
`;

export const heartCount = (favorite) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    flex-direction: column;
    border-radius: 50%;
    border: 1px solid #0e004a24;
    color: ${favorite === 1 ? "red" : "#0e004a24"};

    &:hover{
        color: red;
        border: 1px solid red;
    }
`;

export const count = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    flex-direction: column;
    border-radius: 50%;
    border: 1px solid #222222;
    color: #222222;
`;

export const countView = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    flex-direction: column;
    border-radius: 50%;
    border: 1px solid #222222;
    color: #222222;
`;

export const heart = css`
`;