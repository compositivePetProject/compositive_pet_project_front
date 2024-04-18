/** @jsxImportSource @emotion/react */
import { RiNurseFill } from "react-icons/ri";
import * as s from "./style";
import React, { useState } from 'react';
import { TbNumber0Small } from "react-icons/tb";
import { QueryClient, useQueryClient } from 'react-query';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { getCommunityBoardRequest } from "../../apis/api/communityBoard";

function CommunityBoardDetailPage(props) {
  const navigate = useNavigate();
  const {boardId} = useParams();
  const [communityBoard, setCommunityBoard ] = useState(null);
  const [communityBoardDetail, setCommunityBoardDetail] = useState(null)

  const DetailCommunityBoard = async () => {
    try{
      const communityBoardDetail = await getCommunityBoardRequest(boardId)
      setCommunityBoard(communityBoardDetail);
      console.log(communityBoard)
    }catch (error) {


    }
  }

  return (
    <div>
      
    </div>
  );
}

export default CommunityBoardDetailPage;