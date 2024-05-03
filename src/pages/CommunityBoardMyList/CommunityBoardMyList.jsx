// /** @jsxImportSource @emotion/react */
// import * as s from "./style";
// import React, { useState } from 'react';
// import { useMutation, useQuery, useQueryClient } from 'react-query';
// import { useNavigate, useSearchParams } from 'react-router-dom';
// import { deleteCommunityBoardRequestById, getBoardMyPageCountRequest, getMyCommunityBoardWriteList } from '../../apis/api/communityBoard';

// function CommunityBoardMyList(props) {
// const navigate = useNavigate();
// const [searchParams, setSearchParams ] = useSearchParams();
// const queryClient = useQueryClient();
// const userId = principalQueryState.data?.data.userId;
// const principalQueryState = queryClient.getQueryState("principalQuery")
// const page = parseInt(searchParams.get("page")) || 1;
// const pageSearchCount = 10;
// const [maxMyPageNumber, setMaxMyPageNumber] = useState(0);
// const [totalCount, setTotalCount] = useState(0);
// const firstPage = (page - 1) * pageSearchCount + 1;
// const lastPage = page * pageSearchCount;
// const [myBoard, setMyBoard] = useState("")
// const [checkBoxBoard, setChectBoxBoard] = useState([])



// const getMyWriteCommunityBoardQuery = useQuery(
//     ["getMyWriteCommunityBoardQuery", userId, page],
//     async () => await getMyCommunityBoardWriteList ({
//         userId : userId
//     }),
//     {
//        enabled: !!userId,
//         refetchOnWindowFocus: false,
//         onSuccess : response => {
//             const index = response.data.slice(firstPage,lastPage)
//             setMyBoard(index)
//         },
        
//         onError : (error) => {
//             console.log(error)
//         }

//     }
// )

//     const getMyBoardCountQuery = useQuery(
//         ["getMyBoardCountQuery", userId,page],
//         async () => await getBoardMyPageCountRequest({
//             page:page,
//             userId:userId,
//             count:pageSearchCount

//         }),

//         {
//             enabled: !!userId,
//             refetchOnWindowFocus : false,
//             onSuccess: response => {
//                 setMaxMyPageNumber(response.data.maxMyPageNumber)
//                 setTotalCount(response.data.totalCount)
//                 console.log(maxMyPageNumber)
//                 console.log(totalCount)
//             },
//             onError: error => {
//                 console.log(error)
//             }
//         }
//     )

//     const handleCheckBoxMyBoardListChange = (event, communityBoardId) => {
//         const isChecked = event.target.checked

//         if(isChecked) {
//             setChectBoxBoard(prevCheckedBoards => [...prevCheckedBoards, communityBoardId] )
//         } else {
//             setChectBoxBoard(prevCheckedBoards => prevCheckedBoards.filter(id => id !== communityBoardId)) 
//             console.log(isChecked, communityBoardId)
//         }

//     }

//     const deleteCommunityBoardMutation  = useMutation({
//         mutationKey: "deleteCommunityBoardMutation",
//         mutationFn: deleteCommunityBoardRequestById,
//         onSuccess: (response) => {

//         },
//         onError: (error) => {
//             console.log(error)
//         }
//     })

//     const handleBoardDelete = () => {
//         for(let boardId of checkBoxBoard) {
//             deleteCommunityBoardMutation.mutate({boardIds : boardId})
//             alert("해당 게시글이 삭제되었습니다.")
//             window.location.replace("/account/mypage/community?page=1")
//         }

//     }

//     const handleDeleteSelected = () => {
//         console.log("선택완료")

//     }

//     const handlePageChange =(pageNumber) => {
//         setSearchParams({page: pageNumber})
//     }

    
//     return (
//         <div>
            
//         </div>
//     );
// }

// export default CommunityBoardMyList;