/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate, useSearchParams} from "react-router-dom";
import { getCommunityBoardListRequest, getCommunityBoardPageCountRequest, getCommunityBoardPageRequest } from "../../apis/api/communityBoard";
import { useEffect, useRef, useState } from "react";
import { FaPencil } from "react-icons/fa6";
import { useMutation, useQuery, useQueryClient } from "react-query";
import CommunityBoardPageCount from "../../components/CommunityBoardPageCount/CommunityBoardPageCount";
import { page } from "../../components/CommunityBoardPageCount/style";
import { useProductOnKeyUpInput } from "../../hooks/useProductOnKeyUpInput";
import { FaSearch } from "react-icons/fa";
import BoardBox from "../../components/BoardBox/BoardBox";
import TopSelect from "../../components/admin/TopSelect/TopSelect";
import { adoptBoardAnimalCategoryOptions } from "../../constants/adoptBoardAnimalCategoryOptions";
import { postCommunityBoardViewRequest } from "../../apis/api/communityBoardView";
import { TfiWrite } from "react-icons/tfi";

function CommunityBoardCatPage(props) {

    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const principalQueryState = queryClient.getQueryState("principalQuery");
    const [searchParams , setSearchParams] = useSearchParams();
    const [communityBoardList, setCommunityBoardList] = useState([]);
    const pageSearchCount = 12;
    const inputRef = useRef();

    const getBoardsPageQuery = useQuery (
        ["getBoardsPageQuery", searchParams.get("page")],
        async () => await getCommunityBoardPageRequest({
        page: searchParams.get("page"),
        count : pageSearchCount,
        boardAnimalCategoryId: 2,
        searchText: searchText.value
    }),
    {   
    refetchOnWindowFocus : false,
    onSuccess : response => {
        console.log(response) 
        setCommunityBoardList(response.data)
    },

    onError : (error) => {
        console.log(error);
            }   
        }
    )

    const getBoardsSearchCountRequestQuery = useQuery(
        ["getBoardsSearchCountRequestQuery", getBoardsPageQuery.data],
        async () => await getCommunityBoardPageCountRequest({
            count : pageSearchCount,
            boardAnimalCategoryId: 2,
            searchText: searchText.value
        }),
        {   
            refetchOnWindowFocus: false,
            onSuccess: response => {
                console.log(response.data)
            }
        }
    );

    const postCommunityBoardView = useMutation({
        mutationKey:"postCommunityBoardView",
        mutationFn: postCommunityBoardViewRequest,
        onSuccess: (response) => {
        },
        onError: (error) => {
        }
    })

    const handleOnClickBoard = (board) => {
        postCommunityBoardView.mutate({
            communityBoardId: board.communityBoardId,
            userId: principalQueryState.data?.data.userId
        })
        navigate(`/community/board/?communityBoardId=${board.communityBoardId}`)
    }

    const searchSubmit = () => {
        setSearchParams({
            page: 1
        })
        getBoardsPageQuery.refetch();
    }

    const searchText = useProductOnKeyUpInput(searchSubmit);



    return (
        <div css={s.layout}>
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
                        <button css={s.searchBarButton} >
                            <FaSearch onClick={searchSubmit}/>
                        </button>
                        <button css={s.writeButton} onClick={() => navigate("/community/board/write")}><TfiWrite /></button>
                    </div>
                </div>
                <div css={s.board}>
                    <div>
                        {communityBoardList.map(board => (
                                <BoardBox 
                                    onClick={() => handleOnClickBoard(board)}
                                    key={board.communityBoardId}
                                    boardTitle={board.communityBoardTitle}
                                    userNickname={board.userNickname}
                                    heartCount={board.favoriteCount}
                                    viewCount={board.viewCount}
                                    commentCount={board.commentCount}
                                    animalCategoryId={board.communityBoardAnimalCategoryId}
                                    contentImg={board.communityBoardContent}
                                    updateDate={board.updateDate}
                                />                            
                        ))} 
                    </div>
                </div>
            {
                !getBoardsSearchCountRequestQuery.isLoading &&
                <CommunityBoardPageCount  path={"/cat"} boardCount={getBoardsSearchCountRequestQuery?.data?.data}/>
            }
        </div>
        );
    }

export default CommunityBoardCatPage;