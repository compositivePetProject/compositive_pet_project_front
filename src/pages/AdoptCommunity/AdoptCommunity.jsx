import React, { useEffect, useState } from 'react';

import { BiError } from 'react-icons/bi';
import PageContainer from '../../components/PageContainer/PageContainer';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { getAdoptAll, getAdoptCount } from '../../apis/api/Adopt';
import Pagination from 'react-js-pagination';
import { useQuery } from 'react-query';
import { count } from 'firebase/firestore';
import AdoptationPageNumbers from '../../components/AdoptationPageNumbers/AdoptationPageNumbers';

function AdoptCommunity() {
    const [ searchParams, setSearchParams ] = useSearchParams();
    const searchCount = 5;
    const [maxPageNumber, setMaxPageNumber] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const page = parseInt(searchParams.get("page")) || 1;
    const lastPage = page * searchCount;
    const firstPage = lastPage - searchCount;


    // const indexOfLast = currentPage * postsPerPage;
    // const indexOfFirst = indexOfLast - postsPerPage;
    // const currentPosts = (posts) => {
    //   let currentPosts = 0;
    //   currentPosts = posts.slice(indexOfFirst, indexOfLast);
    //   return currentPosts;

  

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
                                <div>등록일</div>
                            </div>
                        </div>
                        <div css={s.boardListItem}>
                            {adoptList.map((data) => (
                                <div 
                                key={data.adoptationBoardId} 
                                onClick={() => navigate(`/adoptCommunity/${data.adoptationBoardId}`)}>
                                    <div>{data.username}</div>
                                    <div>{data.adoptationBoardTitle}</div>
                                    <div>{data.boardAnimalCategoryNameKor}</div>
                                    <div>{data.createDate}</div>
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