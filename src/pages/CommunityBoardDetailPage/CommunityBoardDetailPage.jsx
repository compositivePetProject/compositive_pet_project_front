/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useState } from 'react';

import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { deleteCommunityBoardLikeRequest, deleteCommunityBoardRequestById, getCommunityBoardLikeCountRequest, getCommunityBoardLikeStatusRequest,  getCommunityBoardRequestById, postCommunityBoardLikeRequest} from "../../apis/api/communityBoard";
import { AiFillHeart } from "react-icons/ai";
import { getCommunityBoardCommentByBoardIdRequest, getCommunityBoardCommentRequest, postCommunityBoardCommentRequest } from "../../apis/api/communityBoardComment";


function CommunityBoardDetailPage(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState("")
  const queryClient = useQueryClient();
  const principalQueryState = queryClient.getQueryState("principalQuery")
  const navigate = useNavigate();
  const communityBoardId = parseInt(searchParams.get("communityBoardId"))
  const [board, setBoard ] = useState("");
  const userId = principalQueryState.data?.data.userId;
  const [boardComment, setBoardCommnent] = useState([])
  const [inputBoardComments , setInputBoardComments] = useState("") 


  const getBoardFavoriteStatusQuery = useQuery(
    ["getBoardFavoriteStatusQuery", userId, communityBoardId],
    async () => await getCommunityBoardLikeStatusRequest({
      communityBoardId : communityBoardId,
      userId : userId
    }),

    {
      retry : 0,
      refetchOnWindowFocus: false,
      onSuccess: response => {
        console.log(response.data)
        setIsLiked(response.data)
      },
      onError: (error) => {
        console.log(error)
      }

    }
  )

  const getBoardFavoriteQuery = useQuery(
    ["getBoardFavoriteQuery",communityBoardId],
    async () => await getCommunityBoardLikeCountRequest({
      communityBoardId : communityBoardId
    }),
    {

      retry: 0,
      refetchOnWindowFocus: false,
      onSuccess: response => {
        console.log(response)
        setUser(response.data)
      },

      onError: (error) => {
        console.log (error)
      }
    }
  )
  
const postBoardLikeQuery = useMutation({
  mutationKey: "postBoardLikeQuery",
  mutationFn: postCommunityBoardLikeRequest,
  onSuccess: response => {

  },
  onError: error => {

  }

})

const deleteBoardLikeQuery = useMutation({
  mutationKey : "deleteBoardLikeQuery",
  mutationFn: deleteCommunityBoardLikeRequest,
  onSuccess : response => {
    
  }

})


const toggleBoardFavoriteStatusButton = async () => {
  if (isLiked) {
      await deleteBoardLikeQuery.mutateAsync({
          communityBoardId : communityBoardId,
          userId : userId
      });
    }else{
      await postBoardLikeQuery.mutateAsync( {
        communityBoardId : communityBoardId,
        userId : userId
      });
    }
    setIsLiked(Liked => !Liked);
  }

 
  const getCommunityBoardQuery = useQuery(
    ["getCommunityBoardQuery", communityBoardId],
    async () => await getCommunityBoardRequestById ({
      communityBoardId : communityBoardId,
      userId : userId
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

  const postBoardCommentQuery = useMutation ({
    mutationKey: "postBoardCommentQuery",
    mutationFn: postCommunityBoardCommentRequest,
    onSuccess : response  => {
      window.location.reload();
      alert ("댓글이 작성 되었습니다.")
      navigate ("/community/getboards");
    },
    onError: error => {
      alert("오류")
      console.log(error)
    }
  
  })

  const getBoardCommentQuery = useQuery(
    ["getBoardFavoriteQuery"],
    async () => await getCommunityBoardCommentByBoardIdRequest({
      communityBoardId : communityBoardId,
   
    }),
    {

      retry: 0,
      refetchOnWindowFocus: false,
      onSuccess: response => {
        console.log(response)
        setInputBoardComments(response.data)
      },

      onError: (error) => {
        console.log (error)
      }
    }
  )
  

  const handleChangeCommuniteyBoardDelete  = () => {
    const boardDelete = window.confirm("게시글을 삭제하시겠습니까?")
    if(boardDelete) {
      deleteCommunityBoardQuery.mutate(
        searchParams.get("communityBoardId")
      )
    }
  } 

  const handleChangeBoardComment = () => {
    navigate("/community/comments/")
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

              <t3>댓글</t3>
              <div css={s.CommunitycContentboardListItem}>

                {boardComment.map(comment => (
                  <div key={comment.communityBoardCommentId} css={s.commentbox1}>
                  
                  <div css={s.commentbox2}>
                  <div dangerouslySetInnerHTML={{__html:comment.communityBoardCommentContent}}></div>
                  </div>
                  
                  <div>{comment.createDate}</div>
                  </div>


                ))}
                </div>
            </div>

  
              <div>
                <button onClick={toggleBoardFavoriteStatusButton}>
                  {isLiked ? <AiFillHeart css={s.HeartIcon} /> : <AiFillHeart />}
                  <div css={s.totalLikeCount}>{user.totalLikeCount}</div>
                </button>
                <button css={s.deletebutton} onClick={handleChangeCommuniteyBoardDelete}>
                  게시글 삭제
                </button>

                <button css={s.commentbutton} onClick={handleChangeBoardComment}>댓글 작성</button>
              </div>
             
        
          </>
        }
      </div>
    </div>
  );
}
export default CommunityBoardDetailPage;

