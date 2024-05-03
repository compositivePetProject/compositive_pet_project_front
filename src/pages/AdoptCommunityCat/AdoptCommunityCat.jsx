/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useEffect, useState } from 'react';
import { BiError } from 'react-icons/bi';
import PageContainer from '../../components/PageContainer/PageContainer';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { deleteAdoptLike, getAdoptAll, getAdoptCat, getAdoptCatCount, getAdoptDog, postAdoptLike, postAdoptView } from '../../apis/api/Adopt';
import Pagination from 'react-js-pagination';
import { useMutation, useQuery, useQueryClient } from "react-query";
import AdoptationPageNumbers from "../../components/AdoptationPageNumbers/AdoptationPageNumbers";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

function AdoptCommunityCat() {
    const [viewedPosts,setViewedPost ]= useState(new Set());
    const [likeStatus, setLikeStatus] = useState({});
    const [likeCounts, setLikeCounts] = useState({});
    const [ animalCategoryId, setAnimalCategoryId ] = useState()
    const queryClient = useQueryClient();
    const principalQueryState = queryClient.getQueryState("principalQuery");
    const userId = principalQueryState.data?.data.userId;
    const [ searchParams, setSearchParams ] = useSearchParams();
    const searchCount = 7;
    const [maxPageNumberCat, setMaxPageNumberCat] = useState(0);
    const [totalCountCat, setTotalCountCat] = useState(0);
    const boardId = parseInt(searchParams.get("boardId"))
    const page = parseInt(searchParams.get("page")) || 1;
    const lastPage = page * searchCount;
    const firstPage = lastPage - searchCount;


    const handleClick = async (boardId) => {
        try {
            if (!viewedPosts.has(boardId)) {
                await PostAdoptViewMutation.mutate({
                    adoptationBoardId: boardId,
                    userId: userId
                });
                viewedPosts.add(boardId);
                console.log(viewedPosts); // 디버깅 또는 모니터링 용도로 출력
            } else {
                navigate(`/adoptCommunityDetail?page=${page}&boardId=${boardId}`);
            }
            // 페이지 이동
            navigate(`/adoptCommunityDetail?page=${page}&boardId=${boardId}`);
        } catch (error) {
            console.error("클릭 처리 중 오류 발생:", error);
        }
    };


    const PostAdoptViewMutation = useMutation({
        mutationKey: "PostAdoptViewMutation",
        mutationFn: postAdoptView,
        onSuccess: (response) => {
            console.log("조회 완료입니다")
        },
        onError: (error) => {
            console.log(`에러:${error}`)
        }
    })


    const postAdoptLikeMutation = useMutation({
        mutationKey: "postAdoptLikeMutation",
        mutationFn: postAdoptLike,
        onSuccess: (response) => {
          
        },
        onError: (error) => {
            
        }
    })

    
    const DeleteAdoptLikeMutation = useMutation({
        mutationKey: "DeleteAdoptLikeMutation",
        mutationFn: deleteAdoptLike,
        onSuccess: (response) => {
            console.log("좋아요 성공")
            
        },
        onError: (error) => {
            
        }
    })


    const getAdoptCatCountQuery = useQuery(
        ["getAdoptCatCountQuery"],
        async () => getAdoptCatCount({
            page,
            count : searchCount
        }),
        {
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                setMaxPageNumberCat(response.data.maxPageNumberCat);
                setTotalCountCat(response.data.totalCountCat);
                console.log(response.data)
              
                
            },
            onError: (error) => {
                console.log(error);
            }
        }
    )

    const navigate = useNavigate();
    const [adoptList, setAdoptList] = useState([]); 
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAdoptCat();
                const index = response.slice(firstPage, lastPage)
                setAdoptList(index);
                console.log(index)
                const savedLikeStatus = localStorage.getItem('likeStatusCat');
                if (savedLikeStatus) {
                    setLikeStatus(JSON.parse(savedLikeStatus));
                }
            
            } catch (error) {
                setError(error);
                console.log(error);
            }
        };

        fetchData();

    },[page])


    const handleWriteClick = () => {
        navigate("/adoptCommunity/register")
    }


    
    const handlePageChange = (pageNumber) => {
        setSearchParams({ page: pageNumber });
    };


    const handleLikeSubmit = (boardId) => {
        try {
            if (!likeStatus[boardId]) {
                postAdoptLikeMutation.mutate({
                    adoptationBoardId: boardId,
                    userId: userId
                });
                setLikeStatus(prevState => ({ ...prevState, [boardId]: true }));
                localStorage.setItem('likeStatusCat', JSON.stringify({ ...likeStatus, [boardId]: true })); 
            } else {
                DeleteAdoptLikeMutation.mutate({
                    adoptationBoardId: boardId,
                    userId: userId
                });
                setLikeStatus(prevState => ({ ...prevState, [boardId]: false }));
                localStorage.setItem('likeStatusCat', JSON.stringify({ ...likeStatus, [boardId]: false })); // 이 부분 수정
            }
        } catch (error) {
            console.error("좋아요 처리 중 오류 발생:", error);
        }
    }
   

    return (
       
            <div css={s.layout}>
                <div>
                    <h1 css={s.headerTitle}>고양이 분양 게시글</h1>
                    <div css={s.boardListLayout}>
                        <div css={s.boardListHeader}>
                            <div css={s.boardListHeader}>
                                <div>닉네임</div>
                                <div>제목</div>
                                <div>카테고리</div>
                                <div>등록일</div>
                                <div></div>
                            </div>
                        </div>
                        <div css={s.boardListItem}>
                            {adoptList.map((data) => (
                                <div 
                                key={data.adoptationBoardId} >
                                    <div>{data.username}</div>
                                    <div onClick={() => handleClick(data.adoptationBoardId)}>{data.adoptationBoardTitle}</div>
                                    <div>{data.boardAnimalCategoryNameKor}</div>
                                    <div>{data.createDate}</div>
                                    <div css={s.status}>
                                        <div onClick={()=>{handleLikeSubmit(data.adoptationBoardId)}}>
                                            {!likeStatus[data.adoptationBoardId] ? (
                                                <FaRegHeart css={s.likeHeart} />
                                            ) : (
                                                <FaHeart css={s.likeHeart} />
                                            )}
                                       </div>
                                        <div>{data.totalCount}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                <button css={s.writeButton}v onClick={handleWriteClick}>글쓰기</button>
                <AdoptationPageNumbers maxPageNumber={maxPageNumberCat} totalCount={totalCountCat} onChange={handlePageChange}/>
                </div>

        
    );
}

export default AdoptCommunityCat;