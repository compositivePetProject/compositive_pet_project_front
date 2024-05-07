/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import instance from "../../apis/utils/instance";
import { FiShoppingCart } from "react-icons/fi";
import { TbLogin, TbLogout } from "react-icons/tb";

function RootHeader() {
    const [ currentMenu, setCurrentMenu ] = useState(null);
    const [ isHovering, setIsHovering ] = useState(false);
    const [ isLogin, setLogin ] = useState(false);
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const principalQueryState = queryClient.getQueryState("principalQuery");

    useEffect(() => {
        setLogin(() => principalQueryState.status === "success");
    }, [principalQueryState.status]);

    const handleHover = (menu) => {
        setIsHovering(true);
        setCurrentMenu(menu);

    };

    const handleSidebarLeave = () => {
        setIsHovering(false);
        setCurrentMenu(null);
    };
    
    const handleLogoutClick = () => {
        localStorage.removeItem("AccessToken");
        instance.interceptors.request.use((config) => {
            config.headers.Authorization = null;
            return config;
        });
        queryClient.refetchQueries("principalQuery");
    }
    

    return (
        <div css={s.container}  onMouseLeave={handleSidebarLeave}>
            <div css={s.header}>
                <div css={s.logoBox}>
                    <a css={s.logoButton} href="http://localhost:3000/">
                        <img css={s.logoimage} src="/petLogo.png" alt="" />
                    </a>
                </div>

                <div css={s.centerSpace}>
                    <div css={s.accountItems}>
                        <button
                            css={s.buttons}
                            onMouseEnter={() => handleHover("community")}
                            onClick={() => navigate("/community/getboards?page=1")}
                        >
                            COMMUNITY-BOARD
                        </button>
                        <div css={s.sidebar(isHovering && currentMenu === "community")} onMouseLeave={handleSidebarLeave}>
                            {currentMenu === "community" && (
                                <div>
                                    <div css={s.category}><a css={s.categoryText} href= "/community/getboards?page=1"> 전체 커뮤니티</a> </div>
                                    <div css={s.category}><a css={s.categoryText} href="/community/dog?page=1"> 강아지 커뮤니티</a> </div>
                                    <div css={s.category}><a css={s.categoryText} href="/community/cat?page=1"> 고양이 커뮤니티</a> </div> 
                                </div>
                            )}
                        </div>
                    </div>
                    
                    <div css={s.accountItems}>
                        <button
                            css={s.buttons}
                            onMouseEnter={() => handleHover("adoptCommunity")}
                            // onClick={() => navigate("/adoptCommunity?page=1")}
                            onClick={() => navigate("/ex/adoptcommunity?page=1")}
                        >
                            ADOPTATION-COMMUNITY-BOARD
                        </button>
                        <div css={s.sidebar(isHovering && currentMenu === "adoptCommunity")} onMouseLeave={handleSidebarLeave}>
                            {currentMenu === "adoptCommunity" && (
                                <div>
                                    <div css={s.category}><Link css={s.categoryText} to="/ex/adoptcommunity?page=1"> 전체 분양 게시판</Link> </div>
                                    <div css={s.category}><Link css={s.categoryText} to="/adoptCommunity/dog?page=1"> 강아지 분양 게시판</Link> </div>
                                    <div css={s.category}><Link css={s.categoryText} to="/adoptCommunity/cat?page=1"> 고양이 분양 게시판</Link> </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div css={s.accountItems}>
                        <button
                            css={s.buttons}
                            onMouseEnter={() => handleHover("shop")}
                            onClick={() => navigate("/product/pet/shopping?page=1")}
                        >
                            ON-SHOP
                        </button>
                        <div css={s.sidebar(isHovering && currentMenu === "shop")} onMouseLeave={handleSidebarLeave}>
                            {currentMenu === "shop" && (
                                <div>
                                    <div css={s.category}><a css={s.categoryText} href="http://localhost:3000/product/pet/shopping?page=1"> 전체 쇼핑몰</a> </div>
                                    <div css={s.category}><a css={s.categoryText} href="http://localhost:3000/"> 강아지 쇼핑몰</a> </div>
                                    <div css={s.category}><a css={s.categoryText} href="http://localhost:3000/"> 고양이 쇼핑몰</a> </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div css={s.accountItems}>
                        <button
                            css={s.buttons}
                            onMouseEnter={() => handleHover("map")}
                            onClick={() => navigate("/kakao/map")}
                        >
                            MAP
                        </button>
                        {/* <div css={s.sidebar(isHovering && currentMenu === "map")} onMouseLeave={handleSidebarLeave}>
                            {currentMenu === "map" && (
                                <div>
                                    <div css={s.category}><a css={s.categoryText} href="http://localhost:3000/kakao/map">  카카오 맵</a> </div>
                                    <div css={s.category}><a css={s.categoryText} href="http://localhost:3000/">  내 주변 동물약국</a> </div>
                                </div>
                            )}
                        </div> */}
                    </div>
                </div>

                <div css={s.loginBox}>
                    { !isLogin ?
                    <div css={s.accountItems}>
                        <a css={s.login} href="http://localhost:3000/auth/sign-in">
                            <TbLogin />
                        </a>
                        <a css={s.login} href="http://localhost:3000/product/pet/cart">
                            <FiShoppingCart />
                        </a>
                    </div>
                    :   
                    <>
                        <div css={s.accountItems}>
                            <a css={s.login} onClick={handleLogoutClick} href="http://localhost:3000/">
                                <TbLogout />
                            </a>
                            <a css={s.login} href="http://localhost:3000/product/pet/cart">
                                <FiShoppingCart />
                            </a>
                        </div>                      
                        <div css={s.imgBox}>
                            <div css={s.profileImg} onClick={() => navigate("/account/mypage/profile")}>
                                <img src={principalQueryState.data?.data.profileImageUrl} alt="" />
                            </div>
                        </div>
                    </> 
                    }   
                </div>
            </div>
        </div>
    );
}

export default RootHeader;