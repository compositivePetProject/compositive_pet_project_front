import { useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';


 function CommunityBoardWritePage() {

  const navigate = useNavigate();
  const [communityBoardInputValue, setCommunityBoardInputValue] = useMaxSizeTitleValidateInput(30)
  const [communityQuillValue, setCommunityQuillValue ] = useQueryClient()

  const handleSubmitClick = async () => {
    try {

      const newCommunityBoard ={
        communityBoardId: i + 1,
        communityBoardTitle : communityBoardInputValue,
        communityBoardContent: communityQuillValue,
        communityBoardAnimalCategoryId : communityBoardInputValue
      }

      await axios.post("http://localhost:8080/community/board" ,newCommunityBoard );

      navigate("/community/getboards")
    }catch(error){
      console.error("게시물 작성 중 오류 발생", error);
    }
     
  }

    return (
      <View>
        <h1>작성 페이지</h1>
        <TextInput
        placeholder= "제목을 입력 하세요"
        value={communityBoardInputValue}
        onChangeText={setCommunityBoardInputValue}
      />

        <TextInput
        placeholder= "내용을 입력하세요"
        value={communityQuillValue}
        onChangeText={setCommunityQuillValue}
      />

    <button title='작성하기' onClick={handleSubmitClick} />
    </View>
    )
}

export default CommunityBoardWritePage; 
