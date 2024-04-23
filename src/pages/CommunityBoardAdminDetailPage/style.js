import { css } from "@emotion/react"

export const container = css`
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
