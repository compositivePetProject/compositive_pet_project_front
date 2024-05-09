/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import * as s from "./style";
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useQuillInput } from '../../hooks/useQuillInput';
import ReactQuill from 'react-quill';
import { QUILL_MODULES } from '../../constants/quillModules';
import { getCommunityBoardCommentByBoardIdRequest, putCommunityBoardCommentRequest } from '../../apis/api/communityBoardComment';

function CommunityBoardCommentEditPage(props) {
    const [searchParams, setSearchParams] = useSearchParams(); 
    const communityBoardId = parseInt(searchParams.get("communityBoardId")); 
    const communityBoardCommentId = parseInt(searchParams.get("communityBoardCommentId")); 
    const navigate = useNavigate(); 
    const [newComment, setNewComment] = useState(""); 
    const [quillValue, handleQuillValueChange, setQuillValue] = useQuillInput(); 
    const queryClient = useQueryClient(); 
    const principalQueryState = queryClient.getQueryState("principalQuery"); 
    const userId = principalQueryState.data?.data.userId; 

 
    const getBoardCommentQuery = useQuery(
        ["getBoardCommentQuery", communityBoardCommentId, userId], 
        async () => {
            const response = await getCommunityBoardCommentByBoardIdRequest({
                communityBoardCommentId,
                userId
            });
            return response.data; 
        },
        {
            retry: 0, 
            refetchOnWindowFocus: false, 
            onSuccess: response => {
                console.log(response);
                setNewComment(response.data); 
            },
            onError: error => {
                console.error(error); 
            }
        }
    );


    const updateBoardCommentQuery = useMutation({
        mutationKey: "updateBoardCommentQuery",
        mutationFn: putCommunityBoardCommentRequest,
        onSuccess: response => {
            alert('작성하신 댓글이 수정 되었습니다.');
            navigate("/community/getboards?page=1"); 
        },
        onError: error => {
            alert("오류 발생");
            console.log(error);
        }
    });


    const handleChangeCommunityBoardCommentUpdate = () => {
        const commentUpdate = window.confirm("작성하신 댓글을 수정하시겠습니까?");
        if (commentUpdate) {
        
            updateBoardCommentQuery.mutate({
                communityBoardCommentId,
                communityBoardCommentContent: quillValue
            });
        }
    };

    return (
        <div>
            <div css={s.title}>댓글 수정하기</div>
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
          
            <button css={s.writebutton} onClick={handleChangeCommunityBoardCommentUpdate}>작성하기</button>
        </div>
    );
}

export default CommunityBoardCommentEditPage;