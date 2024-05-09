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

export const commentBox = css`

`;


export const commentContent = css`
    display: flex;
   
    
`;

export const commentPage = css`
    overflow-y: scroll;
    height: 400px;
`

export const iconBox = css`
    display: flex;
    padding-top: 5px;
    align-items: center;

    & > div > * {
        font-size: 24px;
        margin: 5px 0px;
    }
`