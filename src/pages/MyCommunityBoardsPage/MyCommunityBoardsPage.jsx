/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useState } from 'react';
import MyPageSideBar from '../../components/MyPageSideBar/MyPageSideBar';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { deleteCommunityBoardRequestById, getMyCommunityBoardWriteList, putCommunityBoardRequest } from '../../apis/api/communityBoard';
import Quill from "../../components/Quill/Quill";
import { useNavigate } from "react-router-dom";
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

    const updateCommunityBoardMutaion = useMutation({
        mutationKey: "updateCommunityBoardMutaion",
        mutationFn: putCommunityBoardRequest,
        onSuccess: response => {
            alert("수정이 완료 되었습니다.")
            window.location.replace("/account/mypage/community/boards")
        },
        onError: error => {
            alert('오류')
            console.log(error)

        }
      })

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
    
    const handleChangeCommunityBoardUpdate = (board) => {
        const boardUpdate = window.confirm("게시글을 수정하시겠습니까?")
        if(boardUpdate) {
            const editingBoardIndex = communityBoardList.findIndex(board => board.communityBoardId === selectedBoardId);
            if (editingBoardIndex !== -1) {
                const updatedBoard = communityBoardList[editingBoardIndex];
                updateCommunityBoardMutaion.mutate({
                    communityBoardId: updatedBoard.communityBoardId,
                    communityBoardTitle: updatedBoard.communityBoardTitle,
                    communityBoardContent: updatedBoard.communityBoardContent
                });
            }
        }
    }

    const handleEditBoard = boardId => {
        setIsBoard(true);
        setSelectedBoardId(boardId);
    };
    
    const handleCloseModal = () => {
        setIsBoard(false); 
        setSelectedBoardId(""); 
    };
    
    const updateTitleOnchange = (e) => {
        const editingBoardIndex = communityBoardList.findIndex(board => board.communityBoardId === selectedBoardId);
        if (editingBoardIndex !== -1) { 
            const updatedCommunityBoardList = [...communityBoardList];
            updatedCommunityBoardList[editingBoardIndex].communityBoardTitle = e.target.value;
            setCommunityBoardList(updatedCommunityBoardList);
        }
      }
    
      const updateOnchange = (value) => {
        const editingBoardIndex = communityBoardList.findIndex(board => board.communityBoardId === selectedBoardId);
        if (editingBoardIndex !== -1) { 
            const updatedCommunityBoardList = [...communityBoardList];
            updatedCommunityBoardList[editingBoardIndex].communityBoardContent = value;
            setCommunityBoardList(updatedCommunityBoardList);
        }
      }

    return (
        <div css={s.layout}>
            <MyPageSideBar />
            <div css={s.container}>
                <h2>커뮤니티 게시판 관리</h2>
                <div css={s.board}>
                    { communityBoardList.map(board =>
                        <div key={board.communityBoardId}> 
                            <BoardBox 
                                onClick={() => navigate(`/community/board/?communityBoardId=${board.communityBoardId}`)}
                                boardTitle={board.communityBoardTitle}
                                userNickname={board.userName}
                                updateDate={board.updateDate}
                            />
                            <div css={s.buttonBox}>
                                <button css={s.button} onClick={() => handleEditBoard(board.communityBoardId)}>수정</button>
                                <button css={s.button} onClick={() => handleChangeCommuniteyBoardDelete(board.communityBoardId)}>삭제</button>
                            </div> 
                            {isBoard  && selectedBoardId === board.communityBoardId &&
                            <div css={s.modarBackground}>
                                <div css={s.modarLayout}>
                                    <input type="text" defaultValue={board.communityBoardTitle} onChange={updateTitleOnchange} />
                                    <Quill value={board.communityBoardContent} onChange={updateOnchange} />
                                    <div css={s.buttonBox}>
                                        <button css={s.button} onClick={() => handleChangeCommunityBoardUpdate(board)}>확인</button>
                                        <button css={s.button} onClick={() => setIsBoard(false)}>취소</button>
                                    </div> 
                                </div>
                            </div>
                            }         
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MyCommunityBoardsPage;