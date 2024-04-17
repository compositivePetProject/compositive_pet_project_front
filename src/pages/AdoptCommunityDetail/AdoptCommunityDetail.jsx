/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getAdoptById} from '../../apis/api/Adopt';

function AdoptCommunityDetail() {
    const navigate = useNavigate();
    const { boardId } = useParams();
    const [adoptationBoard , setAdoptationBoard ] = useState(null);
    const [ boardDetail, setBoardDetail ] = useState(null);

    useEffect(() => {
        const fetchAdoptationBoard = async () => {
            try {
                const boardDetail = await getAdoptById(boardId);
                setAdoptationBoard(boardDetail);
                console.log(adoptationBoard);
            } catch (error) {
                console.error('Error fetching adoptation board:', error);
            }
        };

        fetchAdoptationBoard();
    }, [boardId]);

    return (
        <div css={s.container}>
            {adoptationBoard &&
                <div key={adoptationBoard.adoptationBoardId}>
                    <h1>{adoptationBoard.adoptationBoardTitle}</h1>
                    <div>
                        <div>{adoptationBoard.username}</div>
                    </div>
                    <div>
                        <div>{adoptationBoard.adoptationBoardContent}</div>
                    </div>
                    <div>
                        <button css={s.toListButton} onClick={() => {navigate("/adoptCommunity")}}>목록</button>
                    </div>
                </div>
               
            }
        </div>
    );
}

export default AdoptCommunityDetail;