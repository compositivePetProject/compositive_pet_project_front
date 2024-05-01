/** @jsxImportSource @emotion/react */

import { useNavigate, useSearchParams} from "react-router-dom";
import { deleteCommunityBoardLiketRequest, getCommunityBoardListRequest, getCommunityBoardPageCountRequest, postCommunityBoardLikeRequest } from "../../apis/api/communityBoard";
import * as s from "./style";
import { useEffect, useState } from "react";
import { FaPencil } from "react-icons/fa6";
import { useMutation, useQuery } from "react-query";
import CommunityBoardPageCount from "../../components/CommunityBoardPageCount/CommunityBoardPageCount";



 function CommunityBoardPage() {
    
    const navigate = useNavigate();
    const [searchParams , setSearchParams] = useSearchParams();
    const [communityBoardList, setCommunityBoardList] = useState([]);
    const [error, setError] = useState(null);
    const [maxPageNumber, setMaxPageNumber] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const page = parseInt(searchParams.get("page")) || 1;
    const pageSearchCount = 10;
    const firstPage = (page - 1) * pageSearchCount + 1;
    const lastPage = page * pageSearchCount;
     

    console.log(firstPage)
    console.log(lastPage)

  


    const getBoardPageQuery = useQuery (
        ["getBoardPageQuery"],
        async () => getCommunityBoardPageCountRequest({
            page,
            count : pageSearchCount
        }),

    {
        
        refetchOnWindowFocus : false,
        onSuccess : response => {
            console.log(response) 
            setMaxPageNumber(response.data.maxPageNumber)
            setTotalCount(response.data.totalCount)
        },

        onError : (error) => {
            console.log(error);
            }
            
        }

    )

   


    useEffect(() => {
        const fetchData = async() => { 
            try{
                const response = await getCommunityBoardListRequest();
                setCommunityBoardList(response);///
                console.log(response);
            }catch(error){
                setError(error);
                console.log(error);
            }
        }

    fetchData();
 }, []);

 const handleOnClickToWritePage = () => {
    navigate("/community/board/write")
 }

 const handleOnPageChange = (pageNumber) => {
    setSearchParams ({page: pageNumber})
 }
 
  return (
        <div css={s.layout}>
            <div>
            <h1 css={s.headerTitle}>커뮤니티 갤러리 게시판</h1>
                <div css={s.boardListLayout}>
                    <div css={s.boardListHeader}>
                        <div css={s.boardListHeader}>
                            <div>제목</div>
                            <div>내용</div>
                            <div>카테고리</div>
                            <div>닉네임</div>
                            <div>등록일</div>
                        </div>
                    </div>
                <div css={s.CommunityboardListItem}>
        
                    {communityBoardList.map((data) => (
                        <div key={data.communityBoardId}
                        onClick={() => navigate(`/community/board/${data.communityBoardId}/?communityBoardId=${data.communityBoardId}`)}>
                        <div>{data.communityBoardTitle}</div>
                        <div dangerouslySetInnerHTML={{__html:data.communityBoardContent}}></div>
                        <div>{data.communityBoardAnimalCategoryNameKor}</div>
                        <div>{data.userName}</div>
                        <div>{data.createDate}</div>
                       </div>
                       
                    ))}
                   </div>
                </div>
            </div>
        
        <FaPencil css={s.writeButton} onClick={handleOnClickToWritePage}></FaPencil>
        <CommunityBoardPageCount maxPageNumber={maxPageNumber} totalCount={totalCount} onChange={handleOnPageChange} />
        </div>
        ) 
    }
export default CommunityBoardPage;