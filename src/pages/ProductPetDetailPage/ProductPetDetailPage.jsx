/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useRef, useState } from "react";
import { AiFillHeart, AiOutlineHeart  } from "react-icons/ai";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { deleteProductFavoriteRequest, getProductFavoriteStatusRequest, getProductsFavoritesRequest, postProductFavoriteRequest } from "../../apis/api/product";
import { FaPlus, FaMinus, FaStar, FaRegStar } from "react-icons/fa6";
import { getAllSizeCategoryRequest } from "../../apis/api/options";
import { useSelect } from "../../hooks/useSelect";
import { postProductCartAddRequest } from "../../apis/api/productCart";
import { VscChevronDown, VscChevronUp  } from "react-icons/vsc";
import {getProductReviewsCountRequest, getProductReviewsPageRequest } from "../../apis/api/productComment";
import ProductPetPageDetailPageNumbers from "../../components/ProductPetPageDetailPageNumbers/ProductPetPageDetailPageNumbers";
import ProductPayment from "../../components/ProductPayment/ProductPayment"
import ProductImage from "../../components/ProductImage/ProductImage";
import ProductReviewRatingChart from "../../components/ProductReviewRatingChart/ProductReviewRatingChart";
import ProductSelect from "../../components/ProductSelect/ProductSelect";
import { CiDeliveryTruck } from "react-icons/ci";
import { GoCodeReview } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";


