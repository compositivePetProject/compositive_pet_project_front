import ReactQuill from "react-quill";
import { Navigate, useNavigate } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useRef, useState } from "react";
import { postAdopt } from "../../apis/api/Adopt";

function AdoptCommunityRegister(props) {
    const navigate = useNavigate();
    const [ animalCategoryId, setAnimalCategoryId ] = useState()
    const [ adopTitle , setAdopTitle ] = useState("")
    const [ adoptContent , setAdoptContent] = useState("")

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

    const handleSubmit = () => {
        const request = {
            adoptationBoardTitle: adopTitle,
            userId:17, // 임의로 지정
            adoptationBoardContent: adoptContent,
            boardAnimalCategoryId: animalCategoryId
        }
        if(!request.adoptationBoardTitle || !request.adoptationBoardContent || !request.boardAnimalCategoryId) {
            alert("다시 확인하세요")
        } else {
            postAdopt(request)
            alert("작성이 완료되었습니다.")
            console.log(request)
            navigate('/adoptCommunity',{replace: true})
        }
        
        
    }

    const handleAnimalChange = (event) => {
        console.log(animalCategoryId)
        setAnimalCategoryId(event.target.value)
    }


    return (
        <div css={s.container}>\
            <div>

                <h2>분양 게시판 글쓰기</h2>
                <select 
                value={animalCategoryId}
                onChange={handleAnimalChange}>
                    <option value={0}>애완동물의 종류를 선택하세요</option>
                    <option value={1}>개</option>
                    <option value={2}>고양이</option>
                </select>
                <p>{animalCategoryId}</p>
                <input
                type="text"
                value={adopTitle}
                onChange={handleTitleChange}
                placeholder="제목을 입력하세요"
                ></input>
                <ReactQuill modules={modules} onChange={handleQuillChange}/>
            </div>
            <div>
                <button css = {s.submitButton} onClick={handleSubmit}>작성</button>
            </div>
        </div>
    )
}

export default AdoptCommunityRegister;