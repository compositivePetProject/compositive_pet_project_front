/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useState } from "react";
import { getBoardDogPageCountRequest, getCommunityBoardDogRequest, getCommunityBoardPageCountRequest } from "../../apis/api/communityBoard";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";
import { FaPencil } from "react-icons/fa6";
import { useQuery } from "react-query";
import { count } from "firebase/firestore";
import CommunityDogBoardPageCount from "../../components/CommunityDogBoardPageCount/CommunityDogBoardPageCount";

function CommunityBoardDogPage() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams(0)
    const [communityBoardList, setCommunityBoardList] = useState([]);
    const [error, setError] = useState(null)
    const [maxPageNumber, setMaxPageNumber] = useState(0)
    const [totalCount, setTotalCount] = useState(0)
    const page = parseInt (searchParams.get("page")) || 1;
    const pageSearchCount = 10;
    const firstPage = (page - 1) * pageSearchCount + 1;
    const lastPage = page  * pageSearchCount ;

    console.log(firstPage)
    console.log(lastPage)

    const getBoardPageQuery = useQuery (
        ["getBoardPageQuery"],
        async () => getBoardDogPageCountRequest({
            page,
            count : pageSearchCount


        }),

        {
            refetchOnWindowFocus : false,
            onSuccess :response => {
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

const handleOnPageChange = (pageNumber) => {
    setSearchParams ({page: pageNumber})
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
        <CommunityDogBoardPageCount maxPageNumber={maxPageNumber} totalCount={totalCount} ></CommunityDogBoardPageCount>
        </div>
        )
    }

export default CommunityBoardDogPage;