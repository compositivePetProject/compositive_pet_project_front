import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    justify-content: space-between;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 670px;
    height: 960px;
    margin-top: 60px;
    margin-bottom: 60px;
    background: #ffffff;
    border: 1px solid #d7e2eb;
    border-radius: 20px;
`;

export const memberContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 470px;
    height: 818px;
    margin-top: 72px;
    margin-bottom: 70px;
`;

export const titleHeader = css`
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 466px;
    height: 70px;
    font-weight: 700;
    font-size: 32px;
    line-height: 47px;
    color: #00005cff;
`
export const header = css`
    width: 100%;
    max-width: 466px;
    height: 94px;
    font-weight: 700;
    font-size: 32px;
    line-height: 47px;
`

export const idCheckvbutton = css`
    width: 180px;
    height: 38px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #00005cff;
    color: #eeeeee;
    font-weight: 800;
    font-size: 14px;
    text-decoration: none;
    cursor: pointer;

    &:hover{
        background-color: #00003cff;
    }
`;

export const imgUrlBox = css`
    display: inline-block;
    width: 95%;
    line-height: 10px;
`;

export const btnContainer = css`
    display: flex;
    align-items: flex-end;
    width: 100%;
    max-width: 470px;
    margin-top: 10px;
`;

export const btnContainer2 = css`
    display: flex;
    width: 100%;
    max-width: 470px;
    margin-top: 10px;
    border-top: 1px solid #e6e6e6;
`;


export const imgAddButton = css`
    display: flex;
    align-items: flex-end;
    border: none;
    padding: 0;
    margin-bottom: 7px;
    background-color: transparent;
    cursor: pointer;
    & > * {
        font-size: 40px;
    }
`;


export const button = css`
    margin-top: 30px;
    width: 100%;
    max-width: 470px;
    height: 75px;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: #eeeeee;
    background: #00005cff;
    font-weight: 800;
    border-radius: 10px;

    &:hover{
        background-color: #00003cff;
    }
`;