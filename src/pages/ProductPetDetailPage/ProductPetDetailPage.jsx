/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart  } from "react-icons/ai";
import { useSearchParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { deleteProductFavoriteRequest, getProductRequest, getProductsFavoritesRequest, postProductFavoriteRequest } from "../../apis/api/product";

function ProductPetDetailPage() {
    const [ isHeart, setIsHeart ] = useState(false);
    const [ searchParams, setSearchParams ] = useSearchParams();
    const [ user, setUser ] = useState("");
    const productId = parseInt(searchParams.get("productId"));
    const [ totalCount, setTotalCount ] = useState([]);
    const queryClient = useQueryClient();
    const principalQueryState = queryClient.getQueryState("principalQuery");
    const userId = principalQueryState.data?.data.userId;

    // const getProductRequestQuery = useQuery(
    //     ["getProductsRequestQuery", productId],
    //     async () =>  await getProductRequest ({
    //         productId: productId
    //     }),
    //     {
    //         retry: 0,
    //         refetchOnWindowFocus: false,
    //         onSuccess: response => {
    //             console.log(response.data)
    //             setUser(response.data)
    //         },
    //         onError: (error) => {
    //             console.log(error);
    //         }
    //     }
    // );

    const getProductsFavoriteQuery = useQuery(
        ["getProductsFavoriteQuery", productId ],
        async () => await getProductsFavoritesRequest ({
            productId: productId
        }),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                setTotalCount(response.data)
                setUser(response.data)
            },
            onError: (error) => {
                console.log(error);
            }
        }
    )
    
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

    const handleFavoriteChange = async () => {
        await postProductFavoriteQuery.mutate({
            productId: productId,
            userId: userId
        })
        setIsHeart(() => true);
        const response = await getProductsFavoritesRequest ({
            productId: productId
        })
        console.log(response.data.userId)
         setTotalCount(() => response.data)
    }

    const handleFavoriteRemoveChange = async () => {
        await deleteProductFavoriteQuery.mutate({
            userId: userId
        })
        setIsHeart(() => false);
        const response = await getProductsFavoritesRequest ({
            productId: productId
        })
        console.log(response)
        setTotalCount(() => response.data)
        
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
                        {!isHeart
                            ? 
                            <button onClick={handleFavoriteChange}>
                                <AiOutlineHeart/>
                                <div css={s.totalCount}>{totalCount.totalUserIdCount}</div>
                            </button>
                            :
                            <button onClick={handleFavoriteRemoveChange}>
                                <AiFillHeart/>
                                <div css={s.totalCount}>{totalCount.totalUserIdCount}</div>
                            </button>
                        }
                    </div>
                </div>
                <div css={s.productBody}>
                    <span>배송 방법 택배</span>
                    <span>배송비 무료 (10,000원 이상 무료배송)</span>
                    <div>
                        {user.productBoardContent}
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