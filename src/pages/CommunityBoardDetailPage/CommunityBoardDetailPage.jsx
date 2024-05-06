/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useEffect, useState } from 'react';

import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { deleteCommunityBoardLikeRequest, deleteCommunityBoardRequestById, getCommunityBoardLikeCountRequest, getCommunityBoardLikeStatusRequest,  getCommunityBoardRequestById, postCommunityBoardLikeRequest, putCommunityBoardRequest} from "../../apis/api/communityBoard";
import { AiFillHeart } from "react-icons/ai";
import BoardContentBox from "../../components/BoardContentBox/BoardContentBox";
import Quill from "../../components/Quill/Quill";

function CommunityBoardDetailPage(props) {
  const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [user, setUser] = useState("")
    const queryClient = useQueryClient();
    const principalQueryState = queryClient.getQueryState("principalQuery")
    const [ buttonState, setButtonState ] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [board, setBoard ] = useState("");
    const userId = principalQueryState.data?.data.userId;

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
        alert("댓글 수정이 완료 되었습니다.")
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

  
    return (
      <div>
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
      </div>
    );
}
export default CommunityBoardDetailPage;

