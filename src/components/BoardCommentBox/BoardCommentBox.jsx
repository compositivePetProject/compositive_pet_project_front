/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { AiOutlineHeart } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import { useQueryClient } from "react-query";
import { useEffect, useState } from "react";

function BoardCommentBox({updateDate, userNickname, commentId, commentIdState, commentContent, pirincipal, updateComment, deleteComment, buttonState}) {

  const queryClient = useQueryClient();
  const principalQueryState = queryClient.getQueryState("principalQuery");

  const updateButtonClick = () => {
    updateComment(commentContent);
    buttonState(1);
    commentIdState(commentId);
  }

  return (
    <div css={s.commentCard}>
        <div css={s.commentHeader}>
            <div css={s.userInfo}>
              <div css={s.nickname}>{userNickname}</div>
              <div css={s.updateDate}>{updateDate}</div>
            </div>
            {
              principalQueryState.data?.data?.userId === pirincipal
              ?
                <div>
                    <button onClick={updateButtonClick} css={s.button}>수정</button>
                    <button css={s.button} onClick={deleteComment}>삭제</button>
                </div>
              :
                <></>
            }
        </div>

        <div style={{padding : "0px 10px"}}>
            <div dangerouslySetInnerHTML={{__html: commentContent}}></div>
        </div>
    </div>
  )
}

export default BoardCommentBox;