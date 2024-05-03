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

function CommunityBoardPage() {
    const navigate = useNavigate();
    const [searchParams , setSearchParams] = useSearchParams();
    const [communityBoardList, setCommunityBoardList] = useState([]);
    const pageSearchCount = 6;
    const inputRef = useRef();

    
    const getBoardsPageQuery = useQuery (
            ["getBoardsPageQuery", searchParams.get("page")],
            async () => await getCommunityBoardPageRequest({
            page: searchParams.get("page"),
            count : pageSearchCount,
            searchText: searchText.value,
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
                    <h1 css={s.headerTitle}>커뮤니티 갤러리 게시판</h1>
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
                                <FaSearch onClick={() => searchSubmit()}/>
                            </button>
                        </div>
                        <div css={s.boardListLayout}>
                            <div css={s.boardListHeader}>
                                <div css={s.boardListHeader}>
                                    <div>제목</div>
                                    <div>카테고리</div>
                                    <div>닉네임</div>
                                    <div>등록일</div>
                                </div>
                            </div>
                        <div css={s.CommunityboardListItem}>
                            {communityBoardList.map(board => (
                                <div key={board.communityBoardId}
                                onClick={() => navigate(`/community/board/${board.communityBoardId}/?communityBoardId=${board.communityBoardId}`)}>
                                <div>{board.communityBoardTitle}</div>
                                <div>{board.communityBoardAnimalCategoryNameKor}</div>
                                <div>{board.userName}</div>
                                <div>{board.createDate}</div>
                            </div>
                            
                            ))} 
                        </div>
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