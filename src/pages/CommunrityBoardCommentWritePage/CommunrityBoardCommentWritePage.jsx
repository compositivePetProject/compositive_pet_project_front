/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useQuillInput } from '../../hooks/useQuillInput';
import { useMutation } from 'react-query';
import { postCommunityBoardRequest } from '../../apis/api/communityBoard';
import * as s from "./style";
import ReactQuill from 'react-quill';
import { QUILL_MODULES } from '../../constants/quillModules';


function CommunrityBoardCommentWritePage() {
const navigate = useNavigate();
const [searchParams, setSearchParmas] = useSearchParams()
const [comment, setComment] = useState("")
const [quillValue, handleQuillValueChange] = useQuillInput();

const postBoardCommentQuery = useMutation({
    mutationKey:"postBoardCommentQuery",
    mutationFn: postCommunityBoardRequest,
    onSuccess: response  => {
        alert ("작성하신 댓글이 등록이 되었습니다.")
        window.location.replace("/community/getboards")
    },
    onError: error => {
        console.log(error)
    }
})


const submitComment = () => {
    postBoardCommentQuery.mutate({
        userId : comment.userId,
        communityBoardId : comment.communityBoardId,
        communityBoardCommentContent : quillValue
    })

}
    return (
        <div>
            <div css={s.title}>댓글 작성하기</div>
            <div css={s.commentcontainer}>
                <ReactQuill style={{
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


export default CommunrityBoardCommentWritePage;