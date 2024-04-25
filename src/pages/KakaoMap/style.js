import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 14px;
`;

export const container = css`
    display: flex;
    height: 20px;
    font-size: 14px;
    margin: 10px 0px;
    
`;

export const input = css`   
    width: 300px;
    height: 100%;
    padding: 5px;
`;

export const button = css`
    width: 50px;
    height: 35px;
`;

export const listContainer = css`
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    height: 700px;
    overflow-x: hidden;
    
`;


export const listItem = css`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    padding: 10px;
    width:350px;
    color:  rgb(51, 51, 51);
    font-family: "Malgun Gothic", dotum, 돋움, sans-serif;
    font-size: 15px;

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
