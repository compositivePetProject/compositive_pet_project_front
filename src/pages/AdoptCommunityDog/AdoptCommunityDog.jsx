import React, { useEffect, useState } from 'react';
import { getAdoptAll, getAdoptDog } from '../../apis/api/Adopt';
import { BiError } from 'react-icons/bi';
import PageContainer from '../../components/PageContainer/PageContainer';
/** @jsxImportSource @emotion/react */

import * as s from "./style";
import { Link } from 'react-router-dom';


function AdoptCommunityDog() {
    const [adoptList, setAdoptList] = useState([]); 
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAdoptDog();
                setAdoptList(response); 
                console.log(response); 
            } catch (error) {
                setError(error);
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const handleSubmit = () => {

    }
   
    

    
    return (
       
        <div css={s.container}>
            <div css={s.boardList}>
                <h1>분양 게시글 목록</h1>
                <table css={s.table}>
                    <thead css={s.title}>
                        <tr>
                            <th>제목</th>
                            <th>닉네임</th>
                            <th>카테고리</th>
                            <th>일자</th>
                        </tr>
                    </thead>
                    <tbody>
                        {adoptList.map((data) => (
                            <tr key={data.adoptationBoardId}>
                                <td><Link to="/adoptCommunity/1">{data.adoptationBoardTitle}</Link></td>
                                <td>{data.username}</td>
                                <td>{data.boardAnimalCategoryNameKor}</td>
                                <td>{data.createDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div css={s.button}>
                <Link to="/adoptCommunity/register">글쓰기</Link>
            </div>
        </div>
    
);
}

export default AdoptCommunityDog;