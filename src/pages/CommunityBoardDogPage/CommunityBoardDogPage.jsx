/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./style";
import { getCommunityBoardDogRequest } from "../../apis/api/getCommunityBoardDog";

function CommunityBoardDogPage() {
    const [communityBoardList, setCommunityBoardList] = useState([]);
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = await getCommunityBoardDogRequest();
                setCommunityBoardList(response)
                console.log(response)
            }catch(error){
                setError(error)
                console.log(error)
            }
        }

    fetchData();
}, []); 

  return (
    <div>
        <h1>강아지 커뮤니티 게시판</h1>
        <div css={s.container}>
            {communityBoardList.map((data) => (
                <div key={data.communityBoardId}>
                    <div css={s.ul}>
                        <div css={s.li}>제목: {data.communityBoardTitle}</div>
                        <div css={s.li}>내용: {data.communityBoardContent}</div>
                        <div css={s.li}>닉네임: {data.userName}</div>
                        <div css={s.li}>동물카테고리: {data.communityBoardAnimalCategoryNameKor}</div>
                        <div css={s.li}>작성일: {data.createDate}</div>
                    </div>
                </div>
             ))}
        </div>
    </div>
    )
}

export default CommunityBoardDogPage;