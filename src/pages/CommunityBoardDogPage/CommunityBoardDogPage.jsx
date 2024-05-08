/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useRef, useState } from "react";
import { getBoardDogPageCountRequest, getCommunityBoardDogRequest, getCommunityBoardPageCountRequest } from "../../apis/api/communityBoard";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";
import { FaPencil } from "react-icons/fa6";
import { useQuery } from "react-query";
import { count } from "firebase/firestore";
import CommunityDogBoardPageCount from "../../components/CommunityDogBoardPageCount/CommunityDogBoardPageCount";
import BoardBox from "../../components/BoardBox/BoardBox";
import { board } from "../CommunityBoardPage/style";
import { useProductOnKeyUpInput } from "../../hooks/useProductOnKeyUpInput";
import { FaSearch } from "react-icons/fa";

function CommunityBoardDogPage() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams(0)
    const [communityBoardList, setCommunityBoardList] = useState([]);
    const [error, setError] = useState(null)
    const [dogMaxPageNumber, setDogMaxPageNumber] = useState(0)
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
        async () => await getBoardDogPageCountRequest({
            page,
            count : pageSearchCount


        }),

        {
            refetchOnWindowFocus : false,
            onSuccess :response => {
                console.log(response)
                setDogMaxPageNumber(response.data.dogMaxPageNumber)
                setTotalCount(response.data.totalCount)
            },

            onError : (error) => {
                console.log(error);
            }

        }
    )

    useEffect (() => {
        const fetchData  = async () => {
            try {
                const response = await getCommunityBoardDogRequest()
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

const searchSubmit = () => { 
    setSearchParams({
        page: 1
    })
    getBoardPageQuery.refetch();

} 

const searchText = useProductOnKeyUpInput(searchSubmit)

  return (
    <div css= {s.layout}>
        <div>
        <div css={s.headerTitle}>
            <div>강아지 커뮤니티 게시판</div>
            <div css={s.searchBar}>
                <div css={s.searchLabel}>게시판 검색</div>
                <input css={s.searchBarInput} type="text"
                    ref={inputRef}
                    value={searchText.value}
                    onChange={searchText.handleOnChange}
                    onKeyUp={searchText.handleOnKeyUp}
                    placeholder="제목 + 내용 검색"
                />
                <button css={s.searchBarButton} >
                    <FaSearch onClick={() => searchSubmit() }/>
                </button>
            </div>
        </div>
        <div css={s.CommunityboardListItem}>
            {communityBoardList.map(board => (
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
        <FaPencil css={s.writeButton} onClick={handleOnClickToWritePage}></FaPencil>
        <CommunityDogBoardPageCount dogMaxPageNumber={dogMaxPageNumber} totalCount={totalCount} onChange={handleOnPageChange} />
        </div>
        )
    }

export default CommunityBoardDogPage;