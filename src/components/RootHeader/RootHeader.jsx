/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import instance from "../../apis/utils/instance";

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
        <div css={s.header}>
            <a css={s.logoButton} href="http://localhost:3000/">
                <img css={s.logoimage} src="/petLogo.png" alt="" />
            </a>

            <div css={s.centerSpace}>
                <div css={s.accountItems}>
                    <button
                        css={s.buttons}
                        onMouseEnter={() => handleHover("community")}
                        onClick={() => navigate("/")}
                    >
                        커뮤니티 게시판
                    </button>
                   
                </div>
                
                <div css={s.accountItems}>
                    <button
                        css={s.buttons}
                        onMouseEnter={() => handleHover("adoptCommunity")}
                        onClick={() => navigate("/")}
                    >
                        분양 게시판
                    </button>
                </div>
                <div css={s.accountItems}>
                    <button
                        css={s.buttons}
                        onMouseEnter={() => handleHover("shop")}
                        onClick={() => navigate("/product/pet/shopping?page=1")}
                    >
                        온라인 쇼핑몰
                    </button>
                </div>
                <div css={s.accountItems}>
                    <button
                        css={s.buttons}
                        onMouseEnter={() => handleHover("map")}
                        onClick={() => navigate("/")}
                    >
                        지도
                    </button>
                </div>
            </div>

            { !isLogin ?
             <div css={s.accountItems}>
                <a css={s.login} href="http://localhost:3000/auth/sign-in">
                    로그인
                </a>
            </div>
            :   
            <>
                <div css={s.accountItems}>
                    <a css={s.login} onClick={handleLogoutClick} href="http://localhost:3000/">
                        로그아웃
                    </a>
                </div>       
                    
                <div css={s.imgBox}>
                    <div css={s.profileImg} onClick={() => navigate("/account/mypage/profile")}>
                        <img src={principalQueryState.data?.data.profileImageUrl} alt="" />
                    </div>
                </div>
            </> 
            }   
            
            {!!currentMenu && !!isHovering && (
                <div css={s.sidebar} onMouseLeave={handleSidebarLeave}>
                    {currentMenu === "community" && (
                        <div>
                            <div css={s.category}><a css={s.categoryText} href="http://localhost:3000/"> 전체 커뮤니티</a> </div>
                            <div css={s.category}><a css={s.categoryText} href="http://localhost:3000/"> 강아지 커뮤니티</a> </div>
                            <div css={s.category}><a css={s.categoryText} href="http://localhost:3000/"> 고양이 커뮤니티</a> </div> 
                        </div>
                        
                    )}
                    {currentMenu === "adoptCommunity" && (
                        <div>
                            <div css={s.category}><Link css={s.categoryText} to="/adoptCommunity/admin"> 공지사항 </Link> </div>
                            <div css={s.category}><Link css={s.categoryText} to="/adoptCommunity"> 전체 분양 게시글</Link> </div>
                            <div css={s.category}><Link css={s.categoryText} to="/adoptCommunity/dog"> 강아지 분양 게시글</Link> </div>
                            <div css={s.category}><Link css={s.categoryText} to="/adoptCommunity/cat"> 고양이 분양 게시글</Link> </div>
                        </div>
                    )}
                    {currentMenu === "shop" && (
                        <div>
                            <div css={s.category}><a css={s.categoryText} href="http://localhost:3000/">  온라인 쇼핑몰</a> </div>
                            <div css={s.category}><a css={s.categoryText} href="http://localhost:3000/">  사료 </a> </div>
                            <div css={s.category}><a css={s.categoryText} href="http://localhost:3000/">  간식</a> </div>
                            <div css={s.category}><a css={s.categoryText} href="http://localhost:3000/">  용품</a> </div>
                        </div>
                    )}
                    {currentMenu === "map" && (
                        <div>
                            <div css={s.category}><a css={s.categoryText} href="http://localhost:3000/">  내 주변 동물병원</a> </div>
                            <div css={s.category}><a css={s.categoryText} href="http://localhost:3000/">  내 주변 동물약국</a> </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default RootHeader;