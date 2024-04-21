/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { deleteProductOrderRequest, getProductOrdersRequest, putProductOrderRequest } from "../../apis/api/productOrder";
import AuthPageInput from "../../components/AuthPageInput/AuthPageInput";
import { useInput } from "../../hooks/useInput";
import { getAllSizeCategoryRequest } from "../../apis/api/options";
import { postProductCartAddRequest } from "../../apis/api/productCart";
import { useSelect } from "../../hooks/useSelect";
import Select from "react-select";
import { FaPlus, FaMinus } from "react-icons/fa6";


function MyOrdersPage(props) {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const principalQueryState = queryClient.getQueryState("principalQuery");
    const [ userOrders, setUserOrders ] = useState([]);
    const userId = principalQueryState.data?.data.userId;
    const [ isEditing, setIsEditing ] = useState(false);
    const [editedOrder, setEditedOrder] = useState(null); 
    const selectedSizeType = useSelect();
    const [ productOrderCount, setProductOrderCount ] = useState(1);
    const [ productSizeOptions , setProductSizeOptions ] = useState([]);
    const [productOrderAddress, productOrderAddressOnChege, productOrderAdderssMessage, setProductOrderAddress, setProductOrderAdderssMessage] = useInput();
    const [productOrderDetailAddress, productOrderDetailAddressOnChege, productOrderDetailAdderssMessage, setProductOrderDetailAddress, setProductOrderDetailAdderssMessage] = useInput();
    
    const getProductOrdersQuery = useQuery(
        ["getProductOrdersQuery", principalQueryState.data],
        async () => await getProductOrdersRequest ({
            userId: userId
        }),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                console.log(response)
                setUserOrders(() => response.data)
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

    const postProductCartAddQuery = useMutation ({
        mutationKey: "postProductCartAddQuery",
        mutationFn: postProductCartAddRequest,
        onSuccess: response => {
            alert("장바구니에 추가 완료 되었습니다. ")
            window.location.replace("/product/pet/cart")
        },
        onError: error => {
        }
    })
    
    const deleteProductOrderQuery = useMutation({
        mutationKey: "deleteProductOrderQuery",
        mutationFn: deleteProductOrderRequest,
        onSuccess: response => {
            window.location.reload();
        },
        onError: error => {
        }
    })

    const putProductOrderQuery = useMutation({
        mutationKey: "putProductOrderQuery",
        mutationFn: putProductOrderRequest,
        onSuccess: response => {
            alert("상품 수정이 완료 되었습니다. ")
            window.location.reload();
        },
        onError: error => {
            setProductOrderAdderssMessage(null);
            setProductOrderDetailAdderssMessage(null);
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
    const handleProductCartAdd = (userId, productId, productSizeCategoryId, productCartCount) => {
        const confirmAdd = window.confirm("장바구니에 해당 상품을 추가하겠습니까?");
            if(confirmAdd) {
                postProductCartAddQuery.mutate({
                    userId: userId,
                    productId: productId,
                    productSizeCategoryId: productSizeCategoryId,
                    productCartCount : productCartCount
                })
            }
    }
    
    const handleChangeOrderDelete = (productOrderId) => {
        const confirmCancel = window.confirm("주문을 취소하시겠습니까?");
        if(confirmCancel) {
            deleteProductOrderQuery.mutate({
                productOrderId : productOrderId
            })
        }
    }

    const handleChangeOrderPut = (productOrderId) => {
        putProductOrderQuery.mutate({
            productOrderId : productOrderId,
            productOrderAddress : productOrderAddress, 
            productDetailOrderAddress : productOrderDetailAddress,
            productSizeCategoryId : selectedSizeType.option?.value,
            productOrderCount : productOrderCount
        })
    }
    
    const handleOpenEditModal = (order) => {
        setIsEditing(true); 
        setEditedOrder(order); 
    };

    const handleCloseEditModal = () => {
        setIsEditing(false); 
        setEditedOrder(null); 
    };
    
    const selectStyle2 = {
        control: baseStyles => ({
            ...baseStyles,
            borderRadius: "0px",
            border: "none",
            outline: "none",
            boxShadow: "none"
        })
    }
    
    console.log(userOrders)

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
                <div css={s.title}>주문 내역</div>
                <div>결제 정보</div>
                    { userOrders.map(userOrder => 
                        <div key={userOrder.productOrderId} css={s.container}>
                            <div css={s.orderHeader}>
                                <div>{userOrder.createDate} 주문</div>
                            </div>
                            <div css={s.container2}>
                                <div css={s.container3}>
                                    <div css={s.imgBox} onClick={() => navigate(`/product/pet/detail/${userOrder.productId}/?productId=${userOrder.productId}`)}>
                                        <img src={userOrder.productImageUrl} alt="" />
                                    </div>
                                    <div css={s.container4}>
                                        <div onClick={() => navigate(`/product/pet/detail/${userOrder.productId}/?productId=${userOrder.productId}`)}>{userOrder.productNameKor}</div>
                                        <div css={s.container7}>
                                            <div>{userOrder.productOrderAddress}</div>
                                            <div>{userOrder.productDetailOrderAddress}</div>
                                        </div>
                                        <div css={s.container5}>
                                            <div>
                                                <span>{parseInt(userOrder.productPrice * userOrder.productOrderCount)}원</span>
                                                <span> / {userOrder.productSizeCategoryNameKor} / </span>
                                                <span>{userOrder.productOrderCount}개</span>
                                            </div>
                                            <button css={s.buttons3} onClick={() => handleProductCartAdd(userOrder.userId, userOrder.productId, userOrder.productSizeCategoryId, userOrder.productOrderCount)}>장바구니</button>
                                        </div>
                                    </div>
                                </div>
                                <div css={s.container6}>
                                    {!isEditing &&
                                    <>
                                        <button css={s.buttons3} onClick={() => handleOpenEditModal(userOrder)}>주문수정</button>
                                        <button css={s.buttons3} onClick={() => handleChangeOrderDelete(userOrder.productOrderId)}>주문취소</button>
                                    </>
                                    }
                                </div>
                            </div>
                            {isEditing && editedOrder && editedOrder.productOrderId === userOrder.productOrderId &&  (
                                <div css={s.editBox}>
                                    <div>주문 수정</div>
                                    <div>
                                        <Select
                                            styles={selectStyle2}
                                            options={productSizeOptions}
                                            placeholder={"옵션을 선택해주세요"}
                                            value={selectedSizeType.option}
                                            onChange={selectedSizeType.handleOnChange}
                                        />
                                    </div>
                                    <div css={s.productDeliveryBox}>
                                        <button onClick={() => {
                                                        if (productOrderCount > 1) {
                                                            setProductOrderCount(productOrderCount - 1);
                                                        }
                                                    }}><FaMinus />
                                        </button>
                                        <div>{productOrderCount}</div>
                                        <button onClick={() => setProductOrderCount(productOrderCount + 1)}><FaPlus /></button>
                                    </div>
                                    <AuthPageInput value={productOrderAddress} onChange={productOrderAddressOnChege} placeholder="배송지를 입력해주세요" message={productOrderAdderssMessage}/>
                                    <AuthPageInput value={productOrderDetailAddress} onChange={productOrderDetailAddressOnChege} placeholder="상세주소를 입력해주세요" message={productOrderDetailAdderssMessage}/>
                                    <div>   
                                        <button css={s.buttons3} onClick={() => handleChangeOrderPut(userOrder.productOrderId)}>수정 확인</button>
                                        <button css={s.buttons3} onClick={handleCloseEditModal}>수정 취소</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
        </div>
    );
}

export default MyOrdersPage;