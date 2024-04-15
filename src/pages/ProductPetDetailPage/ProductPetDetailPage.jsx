/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style";
import { AiFillHeart, AiOutlineHeart  } from "react-icons/ai";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getProductRequest } from "../../apis/api/product";

function ProductPetDetailPage() {
    const [ isHeart, setIsHeart ] = useState(false);
    const [ searchParams, setSearchParams ] = useSearchParams();
    const [ user, setUser ] = useState("");
    const productId = parseInt(searchParams.get("productId"));

    
    const getProductRequestQuery = useQuery(
        ["getProductsRequestQuery", productId],
        async () =>  await getProductRequest ({
            productId: productId
        }),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                console.log(response.data)
                setUser(response.data)
            },
            onError: (error) => {
                console.log(error);
            }
        }
    );
    
  
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
                            <button onClick={() => setIsHeart(true)}><AiOutlineHeart/></button>
                            :
                            <button onClick={() => setIsHeart(false)}><AiFillHeart/></button>
                        }
                    </div>
                </div>
                <div css={s.productBody}>
                    <span>배송 방법 택배</span>
                    <span>배송비 무료 (10,000원 이상 무료배송)</span>
                    <div dangerouslySetInnerHTML={{__html: user.productBoardContent}}></div>
                </div>
                <div css={s.productFooter}>
                    댓글
                </div>
            </div>
        </div>
    );
}

export default ProductPetDetailPage;