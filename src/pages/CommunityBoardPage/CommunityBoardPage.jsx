/** @jsxImportSource @emotion/react */

import { useNavigate, useSearchParams } from "react-router-dom";
import { getCommunityBoardListRequest } from "../../apis/api/communityBoard";
import * as s from "./style";
import { useEffect, useState } from "react";
import { FaPencil } from "react-icons/fa6";



 function CommunityBoardPage() {
    const navigate = useNavigate();
    const[communityBoardList, setCommunityBoardList] = useState([]);
    const[error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async() => { 
            try{
                const response = await getCommunityBoardListRequest();
                setCommunityBoardList(response);///
                console.log(response);
            }catch(error){
                setError(error);
                console.log(error);
            }
        };

    fetchData();
 }, []);

 const handleOnClickToWritePage = () => {
    navigate("/community/board/write")
 }
 
  return (
        <div css={s.layout}>
            <div>
            <h1 css={s.headerTitle}>커뮤니티 갤러리 게시판</h1>
                <div css={s.boardListLayout}>
                    <div css={s.boardListHeader}>
                        <div css={s.boardListHeader}>
                            <div>제목</div>
                            <div>내용</div>
                            <div>닉네임</div>
                            <div>등록일</div>
                        </div>
                    </div>
                <div css={s.CommunityboardListItem}>
                    {communityBoardList.map((data) => (
                        <div
                        key={data.communityBoardId}
                        onClick={() => navigate(`/communityBoard/${data.communityBoardId}`)}>
                        <div>{data.userName}</div>
                        <div>{data.communityBoardTitle}</div>
                        <div>{data.communityBoardComment}</div>
                        <div>{data.createDate}</div>
                       </div>
                    ))}
                   </div>
                </div>
            </div>
        <button css={s.writeButton} onClick={handleOnClickToWritePage}>글 작성하기</button>
        </div>
        ) 
    }
export default CommunityBoardPage;