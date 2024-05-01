/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getCommunityBoardRequestById, putCommunityBoardRequest } from "../../apis/api/communityBoard";
import { useState } from "react";
import ReactQuill from "react-quill";

function CommunityBoardEditPage(props) {
    const [searchParmas, setSearchParams] = useSearchParams() ;
    const communityBoardId = parseInt(searchParmas.get("communityBoardId"))
    const navigate = useNavigate();
    const [newCommunityBoardTitle, setNewCommunityBoardTitle] = useState("")
    const [newCommunityBoardContent, setNewCommunityBoardContent] = useState("")
    const [boardAnimalCategoryId, setBoardAnimalCategoryId] = useState() 
    const [newBoard, setNewBoard] = useState("");

    
    const getCommunityBoardQuery = useQuery(
        ["getCommunityBoardQuery", communityBoardId],
        async () => await getCommunityBoardRequestById ({
            communityBoardId : communityBoardId
        }),
    {
        retry : 0,
        refetchOnWindowFocus : false,
        onSuccess: response => {
            console.log(response)
            setNewBoard(response.data)
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
        
          console.log(newCommunityBoardTitle)
          console.log(newCommunityBoardContent)

        const handleOnTitleChange = (e) => {
            setNewCommunityBoardTitle (() => e.target.value)
        }

        const handleOnContentChange = (value) => {
            setNewCommunityBoardContent (() => value)
        } 
        
        const updateCommunityBoardMutaion = useMutation ({
          mutationKey: "updateCommunityBoardMutaion",
          mutationFn: putCommunityBoardRequest,
          onSuccess: response => {
            alert("댓글 수정이 완료 되었습니다.")
            navigate("/community/getboards")
            
          },
        
          onError: error => {
            alert('오류')
            console.log(error)
        
          }
        })
        
        const handleAnimalCategoryChange = (e) => {
            console.log(boardAnimalCategoryId)
            setBoardAnimalCategoryId(e.target.value)
        }


        
        
        const handleChangeCommunityBoardUpdate = () => {
          const boardUpdate = window.confirm("게시글을 수정하시겠습니까?")
          if(boardUpdate) {
          updateCommunityBoardMutaion.mutate({
            communityBoardId: communityBoardId,
            communityBoardTitle : newCommunityBoardTitle,
            communityBoardContent : newCommunityBoardContent,
            communityBoardAnimalCategoryId : boardAnimalCategoryId

            
            })
          }
        }
    return (
        <div css={s.WriteBoard}>
            <h2>수정 페이지</h2>
            <select 
            value={boardAnimalCategoryId}
            onChange={handleAnimalCategoryChange}>
                <option value={0}>애완동물 카테고리 선택</option>
                <option value={1}>개</option>
                <option value={2}>고양이</option>
            </select>
            <input
            type="text"
            value={newCommunityBoardTitle}
            onChange={handleOnTitleChange}
            placeholder="제목을 입력하세요"
            >                
            </input>

            <ReactQuill
                value={newCommunityBoardContent}
                modules={modules} onChange={handleOnContentChange} 
                placeholder="내용을 입력하세요."
                />
            <div>
                <button css={s.submitButton} onClick={handleChangeCommunityBoardUpdate}>작성</button>
            </div>           
        </div>
    );
}

export default CommunityBoardEditPage;