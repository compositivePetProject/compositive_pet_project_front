// /** @jsxImportSource @emotion/react */
// import React, { useEffect } from 'react';
// import * as s from "./style";
// import { useState } from 'react';
// import { useMutation } from 'react-query';
// import { useNavigate, useSearchParams } from 'react-router-dom';
// import { putCommunityBoardRequest } from '../../apis/api/communityBoard';
// import { useQuillInput } from '../../hooks/useQuillInput';
// import ReactQuill from 'react-quill';
// import { QUILL_MODULES } from '../../constants/quillModules';

// function BoardUpdateModal({onClose}) {
//     const [quillValues, handleQuillValueChange, setQuillValue] = useQuillInput();
//     const {communityBoardId,userId,communityBoardTitle,communityBoardContent,communityBoardAnimalCategoryId } = boardUpdate;
    
//     useEffect(() => {
//         setQuillValue (() => communityBoardContent)

//     }, [])


//     const updateCommunityBoardQuery = useMutation({
//         mutationKey: "updateCommunityBoardQuery",
//         mutationFn: putCommunityBoardRequest,
//         onSuccess: response  => {
//             alert("게시글 수정이 완료되었습니다.")
//             window.location.reload()
//         },
//         onError: error => {
//             console.log(error)
//         }
//     })

//     const handleSubmit  = () => {

//     updateCommunityBoardQuery.mutate({
//         communityBoardId: communityBoardId,
//         userId: userId,
//         communityBoardTitle: communityBoardTitle,
//         communityBoardContent: quillValues,
//         communityBoardAnimalCategoryId : communityBoardAnimalCategoryId
//     })
// };

// const handleBoardAnimlaCategoryChange = (e) => {
    
// }


// return (
//     <div>
//         <div css={s.container}></div>
//         <hl>수정 게시판</h1>
//                 <ReactQuill style={{
//                     width: "100%",
//                     height: "750px"
//                 }}
//                 value={quillValues}
//                 modules={QUILL_MODULES}
//                 onChange={handleQuillValueChange}
//             />
      
//         </div>
//     </div>
//     <div>
//         <button css={s.cancleButton} onClick={onClose}>취소하기</button>
//         <button css={s.updateButton} onClick={handleSubmit}>수정하기</button>
//     </div>
// </div>
    

    
//     );
// }

// export default BoardUpdateModal;