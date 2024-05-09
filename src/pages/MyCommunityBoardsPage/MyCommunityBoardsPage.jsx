/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useState } from 'react';
import MyPageSideBar from '../../components/MyPageSideBar/MyPageSideBar';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { deleteCommunityBoardRequestById, getMyCommunityBoardWriteList, putCommunityBoardRequest } from '../../apis/api/communityBoard';
import Quill from "../../components/Quill/Quill";
import { useNavigate } from "react-router-dom";
import MyBoardBox from "../../components/MyBoardBox/MyBoardBox";
import BoardBox from "../../components/BoardBox/BoardBox";

function MyCommunityBoardsPage() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("principalQuery");
    const [ communityBoardList , setCommunityBoardList ] = useState([]);
    const [ isBoard, setIsBoard ] = useState(false);
    const [selectedBoardId, setSelectedBoardId] = useState("");

    const getCommunityBoardsQuery = useQuery(
        ["getCommunityBoardsQuery", principal?.data?.data?.userId],
        async () => await getMyCommunityBoardWriteList ({
            userId : principal?.data?.data?.userId
        }),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                console.log(response)
                setCommunityBoardList(() => response.data)
            },
            onError: (error) => {
                console.log(error);
            }
        }
    )

    const deleteCommunityBoardQuery = useMutation({
        mutationKey: "deleteCommunityBoardQuery",
        mutationFn : deleteCommunityBoardRequestById,
        onSuccess: response => {
            alert("게시글 삭제가 완료되었습니다.")
            window.location.replace("/account/mypage/community/boards");
        },
        onError: error => {
            console.log(error)
        }
      }
    )

    const handleChangeCommuniteyBoardDelete  = (communityBoardId) => {
        if(window.confirm("게시글을 삭제하시겠습니까?")) {
          deleteCommunityBoardQuery.mutate(
            communityBoardId
          )
        }
    } 

      const moveToDetailPage = (communityBoardId) => {
            navigate(`/community/board/?communityBoardId=${communityBoardId}`)
        }

        const moveToEditPage = (communityBoardId) => {
            navigate(`/community/board/?communityBoardId=${communityBoardId}&edit=true`)
        }

        const handleDeleteAdoptBoard = (communityBoardId) => {
            if(window.confirm("게시글을 삭제하시겠습니까?")) {
                deleteCommunityBoardQuery.mutate(
                  communityBoardId
                )
              }
        }


    return (
        <div css={s.layout}>
            <MyPageSideBar />
            <div css={s.userDetails}>
                <h2>커뮤니티 게시글 관리</h2>
                <div css={s.boardListItem}>
                    {communityBoardList.map(board => (
                        <MyBoardBox
                            key={board.communityBoardId}
                            boardTitle={board.communityBoardTitle}  
                            updateDate={board.updateDate}
                            heartCount={board.totalCount}
                            viewCount={board.viewCount}
                            commentCount={board.commentCount}
                            animalCategoryId={board.boardAnimalCategoryId}
                            contentImg={board.communityBoardContent}
                            onClick={() => moveToDetailPage(board.communityBoardId)}
                            deleteBoard={() => handleDeleteAdoptBoard(board.communityBoardId)}
                            editBoard={() => moveToEditPage(board.communityBoardId)}
                        />
                    ))}
                </div>
                <div>
                    <button css={s.writeButton}
                        onClick={()=> navigate("/community/board/write")} 
                    >글쓰기</button>
                </div>
            </div>
        </div>
    );
}

export default MyCommunityBoardsPage;