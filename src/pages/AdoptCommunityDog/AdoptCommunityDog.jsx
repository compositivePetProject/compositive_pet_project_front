import React, { useEffect, useState } from 'react';
import { BiError } from 'react-icons/bi';
import PageContainer from '../../components/PageContainer/PageContainer';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import {useNavigate, useParams, useSearchParams } from 'react-router-dom';
import {getAdoptDog, getAdoptDogCount } from '../../apis/api/Adopt';
import { useQuery } from 'react-query';
import AdoptationPageNumbersDog from '../../components/AdoptationPageNumbersDog/AdoptationPageNumbersDog';

function AdoptCommunityDog() {
    const [ searchParams, setSearchParams ] = useSearchParams();
    const searchCount = 6;
    const [maxPageNumberDog, setMaxPageNumberDog] = useState(0);
    const [totalCountDog, setTotalCountDog] = useState(0);
    const page = parseInt(searchParams.get("page")) || 1;
    const lastPage = page * searchCount;
    const firstPage = lastPage - searchCount;

    
    const getAdoptDogCountQuery = useQuery(
        ["getAdoptDogCountQuery"],
        async () => getAdoptDogCount({
            page,
            count : searchCount
        }),
        {
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                setMaxPageNumberDog(response.data.maxPageNumberDog);
                setTotalCountDog(response.data.totalCountDog);
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
                const response = await getAdoptDog();
                const index = response.slice(firstPage, lastPage)
                setAdoptList(index); 
                console.log(response); 
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
                    <h1 css={s.headerTitle}>강아지 분양 게시글</h1>
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
                <AdoptationPageNumbersDog maxPageNumberDog={maxPageNumberDog} totalCountDog={totalCountDog} onChange={handlePageChange}/>
                </div>

        
    );
}

export default AdoptCommunityDog;