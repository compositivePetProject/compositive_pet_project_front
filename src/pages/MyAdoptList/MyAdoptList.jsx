/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { getAdoptCountByUserId } from '../../apis/api/Adopt';


function MyAdoptList(props) {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const principalQueryState = queryClient.getQueryState("principalQuery");
    const [ adoptList, setAdoptList] = useState([]);
    const userId = principalQueryState.data?.data.userId;

    const getMyAdoptBoard = useQuery(
        ["getMyAdoptBoard", userId],
        async () => await getAdoptCountByUserId ({
            userId: userId
        }),
        {
            enabled: !!userId,
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                setAdoptList(response.data)
                console.log(response.data)
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
               <h2>내가 작성한 분양 게시글 목록</h2>
                <div css={s.boardListHeader}>
                    <div></div>
                    <div>제목</div>
                    <div>카테고리</div>
                    <div>등록일</div>
                </div>
                <div css={s.boardListItem}>
                    {adoptList.map((data) => (
                        <div 
                        key={data.adoptationBoardId} >
                            <div><input type="checkbox"/></div>
                            <div  onClick={() => navigate(`/adoptCommunity/${data.adoptationBoardId}`)}>{data.adoptationBoardTitle}</div>
                            <div>{data.boardAnimalCategoryNameKor}</div>
                            <div>{data.createDate}</div>
                        </div>
                    ))}
                </div>
                <div>
                    <button>삭제</button>
                    <button>수정</button>
                </div>
            </div>
            
        </div>
    );
}

export default MyAdoptList;