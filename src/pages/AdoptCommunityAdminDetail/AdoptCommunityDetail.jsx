/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getAdoptAdminById, getAdoptById} from '../../apis/api/Adopt';

function AdoptCommunityAdminDetail() {
    const navigate = useNavigate();
    const { noticeId } = useParams();
    const [adminBoard , setAdminBoard ] = useState(null);
    const [ boardDetail, setBoardDetail ] = useState(null);
    
    const fetchAdminBoard = async () => {
        try {
            const boardDetail = await getAdoptAdminById(noticeId);
            setAdminBoard(boardDetail);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchAdminBoard();
    }, [noticeId]);

    return (
        <div css={s.container}>
            {adminBoard &&
                <div key={adminBoard.adoptationBoardAdminId}>
                    <h1>{adminBoard.adoptationBoardAdminTitle}</h1>
                    <div>
                        <div>{adminBoard.username}</div>
                    </div>
                    <div>
                        <div>{adminBoard.adoptationBoardAdminContent}</div>
                    </div>
                    <div>
                        <button css={s.toListButton} onClick={() => {navigate("/adoptCommunity/admin")}}>목록</button>
                    </div>
                </div>
               
            }
        </div>
    );
}

export default AdoptCommunityAdminDetail;