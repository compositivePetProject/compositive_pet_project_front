/** @jsxImportSource @emotion/react */
import { getCommunityBoardAllRequest } from "../../apis/api/getCommunityBoardAll";
import * as s from "./style";
import { useEffect, useState } from "react";
import { FaPencil } from "react-icons/fa6";



 function CommunityBoardPage() {
    const[communityBoardList, setCommunityBoardList] = useState([]);
    const[error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async() => { 
            try{
                const response = await getCommunityBoardAllRequest();
                setCommunityBoardList(response);///
                console.log(response);
            }catch(error){
                setError(error);
                console.log(error);
            }
        };

    fetchData();
 }, []);
    
 
  return (
    <div>
        <div css={s.layout} >
            <h2>커뮤니티 갤러리 게시판</h2>
                <div css={s.boardholder}>
            {communityBoardList.map((data) => (
               
                <div key={data.communityBoardId}>
                    <div css={s.boardholder}>                
                        <div css={s.li}>제목: {data.communityBoardTitle}</div>
                        <div css={s.li}>내용: {data.communityBoardContent}</div>
                        <div css={s.li}>닉네임: {data.userName}</div>
                        <div css={s.li}>작성일: {data.createDate}</div>
                    </div>
                    <button css={s.writeButton}><FaPencil/></button>
                  
                </div>
            ))}
        </div>
    </div>
</div>
  )
}

export default CommunityBoardPage;