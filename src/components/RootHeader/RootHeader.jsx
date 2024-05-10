/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import instance from "../../apis/utils/instance";
import { FiShoppingCart } from "react-icons/fi";
import { TbLogin, TbLogout } from "react-icons/tb";
import { adoptCommunityActiveState, communityActiveState, mapActiveState, shopActiveState } from "../../atoms/admin/isButtonSelectedState";
import { useRecoilState } from "recoil";

function RootHeader() {
    const [ isHovering, setIsHovering ] = useState(false);
    const [ isLogin, setLogin ] = useState(false);
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const principalQueryState = queryClient.getQueryState("principalQuery");
    const [ currentMenu, setCurrentMenu ] = useState(null);
    const [isCommunityActive, setCommunityActive] = useRecoilState(communityActiveState);
    const [isAdoptCommunityActive, setAdoptCommunityActive] = useRecoilState(adoptCommunityActiveState);
    const [isShopActive, setShopActive] = useRecoilState(shopActiveState);
    const [isMapActive, setMapActive] = useRecoilState(mapActiveState);

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

    const handleProfile = () => {
        setCommunityActive(false); 
        setAdoptCommunityActive(false); 
        setShopActive(false); 
        setMapActive(false);
        navigate("/account/mypage/profile")
    }

    const handleMenuClick = (menu, path) => {
        switch(menu) {
            case "community":
                setCommunityActive(true); 
                setAdoptCommunityActive(false); 
                setShopActive(false); 
                setMapActive(false);
                break;
            case "adoptCommunity":
                setCommunityActive(false); 
                setAdoptCommunityActive(true); 
                setShopActive(false); 
                setMapActive(false);
                break;
            case "shop":
                setCommunityActive(false); 
                setAdoptCommunityActive(false); 
                setShopActive(true); 
                setMapActive(false);
                break;
            case "map":
                setCommunityActive(false); 
                setAdoptCommunityActive(false); 
                setShopActive(false); 
                setMapActive(true);
                break;
            default:
                break;
        }
        navigate(path);
    }
    
    return (
        <div css={s.layout}>
                <div css={s.headerOut}>
                    <div css={s.header} onMouseLeave={handleSidebarLeave}>
                    <div css={s.logoBox}>
                        <a css={s.logoButton} href="http://localhost:3000/">
                            <img css={s.logoimage} src="/petLogo.png" alt="" />
                        </a>
                    </div>

                    <div css={s.centerSpace}>
                        <div css={s.accountItems}>
                            <button
                                css={s.buttons(isCommunityActive)}
                                onMouseEnter={() => handleHover("community")}
                                onMouseLeave={() => handleSidebarLeave}
                                onClick={() => handleMenuClick("community", "/community/getboards?page=1")}
                            >
                                COMMUNITY
                            </button>
                            <div css={s.sidebar(isHovering && currentMenu === "community")} onMouseLeave={handleSidebarLeave}>
                                {currentMenu === "community" && (
                                    <div>
                                        <div css={s.category} onClick={() => handleMenuClick("community", "/community/getboards?page=1")}>전체 커뮤니티</div>
                                        <div css={s.category} onClick={() => handleMenuClick("community", "/community/dog?page=1")}>강아지 커뮤니티</div>
                                        <div css={s.category} onClick={() => handleMenuClick("community", "/community/cat?page=1")}>고양이 커뮤니티</div> 
                                    </div>
                                )}
                            </div>
                        </div>
                        
                        <div css={s.accountItems}>
                            <button
                                css={s.buttons(isAdoptCommunityActive)}
                                onMouseEnter={() => handleHover("adoptCommunity")}
                                onMouseLeave={() => handleSidebarLeave}
                                onClick={() => handleMenuClick("adoptCommunity", "/adoptcommunity?page=1")}
                            >
                                ADOPTATION-COMMUNITY
                            </button>
                            <div css={s.sidebar(isHovering && currentMenu === "adoptCommunity")} onMouseLeave={handleSidebarLeave}>
                                {currentMenu === "adoptCommunity" && (
                                    <div>
                                        <div css={s.category} onClick={() => handleMenuClick("adoptCommunity", "/adoptcommunity?page=1")}>전체 분양 커뮤니티</div>
                                        <div css={s.category} onClick={() => handleMenuClick("adoptCommunity", "/adoptcommunity/dog?page=1")}>강아지 분양 커뮤니티</div>
                                        <div css={s.category} onClick={() => handleMenuClick("adoptCommunity", "/adoptcommunity/cat?page=1")}>고양이 분양 커뮤니티</div> 
                                    </div>
                                )}
                            </div>
                        </div>
                        <div css={s.accountItems}>
                            <button
                                css={s.buttons(isShopActive)}
                                onMouseEnter={() => handleHover("shop")}
                                onMouseLeave={() => handleSidebarLeave}
                                onClick={() => handleMenuClick("shop", "/product/pet/shopping?page=1")}
                            >
                                ON-SHOP
                            </button>
                            <div css={s.sidebar(isHovering && currentMenu === "shop")} onMouseLeave={handleSidebarLeave}>
                                {currentMenu === "shop" && (
                                    <div>
                                        <div css={s.category} onClick={() => handleMenuClick("shop", "/product/pet/shopping?page=1")}>전체 쇼핑몰</div>
                                        <div css={s.category} onClick={() => handleMenuClick("shop", "/product/pet/shopping/dog?page=1")}>강아지 쇼핑몰</div>
                                        <div css={s.category} onClick={() => handleMenuClick("shop", "/product/pet/shopping/cat?page=1")}>고양이 쇼핑몰</div> 
                                    </div>
                                )}
                            </div>
                        </div>
                        <div css={s.accountItems}>
                            <button
                                css={s.buttons(isMapActive)}
                                onMouseEnter={() => handleHover("map")}
                                onMouseLeave={() => handleSidebarLeave}
                                onClick={() => handleMenuClick("map", "/kakao/map")}
                            >
                                MAP
                            </button>
                        </div>
                    </div>

                    <div css={s.loginBox}>
                        { !isLogin ?
                        <div css={s.accountItems}>
                            <a css={s.login} href="http://localhost:3000/auth/authentication">
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
                                <div css={s.profileImg} onClick={handleProfile}>
                                    <img src={principalQueryState.data?.data.profileImageUrl} alt="" />
                                </div>
                            </div>
                        </> 
                        }   
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RootHeader;