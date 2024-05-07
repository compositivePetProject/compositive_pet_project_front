import { css } from "@emotion/react";
export const layout = css`
    width: 100%;
`;

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
        border: 1px solid #2400c4cb;
    }

    &:active {
        background-color: #00005cff;
        color: #eeeeee;
    }
`;

export const statusBox = css`
    display: flex;
`;

export const boardCommentBox = css`
    height: 750px;
    overflow: auto;
`;

export const commentBox = css`
    display: flex;
    
    & > div {
        height : 100px;
    }

    & > button {
        width: 10%;
        height: 141px;
        margin-left: 5px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        border: none;
        border-radius: 5px;
        align-items: center;
        border-right: 1px solid #0e004a24;
        padding: 0px 30px;
        font-size: 18px;
        font-weight: 600;
        background-color: #00005cff;
        color: #eee;
        cursor: pointer;

        &:hover {
            background-color: #00003cff;
        }
    
        &:active {
            background-color: #00002cff;
        }
    }
`;


export const commentContent = css`
    display: flex;
    
`;

export const iconBox = css`
    display: flex;
    padding-top: 5px;
    align-items: center;

    & > div {
       display: flex;
       align-items: center; 
    }

    & > div > * {
        font-size: 24px;
        margin: 5px 0px;
    }
`

export const count = css`
    margin-right: 10px;

    & div {
        font-size: 18px;
    }
`;