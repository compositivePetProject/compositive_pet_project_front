import React, { useEffect, useState } from 'react';

import { BiError } from 'react-icons/bi';
import PageContainer from '../../components/PageContainer/PageContainer';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { getAdoptAll, getAdoptCount, postAdoptLike } from '../../apis/api/Adopt';
import { QueryClient, useMutation, useQuery, useQueryClient } from 'react-query';
import { count } from 'firebase/firestore';
import AdoptationPageNumbers from '../../components/AdoptationPageNumbers/AdoptationPageNumbers';
import { AiOutlineLike } from "react-icons/ai";

function AdoptCommunity() {
    const [likeBoards, setLikeBoards] = useState([])
    const queryClient = useQueryClient();
    const principalQueryState = queryClient.getQueryState("principalQuery");
    const userId = principalQueryState.data?.data.userId;
    const [ searchParams, setSearchParams ] = useSearchParams();
    const searchCount = 7;
    const [maxPageNumber, setMaxPageNumber] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const boardId = parseInt(searchParams.get("boardId"))
    const page = parseInt(searchParams.get("page")) || 1;
    const lastPage = page * searchCount;
    const firstPage = lastPage - searchCount;

    

    const formatDate = (date) => {
        const newDate = new Date(date);
        const year = newDate.getFullYear();
        const month = String(newDate.getMonth() + 1).padStart(2, '0');
        const day = String(newDate.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const date = (date) => {
        return formatDate(date);
    }



    const postAdoptLikeMutation = useMutation({
        mutationKey: "postAdoptLikeMutation",
        mutationFn: postAdoptLike,
        onSuccess: (response) => {
            console.log("좋아요 성공")
            console.log(response)
        },
        onError: (error) => {
            console.log("좋아요 실패")
            console.log(error)
        }
    })

  

    const getAdoptCountQuery = useQuery(
        ["getAdoptCountQuery"],
        async () => getAdoptCount({
            page,
            count : searchCount
        }),
        {
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                setMaxPageNumber(response.data.maxPageNumber);
                setTotalCount(response.data.totalCount);
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
                const response = await getAdoptAll();
                const index = response.slice(firstPage, lastPage)
                setAdoptList(index);
            
            } catch (error) {
                setError(error);
                console.log(error);
            }
        };

        fetchData();
    }, [page]);

    const handleWriteClick = () => {
        navigate("/adoptCommunity/register")
    }


    const handlePageChange = (pageNumber) => {
        setSearchParams({ page: pageNumber });
    };

    const handleLikeSubmit = (boardId) => {
        postAdoptLikeMutation.mutate(
            {
                adoptationBoardId: boardId,
                userId: userId
            }
        )
    }


  

    return (
            <div css={s.layout}>
                <div>
                    <h1 css={s.headerTitle}>전체 분양 게시글</h1>
                    <div css={s.boardListLayout}>
                        <div css={s.boardListHeader}>
                            <div css={s.boardListHeader}>
                                <div>닉네임</div>
                                <div>제목</div>
                                <div>카테고리</div>
                                <div>작성일</div>
                                <div>좋아요</div>
                            </div>
                        </div>
                        <div css={s.boardListItem}>
                            {adoptList.map((data) => (
                                <div 
                                key={data.adoptationBoardId} >
                                    <div>{data.username}</div>
                                    <div  onClick={(event) => {
                                        navigate(`/adoptCommunity/${data.adoptationBoardId}`)
                                        console.log(event.target)}}>{data.adoptationBoardTitle}</div>
                                    <div>{data.boardAnimalCategoryNameKor}</div>
                                    <div>{date(data.createDate)}</div>
                                    <div><AiOutlineLike onClick={() => handleLikeSubmit(data.adoptationBoardId)}/></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                <button css={s.writeButton} onClick={handleWriteClick}>글쓰기</button>
                <AdoptationPageNumbers maxPageNumber={maxPageNumber} totalCount={totalCount} onChange={handlePageChange}/>
                </div>

    );
}

export default AdoptCommunity;