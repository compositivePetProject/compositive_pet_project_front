/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getAdoptById} from '../../apis/api/Adopt';
import { useQueryClient } from "react-query";

function AdoptCommunityDetail() {
    const queryClient = useQueryClient();
    const principalQueryState = queryClient.getQueryState("principalQuery");
    const userId = principalQueryState.data?.data.userId;
    const navigate = useNavigate();
    const { boardId } = useParams();
    const [adoptationBoard , setAdoptationBoard ] = useState(null);
    const [ boardDetail, setBoardDetail ] = useState(null);
    
    const fetchAdoptationBoard = async () => {
        try {
            const boardDetail = await getAdoptById(boardId);
            setAdoptationBoard(boardDetail);
            console.log(adoptationBoard);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchAdoptationBoard();
    }, [boardId]);

    return (
        <div css={s.container}>
            {adoptationBoard &&
                <div key={adoptationBoard.adoptationBoardId}>
                    <div>
                        <h1>{adoptationBoard.adoptationBoardTitle}</h1>
                    </div>
                    <div>
                        <div>{adoptationBoard.username}</div>
                    </div>
                    <div>
                        <div css={s.boardContent}>{adoptationBoard.adoptationBoardContent}</div>
                    </div>
                </div>
               
            }
            <div>
                <button css={s.toListButton} onClick={() => {navigate("/adoptCommunity?page=1")}}>목록</button>
            </div>
            {adoptationBoard && adoptationBoard.userId === userId &&
            (
                <div>
                    <button css={s.toUpdateButton} onClick={() => {navigate("/adoptCommunity/update")}}>수정</button>
                </div>
            )
            }
        </div>
    );
}

export default AdoptCommunityDetail;