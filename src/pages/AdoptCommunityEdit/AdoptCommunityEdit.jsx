import ReactQuill from "react-quill";
import { Navigate, useNavigate, useParams, useSearchParams } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useRef, useState } from "react";
import { getAdoptById, postAdopt, postAdoptRequest, putAdoptRequest, putUpdateAdoptRequest } from "../../apis/api/Adopt";
import { useMutation, useQueryClient } from "react-query";

function AdoptCommunityEdit() {
    const navigate = useNavigate();
    const [ searchParams, setSearchParams ] = useSearchParams();
    const adoptationBoardId = searchParams.get("adoptBoardId")
    const queryClient = useQueryClient();
    const [animalCategoryId, setAnimalCategoryId] = useState(0);
    const [adopTitle, setAdopTitle] = useState("");
    const [adoptContent, setAdoptContent] = useState("");

      
  useEffect(() => {
    const fetchAdoptationBoard = async () => {
      try {
        const boardDetail = await getAdoptById(adoptationBoardId);
        setAnimalCategoryId(boardDetail.boardAnimalCategoryId);
        setAdopTitle(boardDetail.adoptationBoardTitle);
        setAdoptContent(boardDetail.adoptationBoardContent);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAdoptationBoard();
  }, [adoptationBoardId]);

    
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

    const putAdoptRequestMutation = useMutation({
        mutationKey:"putAdoptRequestMutation",
        mutationFn: putAdoptRequest,
        onSuccess: (response) => {
            alert("수정을 완료했습니다.")
            window.location.replace("/adoptCommunity?page=1");
        },
        onError: (error) => {
            console.log(error)
        }
    })
    


    const handleSubmit = () => {
        putAdoptRequestMutation.mutate({
            adoptationBoardId:adoptationBoardId,
            adoptationBoardTitle: adopTitle,
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

                <h2>수정</h2>
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
                <ReactQuill  value={adoptContent} modules={modules} onChange={handleQuillChange}/>
            <div>
                <button css = {s.submitButton} onClick={handleSubmit}>작성</button>
            </div>
            </div>
        </div>
    )
}

export default AdoptCommunityEdit;