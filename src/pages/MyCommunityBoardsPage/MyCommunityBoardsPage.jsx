/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useState } from 'react';
import MyPageSideBar from '../../components/MyPageSideBar/MyPageSideBar';
import { useQuery, useQueryClient } from 'react-query';
import { getMyCommunityBoardWriteList } from '../../apis/api/communityBoard';

function MyCommunityBoardsPage() {
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("principalQuery");
    const [ communityBoardList , setCommunityBoardList ] = useState([]);

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


    return (
        <div css={s.layout}>
            <MyPageSideBar />
            <div css={s.container}>
                <h1>커뮤니티 게시판</h1>
                {communityBoardList.map(communityBoard => 
                    <div css={s.containerIn}>
                        <div>{communityBoard.communityBoardId}</div>
                        <div>{communityBoard.userName}</div>
                        <div>{communityBoard.communityBoardTitle}</div>
                        <div>
                            <button>수정</button>
                            <button>삭제</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MyCommunityBoardsPage;