/** @jsxImportSource @emotion/react */
import { useMutation, useQuery, useQueryClient } from "react-query";
import * as s from "./style";
import { useEffect } from "react";
import { getProductsRequest } from "../../apis/api/product";
import { postProductOrderRequest } from "../../apis/api/productOrder";
import AuthPageInput from "../AuthPageInput/AuthPageInput";
import { useInput } from "../../hooks/useInput";


function ProductPetShopPaymentPage({ onClose, order, option, productOrderCount }) {
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("principalQuery");
    const [ productOrderAddress, productOrderAddressOnChege, productOrderAdderssMessage, setProductOrderAddress, setProductOrderAdderssMessage] = useInput();
    const [ productOrderDetailAddress, productOrderDetailAddressOnChege, productOrderDetailAdderssMessage, setProductOrderDetailAddress, setProductOrderDetailAdderssMessage] = useInput();
    const orderProductPrice = order.productPrice * productOrderCount;

    const getProductsQuery = useQuery(
        ["getProductsQuery"],
        getProductsRequest,
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                console.log(response)
            },
            onError: error => {
                console.log(error)
            }
        }
    )

    const postProductOrderQuery = useMutation({
        mutationKey: "postProductOrderQuery",
        mutationFn: postProductOrderRequest,
        onSuccess: response => {
            alert("결제가 완료되었습니다.")
            window.location.replace("/account/mypage/orders")
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


    useEffect(() => {
        const iamport = document.createElement("script");
        iamport.src = "https://cdn.iamport.kr/v1/iamport.js";
        document.head.appendChild(iamport);
        return () => {
            document.head.removeChild(iamport);
        }
    }, [])

    const handlePaymentSubmit = (order) => {
        if (!productOrderAddress) {
            alert("배송지를 입력해주세요.");
            return;
        }
        
        if (!productOrderDetailAddress) {
            alert("상세주소를 입력해주세요.");
            return;
        }

        if(!window.IMP) {return;}
        const { IMP } = window;
        IMP.init("imp65452786");

        const paymentData = {
            pg: "kakaopay",
            pay_method: "kakaopay",
            merchant_uid: `mid_${new Date().getTime()}`,
            amount: orderProductPrice,
            name: order.productNameKor,
            buyer_name: principal?.data?.data?.name,
            buyer_email: principal?.data?.data?.email
        }
        
        
        IMP.request_pay(paymentData, (response) => {
            const { success, error_msg } = response;
            console.log(success)

            if(success) {
                postProductOrderQuery.mutate({
                    userId : principal?.data?.data?.userId,
                    productId : order.productId,
                    productOrderAddress: productOrderAddress, 
                    productOrderDetailAddress: productOrderDetailAddress,
                    productSizeCategoryId: option,
                    productOrderCount : productOrderCount
                })
            } else {
                alert(error_msg);
            }
        });
    }

    return (
        <div css={s.background}>
            <div css={s.layout}>
                <h3>배송지</h3>
                <div css={s.storeContainer}>
                    <div css={s.inputBox}>
                        <div>{principal.data?.data.name}({principal.data?.data.nickname})</div>
                        <div>{principal.data?.data.telNumber}</div>
                        <AuthPageInput value={productOrderAddress} onChange={productOrderAddressOnChege} placeholder="배송지를 입력해주세요" message={productOrderAdderssMessage}/>
                        <AuthPageInput value={productOrderDetailAddress} onChange={productOrderDetailAddressOnChege} placeholder="상세주소를 입력해주세요" message={productOrderDetailAdderssMessage}/>
                    </div>
                </div>
                <h3>주문 상품</h3>
                <div css={s.storeContainer}>
                    <div css={s.orderBox}>
                        <div>(주)도대표회사</div>
                        <div>무료배송</div>
                    </div>
                    <div css={s.productContainer}>
                        <div css={s.productImg}>
                            <img src={order.productImageUrl} alt="" />
                        </div>
                        <div css={s.productContainer2}>
                            <div>{order.productNameKor}</div>
                            <div css={s.productContainer3}> 
                                <div>수량</div>
                                <div>{productOrderCount}개</div>
                            </div>
                            <div>{orderProductPrice}원</div>
                        </div>
                    </div>
                </div>
                <div css={s.storeContainer2}>
                    <div>총 주문 금액</div>
                    <div>{orderProductPrice}원</div>
                </div>
                <h3>결제 수단</h3>
                <div css={s.storeContainer3}>
                    <input type="radio" checked={true} disabled={true}/>
                    <div>카카오 페이 결제</div>
                </div>
                <div>
                    <button css={s.productDetailButtons}  onClick={onClose}>취소</button>
                    { <button css={s.productDetailButtons} 
                            onClick={() => {handlePaymentSubmit(order);}}>
                            결제하기
                        </button>
                    }
                </div>
            </div>
        </div>
    );
}

export default ProductPetShopPaymentPage;