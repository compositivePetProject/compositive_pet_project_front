/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./style";
import { images, trainCompartment } from "../../constants/mainCommnityImage";
import { HiChevronRight, HiChevronLeft, HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import FixBar from "../../components/FixBar/FixBar";
import { getTop3AdoptBoard } from "../../apis/api/Adopt";
import BoardBox from "../../components/BoardBox/BoardBox";
import { getTop3Board } from "../../apis/api/communityBoard";
import { postCommunityBoardViewRequest } from "../../apis/api/communityBoardView";

function MainPage(props) {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const principalQueryState = queryClient.getQueryState("principalQuery");
    const [curSlide, setCurSlide] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
    const FIRST_SLIDE_INDEX = 0;
    const LAST_SLIDE_INDEX = trainCompartment.length - 1;
    const MOVE_SLIDE_INDEX = 1;
    const [ top3AdoptBoardList, setTop3AdoptBoardList ] = useState([]);
    const [ top3BoardList, setTop3BoardList ] = useState([]);

    const autoMoveSlide = () => {
        if (intervalId !== null) {
          clearInterval(intervalId);
        }
    
        setIntervalId(
          setInterval(() => {
            setCurSlide((prevState) =>
              prevState < LAST_SLIDE_INDEX
                ? prevState + MOVE_SLIDE_INDEX
                : FIRST_SLIDE_INDEX
            );
          }, 3000)
        );
      };

    useEffect(() => {
    autoMoveSlide();

    return () => clearInterval(intervalId);
    }, []);

    const moveToSlide = (value) => {
        if (value === 'next') {
          setCurSlide((prevState) =>
            prevState < LAST_SLIDE_INDEX
              ? prevState + MOVE_SLIDE_INDEX
              : FIRST_SLIDE_INDEX
          );
        }
        if (value === 'prev') {
          setCurSlide((prevState) =>
            prevState > FIRST_SLIDE_INDEX
              ? prevState - MOVE_SLIDE_INDEX
              : LAST_SLIDE_INDEX
          );
        }
      };

      const getTop3BoardList = useQuery(
        ["getTop3BoardList"],
        async () => await getTop3Board(),
        {
          retry: 0,
          refetchOnWindowFocus: false,
          refetchInterval: false,
          onSuccess: (response) => {
            setTop3BoardList(response.data);
          },
          onError: (error) => {
            console.log(error);
          }
        }
      )

    const getTop3AdoptBoardList = useQuery(
      ["getTop3AdoptBoardList"],
      async () => await getTop3AdoptBoard(),
      {
        retry: 0,
        refetchOnWindowFocus: false,
        refetchInterval: false,
        onSuccess: (response) => {
          console.log(response.data)
          setTop3AdoptBoardList(response.data);
        },
        onError: (error) => {
          console.log(error);
        }
      }
    )

    const postCommunityBoardView = useMutation({
      mutationKey:"postCommunityBoardView",
      mutationFn: postCommunityBoardViewRequest,
      onSuccess: (response) => {
      },
      onError: (error) => {
      }
    })

    const handleOnClick = (board) => {
      navigate(`/ex/adoptcommunity/detail?boardid=${board.adoptationBoardId}`)
    }

    useEffect(() => {
      console.log(top3AdoptBoardList);
    }, [top3AdoptBoardList])

    return (
        <div css={s.layout}>
            <div css={s.train}>
                <div css={s.show}>
                <HiChevronLeft css={s.prevButton} onClick={() => moveToSlide('prev')}/>
                    
                    {
                        trainCompartment.map((item, index) => (
                        <div
                            css={() => s.compartment(curSlide)}
                            key={index}
                        >
                            <img onClick={() => navigate(item.path)} src={item.img} alt="productImg" />
                        </div>
                        ))
                    }
                    
                <HiChevronRight css={s.nextButton} onClick={() => moveToSlide('next')}/>
                </div>
            </div>
             
            <div css={s.infoContainer}>
              {/* 커뮤니티 게시판 */}
              <div css={s.communityContainer}>
                  <div>커뮤니티게시판 Top3</div>
                  <div onClick={() => navigate("/community/getboards?page=1")}>더보기</div>
              </div>
              <div css={s.detailContainer}>
                {/* 반복문 돌릴 예정 (미완) */}
                { 
                  top3BoardList.map(board =>
                    <BoardBox 
                      key={board.communityBoardId} 
                      boardTitle={board.communityBoardTitle} 
                      userNickname={board.userNickname} 
                      updateDate={board.updateDate}
                      heartCount={board.favoriteCount}
                      viewCount={board.viewCount}
                      commentCount={board.commentCount}
                      animalCategoryId={board.communityBoardAnimalCategoryId}
                      contentImg={board.communityBoardContent}
                      onClick={() => navigate(`/community/board/?communityBoardId=${board.communityBoardId}`)}
                    />
                  )
                }
                
              </div>

              {/* 분양 */}
              <div css={s.communityContainer}>
                  <div>분양게시판 Top3</div>
                  <div onClick={() => navigate("/ex/adoptcommunity?page=1")}>더보기</div>
              </div>
              <div css={s.detailContainer}>
                {/* 반복문 돌릴 예정 (미완)*/}
                {
                  top3AdoptBoardList.map(board => 
                    <BoardBox
                      key={board.adoptationBoardId} 
                      boardTitle={board.adoptationBoardTitle} 
                      userNickname={board.userNickname} 
                      updateDate={board.updateDate}
                      heartCount={board.favoriteCount}
                      viewCount={board.viewCount}
                      commentCount={board.commentCount}
                      animalCategoryId={board.boardAnimalCategoryId}
                      contentImg={board.adoptationBoardContent}
                      onClick={() => handleOnClick(board)}
                    />
                  )
                }
              </div>
            </div>
        </div>
    );
}

export default MainPage;