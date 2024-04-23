/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import ReactQuill from "react-quill";
import { QUILL_MODULES } from "../../constants/quillModules";
import { useQuillInput } from "../../hooks/useQuillInput";
import { useMutation } from "react-query";
import { putProductReviewRequest } from "../../apis/api/productComment";


function ProductReviewModal ({ onClose, review})  {
    const [ rating, setRating] = useState(0);
    const [ quillValue, handleQuillValueChange ] = useQuillInput();
    const { productCommentId, productId, userId, productCommentRatingId} = review;

    const updateProductCommentQuery = useMutation({
        mutationKey: "updateProductCommentQuery",
        mutationFn: putProductReviewRequest,
        onSuccess: response => {
            alert("작성하신 리뷰가 수정 되었습니다.");
            window.location.reload();
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
        updateProductCommentQuery.mutate({
            productCommentId: productCommentId,
            productId: productId,
            userId: userId,
            productCommentContent: quillValue,
            productCommentRatingId: productCommentRatingId,
            productCommentRatingValue: rating 
        })
    };
    
    return (
        <div css={s.background}>
            <div css={s.layout}>
                <div>
                    <div>리뷰 수정하기</div>
                    <div>
                         <div>        
                             <div>
                                 {[1, 2, 3, 4, 5].map((value) => (
                                    <button
                                        key={value}
                                        css={s.starButtons}
                                        onClick={() => setRating(value)}
                                    >
                                        {value <= rating ? <FaStar css={s.activeStarButton}/> : <FaRegStar css={s.starButton}/>}
                                    </button>
                                ))}
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
                    </div>
                </div>
                <div>   
                    <button css={s.buttons3} onClick={onClose}>취소하기</button>
                    <button css={s.buttons3} onClick={submitReview}>수정하기</button>
                </div>
            </div>
        </div>
    );
}

export default ProductReviewModal;