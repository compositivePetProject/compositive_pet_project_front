/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { AiOutlineHeart } from "react-icons/ai";
import { GrView } from "react-icons/gr";

function BoardBox({ boardTitle, updateDate, userNickname, heartCount, commentCount, viewCount, onClick }) {
  return (
    <div css={s.boardCard} onClick={onClick}>
        <div css={s.imageBox}>이미지</div>
        <div css={s.contentBox}>
            <div>{boardTitle}</div>
            <div>{updateDate}</div>
        </div>
        <div css={s.writerInfoBox}>
            <div>작성자: {userNickname}</div>
            <div css={s.iconBox}>
                <div><AiOutlineHeart/>{heartCount}</div>
                <div><HiOutlineChatBubbleOvalLeft/>{commentCount}</div>
                <div><GrView/>{viewCount}</div>
            </div>
        </div>
    </div>
  )
}

export default BoardBox;