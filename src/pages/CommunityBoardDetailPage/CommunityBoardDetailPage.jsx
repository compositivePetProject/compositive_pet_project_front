/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { deleteCommunityBoardLikeRequest, deleteCommunityBoardRequestById, getCommunityBoardLikeCountRequest, getCommunityBoardLikeStatusRequest,  getCommunityBoardRequestById, postCommunityBoardLikeRequest, putCommunityBoardRequest} from "../../apis/api/communityBoard";
import { AiFillHeart } from "react-icons/ai";
import { deleteCommunityBoardCommentRequest, getCommunityBoardCommentByBoardIdRequest, putCommunityBoardCommentRequest } from "../../apis/api/communityBoardComment";
import BoardContentBox from "../../components/BoardContentBox/BoardContentBox";
import Quill from "../../components/Quill/Quill"
import { GrFormView } from "react-icons/gr";
import { LiaCommentAltSolid } from "react-icons/lia";


function CommunityBoardDetailPage(props) {
    const navigate = useNavigate();
    const [ searchParams, setSearchParams ] = useSearchParams();
    const [ user, setUser ] = useState("")
    const queryClient = useQueryClient();
    const principalQueryState = queryClient.getQueryState("principalQuery")
    const [ buttonState, setButtonState ] = useState(0);
    const [ isLiked, setIsLiked ] = useState(false);
    const [ board, setBoard ] = useState("");
    const [ like, setLike ] = useState("");
    const userId = principalQueryState.data?.data.userId;
    

    // 평원
    ///////////////////////////////////////////////////////////

    const communityBoardId = parseInt(searchParams.get("communityBoardId"))
    const communityBoardCommentId = parseInt(searchParams.get("communityBoardCommentId"))
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

    const getBoardFavoriteQuery = useQuery(
      ["getBoardFavoriteQuery",communityBoardId],
      async () => await getCommunityBoardLikeCountRequest({
        communityBoardId : communityBoardId
      }),
      {

        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: response => {
          setLike(response.data)
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
      const response = await getCommunityBoardLikeCountRequest({
          communityBoardId : searchParams.get("communityBoardId")
      })
      
      //수정
      setLike(response.data)
      setIsLiked(Liked => !Liked);
    }



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
        window.location.reload(`/community/getboards?page=1`)
      },
      onError: error => {
        alert("오류")
        console.log (error)
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

    const updateCommunityBoardMutaion = useMutation ({
      mutationKey: "updateCommunityBoardMutaion",
      mutationFn: putCommunityBoardRequest,
      onSuccess: response => {
        alert("게시글 수정이 완료 되었습니다.")
        navigate("/community/getboards?page=1")
      },
      onError: error => {
        alert('오류')
        console.log(error)

      }
    })

    const handleChangeCommuniteyBoardDelete  = () => {
      if(window.confirm("게시글을 삭제하시겠습니까?")) {
        deleteCommunityBoardQuery.mutate(
          searchParams.get("communityBoardId")
        )
      }
    } 

    const handleChangeCommunityBoardUpdate = () => {
      const boardUpdate = window.confirm("게시글을 수정하시겠습니까?")
      if(boardUpdate) {
      updateCommunityBoardMutaion.mutate({
        communityBoardId: board.communityBoardId,
        communityBoardTitle : board.communityBoardTitle,
        communityBoardContent : board.communityBoardContent,
        communityBoardAnimalCategoryId : board.communityBoardAnimalCategoryId
        })
      }
    }

    const updateTitleOnchange = (e) => {
      setBoard({
        ...board,
        communityBoardTitle: e.target.value
      })
    }
  
    const updateOnchange = (value) => {
      setBoard({
        ...board,
        communityBoardContent : value
      })
    }


    const updateBoardCommentQuery = useMutation({
      mutationKey: "updateBoardCommentQuery",
      mutationFn: putCommunityBoardCommentRequest,
      onSuccess: response => {
          alert('작성하신 댓글이 수정 되었습니다.');
          navigate("/community/getboards?page=1"); 
      },
      onError: error => {
          alert("오류 발생");
          console.log(error);
      }
  });



    
    const handleChangeCommunityBoardCommentUpdate = () => {
      const commentUpdate = window.confirm("작성하신 댓글을 수정하시겠습니까?");
      if (commentUpdate) {
      
          updateBoardCommentQuery.mutate({
              communityBoardCommentId: board.communityBoardCommentId,
              communityBoardCommentContent: board.communityBoardCommentContent
          });
      }
  };

  const updateOnCommentchange = (value) => {
    setBoard({
      ...board,
      communityBoardCommentContent : value
    })
  }

  return (
    <div css={s.layout}>
      <div css={s.topIconBox}>
            <div css={s.iconBox}>
              {
                !getCommunityBoardQuery.isLoading && 
                <div css={s.countBox}>
                  <div css={s.heartCount} onClick={toggleBoardFavoriteStatusButton}>
                    {isLiked ? <AiFillHeart css={s.HeartIcon} /> : <AiFillHeart />}
                  </div>
                  <div>{like.favoriteCount}</div>
                </div>
              }
                {
                  !getCommunityBoardQuery.isLoading &&
                  <div css={s.countBox}>  
                    <div css={s.count}>
                      <LiaCommentAltSolid />
                    </div>
                    <div>{board.commentCount}</div>
                  </div>
                }
              {
                !getCommunityBoardQuery.isLoading && 
                <div css={s.countBox}>
                  <div css={s.count}>
                      <GrFormView />
                  </div>
                  <div >{board.viewCount}</div>
                </div>
              }
            </div>
          </div>
          <div css={s.commentBox}>
          <div>  
            { principalQueryState.data?.data.userId === board.userId
            ? <div css={s.buttonBox}>
                { buttonState === 1
                  ? 
                  <>
                    <button css={s.button} onClick={handleChangeCommunityBoardUpdate}>확인</button>
                    <button css={s.button} onClick={() => setButtonState(0)}>취소</button>
                  </>
                  : 
                  <>
                    <button css={s.button} onClick={() => setButtonState(1)}>수정</button>
                    <button css={s.button} onClick={handleChangeCommuniteyBoardDelete}>삭제</button>
                  </>
                }
              </div>
            : <></> 
            }
            {
            buttonState === 1
            ?
              <>
                <input type="text" defaultValue={board.communityBoardTitle} onChange={updateTitleOnchange} />
                <Quill value={board.communityBoardContent} onChange={updateOnchange}/>
              </>
            :
              <BoardContentBox title={board.communityBoardTitle} userNickname={board.userName} writeDate={board.updateDate} content={board.communityBoardContent} />
            }
          </div>

          {/*  /////////////////*/}
          

                <div css={s.buttonContainer}>
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

                        <div css={s.commentBox}>
                        <div>  
                          {principalQueryState.data?.data.userId === board.userId
                          ? <div css={s.buttonBox}>
                          {buttonState === 1
                            ?
                            <>
                              <button css={s.button} onClick={handleChangeCommunityBoardCommentUpdate}>확인</button>
                              <button css={s.button} onClick={() => setButtonState(0)}>취소</button>
                            </>
                            :
                            <>
                            <button css={s.button} onClick={() => setButtonState(1)}>수정</button>
                            <button css={s.button} onClick={handleChangeBoardCommentDelete}>삭제</button>
                            </>
                          }
                          </div>
                         : <></>
                        }
                        {
                        buttonState === 1
                        ?
                        <>
                        <Quill value={board.communityBoardContent} onChange={updateOnCommentchange}/>
                      </>
                      : 
                      <BoardContentBox title={board.communityBoardTitle} userNickname={board.userName} writeDate={board.updateDate} content={board.communityBoardContent} />
                      }
                      </div>
                      
                  </div>
                </div>
               ))}
                </div>
            </div>
        </div>
    </div>
    );
  }
export default CommunityBoardDetailPage;
