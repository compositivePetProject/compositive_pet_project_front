/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./style";
import { images, trainCompartment } from "../../constants/mainCommnityImage";
import { HiChevronRight, HiChevronLeft, HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { VscChevronRight } from "react-icons/vsc";
import { useMutation, useQuery, useQueryClient } from "react-query";
import FixBar from "../../components/FixBar/FixBar";
import { getTop3AdoptBoard, postAdoptView } from "../../apis/api/Adopt";
import BoardBox from "../../components/BoardBox/BoardBox";

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

    const getTop3AdoptBoardList = useQuery(
      ["getTop3AdoptBoardList"],
      async () => await getTop3AdoptBoard(),
      {
        retry: 0,
        refetchOnWindowFocus: false,
        refetchInterval: false,
        onSuccess: (response) => {
          setTop3AdoptBoardList(response.data);
        },
        onError: (error) => {
          console.log(error);
        }
      }
    )

    const postAdoptCommunityBoardView = useMutation({
      mutationKey:"postAdoptCommunityBoardView",
      mutationFn: postAdoptView,
      onSuccess: (response) => {
      },
      onError: (error) => {
      }
    })

    const handleOnClick = (board) => {
      postAdoptCommunityBoardView.mutate({
          adoptationBoardId:board.adoptationBoardId,
          userId:principalQueryState.data?.data.userId
      })
      navigate(`/ex/adoptcommunity/detail?boardid=${board.adoptationBoardId}`)
    }

    useEffect(() => {
      console.log(top3AdoptBoardList);
    }, [top3AdoptBoardList])

    return (
        <div css={s.layout}>
            <div css={s.train}>
                <HiChevronLeft css={s.prevButton} onClick={() => moveToSlide('prev')}/>
                <div css={s.show}>
                    
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
                    
                </div>
                <HiChevronRight css={s.nextButton} onClick={() => moveToSlide('next')}/>
            </div>
             
            <div css={s.infoContainer}>
              {/* 커뮤니티 게시판 */}
              <div css={s.communityContainer}>
                  <div>커뮤니티게시판 Top3</div>
                  <div onClick={() => navigate("/community/getboards?page=1")}>더보기</div>
              </div>
              <div css={s.detailContainer}>
                {/* 반복문 돌릴 예정 (미완) */}
                <div css={s.communityContainerIn}>
                    <div css={s.communityContainerImage}>
                      <img src={images[3].img} alt="" />
                    </div>
                    <div css={s.communityContainerText}>
                      <div>
                        (타이틀) 다양한 강아지,고양이 집사님들과 소통하러 가자
                      </div>
                      <div>
                        <div>글쓴이</div>
                        <div>
                          <span> <AiOutlineHeart/> 1</span>
                          <span> <HiOutlineChatBubbleOvalLeft /> 1</span>
                        </div>
                      </div>
                    </div>
                </div>
                <div css={s.communityContainerIn}>
                    <div css={s.communityContainerImage}>
                      <img src={images[4].img} alt="" />
                    </div>
                    <div css={s.communityContainerText}>
                      <div>
                        (타이틀) 다양한 강아지,고양이 집사님들과 소통하러 가자
                      </div>
                      <div>
                        <div>글쓴이</div>
                        <div>
                          <span> <AiOutlineHeart/> 1</span>
                          <span> <HiOutlineChatBubbleOvalLeft /> 1</span>
                        </div>
                      </div>
                    </div>
                </div>
                <div css={s.communityContainerIn}>
                    <div css={s.communityContainerImage}>
                      <img src={images[5].img} alt="" />
                    </div>
                    <div css={s.communityContainerText}>
                      <div>
                        (타이틀) 다양한 강아지,고양이 집사님들과 소통하러 가자
                      </div>
                      <div>
                        <div>글쓴이</div>
                        <div>
                          <span> <AiOutlineHeart/> 1</span>
                          <span> <HiOutlineChatBubbleOvalLeft /> 1</span>
                        </div>
                      </div>
                    </div>
                </div>
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
                      heartCount={board.totalCount}
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