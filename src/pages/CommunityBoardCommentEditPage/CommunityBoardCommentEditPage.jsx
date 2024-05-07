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
    const [searchParmas, setSearchParams] = useSearchParams();
    const communityBoardId = parseInt(searchParmas.get("communityBoardId"))
    const communityBoardCommentId = parseInt(searchParmas.get("communityBoardCommentId"))
    const navigate = useNavigate();
    const [newCommunityBoardComment, setNewCommunityBoardComment] = useState("")
    const [newComment, setNewComment] = useState("")
    const [quillValue, handleQuillValueChange, setQuillValue] = useQuillInput();
    const quertClient = useQueryClient();
    const principalQueryState = quertClient.getQueryState("principalQuery")
    const userId = principalQueryState.data?.data.userId;

    const getBoardCommentQuery = useQuery(
        ["getBoardCommentQuery", searchParmas.get("communityBoardCommentId"), userId], 
        async () => {
            const response = await getCommunityBoardCommentByBoardIdRequest({
                communityBoardCommentId: searchParmas.get("communityBoardCommentId"),
                userId: userId
            });
            return response.data; 
        },
        {
            retry: 0, 
            refetchOnWindowFocus: false, 
            onSuccess: data => {
                setNewComment(data); 
            },
            onError: error => {
                console.error(error); 
            }
        }
      )


    const updateBoardCommentQuery = useMutation({
        mutationKey: "updateBoardCommentQuery",
        mutationFn: putCommunityBoardCommentRequest,
        onSuccess: response => {
          alert('작성하신 댓글이 수정 되었습니다')
          window.location.reload("/community/getboards")
        },
        onError: error => {
            alert("오류")
            console.log(error)
        }
      })

      const hadnleChangeCommunityBoardCommentUpdate = () => {
        const commentUpdate = window.confirm("작성하신 댓글을 수정하시겠습니까.")
        if(commentUpdate) {
            updateBoardCommentQuery.mutate({
            communityBoardCommentId : searchParmas.get("communityBoardCommentId"),
            communityBoardContentComment : quillValue

            })
        }
            
      }
    

    return (
        <div>
        <div css={s.title}> 댓글 수정하기</div>
        <div css={s.commentcontainer}>
            <ReactQuill
                style={{
                    width: "100px",
                    height: "800px"
            }}
            modules={QUILL_MODULES}
            onChange={handleQuillValueChange}
        />
        </div>
        <button css={s.writebutton} onClick={hadnleChangeCommunityBoardCommentUpdate}>작성하기</button>
    </div>
    );
}

export default CommunityBoardCommentEditPage;