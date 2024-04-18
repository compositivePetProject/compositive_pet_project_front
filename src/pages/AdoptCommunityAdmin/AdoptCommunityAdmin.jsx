import React, { useEffect, useState } from 'react';

import { BiError } from 'react-icons/bi';
import PageContainer from '../../components/PageContainer/PageContainer';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { getAdoptAdmin, getAdoptAll } from '../../apis/api/Adopt';

function AdoptCommunityAdmin() {
    const [ searchParams ] = useSearchParams();
    const page = parseInt(searchParams.get("page"))

    const navigate = useNavigate();
    const [adoptList, setAdoptList] = useState([]); 
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAdoptAdmin();
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
                    <h1 css={s.headerTitle}>공지사항</h1>
                    <div css={s.boardListLayout}>
                        <div css={s.boardListHeader}>
                            <div css={s.boardListHeader}>
                                <div>닉네임</div>
                                <div>제목</div>
                                <div>내용</div>
                                <div>등록일</div>
                            </div>
                        </div>
                        <div css={s.boardListItem}>
                            {adoptList.map((data) => (
                                <div 
                                key={data.adoptationBoardAdminId} 
                                onClick={() => navigate(`/adoptCommunity/admin/${data.adoptationBoardAdminId}`)}>
                                    <div>{data.username}</div>
                                    <div>{data.adoptationBoardAdminTitle}</div>
                                    <div>{data.adoptationBoardAdminContent}</div>
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

export default AdoptCommunityAdmin;