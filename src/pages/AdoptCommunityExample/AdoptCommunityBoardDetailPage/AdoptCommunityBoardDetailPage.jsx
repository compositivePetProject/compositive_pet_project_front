/** @jsxImportSource @emotion/react */
import { useNavigate, useSearchParams } from "react-router-dom";
import * as s from "./style";
import { useEffect, useState } from "react";
import { deleteAdoptBoardById, deleteAdoptCommentRequest, deleteAdoptLike, getAdoptById, getAdoptCommentRequest, getFindLikedUser, postAdoptCommentRequest, postAdoptLike, putAdoptRequest, updateAdoptCommentRequest } from "../../../apis/api/Adopt";
import { useMutation, useQuery, useQueryClient } from "react-query";
import BoardContentBox from "../../../components/BoardContentBox/BoardContentBox";
import Quill from "../../../components/Quill/Quill";
import { AiOutlineHeart } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import { SlSpeech } from "react-icons/sl";
import BoardCommentBox from "../../../components/BoardCommentBox/BoardCommentBox";

function AdoptCommunityBoardDetailPage() {
  const [ likedUsers, setLikedUsers] = useState([]);
  const [ searchParams, setSearchParams ] = useSearchParams();
  const queryClient = useQueryClient();
  const principalQueryState = queryClient.getQueryState("principalQuery");
  const [ boardDetail, setBoardDetail ] = useState({});
  const [ boardComment, setBoardComment ] = useState([]);

  const navigate = useNavigate();
  const [ buttonState, setButtonState ] = useState(0); // 1 수정 2 삭제
  const [ inputButtonState, setInputButtonState ] = useState(0); // 1 댓글 입력창 활성화
  const [ titleValue, setTitleValue ] = useState("");
  const [ contentValue, setContentValue ] = useState("");
  const [ commentValue, setCommentValue ] = useState("");
  const [ commentButtonState, setCommentButtonState ] = useState(0);
  const [ commentId, setCommentId ] = useState(0);

  const getFindUserByBoard = useQuery(
    ["getFindUserByBoard",likedUsers],
    async () => await getFindLikedUser (
      parseInt(searchParams.get("boardid"))
    ),
    {
      retry: 0,
      refetchOnWindowFocus: false,
      onSuccess: (response) => {
          response.map(user => {
            setLikedUsers(user)
          })
          
      },
      onError: (error) => {
          console.log(error);
      }
  }
  )

  const getAdoptCommunityBoardComment = useQuery(
    ["getAdoptCommunityBoardComment"],
    async () => await getAdoptCommentRequest (
      parseInt(searchParams.get("boardid"))
    ),
    {
      retry: 0,
      refetchOnWindowFocus: false,
      onSuccess: (response) => {
          console.log(response)
          setBoardComment(response)
      },
      onError: (error) => {
          console.log(error);
      }
  }
  )

  const getAdoptCommunityBoardDetail = useQuery(
    ["getAdoptCommunityBoardDetail"],
    async () => await getAdoptById(parseInt(searchParams.get("boardid"))),
    {
      retry: 0,
      refetchOnWindowFocus: false,
      onSuccess: (response) => {
        setBoardDetail(response);
        // 좋아요 상태 확인
        response.liked ? setLikedUsers([response.user]) : setLikedUsers([]);
      },
      onError: (error) => {
        console.log(error);
      }
    }
  );

  const postAdoptCommunityBoardComment = useMutation({
    mutationKey: "postAdoptCommunityBoardComment",
    mutationFn: postAdoptCommentRequest,
    onSuccess: (response) => {
      setInputButtonState(0)
      window.location.reload();
    },
    onError: (error) => {
    }
  })

  const updateAdoptCommunityBoardComment = useMutation({
    mutationKey: "updateAdoptCommunityBoardComment",
    mutationFn: updateAdoptCommentRequest,
    onSuccess: response => {
      alert("댓글 수정이 완료되었습니다.");
      window.location.reload();
    },
    onError: error => {
      alert("실패");
    }
  })


  const updateAdoptCommunityBoardDetail = useMutation({
    mutationKey: "updateAdoptCommunityBoardDetail",
    mutationFn: putAdoptRequest,
    onSuccess: (response) => {
      setButtonState(0);
      alert("게시물이 수정되었습니다.")
      window.location.reload();
    },
    onError: (error) => {
      alert("오류");
    }
  })
  
  const deleteAdoptCommunityBoardDetail = useMutation({
    mutationKey: "deleteAdoptCommunityBoardDetail",
    mutationFn: deleteAdoptBoardById,
    onSuccess: (response) => {
      setButtonState(0);
      alert("게시물이 삭제되었습니다.")
      navigate(`/ex/adoptcommunity?page=1`);
    },
    onError: (error) => {
      alert("오류");
    }
  });

  const deleteSubmit = () => {
    if(window.confirm("해당 게시물을 삭제하시겠습니까?")) {
      const boardId = parseInt(searchParams.get("boardid"));
      deleteAdoptCommunityBoardDetail.mutate({boardIds: boardId});
    }
  }

  const updateTitleOnchange = (e) => {
    setBoardDetail({
      ...boardDetail,
      adoptationBoardTitle: e.target.value
    })
  }

  const updateOnchange = (value) => {
    setBoardDetail({
      ...boardDetail,
      adoptationBoardContent : value
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
          postAdoptCommunityBoardComment.mutate({
            adoptationBoardId:parseInt(searchParams.get("boardid")),
            userId:principalQueryState.data?.data.userId,
            adoptationBoardCommentContent: commentValue
          });
        } else {
          alert("로그인 후 사용이 가능한 서비스 입니다.")
          window.location.replace("http://localhost:3000/auth/auth");
        }
      }
    } else {
      if(window.confirm("댓글을 수정하시겠습니까?")) {
        updateAdoptCommunityBoardComment.mutate({
          adoptationBoardCommentId: commentId,
          adoptationBoardCommentContent: commentValue
        })
      }
    }
  }

  useEffect(() => {
    console.log(commentValue)
  }, [commentValue])

  const deleteAdoptCommunityBoardFavorite = useMutation({
    mutationKey: "deleteAdoptCommunityBoardFavorite",
    mutationFn: deleteAdoptLike,
    onSuccess: (response) => {

    },
    onError: (error) => {
        
    }
})

  const postAdoptCommunityBoardFavorite = useMutation({
    mutationKey: "postAdoptCommunityBoardFavorite",
    mutationFn: postAdoptLike,
    onSuccess: (response) => {
      getAdoptCommunityBoardDetail.refetch();
    },
    onError: (error) => {
    }
  })

  const deleteAdoptCommunityBoardComment = useMutation({
    mutationKey : "deleteAdoptCommunityBoardComment",
    mutationFn : deleteAdoptCommentRequest,
    onSuccess: response => {
      alert("댓글이 삭제되었습니다.");
      window.location.reload();
    }, 
    onError: error => {
      alert("실패");
    }
  })


  const favoriteBoard = async () => {
    if (likedUsers.userId !== principalQueryState.data?.data.userId) {
      await postAdoptCommunityBoardFavorite.mutateAsync({
        adoptationBoardId: parseInt(searchParams.get("boardid")),
        userId: principalQueryState.data?.data.userId
      });
    } else {
      await deleteAdoptCommunityBoardFavorite.mutateAsync({
        adoptationBoardId: parseInt(searchParams.get("boardid")),
        userId: principalQueryState.data?.data.userId
      });
    }
    // 좋아요 상태 갱신 후 다시 렌더링
    getAdoptCommunityBoardDetail.refetch();
    getFindUserByBoard.refetch();
  }

  
  const updateSubmit = () => {
    if(window.confirm("해당 게시물을 수정하시겠습니까?")) {
      updateAdoptCommunityBoardDetail.mutate({
          adoptationBoardId:boardDetail.adoptationBoardId,
          adoptationBoardTitle: boardDetail.adoptationBoardTitle,
          adoptationBoardContent: boardDetail.adoptationBoardContent,
          boardAnimalCategoryId: boardDetail.boardAnimalCategoryId
      })
    }
  }

  const postCommentOnChange = (value) => {
    setCommentValue(value);
  }

  const deleteCommentSubmit = (adoptationBoardCommentId) => {
    if(window.confirm("해당 댓글을 삭제하시겠습니까?")) {
      deleteAdoptCommunityBoardComment.mutate(adoptationBoardCommentId);
    }
  }


  useEffect(() => {
    console.log(boardDetail)
  }, [boardDetail])

  // useEffect(() => {
  //   console.log(boardComment);
  // }, [boardComment])

  return (
    <div css={s.layout}>
      { principalQueryState.data?.data.username === boardDetail.username
        ? <div css={s.buttonBox}>
            { buttonState === 1
              ? 
              <>
                <button css={s.button} onClick={updateSubmit}>확인</button>
                <button css={s.button} onClick={() => setButtonState(0)}>취소</button>
              </>
              : 
              <>
                <button css={s.button} onClick={() => setButtonState(1)}>수정</button>
                <button css={s.button} onClick={deleteSubmit}>삭제</button>
              </>
            }
          </div>
        : <></> 
      }
      <div>
        {
          buttonState === 1
          ?
            <>
              <input type="text" defaultValue={boardDetail.adoptationBoardTitle} onChange={updateTitleOnchange} />
              <Quill value={boardDetail.adoptationBoardContent} onChange={updateOnchange}/>
            </>
          :
            !getAdoptCommunityBoardDetail.isLoading && <BoardContentBox title={boardDetail.adoptationBoardTitle} userNickname={boardDetail.userNickname} writeDate={boardDetail.updateDate} content={boardDetail.adoptationBoardContent} />
        }
      </div>

      <div>
        {/* 좋아요, 댓글, 조회수 관련 코드 작성해주세요. */}
        <div css={s.iconBox}>
          {
            !getAdoptCommunityBoardDetail.isLoading && 
            <div css={s.count} onClick={favoriteBoard}>
              <AiOutlineHeart/>
              <div>{boardDetail.totalCount}</div>
            </div>
          }
          {
            !getAdoptCommunityBoardDetail.isLoading && 
            <div css={s.count}>
              <GrView/>
              <div >{boardDetail.viewCount}</div>
            </div>
          }
          {
            !getAdoptCommunityBoardDetail.isLoading &&
            <div css={s.count}>
              <SlSpeech />
              <div >{boardDetail.commentCount}</div>
            </div>
          }
        </div>

        <div css={s.boardCommentBox}>
          {
            boardComment.map(comment => 
              <BoardCommentBox
                pirincipal={comment.userId}
                key={comment.adoptationBoardCommentId}
                commentId={comment.adoptationBoardCommentId}
                commentIdState={setCommentId}
                userNickname={comment.userNickname}
                updateDate={comment.updateDate}
                commentContent={comment.adoptationBoardCommentContent}
                deleteComment={() => deleteCommentSubmit(comment.adoptationBoardCommentId)}
                updateComment={setCommentValue}
                buttonState={setCommentButtonState}
              />
              )
          }
        </div>
        <div css={s.commentBox}>
          <Quill value={commentValue} onChange={postCommentOnChange} height={"100px"} />
          <button onClick={submitInputComment}>{commentButtonState === 1 ? "수정하기" : "작성하기"}</button>
        </div>
      </div>

    </div>
  )
}

export default AdoptCommunityBoardDetailPage;