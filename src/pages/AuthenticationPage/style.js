import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0px;
`;

export const container = css`
    width: 600px;
    /* height: 1200px; */
    border: 1px solid #d7e2eb;
    border-radius: 15px;
`;

export const header = css`
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 50px;
    font-size: 18px;
    font-weight: 800;
    color: #eeeeee;
    

    & > div {
        width: 50%;
        background-color: #00005cff;
        text-align: center;
        line-height: 50px;
    }

    & > div:nth-of-type(1) {
        box-sizing: border-box;
        border-top-left-radius: 15px;
        border-right: 1px solid #eeeeee;

        &:hover{
            background-color: #00003cff;
        }
    }

    & > div:nth-of-type(2) {
        box-sizing: border-box;
        border-top-right-radius: 15px;

        &:hover{
            background-color: #00003cff;
        }
    }
`;

export const headerTitle = css`
    font-size: 28px;
`;

export const inputLayout = css`
    margin-top: 15px;
    display: flex;
    padding: 0px 20px;
`;

export const input = css`
    width: 450px;
    & > *:nth-of-type(1) {
        margin-bottom: 5px;
    }
`;

export const logInButton = css`
    margin-left: 10px;
    border: none;
    border-radius: 5px;
    width: 140px;
    font-size: 16px;
    font-weight: 700;
    color: #eeeeee;
    background-color: #00005cff;

    &:hover {
        background-color: #00003cff;
    }
`

export const signUp = css`
    margin-top: 10px;
    padding-left: 20px;
    font-weight: 600;
    color: #333333;
    cursor: default;

    & > span {
        font-weight: 800;
        color: #00005cff;
        cursor: pointer;
    }

    & > span:hover {
        border-bottom: 3px solid #00005cff;
    }
`;

export const oauth = css`
    margin-top: 25px;
    margin-bottom: 25px;
    padding-left: 20px;
    display: flex;

    &  a {
        margin-right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
    }

    &  a  img {
        width: 100%;
    }
`;

export const signUpLayout = css`
    margin-top: 15px;
    display: flex;
    padding: 0px 20px;
`;

export const idCheckButton = css`
    margin-left: 5px;
    width: 130px;
    height: 38px;
    border: none;
    border-radius: 5px;
    background-color: #00005cff;
    font-weight: 700;
    color: #eeeeee;
`;

export const signUpLayoutInputList = css`
    margin-top: 5px;
    padding: 0px 20px;

    & * {
        margin-bottom: 2.5px;
    }
`;

export const fileImageUpload = css`
    display: flex;
    padding: 0px 20px;
`;

export const fileButton = css`
    margin-left: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    height: 38px;
    border-radius: 5px;
    border: none;
    background-color: #00005cff;
    font-weight: 700;

    & > * {
        font-size: 32px;
        color: #eeeeee;
    }
`;

export const regiseterButton = css`
    padding: 0px 20px;
    margin-top: 25px;
    margin-bottom: 25px;
    display: flex;
    justify-content: center;
    align-items: center;

    & > button {
        padding: 20px 0px;
        width: 100%;
        background-color: #00005cff;
        font-weight: 800;
        font-size: 18px;
        color: #eeeeee;
        border-radius: 5px;
        border: none;
    }

    & > button:hover{
        background-color: #00003cff;
    }
`;