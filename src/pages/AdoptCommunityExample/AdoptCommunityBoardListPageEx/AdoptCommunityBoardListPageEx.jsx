/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getAdoptAll, getAdoptCount, postAdoptView } from "../../../apis/api/Adopt";
import { useEffect, useState } from "react";
import AdoptationPageNumbers from "../../../components/AdoptationPageNumbers/AdoptationPageNumbers";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { AiOutlineHeart } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import TopInput from "../../../components/admin/TopInput/TopInput";
import TopSelect from "../../../components/admin/TopSelect/TopSelect";
import { adoptBoardAnimalCategoryOptions } from "../../../constants/adoptBoardAnimalCategoryOptions";
import { FaSearch } from "react-icons/fa";
import BoardBox from "../../../components/BoardBox/BoardBox";
import { useNavigate, useSearchParams } from "react-router-dom";

function AdoptCommunityBoardListPageEx() {
    const [ adoptCommunityBoardList, setAdoptCommunityBoardList ] = useState([]);
    const [ searchParams, setSearchParams ] = useSearchParams();
    const searchCount = 12;
    const queryClient = useQueryClient();
    const principalQueryState = queryClient.getQueryState("principalQuery");
    const [ maxPageNumber, setMaxPageNumber ] = useState(0);
    const [ totalCount, setTotalCount ] = useState(0);
    const navigate = useNavigate();

    const [ search, setSearch ] = useState({
        adoptationBoardTitle: "",
        boardAnimalCategoryId: 0,
    })

    const postAdoptCommunityBoardView = useMutation({
        mutationKey:"postAdoptCommunityBoardView",
        mutationFn:postAdoptView,
        onSuccess: (response) => {
        },
        onError: (error) => {
            
        }

    })


    const handleOnClick = (board) => {
        postAdoptCommunityBoardView.mutate({
            adoptationBoardId:board.adoptationBoardId,
            userId:principalQueryState.data?.data.userId
        })
        navigate(`/ex/adoptcommunity/detail?boardid=${board.adoptationBoardId}`)
    }

    const getAdoptCommunityBoardList= useQuery(
        ["getAdoptCommunityBoardList", searchParams.get("page")],
        async () => await getAdoptAll({
            page: searchParams.get("page"),
            count: searchCount,
            adoptationBoardTitle: search.adoptationBoardTitle,
            boardAnimalCategoryId: search.boardAnimalCategoryId
        }),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                console.log(response)
                setAdoptCommunityBoardList(response);
            },
            onError: (error) => {
                console.log(error);
            }
        }
    );

    const searchHandleKeyDown = (e) => {
        if(e.key === "Enter") {
          searchSubmit();
        }
    }

    const searchSubmit = () => {
        getAdoptCommunityBoardList.refetch();
    }


    const getAdoptCommunityBoardCount = useQuery(
        ["getAdoptCommunityBoardCount", getAdoptCommunityBoardList],
        async () => await getAdoptCount({
            count: searchCount,
            adoptationBoardTitle: search.adoptationBoardTitle,
            boardAnimalCategoryId: search.boardAnimalCategoryId
        }),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                console.log(response)
                setMaxPageNumber(response.data.maxPageNumber)
                setTotalCount(response.data.totalCount)
            },
            onError: (error) => {
                console.log(error);
            }
        }

    )

    useEffect(() => {
        console.log(adoptCommunityBoardList);
    }, [adoptCommunityBoardList]);

    useEffect(() => {
        console.log(search);
    }, [search])
    
    return (
        <div css={s.layout}>
            <div css={s.search}>
                <div css={s.searchTitle}>분양 게시판</div>
                <div css={s.searchBox}>
                    <TopSelect label={"동물구분"} name={"boardAnimalCategoryId"} options={adoptBoardAnimalCategoryOptions} setState={setSearch} />
                    <TopInput label={"검색게시글"} name={"adoptationBoardTitle"} inputSize={10} setState={setSearch} onKeyDown={searchHandleKeyDown}/>
                    <button css={s.searchButton} onClick={searchSubmit}><FaSearch/></button>
                </div>
            </div>

            <div css={s.board}>
                {
                    adoptCommunityBoardList.map(board => 
                        <BoardBox 
                            key={board.adoptationBoardId} 
                            boardTitle={board.adoptationBoardTitle} 
                            userNickname={board.userNickname} 
                            updateDate={board.updateDate}
                            heartCount={board.totalCount}
                            viewCount={board.viewCount}
                            commentCount={board.commentCount}
                            onClick={() => handleOnClick(board)}
                        />
                    )
                }
            </div>

            <div>
                {
                    !getAdoptCommunityBoardCount.isLoading && <AdoptationPageNumbers maxPageNumber={maxPageNumber} totalCount={totalCount}/>
                }
            </div>

        </div>
    )
}

export default AdoptCommunityBoardListPageEx;