import React, { useEffect, useState } from 'react';

import { BiError } from 'react-icons/bi';
import PageContainer from '../../components/PageContainer/PageContainer';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { getAdoptAll } from '../../apis/api/Adopt';
import Pagination from 'react-js-pagination';

function AdoptCommunity() {
    const [page, setPage] = useState(1);

    const handlePageChange = (page) => {
      setPage(page);
    };
    const [ searchParams ] = useSearchParams();

    const navigate = useNavigate();
    const [adoptList, setAdoptList] = useState([]); 
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAdoptAll();
                setAdoptList(response); 
                console.log(response); 
            } catch (error) {
                setError(error);
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const handleWriteClick = () => {
        navigate("/adoptCommunity/register")
    }

   

    return (
       
            <div css={s.layout}>
                <div>
                    <h1 css={s.headerTitle}>분양 게시글 목록</h1>
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
                
                <button css={s.writeButton}v onClick={handleWriteClick}>글쓰기</button>
                </div>

        
    );
}

export default AdoptCommunity;