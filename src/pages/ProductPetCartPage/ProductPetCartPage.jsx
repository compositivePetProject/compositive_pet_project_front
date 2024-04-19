/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import  {getProductCartListRequest } from '../../apis/api/productCart'
import { useNavigate } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa6";

function ProductPetCartPage(props) {
    const navigate = useNavigate();
    const [ productCartList, setProductCartList ] = useState([]);
    const [ productOrderCount, setProductOrderCount ] = useState(1);
    const queryClient = useQueryClient();
    const principalQueryState = queryClient.getQueryState("principalQuery");
    const [ checkAll, setCheckAll ] = useState({
        checked: false,
        target: 1 
    });

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

    const getProductCartListQuery = useQuery(
        ["getProductCartListQuery", principalQueryState.data],
        async () => await getProductCartListRequest ({
            userId : principalQueryState.data?.data.userId
        }),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                console.log(response)
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

    console.log(productOrderCount)
    return (
        <div css={s.layout}>
            <div css={s.userInfoBox}>
                <div css={s.title}>장바구니</div>
                <div css={s.container}>
                    <div><input type="checkbox" checked={checkAll.checked} onChange={handleCheckAllChange} /></div>
                    <div>전체 선택 (1 / 2) </div>
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
                            <div css={s.imgBox} onClick={() => navigate(`/product/pet/detail/${productCart.productId}/?productId=${productCart.productId}`)}>
                                <img src={productCart.productImageUrl} alt="" />
                            </div>
                            <div css={s.container4}>
                                <div onClick={() => navigate(`/product/pet/detail/${productCart.productId}/?productId=${productCart.productId}`)}>유기농 건강식 고양이 사료</div> 
                                <div>{parseInt(productCart.productPrice * productCart.productCartCount)}원</div>
                                <div css={s.productDeliveryBox}>
                                    // 수정예정
                                    <button onClick={() => {
                                                    if (productOrderCount > 1) {
                                                        setProductOrderCount(productOrderCount - 1);
                                                    }
                                                }}><FaMinus />
                                    </button>
                                    <div>{productCart.productCartCount}</div>
                                    <button onClick={() => setProductOrderCount(productOrderCount + 1)}><FaPlus /></button>
                                </div>
                            </div>
                        </div>                       
                        )}
                    </div>
                        <button css={s.buttons3}>구매하기 (1)</button>
                </div>
            <div css={s.totalContainer}>
                <div css={s.totalBox}>
                    <div css={s.totalBoxIn}>
                        <div css={s.totalBoxIn2}> 
                            <div>총 상품 금액</div>
                            <div>20000원</div>
                        </div>
                        <div css={s.totalBoxIn2}> 
                            <div>배송비</div>
                            <div>+ 0원</div>
                        </div>
                        <div>
                            <div css={s.totalBoxInPrice}>20000원</div>                            
                            <button css={s.buttons4}>구매하기 (1)</button>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    );
}

export default ProductPetCartPage;