function ProductPetDetailPage() {
    const navigate = useNavigate();
    const [ searchParams, setSearchParams ] = useSearchParams();
    const [ isLiked, setIsLiked ] = useState(false);
    const [ user, setUser ] = useState("");
    const [ productOrderCount, setProductOrderCount ] = useState(1);
    const [ productSizeOptions , setProductSizeOptions ] = useState([]);
    const [ reviews, setReviews ] = useState([]);
    const queryClient = useQueryClient();
    const principalQueryState = queryClient.getQueryState("principalQuery");
    const productId = parseInt(searchParams.get("productId"));
    const userId = principalQueryState.data?.data.userId;
    const selectedSizeType = useSelect();
    const [ isDetailPage, setIsDetailPage ] = useState(false);
    const hiddenUsername =  '****' + principalQueryState.data?.data.username.slice(-3);
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const [ totalCount, setTotalCount ] = useState(0);
    const searchCount = 5;
    const totalRating  = reviews.reduce((sum, review) => sum + review.productCommentRatingValue, 0);
    const averageRating = (totalRating / reviews.length).toFixed(1);
    const positiveRatingPercentage = reviews.reduce((count, review) => {
        if (review.productCommentRatingValue >= 4) {
            return count + 1;
        }
        return count;
    }, 0) / reviews.length * 100;
    const reviewBoxRef = useRef("");

    const getProductFavoriteStatusQuery = useQuery(
        ["getProductFavoriteStatusQuery", userId, productId],
        async () => await getProductFavoriteStatusRequest({
            productId: productId,
            userId: userId
        }),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                console.log(response.data)
                setIsLiked(response.data)
            },
            onError: (error) => {
                console.log(error);
            }
        }
    )

    const getProductsFavoriteQuery = useQuery(
        ["getProductsFavoriteQuery", productId ],
        async () => await getProductsFavoritesRequest ({
            productId: productId
        }),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                setUser(response.data)
            },
            onError: (error) => {
                console.log(error);
            }
        }
    )

    const getProductSizeOptionsQuery = useQuery(
        ["getProductSizeOptionsQuery"],
        getAllSizeCategoryRequest,
        {
            retry:0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                setProductSizeOptions(() => response.data.map(sizeOption => {
                   return {
                    value : sizeOption.productSizeCategoryId,
                    label : sizeOption.productSizeCategoryNameKor
                }
                }))
            }
        }
    )

    const getProductReviewsSearchCountQuery = useQuery(
        ["getProductReviewsSearchCountQuery", searchParams.get("page")],
        async () => await getProductReviewsPageRequest({
            page: searchParams.get("page"),
            count: searchCount,
            productId : productId
        }),
            {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                console.log(response)
                setReviews(response.data)
            },
            onError: (error) => {
                console.log(error);
            }
        }
    );

    const getProductReviewsCountQuery = useQuery(
        ["getProductReviewsCountQuery", getProductReviewsSearchCountQuery.data],
        async () => await getProductReviewsCountRequest({
            count: searchCount,
            productId : productId
        }),
        {
            refetchOnWindowFocus: false,
            onSuccess: response => {
                console.log(response)
                setTotalCount(response.data.totalCount)
            },
            onError: error => {
                console.log(error)
            }
        }
    );
   
    const postProductCartAddQuery = useMutation ({
        mutationKey: "postProductCartAddQuery",
        mutationFn: postProductCartAddRequest,
        onSuccess: response => {
            alert("장바구니에 상품이 추가되었습니다.")
            window.location.replace("/product/pet/cart")
        },
        onError: error => {
            if(error.response.status === 500) {
                alert("옵션을 선택하지 않으셨습니다. 옵션을 선택해 주세요. \n 배송지 생략")
            } 
        }
    })


    const postProductFavoriteQuery = useMutation({
        mutationKey: "postProductFavoriteQuery",
        mutationFn: postProductFavoriteRequest,
        onSuccess: response => {
        },
        onError: error => {
        }
    })

    const deleteProductFavoriteQuery = useMutation({
        mutationKey: "deleteProductFavoriteQuery",
        mutationFn: deleteProductFavoriteRequest,
        onSuccess: response => {
        },
        onError: error => {
            
        }
    })
    
    const toggleFavoriteStatusButton = async () => {
            if (!principalQueryState.data?.data.userId) {
                alert("로그인 후 이용 바랍니다.")
                window.location.replace("/auth/sign-in");
                return;
            }
            if (isLiked) {
                await deleteProductFavoriteQuery.mutateAsync({
                    productId: productId,
                    userId: userId
                });
            } else {
                await postProductFavoriteQuery.mutateAsync({
                    productId: productId,
                    userId: userId
                });
            }
            const response = await getProductsFavoritesRequest({
                productId: productId
            });
            setUser(response.data);
            setIsLiked(Liked => !Liked);
    }

    const handleProductPurchase = () => {
        if (!principalQueryState.data?.data.userId) {
            alert("로그인 후 이용 바랍니다.")
            window.location.replace("/auth/sign-in");
            return;
        }
        if (!selectedSizeType.option) {
            alert("옵션을 선택해주세요.");
            return;
        }
        setIsModalOpen(() => true)
    }

    const handleProductCartAdd = () => {
        if (!principalQueryState.data?.data.userId) {
            alert("로그인 후 이용 바랍니다.")
            window.location.replace("/auth/sign-in");
            return;
        }
        postProductCartAddQuery.mutate({
            userId: userId,
            productId: productId,
            productSizeCategoryId: selectedSizeType.option?.value,
            productCartCount : productOrderCount
        })
    }

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

    const scrollToReviews = () => {
        if (reviewBoxRef.current) {
            reviewBoxRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handleChangeDetaill = () => {
        selectedSizeType.handleOnChange(null);  
    };
    console.log(selectedSizeType.option)
    return (
        
        <div>

            <div css={s.layout} >
                <div css={s.sideImg}>
                    <div css={s.productImg}>  
                        <ProductImage src={user.productImageUrl} /> 
                    </div>
                </div>
                <div css={s.productBox}>
                    <div css={s.productBoxHeader}>
                        <div css={s.titleContainer}>
                            <div>{user.productNameKor}
                            </div>
                            <div css={s.kakaoImg}>
                                <img src="https://i.namu.wiki/i/hCT_psPprettZiPahW16bpqqcdX1ONz47hgEfPbvb8S7k9MyH-6TZKK4Cn9B2bzBYBUAzQ35V222jl2nfnIOK1GfVbDN--0FJTk-AQeuKsGKKc_Xq08CLAJa8suv2CryxZ6VqsMS4sNoL4N4vEAKjQ.svg" alt="" />
                            </div>
                        </div>
                        <div css={s.icons}>
                            <CiDeliveryTruck />
                            <div>오늘출발</div>
                        </div>
                        <div css={s.contentBox}>
                            <div>{user && user.productPrice.toLocaleString()}원</div>
                        </div>
                    </div>
                    <div css={s.productBody}>
                        <div css={s.productOrderContainer}>
                            <div css={s.productDetailBox}>
                                <div>상세옵션</div>
                                <div>/ 상품 기본정보 입니다.</div>
                            </div>
                            <div css={s.productDeliveryBox}>
                                <div>배송비</div>
                                <div>무료</div>
                            </div>
                            <div css={s.productSizeBox}>
                                <div>사이즈</div>
                                <div>
                                    <ProductSelect options={productSizeOptions} value={selectedSizeType.option} onChange={selectedSizeType.handleOnChange} />
                                </div>
                            </div>
                        </div>
                            {!!selectedSizeType.option && 
                            <div css={s.productDeliveryBox3}>
                                <div css={s.productKorConunt}>
                                    <div>{user.productNameKor}</div>
                                    <div onClick={handleChangeDetaill}>x</div>
                                </div>
                                <div css={s.selectedSizeTypeOnBox}>
                                    <button onClick={() => {
                                                    if (productOrderCount > 1) {
                                                        setProductOrderCount(productOrderCount - 1);
                                                    }
                                                }}><FaMinus />
                                    </button>
                                    <div>{productOrderCount}</div>
                                    <button onClick={() => setProductOrderCount(productOrderCount + 1)}><FaPlus /></button>
                                </div>
                            </div>
                            }
                        <div css={s.productDeliveryBox2}>
                            <div>총 상품 금액</div>
                            <div>{user && (user.productPrice * productOrderCount).toLocaleString()}원</div>
                        </div>
                        <button css={s.productOrderPayButton} onClick={handleProductPurchase}>구매하기</button>
                        <div css={s.productOrderbox}>
                            <button css={s.productOrderButtons} onClick={scrollToReviews}>
                                <span><GoCodeReview /></span>
                                <span>리뷰</span>
                            </button>
                            <button css={s.productOrderButtons} onClick={toggleFavoriteStatusButton}>
                                    <span>{isLiked ? <AiFillHeart css={s.fillHeartIcon} /> : <AiOutlineHeart  css={s.HeartIcon}/>}</span>
                                    <span>{user.totalUserIdCount}</span>
                            </button>
                            <button css={s.productOrderButtons} onClick={handleProductCartAdd}>
                                <span><FiShoppingCart /></span>
                                <span>장바구니</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
                <div css={s.productFooter}>
                    <div>
                        {!isDetailPage 
                        ?
                        <div>
                            <div css={() => s.productDetailBox2(isDetailPage)}>
                                <img src={user.productBoardContent} alt="" />   
                            </div>
                            <button css={s.productDetailButtonOn} onClick={() => setIsDetailPage(true)}>상세페이지 <VscChevronDown /></button>
                        </div>
                        : 
                        <div>
                            <div css={() => s.productDetailBox2(isDetailPage)}>
                                <img src={user.productBoardContent} alt="" />   
                            </div>
                            <button css={s.productDetailButtonOn} onClick={() => setIsDetailPage(false)}>상세페이지 <VscChevronUp /></button>
                        </div>
                        }
                    </div>
                    <div css={s.reviewBoxRef} ref={reviewBoxRef} ></div>
                    <div css={s.reviewBox}>
                        <div> 리뷰 ({totalCount})</div>
                    </div>
                    <div css={s.ratingBox}>
                        <div  css={s.ratingBox1}>
                            <div><FaStar css={s.activeStarButton2} /> { isNaN(averageRating) ? 0 : averageRating }</div>
                            <div>{isNaN(positiveRatingPercentage.toFixed(1)) ? 0 : positiveRatingPercentage.toFixed(1)}%의 구매자가 이 상품을 좋아합니다.</div>
                            <button css={s.productOrderButton} onClick={() => navigate("/account/mypage/reviews")}>상품 리뷰 작성하기</button>
                        </div>
                        <ProductReviewRatingChart reviews={reviews} />
                    </div>
                    {reviews.map(review => 
                        <div key={review.productCommentId} css={s.reviewBox1}>
                            <div css={s.reviewBox2}>
                                <div css={s.reviewBox3}>
                                    <div>{renderRatingStars(review.productCommentRatingValue)}</div>
                                    <div>{review.updateDate}</div>
                                </div>
                                <div css={s.contentBox2}>
                                    <div dangerouslySetInnerHTML={{__html:review.productCommentContent}}></div>
                                </div>
                            </div>
                            <div css={s.reviewBox4}>
                                {hiddenUsername}님의 리뷰입니다.
                            </div>
                        </div>
                    )}
                    {   !getProductReviewsCountQuery.isLoading &&
                        <ProductPetPageDetailPageNumbers reviewsCount={getProductReviewsCountQuery.data?.data} productId={productId}/> 
                    }
                </div>
                {isModalOpen && (
                    <ProductPayment onClose={() => setIsModalOpen(false)} order={user} option={selectedSizeType.option} productOrderCount={productOrderCount} />
                )}
        </div>
    );
}

export default ProductPetDetailPage;