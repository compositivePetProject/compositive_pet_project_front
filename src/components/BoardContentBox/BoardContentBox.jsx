/** @jsxImportSource @emotion/react */
import * as s from "./style";

function BoardContentBox({ title, userNickname, writeDate, content }) {
  return (
    <div css={s.layout}>
        <div css={s.boardHeader}>
            <div css={s.title}>{title}</div>
            <div>
                <div css={s.userNickname}>작성자: {userNickname}</div>
                <div css={s.writeDate}>작성일자: {writeDate}</div>
            </div>
        </div>
        <div css={s.boardContent} dangerouslySetInnerHTML={{ __html: content}}>
            
        </div>
    </div>
  )
}

export default BoardContentBox;