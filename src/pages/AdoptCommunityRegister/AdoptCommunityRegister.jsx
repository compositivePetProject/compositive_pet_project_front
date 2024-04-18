import ReactQuill from "react-quill";
import { Navigate, useNavigate } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useRef, useState } from "react";
import { postAdopt, postAdoptRequest } from "../../apis/api/Adopt";
import { useMutation, useQueryClient } from "react-query";

function AdoptCommunityRegister(props) {
    const navigate = useNavigate();
    const [ animalCategoryId, setAnimalCategoryId ] = useState()
    const [ adopTitle , setAdopTitle ] = useState("")
    const [ adoptContent , setAdoptContent] = useState("")
    const queryClient = useQueryClient();

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

    const handleTitleChange = (event) => {
        setAdopTitle(event.target.value)
        
    }

    const handleQuillChange = (value) => {
        setAdoptContent(value)
     
    }

    const postAdoptRequestMutation = useMutation({
        mutationKey: "postAdoptRequestMutation",
        mutationFn: postAdoptRequest,
        onSuccess: (response) => {
            alert("작성을 완료했습니다.");
            window.location.replace("/adoptCommunity");
        },
        onError: (error) => {
            console.log(error);
        }
      })

    const handleSubmit = () => {
        postAdoptRequestMutation.mutate({
            adoptationBoardTitle: adopTitle,
            userId: queryClient.getQueryState("principalQuery").data?.data.userId,
            adoptationBoardContent: adoptContent,
            boardAnimalCategoryId: animalCategoryId
        })
    }



    const handleAnimalChange = (event) => {
        console.log(animalCategoryId)
        setAnimalCategoryId(event.target.value)
    }


    return (
        <div>
            <div css={s.container}>

                <h2>분양 게시판 글쓰기</h2>
                <select 
                value={animalCategoryId}
                onChange={handleAnimalChange}>
                    <option value={0}>애완동물의 종류를 선택하세요</option>
                    <option value={1}>개</option>
                    <option value={2}>고양이</option>
                </select>
                <div>{animalCategoryId}</div>
                <input
                type="text"
                value={adopTitle}
                onChange={handleTitleChange}
                placeholder="제목을 입력하세요"
                ></input>
                <ReactQuill modules={modules} onChange={handleQuillChange}/>
            <div>
                <button css = {s.submitButton} onClick={handleSubmit}>작성</button>
            </div>
            </div>
        </div>
    )
}

export default AdoptCommunityRegister;