/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { deleteProductOrderRequest, getProductOrdersRequest } from "../../apis/api/productOrder";
import MyPageSideBar from "../../components/MyPageSideBar/MyPageSideBar";

function MyReviewsPage() {
    const navigate = useNavigate();
    const [ userOrders, setUserOrders ] = useState([]);
    const queryClient = useQueryClient();
    const principalQueryState = queryClient.getQueryState("principalQuery");
    const userId = principalQueryState.data?.data.userId;

    const deleteProductOrderQuery = useMutation({
        mutationKey: "deleteProductOrderQuery",
        mutationFn: deleteProductOrderRequest,
        onSuccess: response => {
            window.location.reload();
        },
        onError: error => {
        }
    })

    const handlehideProduct = (productOrderId) => {
        const confirmHide = window.confirm("숨기기한 구매후기는 복구할 수 없으며 추후 작성이 불가능합니다. \n 이 상품을 숨기시겠습니까?");
        if (confirmHide) {
            deleteProductOrderQuery.mutate({
                productOrderId : productOrderId
            })
        } 
    };

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


    return (
        <div css={s.layout}>
            <MyPageSideBar />
            <div css={s.userDetails}>
                <div css={s.title}>리뷰 관리</div>
                <div css={s.reviews}>
                    <div onClick={() => navigate("/account/mypage/reviews")}>리뷰 작성</div>
                    <div onClick={() => navigate(`/account/mypage/review/wrote/?userId=${userId}`)}>작성한 리뷰</div>
                </div>
                { userOrders.map(userOrder => 
                    <div key={userOrder.productOrderId} css={s.container}>
                        <div css={s.container2}>
                            <div css={s.container3}>
                                <div css={s.orderHeader}>
                                        <div>배송완료</div>
                                        <div css={s.imgBox} onClick={() => navigate(`/product/pet/detail/?productId=${userOrder.productId}&page=1`)}>
                                            <img src={userOrder.productImageUrl} alt="" />
                                        </div>
                                    </div>  
                                <div css={s.container4}>
                                    <div css={s.orderCreateDate}>
                                        <div>{userOrder.createDate} 배송완료</div>
                                    </div>
                                    <div onClick={() => navigate(`/product/pet/detail/?productId=${userOrder.productId}&page=1`)}>{userOrder.productNameKor}</div>
                                    <div css={s.container5}>
                                        <div>
                                            <span>{userOrder && parseInt(userOrder.productPrice * userOrder.productOrderCount).toLocaleString()}원</span>
                                            <span> / {userOrder.productSizeCategoryNameKor} / </span>
                                            <span>{userOrder.productOrderCount}개</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div css={s.container6}>
                                <button css={s.buttons3} onClick={() => navigate(`/account/mypage/review/write/${userOrder.productId}/?productOrderId=${userOrder.productOrderId}`)}>리뷰 작성</button>
                                <button css={s.buttons3} onClick={() => handlehideProduct(userOrder.productOrderId)}>숨기기</button>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
        </div>
    );
}

export default MyReviewsPage;