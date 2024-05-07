/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { AiOutlineHeart } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import { useEffect } from "react";
import { images } from "../../constants/mainCommnityImage";

function BoardBox({ boardTitle, updateDate, userNickname, heartCount, commentCount, viewCount, onClick, animalCategoryId, contentImg }) {
  const imgRegex = /<img[^>]+>/;
  const img = imgRegex.exec(contentImg);

  return (
    <div css={s.boardCard} onClick={onClick}>
        { 
          img ?
          <div css={s.imageBox} dangerouslySetInnerHTML={{ __html: img}}></div> : 
          <div css={s.imageBox}>
            {/* 기본 이미지 동물 카테고리별로 예시 이미지 해야됨 */}
            {animalCategoryId === 1 ?
              <img src={images[0].img} /> :
              <img src={images[0].img} />
            }
          </div>
        }
        
        <div css={s.contentBox}>
          <div>
            <div>{boardTitle}</div>
            <div>{updateDate}</div>
          </div>
          <div>
            <div>
              <span>글쓴이:&nbsp;</span>
              <span>{userNickname}</span>
            </div>
            <div css={s.countBox}>
              <div>
                <AiOutlineHeart/>
                <span>{heartCount}</span>
              </div>
              <div>
                <HiOutlineChatBubbleOvalLeft/>
                <span>{commentCount}</span>
              </div>
              <div>
                <GrView/>
                <span>{viewCount}</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default BoardBox;