/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { menus } from "../../../constants/adminMenus";
import { Link } from "react-router-dom";

const layout = css`
    position: relative;
    display: flex;
    margin-top: 20px;
`

const left = css`
    position: sticky;
    top: 10px;
    box-sizing: border-box;
    margin-right: 10px;
    border: 1px solid #0e004a24;
    border-radius: 10px;
    width: 200px;
    height: 600px;
    overflow: hidden;
`

const right = css`
    flex-grow: 1;
`

const menuNav = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    list-style: none;
    & > a {
        box-sizing: border-box;
        border-bottom: 1px solid #0e004a24;
        width: 100%;
        font-size: 14px;
        font-weight: 600;
        color: #222;
        text-decoration: none;
        background-color: white;
    }
    & > a > li {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 0px;
        width: 100%;

        & > span:nth-of-type(1) {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 100%;
            font-size: 20px;
        }
        & > span:nth-of-type(2) {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-grow: 1;
            height: 100%;
        }
        
        &:hover {
            background-color: #fafafa;
        }
    }
`

const adminTitle = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #0e004a24;
    padding: 30px 20px;
    width: 100%;
    font-size: 18px;
    font-weight: 600;
    cursor: default;
    background-color: white;
`


function AdminPageLayout({children}) {
    return (
        <div css={layout}>
            <div css={left}>
                <ul css={menuNav}>
                    <li css={adminTitle}>Admin DashBoard</li>
                    {menus.map(menu => {
                        return <Link key={menu.id} to={menu.path}>
                            <li>
                                <span>{menu.icon}</span>
                                <span>{menu.name}</span>
                            </li>
                        </Link>
                    })}
                </ul>
            </div>
            <div css={right}>
                {children}
            </div>
        </div>
    );
}

export default AdminPageLayout;