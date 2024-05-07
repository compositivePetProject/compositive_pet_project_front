import { css } from "@emotion/react"

export const containter = css`
 position: relative;
 display: flex;
 flex-direction: column;
 align-items: center;
 height: 100%;
 width: 90%;

`

export const detailPageTitle = css`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  font-size: 30px;
    background-color: #dbdbdb;
`

export const boardContent = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 100%;
  border: 1px solid #dbdbdb;

`

export const buttonContainer = css`


`

export const deletebutton = css`
box-sizing: border-box;
display: flex;
flex-direction: column;
border: 1px solid #dbdbdb;
border-radius: 3px;
padding: 5px;
background-color: white;
font-size: 12px;
cursor: pointer;

&:hover {
  background-color: #dbdbdb;
}
& :active {
  background-color: #eeeeee;
}
`



export const updatebutton = css`
    box-sizing: border-box;
    margin-top: 50px;
    border: 1px solid #ccc;
    padding: 10px;
    width: 100px;
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

export const HeartIcon = css`
  color: red;

`

export const totalLikeCount = css`
    font-size: 30px;
`;

export const viewIcon = css`
color : rgb(153, 153, 153);
margin-right: 5px;
`
export const totalViewCount = css`
  font-size: 10px;

`

export const commentLayout = css`

box-sizing: border-box;
display: flex;
justify-content: center;

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
export const CommunityContentboardListItem = css`
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




export const listbutton = css`
box-sizing: border-box;
border: 1px solid #dbdbdb;
border-radius: 3px;
padding: 5px;
background-color: white;
font-size: 12px;
cursor: pointer;

&:hover {
  background-color: #dbdbdb;
}
& :active {
  background-color: #eeeeee;
}

`

export const commentbutton = css`
  box-sizing: border-box;
  border: 2px solid #dbdbdb;
  bottom: 0%;
  width: 50px;
  height: 50px;

`

export const commentbox1 = css`
    display: flex;
    padding: 32px 0px;
    border-bottom: 1px solid rgb(60, 57, 52);
`;

export const commentbox2 = css`
  display: flex;
      width: 100%;
      height: 100%;
      overflow: hidden;

      & > img {
          
          height: 100%;
          width: 100%;
      }
`;


export const updateCommentButton = css`
  box-sizing: border-box;
  border: 2px solid #dbdbdb;
  bottom: 0%;
  width: 50px;
  height: 50px;

`

export const topIconBox = css`
    padding-top: 200px;
`


export const iconBox = css`
    display: flex;
    flex-direction: column;
    background-color: red;
    width: 50px;
    padding-top: 5px;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    background: #F8F8F8;
    border: 1px solid #0e004a24;

    & > div {
       display: flex;
       align-items: center; 
    }

    & > div > * {
        font-size: 24px;
        margin: 5px 0px;
    }
`

export const countBox = css`
    display: flex;
    flex-direction: column;
    &>div:nth-of-type(2) {
        font-size: 14px;
        color: #222222;
    }
`;

export const heartCount = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    flex-direction: column;
    border-radius: 50%;
    border: 1px solid #0e004a24;
    color: #0e004a24;

    &:hover{
        color: red;
        border: 1px solid red;
    }
`;

export const count = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    flex-direction: column;
    border-radius: 50%;
    border: 1px solid #222222;
    color: #222222;
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