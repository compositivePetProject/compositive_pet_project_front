/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCommunityBoardAdminRequestById } from '../../apis/api/communityBoardAdmin';

function CommunityBoardAdminDetailPage(props) {
    const navigate = useNavigate();
    const {communityNoticeId} = useParams();
    const [adminBoardList, setAdminBoardList] = useState([]);
    const [boardDetail, setBoardDetail] = useState(null)

    const fetchCommunityAdminBoard = async () => {
        try {
            const boardDetail = await getCommunityBoardAdminRequestById(communityNoticeId);
            setAdminBoardList(boardDetail)
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        fetchCommunityAdminBoard();
    }, [communityNoticeId]);

    return (
        <div css= {s.container}>
            {adminBoardList &&
                <div
                    key-={adminBoardList.communityBoardAdminId}>
                    <h1>{adminBoardList.communityBoardAdminTitle}</h1>
                    <div>
                        <div>{adminBoardList.userId} </div>
                    </div>
                    <div>
                        <div css={s.boardContent} >{adminBoardList.communityBoardAdminContent }</div>
                    </div>
                    <div>
                        <button css={s.listbutton} onClick={() => {navigate("/community/admin/list/boards")}}>목록</button>
                    </div>
                </div>
            }
            
        </div>
    );
}

export default CommunityBoardAdminDetailPage;