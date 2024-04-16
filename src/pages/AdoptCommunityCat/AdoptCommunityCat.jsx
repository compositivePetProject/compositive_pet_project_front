import React, { useEffect, useState } from 'react';
import { getAdoptAll, getAdoptDog } from '../../apis/api/Adopt';
import { BiError } from 'react-icons/bi';
import PageContainer from '../../components/PageContainer/PageContainer';
/** @jsxImportSource @emotion/react */

import * as s from "./style";

function AdoptCommunityCat() {
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

    return (
        <div>
            <div css={s.container}>
                <table>
                    <thead>
                        <th>제목</th>
                        <th>내용</th>
                        <th>닉네임</th>
                        <th>종류</th>
                        <th>일자</th>
                    </thead>
                    <tbody>
                        {adoptList.map((data) => (
                                <tr key={data.adoptationBoardId}>
                                    <td>{data.adoptationBoardTitle}</td>
                                    <td>{data.adoptationBoardContent}</td>
                                    <td>{data.username}</td>
                                    <td>{data.boardAnimalCategoryNameKor}</td>
                                    <td>{data.createDate}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdoptCommunityCat;