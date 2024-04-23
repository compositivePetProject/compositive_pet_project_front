/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useState } from "react";
import { getCommunityBoardDogRequest } from "../../apis/api/communityBoard";
import { useNavigate } from "react-router-dom";

function CommunityBoardDogPage() {
    const navigate = useNavigate();
    const [communityBoardList, setCommunityBoardList] = useState([]);
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = await getCommunityBoardDogRequest();
                setCommunityBoardList(response)
                console.log(response)
            }catch(error){
                setError(error)
                console.log(error)
            }
        }

    fetchData();
}, []); 

const handleOnClickToWritePage = () => {
    navigate("/community/board/write")

}

  return (
  <div>

</div>
    )

}

export default CommunityBoardDogPage;