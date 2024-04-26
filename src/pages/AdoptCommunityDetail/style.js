import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

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

    & > h3 {
        color: #9b9b9b;
        font-size: 14px;
        font-weight: 700;
        margin: 40px 0px 15px;
    }
`;

export const buttons = css`
    padding: 10px 15px;
    border-radius: 5px;
    margin-bottom: 2px;
    cursor: pointer;
    &:hover {
        background-color: #fafafa;
        color : #0078ff;
        font-weight: 700;
    }
`;

export const writeButton = css`
    box-sizing: border-box;
    margin-top: 50px;
    border: 1px solid #ccc;
    padding: 10px;
    margin-right: 10px;
    width: 25%;
    background-color: white;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        background-color: #fafafa;
    }
    &:active {
        background-color: #eee;
    }
`;

export const buttons2 = css`
    width: 160px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #e6f2ff;
    color: #0078ff;
    text-decoration: none;
    cursor: pointer;
`;

export const buttons3 = css`
    width: 100px;
    padding: 10px 20px;
    margin-right: 5px;
    border: none;
    border-radius: 5px;
    background-color: #e6f2ff;
    color: #0078ff;
    text-decoration: none;
    cursor: pointer;
`;

export const userDetails = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    flex-grow: 1;
    height: 100%;
    padding: 0px 0px 20px 20px;
    color: #263747;
    font-weight: 700;
    font-size: 18px;

`;



export const content = css`
    
    height: 800px;
    box-sizing: border-box;
    width: 80%;
`

export const box = css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 600px;
    border: 1px solid #d7e2eb;
    border-radius: 15px;
    padding: 10px;
    row-gap: 10px;
    background-color: #ffffff;

    & > h1 {
        margin-top: 0;
    }
    
`;

export const imgBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 124px;
    height: 124px;
    direction: none;
    
`;

export const editimgBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 124px;
    height: 124px;
    cursor: pointer;
    position: relative;
    
    & > div:nth-of-type(2) {
        box-sizing: border-box;
        position: absolute;
        bottom: 0; 
        right: 0; 
        font-size: 30px; 
    }
`;

export const buttonList = css`
  
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 10%;
 
    
`

export const nicknameEditBox = css`
    width: 100%;
`;

export const nicknameEdit = css`
    width: 100%;
    color: #424242;
    font-size: 12px;
`;

export const nickInputEdit = css`
    flex-grow: 1;
    padding: 10px 20px;
    margin-right: 15px;
    border: 2px solid #e6eef5;
    border-radius: 5px;
    width: 80%;
    color: #424242;
    font-size: 12px;
    background-color: #fbfbfd;
`;

export const nickCheckButton = css`
    width: 147px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #e6f2ff;
    color: #0078ff;
    text-decoration: none;
    cursor: pointer;
`;


export const profileImg = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #dbdbdb;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    overflow: hidden;
    & > img {
        height: 100%;   
    }  
`;

export const passwordBox = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #d7e2eb;
    border-radius: 15px;
    padding: 40px;
    row-gap: 10px;
    background-color: #ffffff;
    
`

export const boardListHeader = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #dbdbdb;
    width: 80%;
    & > div {
        box-sizing: border-box;
        border-right: 1px solid #dbdbdb;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
        height: 40px;
        width: 25%;
        font-weight: 700;
        cursor: default;
    }

    & > div:nth-child(1) {
        width: 50px;
    }
   
`;

export const boardListItem = css`
    color: #222;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    overflow: hidden;
    height: 50%;
    width: 100%;

    & > div {
        box-sizing: border-box;
        display: flex;
        border: 1px solid #dbdbdb;
        width: 100%;
        &:hover {
            background-color: #eee;
        }
        & > div {
            box-sizing: border-box;
            border-right: 1px solid #dbdbdb;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-grow: 1;
            height: 40px;
            width: 25%;
        }
        
        & > div:nth-child(1) {
            width: 50px;
        }
        
    }

    


`;


export const likeHeart = css`
    width: 25px;
    height: 25px;
`
export const status = css`
    position: absolute;
    top: 40px;
    right: 40px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
   
`

export const commentBox = css`
    box-sizing: border-box;
    width: 30%;
    height: 30%;
    text-align: center;
    border: 1px solid #dbdbdb;
    & > div {

    }
`






