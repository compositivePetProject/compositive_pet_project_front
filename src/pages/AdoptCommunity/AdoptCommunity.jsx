import React, { useEffect, useState } from 'react';

import { BiError } from 'react-icons/bi';
import PageContainer from '../../components/PageContainer/PageContainer';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { getAdoptAll } from '../../apis/api/Adopt';

function AdoptCommunity() {
    const [ searchParams ] = useSearchParams();
    const page = parseInt(searchParams.get("page"))

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
                    <table css={s.boardListLayout}>
                        <thead css={s.boardListHeader}>
                            <tr css={s.boardListHeader}>
                                <td>닉네임</td>
                                <td>제목</td>
                                <td>카테고리</td>
                                <td>등록일</td>
                            </tr>
                        </thead>
                        <tbody css={s.boardListItem}>
                            {adoptList.map((data) => (
                                <tr 
                                key={data.adoptationBoardId} 
                                onClick={() => navigate(`/adoptCommunity/${data.adoptationBoardId}`)}>
                                    <div>{data.username}</div>
                                    <div>{data.adoptationBoardTitle}</div>
                                    <div>{data.boardAnimalCategoryNameKor}</div>
                                    <div>{data.createDate}</div>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <button css={s.writeButton}v onClick={handleWriteClick}>글쓰기</button>
                </div>

        
    );
}

export default AdoptCommunity;