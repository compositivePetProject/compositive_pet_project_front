/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useMutation, useQuery } from 'react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getCommunityBoardAdminRequestById,updateCommunityBoardAdminByIdRequest } from '../../apis/api/communityBoardAdmin';
import ReactQuill from "react-quill";
import { useState } from "react";

function CommunityBoardAdminEditPage(props) {


    const navigate = useNavigate ();
    const [searchParams, setSearchParams] = useSearchParams();
    const communityBoardAdminId = parseInt(searchParams.get("communityBoardAdminId"))
    const [newNoticeTitle, setNewNoticeTitle ] = useState("")
    const [newNoticeContent, setNewNoticeContent] = useState("")
    const [noticeBoard, setNoticeBoard ] = useState("")

    const getAdminNoticeBoardQuery = useQuery(
        ["getAdminNoticeBoardQuery", communityBoardAdminId],
        async  () => await getCommunityBoardAdminRequestById ({
            communityBoardAdminId : communityBoardAdminId 

        }),
        
    {
        retry : 0,
        refetchOnWindowFocus : false,
        onSuccess : response =>  {
            console.log(response)
            setNoticeBoard(response.data)


        },

            onError : (error) => {
                console.log(error)
            }
        }
    )


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

      console.log(newNoticeTitle)
      console.log(newNoticeContent)


      const handleOnNoticeTitleChange = (e) => {
        setNewNoticeTitle (() => e.target.value)
      }

      const handleOnNoticeContentChange = (value) => {
        setNewNoticeContent (() => value)
      }

      const updateNoticeBoardMutation = useMutation ({
        mutationKey: "updateNoticeBoardMutation",
        mutationFn: updateCommunityBoardAdminByIdRequest,
        onSuccess: response => {
            alert("공지사항 수정이 완료 되었습니다.")
            navigate("/community/admin/list/boards")
            

        },

        onError : error => {
            alert("오류")
            console.log(error)
        }
      })
      
    const handleChangeNoticeBoardUpdate = () => {
        const noticeBoardUpdate = window.confirm("공지사항을 수정하시겠습니까?")
        if(noticeBoardUpdate) {
        updateNoticeBoardMutation.mutate ({
            communityBoardAdminId: communityBoardAdminId,
            communityBoardAdminTitle: newNoticeTitle,
            communityBoardAdminContent: newNoticeContent
        })
    }
}
    return (
        <div css={s.WriteBoard}>
            <input
            type="text"
            value={newNoticeTitle}
            onChange={handleOnNoticeTitleChange}
            placeholder="제목을 입력하세요"
            >
            </input>

            <ReactQuill 
                value={newNoticeContent}
                modules={modules} onChange={handleOnNoticeContentChange}
                placeholder="내용을 입력하세요."
                />
            <div>
                <button css={s.submitButton} onClick={handleChangeNoticeBoardUpdate}>작성</button>    
            </div> 
        </div>
    );
}

export default CommunityBoardAdminEditPage;