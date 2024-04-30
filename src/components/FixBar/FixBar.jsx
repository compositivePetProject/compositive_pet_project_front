/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { RiAdminLine } from "react-icons/ri";
import { FaUserCog } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { useQueryClient } from "react-query";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function FixBar() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const principalQueryState = queryClient.getQueryState("principalQuery");

    const handleMypageClick = () => {
        if(principalQueryState.status === "success") {
            navigate("/account/mypage/profile");
        } else {
            alert("로그인한 사용자만 이용가능한 서비스입니다");
            navigate("/auth/sign-in")
        }
    }

    const handleCartClick = () => {
        if(principalQueryState.status === "success") {
            navigate("/product/pet/cart");
        } else {
            alert("로그인한 사용자만 이용가능한 서비스입니다");
            navigate("/auth/sign-in")
        }
    }

    const handleAdminClick = () => {
        const authorities = principalQueryState.data?.data?.authorities;
        if(principalQueryState.status === "success" && authorities.length > 1) {
            navigate("/admin/management/product?page=1");
        } else {
            alert("관리자 권한이 없습니다");
            navigate("/");
        }
    }


    return (
        <div css={s.layout}>
            <div css={s.title}>Quick Menu</div>
            <div css={s.info}>
                <img src={principalQueryState.data?.data.profileImageUrl} alt="" />
                <div>{principalQueryState.data?.data.nickname} 님</div>
            </div>
            <div css={s.menuContainer} onClick={handleMypageClick}>
                <div><FaUserCog/></div>
                <div>마이페이지</div>
            </div>
            <div css={s.menuContainer} onClick={handleCartClick}>
                <div><SlBasket/></div>
                <div>장바구니</div>
            </div>
            <div css={s.menuContainer} onClick={handleAdminClick}>
                <div><RiAdminLine/></div>
                <div>Admin</div>
            </div>
        </div>
    )
}

export default FixBar;