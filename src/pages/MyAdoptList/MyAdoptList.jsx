/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { DeleteAdoptBoardByID, deleteAdoptBoardByID, deleteAdoptBoardById, getAdoptByUserId, getAdoptCountByUserId} from '../../apis/api/Adopt';
import { AiOutlineLike } from "react-icons/ai";
import AdoptationPageNumbers from "../../components/AdoptationPageNumbers/AdoptationPageNumbers";
import AdoptationPageNumbersUser from "../../components/AdoptationPageNumbersUser/AdoptationPageNumbersUser";
import MyPageSideBar from "../../components/MyPageSideBar/MyPageSideBar";
import MyBoardBox from "../../components/MyBoardBox/MyBoardBox";
import { TfiWrite } from "react-icons/tfi";


function MyAdoptList(props) {
    const [ searchParams, setSearchParams ] = useSearchParams();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const principalQueryState = queryClient.getQueryState("principalQuery");
    const userId = principalQueryState.data?.data.userId;
    const [ adoptList, setAdoptList] = useState([]);
    const searchCount = 5;
    const page = searchParams.get("page") || 1;
    const lastPage = page * searchCount;
    const firstPage = lastPage - searchCount;
    const [maxPageNumber, setMaxPageNumber] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const [ myAdoptBoardList, setMyAdoptBoardList ] = useState([]);

    const getMyAdoptBoard = useQuery(
        ["getMyAdoptBoard", userId, page],
        async () => await getAdoptByUserId ({
            userId: userId
        }),
        {
            enabled: !!userId,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                const index = response.data.slice(firstPage,lastPage)
                setAdoptList(index)

                setMyAdoptBoardList(response.data);
            },
            onError: (error) => {
                console.log(error);
            }
        }
    )

    const getMyBoardCount = useQuery(
        ["getMyBoardCount", userId, page],
        async () => await getAdoptCountByUserId({
        page: page,
        userId: userId,
        count: searchCount
        }),
        {
            enabled: !!userId,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                setMaxPageNumber(response.data.maxPageNumber);
                setTotalCount(response.data.totalCount);
            },
            onError: error => {
                console.log(error)
            }
        }
    )

    const deleteAdoptRequestMutation = useMutation({
        mutationKey: "deleteAdoptRequestMutation",
        mutationFn: deleteAdoptBoardById,
        onSuccess: (response) => {
            alert("해당 게시물이 삭제되었습니다");
            window.location.replace("http://localhost:3000/account/mypage/Adopt?page=1");
        },
        onError: (error) => {
            alert("오류");
        }
    })

    const handleCheckOnChange = (e) => {
        const adoptationBoardId = parseInt(e.target.value);
        setMyAdoptBoardList(() => 
            myAdoptBoardList.map((board) => {
                if(board.adoptationBoardId === adoptationBoardId) {
                    return {
                        ...board,
                        checked: e.target.checked
                    }
                } else {
                    return board;
                }
            })
        );
    }

    const moveToDetailPage = (adoptationBoardId) => {
        navigate(`/adoptcommunity/detail?boardid=${adoptationBoardId}`)
    }

    const moveToEditPage = (adoptationBoardId) => {
        navigate(`/adoptcommunity/detail?boardid=${adoptationBoardId}&edit=true`)
    }

    const handleDeleteAdoptBoard = (adoptationBoardId) => {
        if(window.confirm("해당 게시물을 삭제하시겠습니까?")) {
            deleteAdoptRequestMutation.mutate({boardIds : adoptationBoardId});
        }
    }

    return (
        <div css={s.layout}>
            <MyPageSideBar />
            <div css={s.userDetails}>
                <div>
                    <div css={s.title}>분양 게시글 관리</div>
                    <button css={s.writeButton} onClick={()=> navigate("/adoptcommunity/write")}><TfiWrite /></button>
                </div>
                <div css={s.boardListItem}>
                    {myAdoptBoardList.map((board) => (
                        <MyBoardBox
                            key={board.adoptationBoardId}
                            boardTitle={board.adoptationBoardTitle}  
                            updateDate={board.updateDate}
                            heartCount={board.totalCount}
                            viewCount={board.viewCount}
                            commentCount={board.commentCount}
                            animalCategoryId={board.boardAnimalCategoryId}
                            contentImg={board.adoptationBoardContent}
                            onClick={() => moveToDetailPage(board.adoptationBoardId)}
                            deleteBoard={() => handleDeleteAdoptBoard(board.adoptationBoardId)}
                            editBoard={() => moveToEditPage(board.adoptationBoardId)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MyAdoptList;