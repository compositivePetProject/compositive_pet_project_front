/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { DeleteAdoptBoardByID, deleteAdoptBoardByID, deleteAdoptBoardById, getAdoptByUserId, getAdoptCountByUserId} from '../../apis/api/Adopt';
import { AiOutlineLike } from "react-icons/ai";
import AdoptationPageNumbers from "../../components/AdoptationPageNumbers/AdoptationPageNumbers";
import AdoptationPageNumbersUser from "../../components/AdoptationPageNumbersUser/AdoptationPageNumbersUser";
import MyPageSideBar from "../../components/MyPageSideBar/MyPageSideBar";


function MyAdoptList(props) {
    const [likeStatus, setLikeStatus] = useState({});
    const [ searchParams, setSearchParams ] = useSearchParams();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const principalQueryState = queryClient.getQueryState("principalQuery");
    const userId = principalQueryState.data?.data.userId;
    const [ adoptList, setAdoptList] = useState([]);
    const searchCount = 6;
    const page = searchParams.get("page") || 1;
    const lastPage = page * searchCount;
    const firstPage = lastPage - searchCount;
    const [maxPageNumber, setMaxPageNumber] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const [checkedBoards, setCheckedBoards] = useState([]);


    const [ checkAll, setCheckAll ] = useState({
        checked : false,
        target: 1
    });
    const [ myAdoptBoardList, setMyAdoptBoardList ] = useState([]);



    const getMyAdoptBoard = useQuery(
        ["getMyAdoptBoard", userId, page],
        async () => await getAdoptByUserId ({
            userId: userId
        }),
        {
            enabled: !!userId,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                console.log(response);
                const index = response.data.slice(firstPage,lastPage)
                setAdoptList(index)

                setMyAdoptBoardList(response.data);
            },
            onError: (error) => {
                console.log(error);
            }
        }
    )

    

    const getMyBoardCount = useQuery(
        ["getMyBoardCount", userId, page],
        async () => await getAdoptCountByUserId({
        page: page,
        userId: userId,
        count: searchCount
    }),
    {
        enabled: !!userId,
        refetchOnWindowFocus: false,
        onSuccess: response => {
            setMaxPageNumber(response.data.maxPageNumber);
            setTotalCount(response.data.totalCount);
        },
        onError: error => {
            console.log(error)
        }
    }

)

const handleCheckboxChange = (event, adoptationBoardId) => {
    const isChecked = event.target.checked;

    if (isChecked) {
        setCheckedBoards(prevState => [...prevState, adoptationBoardId]);
        console.log(isChecked, adoptationBoardId)
    } else {
        setCheckedBoards(prevState => prevState.filter(id => id !== adoptationBoardId));
        console.log(isChecked, adoptationBoardId)
    }
};






const deleteAdoptRequestMutation = useMutation({
    mutationKey: "deleteAdoptRequestMutation",
    mutationFn: deleteAdoptBoardById,
    onSuccess: (response) => {
       
    },
    onError: (error) => {
        console.log(error);
    }
})



const handleDeleteBoard = () => {
    for(let boardId of checkedBoards) {
        deleteAdoptRequestMutation.mutate({boardIds: boardId})
        alert("해당 게시글이 삭제되었습니다.")
        window.location.replace("/account/mypage/Adopt?page=1");
}};


const handleDeleteSelected = () => {
    console.log("Selected items:", checkedBoards);
};



    const handlePageChange = (pageNumber) => {
        setSearchParams({ page: pageNumber.toString() });
    };

    const handleClick = () => {
        console.log("입력이 감지되었습니다.")
    }


    const handleCheckAllChange = (e) => {
        setCheckAll(() => {
          return {
            checked: e.target.checked,
            target: 1
          }
        })
    }

    useEffect(() => {
        console.log(myAdoptBoardList);
        if(checkAll.checked === true) {
            setMyAdoptBoardList(() => {
                myAdoptBoardList.map(data =>{
                    return {
                        ...data,
                        checked: checkAll.checked
                    }
                })
            })
        }
    }, [checkAll.checked])

    return (
        <div css={s.layout}>
            <MyPageSideBar />
            <div css={s.userDetails}>
               <h2>분양 게시글 관리</h2>
                <div css={s.boardListHeader}>
                    <div css={s.label}><input type="checkbox" checked={checkAll.checked} onChange={handleCheckAllChange} /></div>
                    <div css={s.label}>제목</div>
                    <div css={s.label}>카테고리</div>
                    <div css={s.label}>등록일</div>
                </div>
                <div css={s.boardListItem}>
                    {myAdoptBoardList.map((data) => (
                        <div css={s.rowData} key={data.adoptationBoardId} >
                            <div css={s.labelData}><input type="checkbox" checked={checkedBoards.includes(data.adoptationBoardId)} onChange={(event) => handleCheckboxChange(event, data.adoptationBoardId)}/></div>
                            <div css={s.labelData} onClick={() => navigate(`/ex/adoptcommunity/detail?boardid=${data.adoptationBoardId}`)}>{data.adoptationBoardTitle}</div>
                            <div css={s.labelData} onClick={() => navigate(`/ex/adoptcommunity/detail?boardid=${data.adoptationBoardId}`)}>{data.boardAnimalCategoryNameKor}</div>
                            <div css={s.labelData} onClick={() => navigate(`/ex/adoptcommunity/detail?boardid=${data.adoptationBoardId}`)}>{data.createDate}</div>
                        </div>
                    ))}
                </div>
                <AdoptationPageNumbersUser maxPageNumber={maxPageNumber} totalCount={totalCount} onChange={handlePageChange}/>
                <div>
                    <button css={s.writeButton} onClick={handleDeleteBoard}>삭제</button>
                    <button css={s.writeButton} onClick={() => {navigate
                        (`/adoptCommunity/edit?adoptBoardId=${checkedBoards}`)}}>수정</button>
                    <button css={s.writeButton} 
                        onClick={()=> navigate("/adoptCommunity/register")} 
                    >글쓰기</button>
                </div>
            </div>
            
        </div>
    );
}

export default MyAdoptList;