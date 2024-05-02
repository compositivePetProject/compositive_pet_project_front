/** @jsxImportSource @emotion/react */
import * as s from "./style";


import { useEffect, useState } from "react";
import { getBoardCatPageCountRequest, getCommunityBoardCatRequest } from "../../apis/api/communityBoard";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { FaPencil } from "react-icons/fa6";
import { useQuery } from "react-query";
import CommunityCatBoardPageCount from "../../components/CommunityCatBoardPageCount/CommunityCatBoardPageCount";

function CommunityBoardCatPage(props) {

    const navigate = useNavigate();
    const [communityBoardList, setCommunityBoardList] = useState([])
    const [error, setError] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams(0)
    const [catMaxPageNumber,setCatMaxPageNumber] = useState("")
    const [totalCount, setTotalCount] = useState(0)
    const page = parseInt (searchParams.get("page")) || 1;
    const pageSearchCount = 10;
    const firstPage = (page - 1) * pageSearchCount + 1;
    const lastPage = page  * pageSearchCount ;

    console.log(firstPage)
    console.log(lastPage)

    const getBoardPageQuery = useQuery (
        ["getBoardPageQuery"],
        async () => await getBoardCatPageCountRequest({
            page,
            count : pageSearchCount
        }),
        {
            refetchOnWindowFocus : false,
            onSuccess :response => {
                console.log(response)
                setCatMaxPageNumber(response.data.catMaxPageNumber)
                setTotalCount(response.data.totalCount)
            },

            onError : (error) => {
                console.log(error);
            }

        }
    )

    useEffect (() => {
        const fetchData = async () => {
            try  { 
                const response = await getCommunityBoardCatRequest()
                const index = response.slice(firstPage,lastPage)
                setCommunityBoardList(index)
                console.log(index)
            }catch(error) {
                setError(error)
                console.log(error)
            }
        }
            

            fetchData();

        }, [page])
       



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

const handleOnclickToWritePage = () => {
    navigate("/community/board/write")

}

const handleOnPageChange = (pageNumber) => {
    setSearchParams ({page: pageNumber})
} 
    



    return (
        <div css={s.layout}>
            <div>
                <h1 css={s.headerTitle}>고양이 게시판</h1>
                    <div css= {s.boardListLayout}>
                        <div css= {s.boardListHeader}>
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
                 <FaPencil css={s.writeButton} onClick={handleOnclickToWritePage}></FaPencil>
                 <CommunityCatBoardPageCount catMaxPageNumber={catMaxPageNumber} totalCount={totalCount} onChange={handleOnPageChange}/>
            </div>
        );
    }

export default CommunityBoardCatPage;