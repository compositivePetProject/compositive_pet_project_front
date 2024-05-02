/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { getAdoptById, getAdoptCommentRequest, getAdoptLike, getAdoptViewCount, postAdoptCommentRequest} from '../../apis/api/Adopt';
import { useMutation, useQueryClient } from "react-query";
import { FaHeart } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";

function AdoptCommunityDetail() {
    const [ inputContent, setInputContent ] = useState();
    const [ commentContent, setCommentContent ] = useState([]);
    const [ searchParams, setSearchParams ] = useSearchParams();
    const adoptationBoardId = searchParams.get("boardId");
    const page = searchParams.get("page")
    const queryClient = useQueryClient();
    const principalQueryState = queryClient.getQueryState("principalQuery");
    const userId = principalQueryState.data?.data.userId;
    const navigate = useNavigate();
    const [adoptationBoard , setAdoptationBoard ] = useState(null);
    const [ boardDetail, setBoardDetail ] = useState(null);
    const [ likeCount, setLikeCount] = useState(0);
    const [ viewCount, setViewCount] = useState(0);
    
    const fetchAdoptationBoard = async () => {
        try {
            const boardDetail = await getAdoptById(adoptationBoardId);
            setAdoptationBoard(boardDetail);
            console.log(adoptationBoard);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchAdoptationFavorite = async () => {
        try {
            const response = await getAdoptLike({ adoptationBoardId: adoptationBoardId });
            console.log(response)
            setLikeCount(response); // 좋아요 수를 설정
        } catch (error) {
            console.log(error)
        }
    }

    const fetchAdoptationView = async () => {
        try {
            const response = await getAdoptViewCount({ boardId: adoptationBoardId });
            console.log(response)
            setViewCount(response)
        } catch (error) {
            console.log(error)
        }
    }

    const fetchAdoptationComments = async () => {
        try {
            const response = await getAdoptCommentRequest({boardId : adoptationBoardId})
           
            setCommentContent(response)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    const postAdoptCommentMutation = useMutation({
        mutationKey: "postAdoptCommentMutation",
        mutationFn: postAdoptCommentRequest,
        onSuccess: (response) => {
            alert("작성을 완료했습니다.");
            window.location.replace(`/adoptCommunityDetail?page=${page}&boardId=${adoptationBoardId}`);
        },
        onError: (error) => {
            console.log(error);
        }
      })

    const handleContentChange = (event) => {
        const content = event.target.value
        setInputContent(content)
        console.log(inputContent)
    }

    const handleSubmitClick = () => {
        postAdoptCommentMutation.mutate({
            adoptationBoardId:adoptationBoardId,
            adoptationBoardCommentContent:inputContent,
            userId:userId
        })
    }

    useEffect(() => {
        const fetchData = async () => {
            await fetchAdoptationBoard();
            await fetchAdoptationFavorite();
            await fetchAdoptationComments();
            await fetchAdoptationView();
        };
        fetchData();
    }, [adoptationBoardId]);


    return (
        <div css={s.layout}>
        <div css={s.box}>
            {adoptationBoard &&
                <div css={s.boardListItem} key={adoptationBoard.adoptationBoardId}>
                    <h2>{adoptationBoard.adoptationBoardTitle}</h2>
                    <div>
                        <div>{adoptationBoard.username}</div>
                    </div>
                    <div css= {s.content}>
                        <div>{adoptationBoard.adoptationBoardContent}</div>
                    </div>
                </div>
            }


            {adoptationBoard &&   
            <div css={s.status}>
                <FaHeart css={s.likeHeart} />
                <div>{likeCount}</div>
                <MdOutlineRemoveRedEye css={s.likeHeart} />
                <div>{viewCount}</div>
            </div>
            }

            <div  css={s.commentBox}>
                <div css ={s.commentHeader}>
                    <div>내용</div>
                    <div>닉네임</div>
                    <div>작성일</div>
                </div>
                {
                commentContent && commentContent.map((comment) => (
                    (
                        <div css={s.commentContent} key={comment.commentId}>
                            <div>{comment.adoptationBoardCommentContent}</div>
                            <div>{comment.username}</div>
                            <div>{comment.createDate}</div>
                        </div>

                    )
                ))
                }
            </div>
            <div css={s.commentInput}>
                <input type="text" onChange={handleContentChange} />
                <button onClick={handleSubmitClick}>댓글 작성</button>
            </div>

            <div css={s.buttonList}>
            <button css={s.writeButton} onClick={() => {navigate("/adoptCommunity?page=1")}}>목록</button>
                {adoptationBoard && adoptationBoard.userId === userId &&
                   ( <button css={s.writeButton} onClick={
                        () => {navigate
                        (`/adoptCommunity/edit?adoptBoardId=${adoptationBoard.adoptationBoardId}`)}}>수정</button>)}
            </div>      
                        
                
        </div>
    </div>
          
    );
}

export default AdoptCommunityDetail;