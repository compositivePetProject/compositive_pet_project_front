/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { deleteCommunityBoardAdminById, getCommunityBoardAdminRequestById } from '../../apis/api/communityBoardAdmin';
import { useMutation, useQuery, useQueryClient } from "react-query";

function CommunityBoardAdminDetailPage(props) { 
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate();
    const communityBoardAdminId = parseInt(searchParams.get("communityBoardAdminId"))
    const [adminBoard, setAdminBoard] = useState("");
    

    const getCommunityBoardAdminQuery = useQuery(
        ["getCommunityBoardAdminQuery", communityBoardAdminId],
        async () => await getCommunityBoardAdminRequestById ({
            communityBoardAdminId : communityBoardAdminId
        }),
    {
        retry: 0,
        refetchOnWindowFocus : false,
        onSuccess : response => {
            console.log(response)
            setAdminBoard(response.data)

        },
        
        onError: (error) => {
            console.log(error)
        }
    } 
    )

    const deleteBoardAdminQuery  = useMutation ({
        mutationKey: "deleteBoardAdminQuery",
        mutationFn: deleteCommunityBoardAdminById,
        onSuccess: response => {
            window.location.reload();
            alert("공지사항 게시물이 삭제 되었습니다.")
            navigate("/community/admin/list/boards")
        },
        onError: error => {
            alert("오류입니다.")
            console.log(error)
        }
    })

    const handleChangeAdminBoardDelete = () => {
        const adminBoardDelete = window.confirm("게시글을 삭제하시겠습니까?")
        if(adminBoardDelete) {
            deleteBoardAdminQuery.mutate (
                communityBoardAdminId
            )
        }
    }

    


 
    return (
        <div css= {s.container}>
            {adminBoard && 
            <div css={s.boardContent}>
                <div> {adminBoard.communityBoardAdminTitle} </div>
                <div dangerouslySetInnerHTML={{__html:adminBoard.communityBoardAdminContent}}></div>
                <div>{adminBoard.createDate}</div>
                <button css={s.deletebutton} onClick={handleChangeAdminBoardDelete}>게시글 삭제</button>
            </div>
}
        </div>
    );
}

export default CommunityBoardAdminDetailPage;