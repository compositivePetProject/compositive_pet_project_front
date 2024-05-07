import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
`

export const headerTitle = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 110px 10px;

    & > div:nth-of-type(1) {
        font-size: 22px;
        font-weight: 700;
    }
`

export const searchBox = css`
    box-sizing: border-box;
    display: flex;
    padding-right: 10px;;
`

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


export const board = css`
    & > div {
        margin: 0 auto;
        width: 1120px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;

        & > * {
            margin-bottom: 15px;
        }

        & > *:nth-of-type(3n - 1) {
            margin-left: 35px;
            margin-right: 35px;
        }
    }

`;

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
    text-decoration: none;
    cursor: pointer;
    overflow:hidden;
    font-family: NanumBarunGothic, sans-serif;
    color: rgb(54, 54, 54);
    font-size: 13px;
        & > div {
            box-sizing: border-box;
            display: flex;
            border-bottom: 1px solid #dbdbdb;
            width: 100%;
            &:hover {
                background-color: #adadad;
            }
            
            & > div{
                box-sizing: border-box;
                border-right: 1px solid #dbdbdb;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-grow : 1;
                height: 50px;
                width: 300px;
            }

            }
            `;

export const boardListwrite = css`
    box-sizing: border-box;
    font-family: 'Nanum Gothic', AppleSDGothicNeo-Regular, 'Malgun Gothic', '맑은 고딕', dotum, '돋움', sans-serif;
    padding-right: 0px;
    margin: 10px;
    text-align: justify;

`

export const pageNumberLayout = (page) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    & > a {
        box-sizing: border-box;
        margin: 0px 3px;
        border: 1px solid #dbdbdb;
        padding: 3px;
        text-decoration: none;
        color: #222;
        font-weight: 700;
        &:nth-of-type(${page === 1 ? 1 : page + 3}) {
            background-color: #eee;
        }
    }
`;


export const writeButtonBox = css` 
    display: flex;
    justify-content: center;
`

export const writeButton = css`
    box-sizing: border-box;
    border: 2px solid #dbdbdb;
    bottom: 0%;
    width: 50px;
    height: 50px;
`

