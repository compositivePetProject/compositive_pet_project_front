/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useState } from "react";
import { getCommunityBoardDogRequest } from "../../apis/api/communityBoard";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FaPencil } from "react-icons/fa6";
import { useQuery } from "react-query";

function CommunityBoardDogPage() {
    const navigate = useNavigate();
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

const handleOnClickToWritePage = () => {
    navigate("/community/board/write")

}

  return (
    <div css= {s.layout}>
        <div>
        <h1 css={s.headerTitle}>강아지 게시판</h1>
            <div css={s.boardListLayout}>
                <div css={s.boardListHeader}>
                    <div css={s.boardListHeader}>
                        <div>제목</div> 
                        <div>내용</div> 
                        <div>닉네임</div> 
                        <div>등록일</div> 
                    </div>  
                </div>
            <div css={s.CommunityboardListItem}>
                {communityBoardList.map((data) => (
                        <div
                        key={data.communityBoardId} >
                        <div onClick={() => navigate(`/community/board/${data.communityBoardId}/?communityBoardId=${data.communityBoardId}`)}>
                        {data.communityBoardTitle}</div>
                        <div dangerouslySetInnerHTML={{__html:data.communityBoardContent}}></div>
                        <div>{data.userName}</div>
                        <div>{data.createDate}</div>
                        </div>
                    ))}
                    </div> 
                </div>
            </div>
           
        <FaPencil css={s.writeButton} onClick={handleOnClickToWritePage}></FaPencil>
        </div>
        )
    }

export default CommunityBoardDogPage;