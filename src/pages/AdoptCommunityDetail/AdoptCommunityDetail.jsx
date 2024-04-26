/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { getAdoptById, getAdoptLike} from '../../apis/api/Adopt';
import { useQueryClient } from "react-query";
import { FaHeart } from "react-icons/fa6";

function AdoptCommunityDetail() {
    const [ searchParams, setSearchParams ] = useSearchParams();
    const adoptationBoardId = searchParams.get("boardId");
    const queryClient = useQueryClient();
    const principalQueryState = queryClient.getQueryState("principalQuery");
    const userId = principalQueryState.data?.data.userId;
    const navigate = useNavigate();
    const [adoptationBoard , setAdoptationBoard ] = useState(null);
    const [ boardDetail, setBoardDetail ] = useState(null);
    const [ likeCount, setLikeCount] = useState();
    
    const fetchAdoptationBoard = async () => {
        try {
            const boardDetail = await getAdoptById(adoptationBoardId);
            setAdoptationBoard(boardDetail);
            console.log(adoptationBoard);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchAdoptationFavorite = async () => {
        try {
            const response = await getAdoptLike({adoptationBoardId : adoptationBoardId})
            setLikeCount(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchAdoptationFavorite();
        fetchAdoptationBoard();
       
    }, [adoptationBoardId]);

    return (
        <div css={s.layout}>
        <div css={s.box}>
            {adoptationBoard &&
                <div css={s.boardListItem} key={adoptationBoard.adoptationBoardId}>
                    <h1 css={s.title}>{adoptationBoard.adoptationBoardTitle}</h1>
                    <div>
                        <div>{adoptationBoard.username}</div>
                    </div>
                    <div>
                        <div>{adoptationBoard.adoptationBoardContent}</div>
                    </div>
                </div>
            }

            <div css={s.buttonList}>
                {adoptationBoard && adoptationBoard.userId === userId &&
                    
                    <button css={s.writeButton} onClick={
                        () => {navigate
                        (`/adoptCommunity/edit?adoptBoardId=${adoptationBoard.adoptationBoardId}`)}}>수정</button>
                        
                }
                <button css={s.writeButton} onClick={() => {navigate("/adoptCommunity?page=1")}}>목록</button>
            </div>      

            {adoptationBoard &&   
            <div css={s.status}>
                <FaHeart css={s.likeHeart} />
                <div>{likeCount}</div>
            </div>
            }
        </div>
        </div>
          
    );
}

export default AdoptCommunityDetail;