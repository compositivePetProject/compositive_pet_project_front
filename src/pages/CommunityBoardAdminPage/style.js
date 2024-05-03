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
    text-decoration: none;
    cursor: pointer;
    overflow:hidden;

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
                height: 40px;
                width: 25%;
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

export const writeButton = css`
box-sizing: border-box;
border: 2px solid #dbdbdb;
bottom: 0%;
width: 50px;
height: 50px;

`
