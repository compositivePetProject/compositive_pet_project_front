/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { deleteCommunityBoardLikeRequest, deleteCommunityBoardRequestById, getCommunityBoardLikeCountRequest, getCommunityBoardLikeStatusRequest,  getCommunityBoardRequestById, postCommunityBoardLikeRequest, putCommunityBoardRequest} from "../../apis/api/communityBoard";
import { AiFillHeart } from "react-icons/ai";
import { deleteCommunityBoardCommentRequest, getCommunityBoardCommentByBoardIdRequest, getCommunityBoardCommentRequest, postCommunityBoardCommentRequest, putCommunityBoardCommentRequest } from "../../apis/api/communityBoardComment";
import { useQuillInput } from "../../hooks/useQuillInput";
import { getCommunityBoardViewRequest, postCommunityBoardViewRequest } from "../../apis/api/communityBoardView";
import { BsEye } from "react-icons/bs";

function CommunityBoardDetailPage(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState("")
  const [viewCount, setViewCount] = useState();
  const queryClient = useQueryClient();
  const principalQueryState = queryClient.getQueryState("principalQuery")
  const navigate = useNavigate();
  const communityBoardId = parseInt(searchParams.get("communityBoardId"))
  const communityBoardCommentId = parseInt(searchParams.get("communityBoardCommentId"))
  const [board, setBoard ] = useState("");
  const userId = principalQueryState.data?.data.userId;
  const [boardComment, setBoardCommnent] = useState([])
 
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
    const response = await getCommunityBoardLikeCountRequest({
        communityBoardId: communityBoardId 
    })
    setUser(response.data)
    setIsLiked(Liked => !Liked);
  }

  // const postBoardViewQuery = useMutation({
  //   mutationKey: "postBoardViewQuery",
  //   mutationFn: postCommunityBoardViewRequest,

  //   onSuccess: response => {

  //   },
  //   onError: error => {
  
  //   }
  
  // })

  // const getBoardViewQueryCount = useQuery(
  //   ["getBoardViewQueryCount", communityBoardId],
  //   async () => await getCommunityBoardViewRequest({
  //     communityBoardId : communityBoardId

  //   }),
  //   {

  //     retry: 0,
  //     refetchOnWindowFocus: false,
  //     onSuccess: response => {
  //       console.log(response)
  //       setViewCount(response.data)
  //     },

  //     onError: (error) => {
  //       console.log (error)
  //     }
  //   }
  // )


  // const getBoardFavoriteQuery = useQuery(
  //   ["getBoardFavoriteQuery",communityBoardId],
  //   async () => await getCommunityBoardLikeCountRequest({
  //     communityBoardId : communityBoardId
  //   }),
  //   {

 
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

  const getBoardCommentQuery = useQuery(
    ["getBoardCommentQuery", searchParams.get("communityBoardId"), userId], 
    async () => {
        const response = await getCommunityBoardCommentByBoardIdRequest({
            communityBoardId: searchParams.get("communityBoardId"),
            userId: userId
        });
        return response.data; 
    },
    {
        retry: 0, 
        refetchOnWindowFocus: false, 
        onSuccess: data => {
            setBoardCommnent(data); 
        },
        onError: error => {
            console.error(error); 
        }
    }
  )

  const deleteBoardCommentQuery = useMutation({
    mutationKey: "deleteBoardCommentQuery",
    mutationFn: deleteCommunityBoardCommentRequest,
    onSuccess: response => {
      alert("작성하신 댓글이 삭제 되었습니다.")
      window.location.reload("/community/getboards")
    },
    onError: error => {
      alert("오류")
      console.log (error)
    }

  })
  
  const handleChangeCommuniteyBoardDelete  = () => {
    const boardDelete = window.confirm("게시글을 삭제하시겠습니까?")
    if(boardDelete) {
      deleteCommunityBoardQuery.mutate(
        searchParams.get("communityBoardId")
      )
    }
  const handleChangeBoardCommentDelete = () => {
    const commentDelete = window.confirm("댓글을 삭제 하시겠습니까?")
    if(commentDelete) {
      deleteBoardCommentQuery.mutate(
        searchParams.get("communityBoardCommentId")
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

              <div>
                  <button onClick={toggleBoardFavoriteStatusButton}>
                    {isLiked ? <AiFillHeart css={s.HeartIcon} /> : <AiFillHeart />}
                    <div css={s.totalLikeCount}>{user.totalUserIdCount}</div>
                  </button>

                  {/* <BsEye css={s.viewIcon} />
                      <div css={s.totalViewCount}>{user.totalViewCount}</div> */}

                  {board.userId === userId && (
                  <button css={s.deletebutton} 
                  onClick={handleChangeCommuniteyBoardDelete}
                  >
                    게시글 삭제
                  </button>
                  )}
            </div>

                <div>
                    <button
                    css={s.commentbutton}
                    onClick={() => {
                      navigate(`/community/comment/${board.communityBoardId}/?communityBoardId=${board.communityBoardId}`) 
                    }}
                  >
                    댓글 작성
                    </button>  
                 
                 </div>
            

                  <div css={s.CommunityContentboardListItem}>
                    {boardComment.map((comment) => (
                      <div key={comment.communityBoardCommentId} css={s.commentbox1}>
                        
                        
                          <div css={s.commentbox2}>
                              <div dangerouslySetInnerHTML={{ __html: comment.communityBoardCommentContent }}></div>
                                  </div>
                                <div>{comment.createDate}</div>

                                <div>
                                {board.userId === userId && (
                                    <button onClick={handleChangeBoardCommentDelete}>
                                    댓글 삭제
                                    </button>
                                )}
                                </div>

                                <div>
                                  {board.userId === userId && (
                                    <button
                                    css={s.updateCommentButton}
                                    onClick={() => {
                                      navigate(`/community/update/comment${comment.communityBoardCommentId}/?communityBoardCommentId=${comment.communityBoardCommentId}`) 
                                    }}
                                    > 
                                    댓글 수정</button>

                                  )}
                                  </div>
                                </div>
                              ))}
                        </div>
                    </div>
                  </>
                }
            </div>
        </div>
      );
    }
export default CommunityBoardDetailPage;

