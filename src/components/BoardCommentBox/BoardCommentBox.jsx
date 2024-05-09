/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { AiOutlineHeart } from "react-icons/ai";
import { GrView } from "react-icons/gr";

function BoardCommentBox({updateDate, userNickname, commentContent }) {
  return (
      <div css={s.commentCard}>
          <div css={s.commentHeader}>
              <div css={s.nickname}>{userNickname}</div>
              <div css={s.updateDate}>{updateDate}</div>
          </div>
          <div>
              <div>{commentContent}</div>
          </div>
      </div>
  )
}

export default BoardCommentBox;