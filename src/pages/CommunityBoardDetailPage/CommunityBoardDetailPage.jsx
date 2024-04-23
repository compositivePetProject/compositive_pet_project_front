/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useEffect, useState } from 'react';

import { useMutation, useQuery } from 'react-query';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { deleteCommunityBoardRequestById,  getCommunityBoardRequestById, putCommunityBoardRequest } from "../../apis/api/communityBoard";

function CommunityBoardDetailPage(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const communityBoardId = parseInt(searchParams.get("communityBoardId"))
  const [board, setBoard ] = useState("");
  
 
  const getCommunityBoardQuery = useQuery(
    ["getCommunityBoardQuery", communityBoardId],
    async () => await getCommunityBoardRequestById ({
      communityBoardId : communityBoardId
    }),
  {
    retry: 0,
    refetchOnWindowFocus : false,
    onSuccess: response => {
      console.log(response)
      setBoard(response.data)

},
  onError: (error) => {
    console.log(error);
  }
}
)

  const deleteCommunityBoardQuery = useMutation ({
    mutationKey: "deleteCommunityBoardQuery",
    mutationFn : deleteCommunityBoardRequestById,
    onSuccess: response => {
      window.location.reload();
      alert("게시글 삭제가 완료되었습니다.")
      navigate ("/community/getboards")
    },
    onError: error => {
      alert('오류떴다 메롱')
      console.log(error)
    }
  })
 

  const updateCommunityBoardQuery = useMutation ({
    mutationKey: "updateCommunityBoardQuery",
    mutationFn: putCommunityBoardRequest,
    onSuccess: response => {
      alert("댓글 수정이 완료 되었습니다.")
      window.location.reload()
    },

    onError: error => {

    }
  })

  const handleChangeCommuniteyBoardDelete  = () => {
    const boardDelete = window.confirm("게시글을 삭제하시겠습니까?")
    if(boardDelete) {
      deleteCommunityBoardQuery.mutate(
        communityBoardId
      )
    }
  } 



  const handleChangeCommunityBoardUpdate  = () => {
    const boardUpdate = window.confirm("게시글을 수정하시겠습니까?")
    if(boardUpdate) {
    updateCommunityBoardQuery.mutate(
      communityBoardId

      )
    }
  }

    return (
    <div css={s.containter}>
      <div css={s.boardContent}>  
      {board.communityBoardTitle} 
      {board.communityBoardContent} 
      {board.communityBoardAnimalCategoryNameKor} 
      {board.createDate}
      </div>
     
     <button css={s.deletebutton} onClick={handleChangeCommuniteyBoardDelete}>게시글 삭제</button>
   
     
    </div>
  );
}
export default CommunityBoardDetailPage;