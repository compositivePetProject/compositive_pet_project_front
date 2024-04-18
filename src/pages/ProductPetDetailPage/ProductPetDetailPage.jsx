/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart  } from "react-icons/ai";
import { useSearchParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { deleteProductFavoriteRequest, getProductFavoriteStatusRequest, getProductsFavoritesRequest, postProductFavoriteRequest } from "../../apis/api/product";
import { postProductOrderRequest } from "../../apis/api/productOrder";
import { FaPlus, FaMinus } from "react-icons/fa6";
import Select from "react-select";
import { getAllSizeCategoryRequest } from "../../apis/api/options";
import { useSelect } from "../../hooks/useSelect";
import { postProductCartAddRequest } from "../../apis/api/productCart";
import { useInput } from "../../hooks/useInput";
import AuthPageInput from "../../components/AuthPageInput/AuthPageInput";

function ProductPetDetailPage() {
    const [ searchParams, setSearchParams ] = useSearchParams();
    const [ isLiked, setIsLiked ] = useState(false);
    const [ user, setUser ] = useState("");
    const [ productOrderCount, setProductOrderCount ] = useState(1);
    const [ productSizeOptions , setProductSizeOptions ] = useState([]);
    const queryClient = useQueryClient();
    const principalQueryState = queryClient.getQueryState("principalQuery");
    const productId = parseInt(searchParams.get("productId"));
    const userId = principalQueryState.data?.data.userId;
    const selectedSizeType = useSelect();
    const [productOrderAddress, productOrderAddressOnChege, productOrderAdderssMessage, setProductOrderAddress, setProductOrderAdderssMessage] = useInput();
    const [productOrderDetailAddress, productOrderDetailAddressOnChege, productOrderDetailAdderssMessage, setProductOrderDetailAddress, setProductOrderDetailAdderssMessage] = useInput();
    
    
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
                    label : sizeOption.productSizeCategoryName
                }
                }))
            }
        }
    )
    
    const getProductFavoriteStatusQuery = useQuery(
        ["getProductFavoriteStatusQuery", productId, userId],
        async () => await getProductFavoriteStatusRequest ({
            productId: productId,
            userId: userId
        }),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
            },
            onError: (error) => {
            }
        }
    )

    const postProductOrderQuery = useMutation({
        mutationKey: "postProductOrderQuery",
        mutationFn: postProductOrderRequest,
        onSuccess: response => {
            alert("결제페이지로 이동합니다.")
            window.location.replace("/product/pet/order/payment")
        },
        onError: error => {
            if(error.response.status === 400) {
                const errorMap = error.response.data;
                const errorEntries = Object.entries(errorMap);
                for(let [ k, v ] of errorEntries) {
                    if(k === "productOrderAddress") {
                        setProductOrderAdderssMessage(() => {
                            return {
                                type: "error",
                                text: v
                            }
                        })
                    }
                    if(k === "productOrderDetailAddress") {
                        setProductOrderDetailAdderssMessage(() => {
                            return {
                                type: "error",
                                text: v
                            }
                        })
                    } 
                }
            }
            if(error.response.status === 500) {
                alert("옵션을 선택하지 않으셨습니다. 옵션을 선택해 주세요.")
            } 
        }
    })

    const postProductCartAddQuery = useMutation ({
        mutationKey: "postProductCartAddQuery",
        mutationFn: postProductCartAddRequest,
        onSuccess: response => {
            alert("장바구니에 상품이 추가되었습니다.")
            window.location.replace("/product/pet/cart")
        },
        onError: error => {
            if(error.response.status === 500) {
                alert("옵션을 선택하지 않으셨습니다. 옵션을 선택해 주세요.")
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
        postProductOrderQuery.mutate({
            userId : userId,
            productId : productId,
            productOrderAddress: productOrderAddress, 
            productOrderDetailAddress: productOrderDetailAddress,
            productSizeCategoryId: selectedSizeType.option?.value,
            productOrderCount : productOrderCount
        })
    }

    const handleProductCartAdd = () => {
        postProductCartAddQuery.mutate({
            userId: userId,
            productId: productId,
            productSizeCategoryId: selectedSizeType.option?.value,
            productCartCount : productOrderCount
        })
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
        <div css={s.layout}>
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
                            <div>3000원 (50,000원 이상 무료배송)</div>
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
                        <div>
                            <AuthPageInput value={productOrderAddress} onChange={productOrderAddressOnChege} placeholder="배송지를 입력해주세요" message={productOrderAdderssMessage}/>
                            <AuthPageInput value={productOrderDetailAddress} onChange={productOrderDetailAddressOnChege} placeholder="상세주소를 입력해주세요" message={productOrderDetailAdderssMessage}/>
                        </div>
                        <div css={s.productOrderbox}>
                            <div css={s.productDeliveryBox}>
                                <div>총 상품 금액</div>
                                <div>30000원</div>
                            </div>
                            <button css={s.productOrderButtons} onClick={handleProductPurchase}>구매하기</button>
                            <button css={s.productOrderButtons} onClick={handleProductCartAdd}>장바구니</button>
                        </div>
                    </div>
                    <div>
                        <button css={s.productDetailButtons}>상세페이지 버튼</button>
                        <div dangerouslySetInnerHTML={{__html:user.productBoardContent}}></div>
                    </div>
                </div>
                <div css={s.productFooter}>
                    댓글
                </div>
            </div>
        </div>
    );
}

export default ProductPetDetailPage;