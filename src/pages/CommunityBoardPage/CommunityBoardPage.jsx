/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate, useSearchParams} from "react-router-dom";
import { getCommunityBoardListRequest, getCommunityBoardPageCountRequest, getCommunityBoardPageRequest } from "../../apis/api/communityBoard";
import { useEffect, useRef, useState } from "react";
import { FaPencil } from "react-icons/fa6";
import { useQuery } from "react-query";
import CommunityBoardPageCount from "../../components/CommunityBoardPageCount/CommunityBoardPageCount";
import { page } from "../../components/CommunityBoardPageCount/style";
import { useProductOnKeyUpInput } from "../../hooks/useProductOnKeyUpInput";
import { FaSearch } from "react-icons/fa";
import BoardBox from "../../components/BoardBox/BoardBox";
import TopSelect from "../../components/admin/TopSelect/TopSelect";
import { adoptBoardAnimalCategoryOptions } from "../../constants/adoptBoardAnimalCategoryOptions";

function CommunityBoardPage() {
    const navigate = useNavigate();
    const [searchParams , setSearchParams] = useSearchParams();
    const [communityBoardList, setCommunityBoardList] = useState([]);
    const pageSearchCount = 6;
    const inputRef = useRef();
    const [ search, setSearch ] = useState({
        boardAnimalCategoryId: 0,
    })
    
    const getBoardsPageQuery = useQuery (
            ["getBoardsPageQuery", searchParams.get("page")],
            async () => await getCommunityBoardPageRequest({
            page: searchParams.get("page"),
            count : pageSearchCount,
            boardAnimalCategoryId: search.boardAnimalCategoryId,
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
                boardAnimalCategoryId: search.boardAnimalCategoryId,
                searchText: searchText.value
            }),
            {   
                refetchOnWindowFocus: false,
                onSuccess: response => {
                    console.log(response.data)
                }
            }
        );
    
        const searchSubmit = () => {
            setSearchParams({
                page: 1
            })
            getBoardsPageQuery.refetch();
        }

        const searchText = useProductOnKeyUpInput(searchSubmit);
    
        return (
                <div css={s.layout}>
                    <div>
                        <div css={s.headerTitle}>
                            <div>커뮤니티 갤러리 게시판</div>
                            <div css={s.searchBar}>
                                <TopSelect label={"카테고리"} name={"boardAnimalCategoryId"} options={adoptBoardAnimalCategoryOptions} setState={setSearch} />
                                <div css={s.searchLabel}>게시판 검색</div>
                                <input css={s.searchBarInput} type="text" 
                                    ref={inputRef} 
                                    value={searchText.value} 
                                    onChange={searchText.handleOnChange} 
                                    onKeyUp={searchText.handleOnKeyUp}
                                    placeholder="제목 + 내용 검색"
                                />
                                <button css={s.searchBarButton} >
                                    <FaSearch onClick={() => searchSubmit()}/>
                                </button>
                            </div>
                        </div>
                        <div css={s.board}>
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
                
                <FaPencil css={s.writeButton} onClick={() => navigate("/community/board/write")}></FaPencil>
                {
                    !getBoardsSearchCountRequestQuery.isLoading &&
                    <CommunityBoardPageCount boardCount={getBoardsSearchCountRequestQuery?.data?.data}/>
                }
                </div>
            ) 
    }

    
export default CommunityBoardPage;