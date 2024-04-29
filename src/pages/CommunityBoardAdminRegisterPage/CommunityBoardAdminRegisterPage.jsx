/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import * as s from "./style";
import { useNavigate } from 'react-router-dom';
import { postCommunityBoardAdminRequest } from '../../apis/api/communityBoardAdmin';
import ReactQuill from 'react-quill';

function CommunityBoardAdminRegisterPage() {
    const queryClient =useQueryClient ();
    const principalQueryState = queryClient.getQueryState("principalQuery")
    const navigate = useNavigate();
    const [BoardAdminTitle, setCommunityBoardAdminTitle] = useState("")
    const [BoardAdminContent , setCommunityBoardAdmiContent] = useState("")

    const userId = principalQueryState.data?.data.userId;

    const handleTitleOnChange = (e) => {
        setCommunityBoardAdminTitle(() => e.target.value)
    }

    const handleContentOnChange = (value) => {
        setCommunityBoardAdmiContent(() => value) 
    } 

    const handleAdminSubmit = () => {
        postCommuntiyBoardAdminQuery.mutate({
        userId: userId,
        communityBoardAdminTitle:BoardAdminTitle,
        communityBoardAdminContent:BoardAdminContent
        })
    }


    const modules = {
        toolbar : 
            [
                ['bold', 'italic', 'underline', 'strike'],        
                ['blockquote', 'code-block'],
                ['link', 'image', 'video', 'formula'],
            
                [{ 'header': 1 }, { 'header': 2 }],               
                [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
                [{ 'script': 'sub'}, { 'script': 'super' }],      
                [{ 'indent': '-1'}, { 'indent': '+1' }],          
                [{ 'direction': 'rtl' }],                         
            
                [{ 'size': ['small', false, 'large', 'huge'] }],  
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            
                [{ 'color': [] }, { 'background': [] }],          
                [{ 'font': [] }],
                [{ 'align': [] }],
            
                ['clean']                                         
            ]
  }

    console.log(BoardAdminTitle);
    console.log(BoardAdminContent)

    const postCommuntiyBoardAdminQuery = useMutation({
        mutationKey: "postCommuntiyBoardAdminQuery",
        mutationFn : postCommunityBoardAdminRequest,
        onSuccess : response => {
            alert("공지사항 게시글이 작성되었습니다.")
            window.location.replace("/community/admin/list/boards")
        },

        onError : (error) => {
            console.log(error)
        }

    })

    console.log(principalQueryState)
    

    return (
        <div>
            <div css={s.WriteBoard}></div>
            <h1>작성 페이지</h1>


            <input type="text"
            placeholder='공지사항 제목을 입력하세요'
            value={BoardAdminTitle}
            onChange={handleTitleOnChange}
            >

            </input>

            <ReactQuill modules={modules} onChange={handleContentOnChange} />

 
            <button onClick={handleAdminSubmit}>공지사항 작성하기</button>    
            </div>
        );
    }

export default CommunityBoardAdminRegisterPage;