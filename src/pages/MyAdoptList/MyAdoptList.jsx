import React, { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { getProductOrdersRequest } from '../../apis/api/productOrder';


function MyAdoptList(props) {
    // useAuthCheck(); 로그인 체크할 예정
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const principalQueryState = queryClient.getQueryState("principalQuery");
    const [ userOrders, setUserOrders ] = useState([]);
    const userId = principalQueryState.data?.data.userId;

    const getProductOrdersQuery = useQuery(
        ["getProductOrdersQuery", userId],
        async () => await getProductOrdersRequest ({
            userId: userId
        }),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                setUserOrders(() => response.data)
            },
            onError: (error) => {
                console.log(error);
            }
        }
    )
    
    return (
        <div css={s.layout}>
            <div css={s.userInfoBox}>
                <div css={s.infoBox}>
                    <h3>내 정보 관리</h3>
                    <div css={s.buttons} onClick={() => navigate("/account/mypage/profile")}>계정 관리</div>
                    <div css={s.buttons} onClick={() => navigate("/account/mypage/orders")}>주문 내역</div>
                    <div css={s.buttons} onClick={() => navigate("/account/mypage/Adopt")}>내가 작성한 분양 게시글</div>
                </div>
            </div>

            <div css={s.userDetails}>
                <div css={s.title}>분양 게시판 목록</div>
                <div>분양 게시판 정보</div>
                    { userOrders.map(userOrder => 
                    <div key={userOrder.productOrderId}>
                        <div>{userOrder.productNameKor} </div>
                        <div>{userOrder.productOrderCount}</div>
                        <div>{userOrder.productOrderAddress}</div>
                    </div>)
                    }                 
                </div>
            
        </div>
    );
}

export default MyAdoptList;