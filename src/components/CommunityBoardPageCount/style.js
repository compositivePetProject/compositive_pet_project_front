
// 반드시 다시 본인이 만들고자 하는 스타일에 수정할 것.

import { css } from "@emotion/react";

export const pageButtonLayout = css`
width: 770px;
height: 25px;
padding: 16px;
text-align: center;
align-items: center;
display: flex;
border: 1px solid #dbdbdb;

`

export const pageNumbers = css`
box-sizing: border-box;
display: flex;

`
export const pageButton = (isSelected) => css`
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
border-radius: 2px;
border: ${isSelected ? "none" : "1px solid #dbdbdb"};
height: 27px;
font-size: 12px;
padding-left: 8px;
padding-right: 8px;
cursor: pointer;
color:${isSelected ? "white;" : "#00195d;"};

`;

export const pageCount  = css`
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid #dbdbdb;
padding: 10px;
height: 25px;
background-color: white;
color: #777777;
cursor: defaultl;

`;

export const page = css`
margin-right: 10px;
font-size: 14px;

`;

export const count = css`
font-size: 14px;

`;


export const pageJumpButton  = css`
position: relative;
margin-left: 8px;
padding-right: 11px;
font-size: 12px;
color: #e3e3e3;
cursor: pointer;
text-align: center;
`

export const pageJumpButton2 = css`
position: absolute;
height: 9px;
width: 6px;
top: 7px;
margin-top: -6px;
text-align: center;
`
