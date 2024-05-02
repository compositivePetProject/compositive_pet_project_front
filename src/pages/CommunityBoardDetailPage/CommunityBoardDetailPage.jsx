/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useState } from 'react';

import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { deleteCommunityBoardLiketRequest, deleteCommunityBoardRequestById,  getCommunityBoardLikeRequest,  getCommunityBoardLikeStatusRequest,  getCommunityBoardRequestById, postCommunityBoardLikeRequest, putCommunityBoardRequest } from "../../apis/api/communityBoard";
import { AiFillHeart } from "react-icons/ai";


function CommunityBoardDetailPage(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLiked, setIsLiked] = useState(false);
  const [user, SetUser] = useState("")
  const queryClient = useQueryClient();
  const principalQueryState = queryClient.getQueryState("principalQuery")
  const navigate = useNavigate();
  // const communityBoardId = parseInt(searchParams.get("communityBoardId"))
  const [board, setBoard ] = useState("");
  const userId = principalQueryState.data?.data.userId;


  const getCommunityBoardLikeStatusQuery = useQuery(
    ["getCommunityBoardLikeStatusQuery" , userId, searchParams.get("communityBoardId")],
    async() => await getCommunityBoardLikeStatusRequest({
      communityBoardId : searchParams.get("communityBoardId"),
      userId : userId
    }),
    {
      retry : 0,
      refetchOnWindowFocus : false,
      onSuccess: response  => {
        console.log(response.data)
        setIsLiked(response.data)

      }
    }
  )


  const getBoardLikeCountQuery = useQuery(
    ["getBoardLikeCountQuery", searchParams.get("communityBoardId")],
    async () => await getCommunityBoardLikeRequest ( {
      communityBoardId : searchParams.get("communityBoardId")
    }),

    {
      retry : 0,
      refetchOnWindowFocus: false,
      onSuccess: response=> {
        SetUser(response.data)
      },
      onError: (error) => {
        console.log(error)
      }
    }

  )


  const postBoardLikeQuery = useMutation({
    mutationKey: "postBoardLikeMutation",
    mutationFn: postCommunityBoardLikeRequest,
    onSuccess: (response) => {

    },
    onError: (error) => {

    }
})

const deleteBoardLikeQuery = useMutation({
    mutationKey: "deleteBoardLikeMutation",
    mutationFn: deleteCommunityBoardLiketRequest,
    onSuccess : response => {

    },

    onError: error => {

    }
})



const toggleBoardFavoriteStatusButton = async () => {
  if (isLiked) {
      await deleteBoardLikeQuery.mutateAsync({
          communityBoardId : searchParams.get("communityBoardId"),
          userId : userId
      });
    }else{
      await postBoardLikeQuery.mutateAsync( {
        communityBoardId : searchParams.get("communityBoardId"),
        userId : userId
      });
    }

    const response = await getCommunityBoardLikeRequest({
      communityBoardId : searchParams.get("communityBoardId")
    });
    SetUser(response.data)
    setIsLiked(Liked => !Liked);

  }

  
 
  const getCommunityBoardQuery = useQuery(
    ["getCommunityBoardQuery", searchParams.get("communityBoardId")],
    async () => await getCommunityBoardRequestById ({
      communityBoardId : searchParams.get("communityBoardId")
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
      alert('오류')
      console.log(error)
    }
  })
 

  const handleChangeCommuniteyBoardDelete  = () => {
    const boardDelete = window.confirm("게시글을 삭제하시겠습니까?")
    if(boardDelete) {
      deleteCommunityBoardQuery.mutate(
        searchParams.get("communityBoardId")
      )
    }
  } 

  return (
    <div css={s.containter}>
      <div css={s.boardContent}>  
        {board && 
          <>
            <div>{board.communityBoardTitle}</div>
            <div dangerouslySetInnerHTML={{ __html: board.communityBoardContent }}></div>
            <div>{board.communityBoardAnimalCategoryNameKor}</div>
            <div>{board.createDate}</div>
  
            <div css={s.buttonContainer}>
              {board.userId === userId && (
                <button 
                  css={s.updatebutton} 
                  onClick={() => {
                    navigate(`/community/board/update/${board.communityBoardId}/?communityBoardId=${board.communityBoardId}`);
                  }}
                >
                 게시글 수정
                </button>
              )}
  
              <div>
                <button onClick={toggleBoardFavoriteStatusButton}>
                  {isLiked ? <AiFillHeart css={s.HeartIcon} /> : <AiFillHeart />}
                </button>
                <button css={s.deletebutton} onClick={handleChangeCommuniteyBoardDelete}>
                  게시글 삭제
                </button>
              </div>
            </div>
          </>
        }
      </div>
    </div>
  );
}
export default CommunityBoardDetailPage;

