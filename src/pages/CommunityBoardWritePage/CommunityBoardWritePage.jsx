import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import * as s from "./style";
import {useState } from 'react';
import { postCommunityBoardRequest } from '../../apis/api/communityBoard';
import ReactQuill from 'react-quill';


 function CommunityBoardWritePage() {
  const queryClient = useQueryClient();
  const principalQueryState = queryClient.getQueryState("principalQuery")
  const navigate = useNavigate();
  const [communityTitle, setCommunityTitle] = useState("")
  const [communityContent, setCommunityContent ] = useState("")
  const [BoardAnimalCategoryId, setBoardAnimalCategoryId] = useState();
  // const [checkedList, setCheckedList ] = useState([]);
  const userId = principalQueryState.data?.data.userId;
  
  const handleOnChange = (e) => {
    setCommunityTitle(() => e.target.value);
  }

  const handleChange = (value) => {
    setCommunityContent(() => value);

  }
// id랑 동물카테고리 id 변경해야함
  const handleSubmit = () => {
    postCommunityBoardQuery.mutate({
      userId: userId,
      communityBoardTitle:communityTitle,
      communityBoardContent:communityContent,
      communityBoardAnimalCategoryId:BoardAnimalCategoryId
    
    })
  }

  const handleBoardAnimalCategoryChange = (evnet) => {
    setBoardAnimalCategoryId(evnet.target.value)
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

    console.log(communityTitle);
    console.log(communityContent)

  // const handleSubmitClick = async () => {
  //   try {

  //     const newCommunityBoard ={
  //       userId : userId,
  //       communityBoardTitle : communityBoardInputValue,
  //       communityBoardContent: communityQuillValue,
  //       communityBoardAnimalCategoryId : communityBoardInputValue
  //     }

  //     await postCommunityBoardRequest(newCommunityBoard);
  //     navigate("/community/getboards")
  //   }catch(error){
  //     console.error("게시물 작성 중 오류 발생", error);
  //   }
     
  // }



  const postCommunityBoardQuery = useMutation ({
        mutationKey : "postCommunityBoardQuery",
        mutationFn : postCommunityBoardRequest,
        onSuccess : response => {
          alert("게시글이 작성되었습니다.")
          window.location.replace("/CommunityBoard/getboards")
        }, 

        onError : (error) => {
          console.log(error);
        }
      
  })
  

    console.log(principalQueryState)
    
    return (
      <div>
        <div css={s.WriteBoard}></div>
        <h1>작성 페이지</h1>
        <select
        value={BoardAnimalCategoryId}
        onChange={handleBoardAnimalCategoryChange}>
          <option value={0}>카테고리를 선택해 주세요</option>
          <option value={1}>개</option>
          <option value={2}>고양이</option>
          </select>
  
      <input type="text" 
      placeholder= "제목을 입력 하세요"
      value={communityTitle}
      onChange={handleOnChange}
      >

      </input>



      <ReactQuill
       modules={modules}  onChange={handleChange} 
      />

    <button css={s.submitButton} onClick={handleSubmit}>작성하기</button>

    </div>
    )
}

export default CommunityBoardWritePage; 
