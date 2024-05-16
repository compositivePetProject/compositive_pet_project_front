/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { deleteCommunityBoardLikeRequest, deleteCommunityBoardRequestById, getCommunityBoardLikeCountRequest, getCommunityBoardLikeStatusRequest,  getCommunityBoardRequestById, postCommunityBoardLikeRequest, putCommunityBoardRequest} from "../../apis/api/communityBoard";
import { AiFillHeart } from "react-icons/ai";
import { deleteCommunityBoardCommentRequest, getCommunityBoardCommentByBoardIdRequest, postCommunityBoardCommentRequest, putCommunityBoardCommentRequest } from "../../apis/api/communityBoardComment";
import BoardContentBox from "../../components/BoardContentBox/BoardContentBox";
import { GrFormView } from "react-icons/gr";
import { LiaCommentAltSolid } from "react-icons/lia";
import Quill from "../../components/Quill/Quill";
import BoardCommentBox from "../../components/BoardCommentBox/BoardCommentBox";
import getServerAddress from "../../constants/serverAddress";


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
    const communityBoardId = parseInt(searchParams.get("communityBoardId"))
    const communityBoardCommentId = parseInt(searchParams.get("communityBoardCommentId"))
    const [ boardComment, setBoardCommnent ] = useState([])
    const [ commentButtonState, setCommentButtonState ] = useState(0);
    const [ commentValue, setCommentValue ] = useState("");
    const [ commentId, setCommentId ] = useState(0);


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


   const toggleBoardFavoriteStatusButton = async () => {
    if (!principalQueryState.data?.data.userId) {
      alert("로그인 후 이용 바랍니다.")
      window.location.replace("/auth/authentication");
      return;
    }
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
          communityBoardId : searchParams.get("communityBoardId")
      })
      
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
              console.log(data)
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
        window.location.reload()
      },
      onError: error => {
        alert("오류")
        console.log (error)
      }
    })


    const deleteCommentSubmit = (commentId) => {
      if(window.confirm("해당 댓글을 삭제하시겠습니까?")) {
        deleteBoardCommentQuery.mutate(commentId);
        const params = new URLSearchParams(searchParams);
        params.delete('edit');
        setSearchParams(params);
      }
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
        window.location.reload();
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
        const params = new URLSearchParams(searchParams);
        params.delete('edit');
        setSearchParams(params);
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

    const postBoardCommentQuery = useMutation({
      mutationKey: "postBoardCommentQuery",
        mutationFn: postCommunityBoardCommentRequest,
        onSuccess: response => {
            console.log(response);
            alert("작성하신 댓글이 등록이 되었습니다.");
            window.location.reload()
        },
        onError: error => {
            console.log(error);
        }
    });

  


    const updateBoardCommentQuery = useMutation({
      mutationKey: "updateBoardCommentQuery",
      mutationFn: putCommunityBoardCommentRequest,
      onSuccess: response => {
          alert('작성하신 댓글이 수정 되었습니다.');
          window.location.reload()
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

  const submitInputComment = () => {
    if(commentButtonState !== 1) {
      if(window.confirm("댓글을 작성하시겠습니까?")) {
        if(principalQueryState?.status === "success") {
          if(!commentValue) {
            alert("댓글을 작성해주세요.");
            return;
          }
          postBoardCommentQuery.mutate({
            communityBoardId: searchParams.get("communityBoardId"),
            userId: principalQueryState.data?.data.userId,
            communityBoardCommentContent: commentValue
          });
          const params = new URLSearchParams(searchParams);
          params.delete('edit');
          setSearchParams(params);
        } else {
          alert("로그인 후 사용이 가능한 서비스 입니다.")
          window.location.replace(`http://${getServerAddress()}/auth/authentication`);
        }
      }
    } else {
      if(window.confirm("댓글을 수정하시겠습니까?")) {
        updateBoardCommentQuery.mutate({
          communityBoardCommentId: commentId,
          communityBoardCommentContent: commentValue
        });
        const params = new URLSearchParams(searchParams);
        params.delete('edit');
        setSearchParams(params);
      }
    }
  }

  
  const postCommentOnChange = (value) => {
    setCommentValue(value);
  }

  useEffect(() => {
    console.log(searchParams.get("edit"))
    console.log(typeof(searchParams.get("edit")))
    if(searchParams.get("edit") === "true") {
      setButtonState(1);
    }
  }, [searchParams])

  const handleCancel = () => {
    setButtonState(0);
    if(searchParams.get("edit") === "true") {
      navigate("/account/mypage/community/boards");
    }
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
          <div>  
            { principalQueryState.data?.data.userId === board.userId
            ? <div css={s.buttonBox}>
                { buttonState === 1
                  ? 
                  <>
                    <button css={s.button} onClick={handleChangeCommunityBoardUpdate}>확인</button>
                    <button css={s.button} onClick={handleCancel}>취소</button>
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
            <div id="target">
              {
              buttonState === 1
              ?
                <div>
                  <div css={s.inputContainer}>
                    <div css={s.selectLabel}>제목</div>
                    <input css={s.input} type="text" defaultValue={board.communityBoardTitle} onChange={updateTitleOnchange} />
                  </div>
                <Quill value={board.communityBoardContent} onChange={updateOnchange}/>
                </div>
              :
                <BoardContentBox title={board.communityBoardTitle} userNickname={board.userName} writeDate={board.updateDate} content={board.communityBoardContent} />
              }
            </div>
            <div css={s.commentBox}>
              <Quill value={commentValue} onChange={postCommentOnChange} height={"100px"} />
              <div>
                <button onClick={submitInputComment}>{commentButtonState === 1 ? "수정하기" : "작성하기"}</button>
              </div>
            </div>
            <div>
              <div>
                {
                  boardComment.map(comment => 
                    <BoardCommentBox
                      pirincipal={comment.userId}
                      key={comment.communityBoardCommentId}
                      commentId={comment.communityBoardCommentId}
                      commentIdState={setCommentId}
                      userNickname={comment.userNickname}
                      updateDate={comment.updateDate}
                      commentContent={comment.communityBoardCommentContent}
                      deleteComment={() => deleteCommentSubmit(comment.communityBoardCommentId)}
                      updateComment={setCommentValue}
                      buttonState={setCommentButtonState}
                      target={"target"}
                    />
                    )
                  }
              </div>
            </div>
        </div>
    </div>
    );
  }
export default CommunityBoardDetailPage;
