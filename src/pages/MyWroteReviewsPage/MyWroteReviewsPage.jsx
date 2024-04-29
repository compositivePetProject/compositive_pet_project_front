/** @jsxImportSource @emotion/react */
import { useMutation, useQuery } from "react-query";
import * as s from "./style";
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { deleteProductReviewRequest, getProductReviewsRequest } from "../../apis/api/productComment";
import ProductReviewModal from "../../components/ProductReviewModal/ProductReviewModal";

function MyWroteReviewsPage() {
    const navigate = useNavigate();
    const [ searchParams, setSearchParams ] = useSearchParams();
    const [ reviews, setReviews ] = useState([]);
    const [averageRating, setAverageRating] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedReview, setSelectedReview] = useState("");
    const userId = searchParams.get("userId")

    const getProductReviewsQuery = useQuery(
        ["getProductReviewsQuery", userId],
        async () => await getProductReviewsRequest ({
            userId : userId
        }),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                console.log(response)
                setReviews(() => response.data)
            },
            onError: (error) => {
                console.log(error);
            }
        }
    )


    const renderRatingStars = (ratingValue) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= ratingValue) {
                stars.push(<FaStar key={i} css={s.activeStarButton} />);
            } else {
                stars.push(<FaRegStar key={i} css={s.starButton} />);
            }
        }
        return stars;
    }

    const deleteProductReviewQuery = useMutation({
        mutationKey: "deleteProductReviewQuery",
        mutationFn: deleteProductReviewRequest,
        onSuccess: response => {
            window.location.reload();
        },
        onError: error => {
        }
    })
    

    const handleChangeDelete = (productCommentId) => {
        const confirmCancel = window.confirm("리뷰를 삭제하시겠습니까?");
        if(confirmCancel) {
            deleteProductReviewQuery.mutate({
                productCommentId : productCommentId
            })
        }
    }

    const handleEditReview = (review) => {
        setSelectedReview(review); 
        setIsModalOpen(true);
    };
    
    

    return (
        <div css={s.layout}>
            <div css={s.userInfoBox}>
                <div css={s.infoBox}>
                    <h3>내 정보 관리</h3>
                    <div css={s.buttons} onClick={() => navigate("/account/mypage/profile")}>계정 관리</div>
                    <h3>내 쇼핑 관리</h3>
                    <div css={s.buttons} onClick={() => navigate("/account/mypage/orders")}>주문 내역</div>
                    <div css={s.buttons} onClick={() => navigate("/account/mypage/reviews")}>리뷰 관리</div>
                </div>  
            </div>
            <div css={s.userDetails}>
                <div css={s.title}>리뷰 관리</div>
                <div css={s.reviews}>
                    <div onClick={() => navigate("/account/mypage/reviews")}>리뷰 작성</div>
                    <div onClick={() => navigate(`/account/mypage/review/wrote/?userId=${userId}`)}>작성한 리뷰</div>
                </div>
                {reviews.map(review => (
                    <div key={review.productCommentId} css={s.container}>
                        <div css={s.orderHeader}>
                            <div>작성일 : {review.createDate}</div>
                        </div>
                        <div css={s.container2}>
                            <div css={s.container3}>
                                <div css={s.imgBox} onClick={() => navigate(`/product/pet/detail/${review.productId}/?productId=${review.productId}&page=1`)}>
                                    <img src={review.productImageUrl} alt="" />
                                </div>
                                <div css={s.container4}>
                                    <div onClick={() => navigate(`/product/pet/detail/${review.productId}/?productId=${review.productId}&page=1`)}>{review.productNameKor}</div>
                                    <div css={s.container5}>
                                        <div>
                                        {renderRatingStars(review.productCommentRatingValue)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div css={s.container6}>
                                <button css={s.buttons3} onClick={() => handleEditReview(review)}>수정</button>
                                <button css={s.buttons3} onClick={() => handleChangeDelete(review.productCommentId)}>삭제</button>
                            </div>
                        </div>
                    </div>
                     ))}
                     {isModalOpen && (
                        <ProductReviewModal onClose={() => setIsModalOpen(false)} review={selectedReview} />
                    )}
                </div>
        </div>
    );
}

export default MyWroteReviewsPage;