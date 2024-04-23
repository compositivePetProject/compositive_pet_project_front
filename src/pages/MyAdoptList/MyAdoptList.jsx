/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getAdoptByUserId, getAdoptCountByUserId} from '../../apis/api/Adopt';
import { AiOutlineLike } from "react-icons/ai";
import AdoptationPageNumbers from "../../components/AdoptationPageNumbers/AdoptationPageNumbers";
import AdoptationPageNumbersUser from "../../components/AdoptationPageNumbersUser/AdoptationPageNumbersUser";


function MyAdoptList(props) {
    const [ searchParams, setSearchParams ] = useSearchParams();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const principalQueryState = queryClient.getQueryState("principalQuery");
    const [ adoptList, setAdoptList] = useState([]);
    const userId = principalQueryState.data?.data.userId;
    const searchCount = 6;
    const page = searchParams.get("page") || 1;
    const lastPage = page * searchCount;
    const firstPage = lastPage - searchCount;
    const [maxPageNumber, setMaxPageNumber] = useState(0);
    const [totalCount, setTotalCount] = useState(0);



    const getMyAdoptBoard = useQuery(
        ["getMyAdoptBoard", userId],
        async () => await getAdoptByUserId ({
            userId: userId
        }),
        {
            enabled: !!userId,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                setAdoptList(response.data)
                const index = response.data.slice(firstPage,lastPage)
                setAdoptList(index)
            },
            onError: (error) => {
                console.log(error);
            }
        }
    )

    

    const getMyBoardCount = useQuery(
        ["getMyBoardCount", userId],
        async () => await getAdoptCountByUserId({
        page:page,
        userId:userId,
        count: searchCount
        
    }),
    {
        enabled: !!userId,
        refetchOnWindowFocus: false,
        onSuccess: response => {
            setMaxPageNumber(response.data.maxPageNumber);
            setTotalCount(response.data.totalCount);
            console.log(maxPageNumber);
            console.log(totalCount);

        },
        onError: error => {
            console.log(error)
        }
    }

)

    const handlePageChange = (pageNumber) => {
        setSearchParams({ page: pageNumber });
    };

    const handleClick = () => {
        console.log("입력이 감지되었습니다.")
    }
    
    return (
        <div css={s.layout}>
            <div css={s.userInfoBox}>
                <div css={s.infoBox}>
                    <h3>내 정보 관리</h3>
                    <div css={s.buttons} onClick={() => navigate("/account/mypage/profile")}>계정 관리</div>
                    <div css={s.buttons} onClick={() => navigate("/account/mypage/orders")}>주문 내역</div>
                    <div css={s.buttons} onClick={() => navigate("/account/mypage/Adopt?page=1")}>내가 작성한 분양 게시글</div>
                </div>
            </div>

            <div css={s.userDetails}>
               <h2>내가 작성한 분양 게시글 목록</h2>
                <div css={s.boardListHeader}>
                    <div></div>
                    <div>제목</div>
                    <div>카테고리</div>
                    <div>등록일</div>
                    <div>좋아요</div>
                </div>
                <div css={s.boardListItem}>
                    {adoptList.map((data) => (
                        <div 
                        key={data.adoptationBoardId} >
                            <div><input type="checkbox"/></div>
                            <div onClick={() => navigate(`/adoptCommunity/${data.adoptationBoardId}`)}>{data.adoptationBoardTitle}</div>
                            <div>{data.boardAnimalCategoryNameKor}</div>
                            <div>{data.createDate}</div>
                            <div><AiOutlineLike onClick={handleClick}/><>(좋아요 수)</></div>
                        </div>
                    ))}
                </div>
                <AdoptationPageNumbersUser maxPageNumber={maxPageNumber} totalCount={totalCount} onChange={handlePageChange}/>
                <div>
                    <button>삭제</button>
                    <button>수정</button>
                </div>
            </div>
            
        </div>
    );
}

export default MyAdoptList;