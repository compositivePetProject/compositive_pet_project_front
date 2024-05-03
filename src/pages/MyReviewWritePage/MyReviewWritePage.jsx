/** @jsxImportSource @emotion/react */
import { useNavigate, useSearchParams } from "react-router-dom";
import * as s from "./style";
import { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { getProductOrderRequest } from "../../apis/api/productOrder";
import { useMutation, useQuery } from "react-query";
import ReactQuill from "react-quill";
import { QUILL_MODULES } from "../../constants/quillModules";
import { useQuillInput } from "../../hooks/useQuillInput";
import { postProductCommentRequest } from "../../apis/api/productComment";
import { ratingTextMap } from "../../constants/prductRatingText";
import MyPageSideBar from "../../components/MyPageSideBar/MyPageSideBar";

function MyReviewWritePage() {
    const navigate = useNavigate();
    const [ searchParams, setSearchParams ] = useSearchParams();
    const [ rating, setRating] = useState(0);
    const [ userOrder, setUserOrder ] = useState("");
    const [ quillValue, handleQuillValueChange ] = useQuillInput();
    
    const getProductOrderQuery = useQuery(
        ["getProductOrderQuery", searchParams.get("productOrderId")],
        async () => await getProductOrderRequest ({
            productOrderId: searchParams.get("productOrderId")
        }),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                console.log(response)
                setUserOrder(() => response.data)
            },
            onError: (error) => {
                console.log(error);
            }
        }
    )

    const postProductCommentQuery = useMutation({
        mutationKey: "postProductCommentQuery",
        mutationFn: postProductCommentRequest,
        onSuccess: response => {
            alert("작성하신 리뷰가 등록 되었습니다.");
            window.location.replace("/account/mypage/reviews");
        },
        onError: error => {
            console.log(error)
        }
    })

    const submitReview = () => {
        if (rating === 0) {
            alert("별점을 선택해주세요.");
            return;
        }
        postProductCommentQuery.mutate({
            userId : userOrder.userId,
            productId : userOrder.productId,
            productCommentContent: quillValue,
            productCommentRatingValue : rating
        })

    };

    return (
        <div css={s.layout}>
            <MyPageSideBar />
            <div css={s.userDetails}>
                <div css={s.title}>리뷰 작성하기</div>
                <div css={s.container}>
                <div css={s.orderHeader}>
                    <div css={s.imgBox} >
                        <img src={userOrder.productImageUrl} alt="" />
                    </div>               
                    <div css={s.container2}>
                        <div>{userOrder.productNameKor}</div>
                        {[1, 2, 3, 4, 5].map((value) => (
                            <button
                                key={value}
                                css={s.starButtons}
                                onClick={() => setRating(value)}
                            >
                                {value <= rating ? <FaStar css={s.activeStarButton}/> : <FaRegStar css={s.starButton}/>}
                            </button>
                        ))}
                        {rating !== 0 && (
                            <div>{ratingTextMap[rating]}</div>
                        )}
                    </div>
                </div>
                <div css={s.reviewBox}>
                    <div>상세리뷰</div>
                        <ReactQuill style={{
                            width: "100%",
                            height: "800px"
                            }} 
                            modules={QUILL_MODULES}
                            onChange={handleQuillValueChange}
                        />
                    </div>
                        <div css={s.container1}>
                            <div>상품 품질과 관계 없는 내용은 비공개 처리될 수 있습니다.</div>
                            <div>작성된 리뷰는 삭제 전까지 ‘상품 리뷰’에 공개되고, ‘내 쇼핑 관리 - 리뷰 관리 - 작성한 리뷰’에서 수정 및 삭제가 가능합니다.</div>
                        </div>
                </div>
                <div css={s.box}>   
                    <button css={s.buttons3} onClick={() => navigate("/account/mypage/reviews")}>취소하기</button>
                    <button css={s.buttons3} onClick={submitReview}>등록하기</button>
                </div>
            </div>
        </div>
    );
}

export default MyReviewWritePage;