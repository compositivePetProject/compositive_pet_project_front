import { css } from "@emotion/react";

export const userInfoBox = css`
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    margin-top: 45px;
    width: 300px;
    height: 100%;
`;

export const infoBox = css`
    border-radius: 15px;
    width: 80%;
    height: 500px;
    padding: 0px 24px;
    border: 1px solid #d7e2eb;

    & > a {
        text-decoration: none;
    }
    
    & > h3:nth-of-type(1) {
        color: #333333;
        font-size: 14px;
        font-weight: 800;
        margin: 40px 0px 15px;
    }
    & > h3:nth-of-type(2) {
        color: #333333;
        font-size: 14px;
        font-weight: 800;
    }
`;

export const buttons = css`
    padding: 10px 15px;
    border-radius: 5px;
    margin-bottom: 2px;
    color: #333333;
    font-weight: 800;
    cursor: pointer;

    &:hover {
        background-color: #fafafa;
        color : #00005cff;
        font-weight: 800;
    }
`;
