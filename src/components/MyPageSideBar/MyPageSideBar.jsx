/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import * as s from "./style";
import {profileMenus, shoppingMenus } from "../../constants/myPageMenus";

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
                {/* 게시글 관리 예정 */}
            </div>  
        </div>
    );
}

export default MyPageSideBar;