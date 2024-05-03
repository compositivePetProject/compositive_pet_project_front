/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import * as s from "./style";
import {commnuityMenus, profileMenus, shoppingMenus } from "../../constants/myPageMenus";

function MyPageSideBar() {
    
    return (
        <div css={s.userInfoBox}>
            <div css={s.infoBox}>
                <h3>내 정보 관리</h3>
                {profileMenus.map(menu => {
                        return <Link key={menu.id} to={menu.path}>
                            <div  css={s.buttons} >
                                <span>{menu.name}</span>
                            </div>
                        </Link>
                    })}
                <h3>내 쇼핑 관리</h3>
                {shoppingMenus.map(menu => {
                        return <Link key={menu.id} to={menu.path} >
                            <div css={s.buttons} >
                                <span>{menu.name}</span>
                            </div>
                        </Link>
                    })}
                <h3>내 게시글 관리</h3>
                {commnuityMenus.map(menu => {
                    return <Link key={menu.id} to={menu.path} >
                        <div css={s.buttons} >
                            <span>{menu.name}</span>
                        </div>
                    </Link>
                })}
            </div>  
        </div>
    );
}

export default MyPageSideBar;