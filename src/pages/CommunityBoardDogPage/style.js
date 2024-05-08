import { css } from "@emotion/react";



export const layout = css`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px;
`

export const headerTitle = css`
    margin-bottom: 30px;
    text-align: center;
    font-size: 40px;
    font-weight: 700;
`

export const boardListLayout = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    width: 900px;
    height: 500px;

`

export const boardListHeader = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    border-bottom: 2px solid #dbdbdb;
    width: 100%;
    & > div{
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

    `
export const CommunityboardListItem = css`
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    & > * {
        margin-bottom: 15px;
    }

    & > *:nth-of-type(4n - 2) {
        margin-left: 35px;
    }

    & > *:nth-of-type(4n - 1) {
        margin: 0px 35px;
    }
`;

export const searchBar = css`
    box-sizing: border-box;
    display: flex;
    justify-content: right;
    align-items: center;
    width: 700px;
    height: 50px;
`;

export const searchLabel = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #0e004a24;
    width: 100px;
    height: 40px;
    font-size: 14px;
    font-weight: 600;
    background-color: #00005cff;
    color: #eee;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    cursor: default;
`;

export const searchBarInput = css`
 width: 300px;
    padding: 0px 45px;
    box-sizing: border-box;
    border: none;
    outline: none;
    padding: 0px 10px;
    height: 40px;
    font-size: 16px;
    border-top: 1px solid #0e004a24;
    border-right: 1px solid #0e004a24;
    border-bottom: 1px solid #0e004a24;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    &:disabled {
        cursor: not-allowed;
    }
`;

export const searchBarButton = css`
   margin-left: 5px;
    width: 50px;
    height: 40px;
    box-sizing: border-box;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #0e004a24;
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

export const boardListwrite = css`
    box-sizing: border-box;
    font-family: 'Nanum Gothic', AppleSDGothicNeo-Regular, 'Malgun Gothic', '맑은 고딕', dotum, '돋움', sans-serif;
    padding-right: 0px;
    margin: 10px;
    text-align: justify;

`

export const writeButton = css`
box-sizing: border-box;
border: 2px solid #dbdbdb;
bottom: 0%;
width: 50px;
height: 50px;


`
