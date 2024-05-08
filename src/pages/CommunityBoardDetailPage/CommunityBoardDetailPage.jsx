/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useEffect, useState } from 'react';

import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { deleteCommunityBoardLikeRequest, deleteCommunityBoardRequestById, getCommunityBoardLikeCountRequest, getCommunityBoardLikeStatusRequest,  getCommunityBoardRequestById, postCommunityBoardLikeRequest, putCommunityBoardRequest} from "../../apis/api/communityBoard";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { deleteCommunityBoardCommentRequest, getCommunityBoardCommentByBoardIdRequest, getCommunityBoardCommentRequest, postCommunityBoardCommentRequest, putCommunityBoardCommentRequest } from "../../apis/api/communityBoardComment";
import { useQuillInput } from "../../hooks/useQuillInput";
import { getCommunityBoardViewRequest, postCommunityBoardViewRequest } from "../../apis/api/communityBoardView";
import { BsEye } from "react-icons/bs";
import BoardContentBox from "../../components/BoardContentBox/BoardContentBox";
import Quill from "../../components/Quill/Quill"
import { GrFormView } from "react-icons/gr";
import { FaRegComments } from "react-icons/fa";


function CommunityBoardDetailPage(props) {
    const navigate = useNavigate();
    const [ searchParams, setSearchParams ] = useSearchParams();
    const [ user, setUser ] = useState("")
    const queryClient = useQueryClient();
    const principalQueryState = queryClient.getQueryState("principalQuery")
    const [ buttonState, setButtonState ] = useState(0);
    const [ isLiked, setIsLiked ] = useState(false);
    const [ board, setBoard ] = useState("");
    const userId = principalQueryState.data?.data.userId;
    
    useEffect(() => {
      if (board && board.viewCount !== undefined) {
          getCommunityBoardQuery.refetch();
      }
    }, [board?.viewCount]);
    // 평원
    ///////////////////////////////////////////////////////////

    const communityBoardId = parseInt(searchParams.get("communityBoardId"))
    const [ boardComment, setBoardCommnent ] = useState([])

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
    
    // 삭제 가능
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

    /////////////////////////////////////////////////////////// 

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
        //수정
        const response = await getCommunityBoardRequestById({
            communityBoardId : searchParams.get("communityBoardId")
        })
        //수정
        setBoard(response.data) 
        setIsLiked(Liked => !Liked);
      }


      
    // 창현
    ///////////////////////////////////////////////////////////

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
    ["getBoardCommentQuery", searchParams.get("communityBoardCommentId"),searchParams.get("communityBoardId"), userId], 
    async () => {
        const response = await getCommunityBoardCommentByBoardIdRequest({
            communityBoardCommentId: searchParams.get("communityBoardCommentId"),
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
    )

    const deleteCommunityBoardQuery = useMutation ({
        mutationKey: "deleteCommunityBoardQuery",
        mutationFn : deleteCommunityBoardRequestById,
        onSuccess: response => {
          window.location.replace("/community/getboards?page=1");
          alert("게시글 삭제가 완료되었습니다.")
        },
        onError: error => {
          console.log(error)
        }
    }
  )


  const deleteBoardCommentQuery = useMutation({
    mutationKey: "deleteBoardCommentQuery",
    mutationFn: deleteCommunityBoardCommentRequest,
    onSuccess: response => {
      alert("작성하신 댓글이 삭제 되었습니다.")
      navigate(`/community/getboards?page=1`)
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
        searchParams.get("communityBoardCommentId")
      )
    }
  } 

      }
    )

    const updateCommunityBoardMutaion = useMutation ({
      mutationKey: "updateCommunityBoardMutaion",
      mutationFn: putCommunityBoardRequest,
      onSuccess: response => {
        alert("댓글 수정이 완료 되었습니다.")
        navigate("/community/getboards?page=1")
      },
      onError: error => {
        alert('오류')
        console.log(error)
      }
    })

const handleChangeBoardCommentDelete = (commentId) => {
  console.log(commentId)
  const commentDelete = window.confirm("댓글을 삭제 하시겠습니까?");
  if (commentDelete) {
    deleteBoardCommentQuery.mutate(commentId)

  }
};

const handleChangeBoardComment = (commentId) => {
  navigate(`/community/update/comment?communityBoardCommentId=${commentId}`);
};



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
              {board.userId === userId && (
                <button css={s.deletebutton} 
                onClick={handleChangeCommuniteyBoardDelete}
                  >
                    게시글 삭제
                </button>
                  )}
            </div>

            <div>
                  <button onClick={toggleBoardFavoriteStatusButton}>
                    <div css={s.totalLikeCount}>{isLiked ? <AiFillHeart css={s.HeartIcon} /> : <AiFillHeart />} {user.totalUserIdCount}</div>
                  </button>

                  {/* <BsEye css={s.viewIcon} />
                      <div css={s.totalViewCount}>{user.totalViewCount}</div> */}
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

          <div>
              {boardComment.map((comment) => (
                <div key={comment.communityBoardCommentId} css={s.commentbox1}>
                  <div css={s.commentbox2}>
                    <div dangerouslySetInnerHTML={{ __html: comment.communityBoardCommentContent }}></div>
                  </div>
                    <div>{comment.createDate}</div>
                    <div>
                    {userId === comment.userId && (
                      <button onClick={() => handleChangeBoardCommentDelete(comment.communityBoardCommentId)}>
                        댓글 삭제
                      </button>
                    )}
              </div>
          <div>
            {userId === comment.userId && (
                <button
                  css={s.updateCommentButton}
                  onClick={() => handleChangeBoardComment(comment.communityBoardCommentId)}
                  >
                댓글 수정
              </button>
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
