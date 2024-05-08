/** @jsxImportSource @emotion/react */
import * as s from "./style";


import { useEffect, useRef, useState } from "react";
import { getBoardCatPageCountRequest, getCommunityBoardCatRequest } from "../../apis/api/communityBoard";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { FaPencil } from "react-icons/fa6";
import { useQuery } from "react-query";
import CommunityCatBoardPageCount from "../../components/CommunityCatBoardPageCount/CommunityCatBoardPageCount";
import { useProductOnKeyUpInput } from "../../hooks/useProductOnKeyUpInput";
import { FaSearch } from "react-icons/fa";
import BoardBox from "../../components/BoardBox/BoardBox";
import { board } from "../CommunityBoardPage/style";

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
    const inputRef = useRef();

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

const searchSubmit = () => {
    setSearchParams({
        page: 1
    })
    getBoardPageQuery.refetch();
}

const searchText = useProductOnKeyUpInput(searchSubmit)
    



    return (
        <div css={s.layout}>
            <div>
                <div css={s.headerTitle}>
                    <div>고양이 게시판</div>
                    <div css={s.searchBar}>
                        <div css={s.searchLabel}>게시판 검색</div>
                        <input css={s.searchBarInput} type="text"
                            ref={inputRef}
                            value={searchText.value}
                            onChange={searchText.handleOnChange}
                            onKeyUp={searchText.handleOnKeyUp}
                            placeholder="제목 + 내용 검색"
                        />
                        <button css={s.searchBarButton}>
                            <FaSearch onClick={() => searchSubmit()}/>
                        </button>
                    </div>
                </div>
                    <div css={s.CommunityboardListItem}>
                        {communityBoardList.map(data => (
                            <BoardBox
                            onClick={() => navigate(`/community/board/?communityBoardId=${board.communityBoardId}`)}
                            key={board.communityBoardId}
                            boardTitle={board.communityBoardTitle}
                            userNickname={board.userName}
                            updateDate={board.updateDate}
                            />         
                        ))}
                        </div>    
                    </div>
                 <FaPencil css={s.writeButton} onClick={handleOnclickToWritePage}></FaPencil>
                 <CommunityCatBoardPageCount catMaxPageNumber={catMaxPageNumber} totalCount={totalCount} onChange={handleOnPageChange}/>
            </div>
        );
    }

export default CommunityBoardCatPage;