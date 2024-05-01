import React, { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getMyCommunityBoardWriteList } from '../../apis/api/communityBoard';

function CommunityBoardMyList(props) {
const navigate = useNavigate();
const [searchParams, setSearchParams ] = useSearchParams();
const queryClient = useQueryClient();
const userId = principalQueryState.data?.data.userId;
const principalQueryState = queryClient.getQueryState("principalQuery")
const searchCount = 7;
const [myBoard, setMyBoard] = useState("")



const getMyWriteCommunityBoardQuery = useQuery(
    ["getMyWriteCommunityBoardQuery", userId, page],
    async () => await getMyCommunityBoardWriteList ({
        userId : userId
    }),
    {
        retry : 0,
        refetchOnWindowFocus: false,
        onSuccess : response => {
            console.log(response)
            setMyBoard(() => response.data)
        },
        
        onError : (error) => {
            console.log(error)
        }

    }
)
    return (
        <div>
            
        </div>
    );
}

export default CommunityBoardMyList;