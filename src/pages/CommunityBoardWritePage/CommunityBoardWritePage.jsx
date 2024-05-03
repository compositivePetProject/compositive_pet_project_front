/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import {useState } from 'react';
import { postCommunityBoardRequest } from '../../apis/api/communityBoard';
import { useQuillInput } from '../../hooks/useQuillInput';
import Quill from '../../components/Quill/Quill';
import { useInputHook } from '../../hooks/useInputHook';


function CommunityBoardWritePage() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const principalQueryState = queryClient.getQueryState("principalQuery")
    const [ communityTitle, setCommunityTitle, communityTitleOnChange ] = useInputHook();
    const [ quillValue, handleQuillValueChange ] = useQuillInput();
    const [ selectedState, setSelectedState ] = useState({value : 1, label : "개"}); 
    const [BoardAnimalCategoryId, setBoardAnimalCategoryId] = useState();
    const userId = principalQueryState.data?.data.userId;

    const postCommunityBoardQuery = useMutation ({
          mutationKey : "postCommunityBoardQuery",
          mutationFn : postCommunityBoardRequest,
          onSuccess : response => {
            alert("게시글이 작성되었습니다.")
            // 마이페이지 만들기 내가 작성한 게시글
            window.location.replace("/community/getboards?page=1");
          }, 

          onError : (error) => {
            console.log(error);
          }
    })

    
    const categorys = [
      {value : 1, label : "개"},
      {value : 2, label : "고양이"}
    ]

    const handleOnChange = (e) => {
      setSelectedState({
          value: parseInt(e.target.value),
          label: e.target.options[e.target.selectedIndex].text
      })
    }


    const postCommnuityBoardhandleSubmit = () => {
      if (!communityTitle) {
        alert("제목을 입력해주세요.");
        return;
      }
      if (!quillValue) {
        alert("내용을 입력해주세요.");
        return;
      }

      postCommunityBoardQuery.mutate({
        userId: userId,
        communityBoardTitle: communityTitle,
        communityBoardContent: quillValue,
        communityBoardAnimalCategoryId: selectedState.value
      })
    }
    

    return (
          <div css={s.layout}>
                <div>작성 페이지</div>
                <div css={s.container}>
                  <div css={s.writeContainer}>
                    <div css={s.selectContainer}>
                        <div css={s.selectLabel}>
                            카테고리
                        </div>
                        <select css={s.select} onChange={handleOnChange} value={handleOnChange.value}>
                            {categorys.map(option => {
                                return <option key={option.value} value={option.value} selected={selectedState.value === option.value}>{option.label}</option>
                            })}
                        </select>
                    </div>
                    <div css={s.inputContainer}>
                        <div css={s.selectLabel}>
                            제목
                        </div>
                        <input
                            css={s.input}
                            type='text'
                            onChange={communityTitleOnChange}
                            value={communityTitle}
                            placeholder= "제목을 입력 하세요"
                        />
                    </div>
                  </div>
                  <button css={s.submitButton} onClick={postCommnuityBoardhandleSubmit}>작성하기</button>
                </div>
                <Quill onChange={handleQuillValueChange} value={quillValue}/>
        </div>
    )
}

export default CommunityBoardWritePage; 
