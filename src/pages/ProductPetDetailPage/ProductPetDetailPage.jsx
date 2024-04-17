/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart  } from "react-icons/ai";
import { useSearchParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { deleteProductFavoriteRequest, getProductFavoriteStatusRequest, getProductsFavoritesRequest, postProductFavoriteRequest } from "../../apis/api/product";

function ProductPetDetailPage() {
    const [isLiked, setIsLiked] = useState(false);
    const [ searchParams, setSearchParams ] = useSearchParams();
    const [ user, setUser ] = useState("");
    const productId = parseInt(searchParams.get("productId"));
    const queryClient = useQueryClient();
    const principalQueryState = queryClient.getQueryState("principalQuery");
    const userId = principalQueryState.data?.data.userId;
    
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
                console.log(response)
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
                    <span>배송 방법 택배</span>
                    <span>배송비 무료 (10,000원 이상 무료배송)</span>
                    <div dangerouslySetInnerHTML={{__html:user.productBoardContent}}>
                    
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