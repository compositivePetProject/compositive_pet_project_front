/** @jsxImportSource @emotion/react */
import { useNavigate, useSearchParams } from "react-router-dom";
import * as s from "./style";
import { useEffect, useState } from "react";
import { deleteAdoptBoardById, getAdoptById, putAdoptRequest } from "../../../apis/api/Adopt";
import { useMutation, useQuery, useQueryClient } from "react-query";
import BoardContentBox from "../../../components/BoardContentBox/BoardContentBox";
import Quill from "../../../components/Quill/Quill";

function AdoptCommunityBoardDetailPage() {
  const [ searchParams, setSearchParams ] = useSearchParams();
  const queryClient = useQueryClient();
  const principalQueryState = queryClient.getQueryState("principalQuery");
  const [ boardDetail, setBoardDetail ] = useState({});
  const navigate = useNavigate();
  const [ buttonState, setButtonState ] = useState(0); // 1 수정 2 삭제
  const [ titleValue, setTitleValue ] = useState("");
  const [ contentValue, setContentValue ] = useState("");

  useEffect(() => {
    console.log(principalQueryState);
    console.log(boardDetail)
  }, [principalQueryState, boardDetail])

  const getAdoptCommunityBoardDetail= useQuery(
    ["getAdoptCommunityBoardDetail"],
    async () => await getAdoptById(
      parseInt(searchParams.get("boardid"))
    ),
    {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
            console.log(response)
            setBoardDetail(response);
        },
        onError: (error) => {
            console.log(error);
        }
    }
  );

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


  useEffect(() => {
    console.log(boardDetail)
  }, [boardDetail])

  return (
    <div>
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
        좋아요, 댓글, 조회수 관련 코드 작성해주세요.
      </div>

    </div>
  )
}

export default AdoptCommunityBoardDetailPage