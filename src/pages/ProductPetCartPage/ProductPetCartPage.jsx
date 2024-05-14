/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import  {deleteProductCartsRequest, getProductCartListRequest } from '../../apis/api/productCart'
import { useNavigate } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { postProductOrderCartsRequest } from "../../apis/api/productOrder";

function ProductPetCartPage(props) {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const principalQueryState = queryClient.getQueryState("principalQuery");
    const [ productCartList, setProductCartList ] = useState([]);
    const selectProductCart = productCartList.filter(productCart => productCart.checked).length;
    const [ checkAll, setCheckAll ] = useState({checked: false, target: 1});
    const totalPrice = productCartList.filter(productCart => productCart.checked)
                        .reduce((total, productCart) => total + productCart.productPrice * productCart.productCartCount, 0);
                        
    useEffect(() => {
        const iamport = document.createElement("script");
        iamport.src = "https://cdn.iamport.kr/v1/iamport.js";
        document.head.appendChild(iamport);
        return () => {
            document.head.removeChild(iamport);
        }
    }, [])

    useEffect(() => {
        if(checkAll.target === 1) {
            setProductCartList(() =>
            productCartList.map(productCart => {
                return {
                        ...productCart,
                        checked: checkAll.checked
                    }
                })
            );
        }
    }, [checkAll.checked])

    useEffect(() => {
        const findCount = productCartList.filter(productCart => productCart.checked === false).length;
        if(findCount === 0) {
            setCheckAll(() => {
                return {
                    checked: true,
                    target: 2
                }
            });
        } else {
            setCheckAll(() => {
                return {
                    checked: false,
                    target: 2
                }
            });
        }
    }, [productCartList]);

    const deleteProductCartsQuery = useMutation({
        mutationKey: "deleteProductCartsQuery",
        mutationFn: deleteProductCartsRequest,
        onSuccess: response => {
            window.location.reload();
        }
    });

    const postProductOrderCartsQuery = useMutation({
        mutationKey: "postProductOrderCartsQuery",
        mutationFn: postProductOrderCartsRequest,
        onSuccess: response => {
            alert("주문 완료되었습니다. \n 배송지는 마이페이지 - 주문 내역 수정 할 수 있습니다.");
            window.location.reload();
        }
    });

    const getProductCartListQuery = useQuery(
        ["getProductCartListQuery", principalQueryState.data],
        async () => await getProductCartListRequest ({
            userId : principalQueryState.data?.data.userId
        }),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                console.log(response.data)
                setProductCartList(() => response.data.map(productCart => {
                    return  {
                        ...productCart,
                        checked: false
                    }
                }))
            },
            onError: (error) => {
                console.log(error);
            }
        }
    )

    const handleProdudtCartsDelete =  () => {
        const produdtCarts = productCartList.filter(productCart => productCart.checked).map(productCart => productCart.productCartId);
        deleteProductCartsQuery.mutate(produdtCarts);
    }

    const handlePurchase = () => {
        const selectedProductCarts = productCartList.filter(productCart => productCart.checked);

        if (selectedProductCarts.length === 0) {
            alert("구매할 상품을 선택해주세요.");
            return;
        }

        const requestData = selectedProductCarts.map(productCart => ({
            userId: productCart.userId,
            productId: productCart.productId,
            productOrderAddress: principalQueryState?.data?.data?.address,
            productOrderDetailAddress: principalQueryState?.data?.data?.detailAddress,
            productSizeCategoryId: productCart.productSizeCategoryId,
            productOrderCount: productCart.productCartCount
        }));

        console.log(requestData)
        
        const productName = selectedProductCarts.length > 1 
        ? `${selectedProductCarts[0].productNameKor} 외 ${selectedProductCarts.length - 1}건` 
        : selectedProductCarts[0].productNameKor;

        if(!window.IMP) {return;}
        const { IMP } = window;
        IMP.init("imp65452786");

        const paymentData = {
            pg: "kakaopay",
            pay_method: "kakaopay",
            merchant_uid: `mid_${new Date().getTime()}`,
            amount: totalPrice,
            name: productName,
            buyer_name: principalQueryState?.data?.data?.name,
            buyer_email: principalQueryState?.data?.data?.email
        }

        IMP.request_pay(paymentData, (response) => {
            const { success, error_msg } = response;
            console.log(success)

            if(success) {
                postProductOrderCartsQuery.mutate(requestData, {
                    onSuccess: () => {
                        handleProdudtCartsDelete();
                    }
                });
            } else {
                alert(error_msg);
            }
        });
    }
    
    const handleCheckAllChange = (e) => {
        setCheckAll(() => {
            return {
                checked: e.target.checked,
                target: 1
            }
        });
    }

    const handleCheckOnChange = (e) => {
        const productCartId = parseInt(e.target.value);
        setProductCartList(() => 
            productCartList.map(productCart => {
                if(productCart.productCartId === productCartId) {
                    return {
                        ...productCart,
                        checked: e.target.checked
                    }
                }
                return productCart;
            })
        )
    }

    return (
        <div css={s.layout}>
            <div css={s.userInfoBox}>
                <div css={s.title}>장바구니</div>
                <div css={s.container}>
                    <div><input type="checkbox" checked={checkAll.checked} onChange={handleCheckAllChange} /></div>
                    <div>전체 선택 ({selectProductCart} / {productCartList.length}) </div>
                </div>
                    <div css={s.userDetails}>
                        {productCartList.map(productCart => 
                        <div key={productCart.productCartId} css={s.container1}>
                            <input 
                                type="checkbox" 
                                value={productCart.productCartId} 
                                checked={productCart.checked} 
                                onChange={handleCheckOnChange}
                            />
                            <div css={s.imgBox} onClick={() => navigate(`/product/pet/detail/?productId=${productCart.productId}`)}>
                                <img src={productCart.productImageUrl} alt="" />
                            </div>
                            <div css={s.container4}>
                                <div onClick={() => navigate(`/product/pet/detail/?productId=${productCart.productId}`)}>{productCart.productNameKor}</div> 
                                <div>{parseInt(productCart.productPrice * productCart.productCartCount)}원</div>
                                <div css={s.productDeliveryBox}>
                                    <button onClick={() => {
                                            const updatedCount = Math.max(productCart.productCartCount - 1, 1); 
                                            setProductCartList(productCartList => 
                                                productCartList.map(productCartOrder => 
                                                    productCartOrder.productCartId === productCart.productCartId 
                                                        ? { ...productCartOrder, productCartCount: updatedCount } 
                                                        : productCartOrder
                                                )
                                            );
                                        }}>
                                        <FaMinus />
                                    </button>
                                    <div>{productCart.productCartCount}</div>
                                    <button onClick={() => {
                                        const updatedCount = productCart.productCartCount + 1;
                                        setProductCartList(productCartList => 
                                            productCartList.map(productCartOrder => 
                                                productCartOrder.productCartId === productCart.productCartId 
                                                    ? { ...productCartOrder, productCartCount: updatedCount } 
                                                    : productCartOrder
                                            )
                                        );
                                    }}>
                                        <FaPlus />
                                    </button>
                                </div>
                            </div>
                        </div>                       
                        )}
                    </div>
                        <button css={s.buttons3} onClick={handleProdudtCartsDelete}>삭제하기 ({selectProductCart})</button>
                </div>
            <div css={s.totalContainer}>
                <div css={s.totalBox}>
                    <div css={s.totalBoxIn}>
                        <div css={s.totalBoxIn2}> 
                            <div>총 상품 금액</div>
                            <div>{totalPrice}원</div>
                        </div>
                        <div css={s.totalBoxIn2}> 
                            <div>배송비</div>
                            <div>+ 0원</div>
                        </div>
                        <div>
                            <div css={s.totalBoxInPrice}>{totalPrice}원</div>                            
                            <button css={s.buttons4} onClick={handlePurchase}>
                                구매하기 ({selectProductCart})</button>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    );
}

export default ProductPetCartPage;