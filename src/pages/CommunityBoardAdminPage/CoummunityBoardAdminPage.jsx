/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useEffect, useState } from 'react'
import { getCommunityBoardAdminListRequest } from '../../apis/api/communityBoardAdmin';
import { useNavigate } from 'react-router-dom';
import { FaPencil } from 'react-icons/fa6';
import { useQueryClient } from "react-query";

 function CoummunityBoardAdminPage() {
    const navigate = useNavigate();
    const[communityBoardAdminList, setCommunityBoardAdminList ] = useState([])
    const[error, setError] = useState(null);
    

    useEffect(() => {
      const fetchData = async() => {
        try{
          const response = await getCommunityBoardAdminListRequest();
          setCommunityBoardAdminList(response)
          console.log(response)
        }catch(error){
            setError(error);
            console.log(error)                  
          }            
        };

    fetchData();
  }, []);

  const handleOnClicToWritePage = () => {
    navigate("/community/admin/noticewrite")
  }

  return (
    <div css= {s.layout}>
      <div css= {s.layout}>
      <h1 css={s.headerTitle}>관리자 공지사항 게시판</h1>
        <div css ={s.boardListLayout}>
          <div css={s.boardListHeader}>
            <div css={s.boardListHeader}>
                <div>관리자 아이디</div>
                <div>공지사항 제목</div>
                <div>공지사항 내용</div>
                <div>작성일</div>
            </div>
        </div>
      <div css={s.CommunityboardListItem}>

        {communityBoardAdminList.map((data) => (
            <div key={data.communityBoardAdminId}
            onClick={() => navigate(`/community/admin/${data.communityBoardAdminId}/?communityBoardAdminId=${data.communityBoardAdminId}`)}>
            <div>{data.userId}</div>
            <div>{data.communityBoardAdminTitle}</div>
            <div dangerouslySetInnerHTML={{__html:data.communityBoardAdminContent}}></div>
            <div>{data.createDate}</div>
            </div>

          ))}
      </div>
    </div>
  </div>
<FaPencil css={s.writeButton} onClick={handleOnClicToWritePage}></FaPencil>
  
  </div>
  )
}
export default CoummunityBoardAdminPage; 