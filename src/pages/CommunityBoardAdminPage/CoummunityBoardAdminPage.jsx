import { View, Text } from 'react-native'
import * as s from "./style";
import React, { useEffect } from 'react'
import { getCommunityBoardAdminRequest } from '../../apis/api/getCommunityBoardAdminAll';

 function CoummunityBoardAdminPage() {
    const[communityBoardAdminList, setCommunityBoardAdminList ] = useState([])
    const[error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async() => {
        try{
        const response = await getCommunityBoardAdminRequest();
        setCommunityBoardAdminList(response)
        console.log(response)
        }catch(error){
          
        }      
          
      
      }

    })
  return (
    <div>
     
    </div>
  )
}


export default CoummunityBoardAdminPage; 