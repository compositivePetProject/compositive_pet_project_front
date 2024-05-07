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
    font-size: 15px;
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