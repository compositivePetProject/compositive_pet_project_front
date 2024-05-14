/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useQuillInput } from "../../../hooks/useQuillInput";
import { useState } from "react";
import Quill from "../../../components/Quill/Quill";
import { useMutation, useQueryClient } from "react-query";
import { useInputHook } from "../../../hooks/useInputHook";
import { postAdoptRequest } from "../../../apis/api/Adopt";

function AdoptCommunityBoardWritePage() {
    const queryClient = useQueryClient();
    const principalQueryState = queryClient.getQueryState("principalQuery");
    const [ adoptCommunityTitle, setAdoptCommunityTitle, adoptCommunityTitleOnChange ] = useInputHook();
    const [ quillValue, handleQuillValueChange ] = useQuillInput();
    const [ selectedState, setSelectedState ] = useState({value : 1, label : "개"}); 
    const userId = principalQueryState.data?.data.userId;

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

    const postAdoptCommunityBoard = useMutation({
        mutationKey : "postAdoptCommunityBoard",
        mutationFn : postAdoptRequest,
        onSuccess : response => {
            alert("게시글이 작성되었습니다.");
            window.location.replace("/adoptcommunity?page=1");
        },
        onError : error => {
            console.log(error);
        }
    })

    const postAdoptCommunityBoardSubmit = () => {
        if(!adoptCommunityTitle) {
            alert("제목을 입력해주세요.");
        return;
      }
      if(!quillValue) {
        alert("내용을 입력해주세요.");
        return;
      }

      if(window.confirm("게시글을 작성하시겠습니까?")) {
        postAdoptCommunityBoard.mutate({
            userId: userId,
            boardAnimalCategoryId: selectedState.value,
            adoptationBoardTitle: adoptCommunityTitle,
            adoptationBoardContent: quillValue
        })
      }
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
                            type="text"
                            onChange={adoptCommunityTitleOnChange}
                            value={adoptCommunityTitle}
                            placeholder="제목을 입력하세요"
                        />
                    </div>
                </div>
                <button css={s.submitButton} onClick={postAdoptCommunityBoardSubmit}>작성하기</button>
            </div>
            <Quill onChange={handleQuillValueChange} value={quillValue} />
        </div>
    )
}

export default AdoptCommunityBoardWritePage;