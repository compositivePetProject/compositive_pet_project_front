/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useRef, useState } from "react";
import { AiFillHeart, AiOutlineHeart  } from "react-icons/ai";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { deleteProductFavoriteRequest, getProductFavoriteStatusRequest, getProductsFavoritesRequest, postProductFavoriteRequest } from "../../apis/api/product";
import { FaPlus, FaMinus, FaStar, FaRegStar } from "react-icons/fa6";
import Select from "react-select";
import { getAllSizeCategoryRequest } from "../../apis/api/options";
import { useSelect } from "../../hooks/useSelect";
import { postProductCartAddRequest } from "../../apis/api/productCart";
import { VscChevronDown, VscChevronUp  } from "react-icons/vsc";
import {getProductReviewsCountRequest, getProductReviewsPageRequest } from "../../apis/api/productComment";
import ProductPetPageDetailPageNumbers from "../../components/ProductPetPageDetailPageNumbers/ProductPetPageDetailPageNumbers";
import ProductPayment from "../../components/ProductPayment/ProductPayment"

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
    const averageRating = totalRating / reviews.length;


    useEffect(() => {
        const fetchProductFavoriteStatus = async () => {
            const response = await getProductFavoriteStatusRequest({
                productId: productId,
                userId: userId
            });
            setIsLiked(response.data);
            
        };
        fetchProductFavoriteStatus();
    }, [productId, userId]);

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
 
    const toggleFavoriteStatus = async () => {
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
        if (!selectedSizeType.option) {
            alert("옵션을 선택해주세요.");
            return;
        }
        setIsModalOpen(() => true)
    }

    const handleProductCartAdd = () => {
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
    

    const selectStyle2 = {
        control: baseStyles => ({
            ...baseStyles,
            borderRadius: "0px",
            border: "none",
            outline: "none",
            boxShadow: "none"
        })
    }

   
    return (
        <div css={s.layout} >
            <div css={s.sideImg}>
                <div css={s.productImg}>
                    <img src={user.productImageUrl} alt="" />
                </div>
            </div>
            <div css={s.productBox}>
                <div css={s.productBoxHeader}>
                    <div>{user.productNameKor}</div>
                    <div css={s.contentBox}>
                        <div>{user.productPrice}원</div>
                        <button onClick={toggleFavoriteStatus}>
                            {isLiked ? <AiFillHeart css={s.fillHeartIcon} /> : <AiOutlineHeart />}
                            <div css={s.totalCount}>{user.totalUserIdCount}</div>
                        </button>
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
                                <Select
                                styles={selectStyle2}
                                options={productSizeOptions}
                                placeholder={"옵션을 선택해주세요"}
                                value={selectedSizeType.option}
                                onChange={selectedSizeType.handleOnChange}
                                />
                            </div>
                        </div>
                        <div css={s.productDeliveryBox}>
                            <div>수량</div>
                            <button onClick={() => {
                                            if (productOrderCount > 1) {
                                                setProductOrderCount(productOrderCount - 1);
                                            }
                                        }}><FaMinus />
                            </button>
                            <div>{productOrderCount}</div>
                            <button onClick={() => setProductOrderCount(productOrderCount + 1)}><FaPlus /></button>
                        </div>
                        <div css={s.productOrderbox}>
                            <div css={s.productDeliveryBox}>
                                <div>총 상품 금액</div>
                                <div>{user.productPrice * productOrderCount}원</div>
                            </div>
                            <button css={s.productOrderButtons} onClick={handleProductPurchase}>구매하기</button>
                            <button css={s.productOrderButtons} onClick={handleProductCartAdd}>장바구니</button>
                        </div>
                    </div>
                    <div>
                        {!isDetailPage 
                        ?
                        <button css={s.productDetailButtons} onClick={() => setIsDetailPage(true)}>상세페이지 <VscChevronDown /></button>
                        : 
                        <>
                            <button css={s.productDetailButtons} onClick={() => setIsDetailPage(false)}>상세페이지 <VscChevronUp /></button>
                            <div css={s.productDetailBox2}>
                                <div dangerouslySetInnerHTML={{__html:user.productBoardContent}}></div>
                            </div>
                        </>
                        }
                    </div>
                    <div css={s.productFooter}>
                        <div css={s.reviewBox}>
                            <div> 리뷰 ({totalCount})</div>
                            <button css={s.productOrderButton} onClick={() => navigate("/account/mypage/reviews")}>리뷰 작성하기</button>
                        </div>
                        <div>
                        <FaStar css={s.activeStarButton} /> { isNaN(averageRating) ? 0 : averageRating }
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
                        <ProductPayment onClose={() => setIsModalOpen(false)} order={user} option={selectedSizeType.option?.value} productOrderCount={productOrderCount} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductPetDetailPage;