/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useQuillInput } from '../../hooks/useQuillInput';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getCommunityBoardRequestById } from '../../apis/api/communityBoard';
import * as s from "./style";
import ReactQuill from 'react-quill';
import { QUILL_MODULES } from '../../constants/quillModules';
import { postCommunityBoardCommentRequest } from '../../apis/api/communityBoardComment';


function CommunityBoardCommentWritePage() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [board, setBoard] = useState("");
    const [quillValue, handleQuillValueChange, setQuillValue] = useQuillInput();
    const quertClient = useQueryClient();
    const principalQueryState = quertClient.getQueryState("principalQuery")
    const userId = principalQueryState.data?.data.userId;
    const communityBoardId = searchParams.get("communityBoardId")

    
    const getCommunityBoardQuery = useQuery(
        ["getCommunityBoardQuery",searchParams.get("communityBoardId"),userId],
        async () => await getCommunityBoardRequestById({
            communityBoardId: searchParams.get("communityBoardId"),
            userId : userId
        }),

        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                console.log(response)
                setBoard(response.data);
            },
            onError: error => {
                console.log(error);
            }
        }
    );

    console.log(communityBoardId)
    
    const postBoardCommentQuery = useMutation({
        mutationKey: "postBoardCommentQuery",
        mutationFn: postCommunityBoardCommentRequest,
        onSuccess: response => {
            console.log(response);
            alert("작성하신 댓글이 등록이 되었습니다.");
            navigate("/community/getboards"); 
        },
        onError: error => {
            console.log(error);
        }
    });

    const submitComment = () => {
        postBoardCommentQuery.mutate({
            communityBoardId: searchParams.get("communityBoardId"),
            userId: userId,
            communityBoardCommentContent: quillValue
        });
    };

    return (
        <div>
            <div css={s.title}>댓글 작성하기</div>
            <div css={s.commentcontainer}>
                <ReactQuill
                    style={{
                        width: "100%",
                        height: "800px"
                    }}
                    modules={QUILL_MODULES}
                    onChange={handleQuillValueChange}
                />
            </div>
            <button css={s.writebutton} onClick={submitComment}>작성하기</button>
        </div>
    );
}

export default CommunityBoardCommentWritePage;