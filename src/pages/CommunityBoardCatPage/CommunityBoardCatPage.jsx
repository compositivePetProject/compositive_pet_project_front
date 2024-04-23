/** @jsxImportSource @emotion/react */
import * as s from "./style";


import { useEffect, useState } from "react";
import { getCommunityBoardCatRequest } from "../../apis/api/communityBoard";

function CommunityBoardCatPage(props) {
    const [communityBoardList, setCommunityBoardList] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = await getCommunityBoardCatRequest();
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
            <h2>고양이 커뮤니티 게시판</h2>
            <div css={s.container}>
                {communityBoardList.map((data) => (
                    <div key={data.communityBoardId}>
                        <div css={s.ul}>
                            <div css={s.li}>제목: {data.communityBoardTitle}</div>
                            <div css={s.li}>내용 {data.communityBoardContent}</div>
                            <div css={s.li}>닉네임: {data.userName}</div>
                            <div css={s.li}>작성일: {data.createDate}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CommunityBoardCatPage;