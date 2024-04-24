/** @jsxImportSource @emotion/react */
import { useMutation, useQuery, useQueryClient } from "react-query";
import * as s from "./style";
import { useEffect } from "react";
import { getProductsRequest } from "../../apis/api/product";
import { postProductOrderRequest } from "../../apis/api/productOrder";

function ProductPetShopPaymentPage(props) {
    const queryClient = useQueryClient();

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
            window.location.replace("/product/pet/order/payment")
        },
        onError: error => {
            console.log(error)
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

    const handlePaymentSubmit = (product) => {
        const principal = queryClient.getQueryState("principalQuery");
        if(!window.IMP) {return;}
        const { IMP } = window;
        IMP.init("imp65452786");

        const paymentData = {
            pg: "kakaopay",
            pay_method: "kakaopay",
            merchant_uid: `mid_${new Date().getTime()}`,
            amount: product.productPrice,
            name: product.productNameKor,
            buyer_name: principal?.data?.data?.name,
            buyer_email: principal?.data?.data?.email
        }

        console.log(paymentData)

        IMP.request_pay(paymentData, (response) => {
            const { success, error_msg } = response;
            console.log(success)

            if(success) {
                alert("포인트 충전이 완료되었습니다.");
                postProductOrderQuery.mutate({
                    
                })
            } else {
                alert(error_msg);
            }
        });
    }

    return (
        <>
            <h1>포인트 충전하기</h1>
            <div css={s.storeContainer}>
                {!getProductsQuery.isLoading && getProductsQuery?.data?.data.map(product => {
                        return  <button key={product.productId} css={s.productContainer} 
                                    onClick={() => {handlePaymentSubmit(product);}}>
                                    {product.productNameKor} Point
                                </button>
                    })}
            </div>
        </>
    );
}

export default ProductPetShopPaymentPage;