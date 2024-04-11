import React, { useEffect, useState } from 'react';
import { getAdoptAll } from '../../apis/api/getAdoptAll';
import { BiError } from 'react-icons/bi';
import PageContainer from '../../components/PageContainer/PageContainer';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function AdoptCommunity() {
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

    return (
        <div>
            <div css={s.container}>
                {adoptList.map((data) => (
                    <div key={data.adoptationBoardId}>
                        <div css={s.ul}>
                            <div css={s.li}>제목: {data.adoptationBoardTitle}</div>
                            <div css={s.li}>내용: {data.adoptationBoardContent}</div>
                            <div css={s.li}>닉네임: {data.username}</div>
                            <div css={s.li}>일자: {data.createDate}</div>
                        </div>
                    </div>
             ))}
            </div>
        </div>
    );
}

export default AdoptCommunity;