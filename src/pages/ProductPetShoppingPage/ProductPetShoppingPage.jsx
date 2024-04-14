/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getProductsRequest } from "../../apis/api/product";


function ProductPetShoppingPage(props) {
    const count = 16;
    const navigate = useNavigate();
    const [ productList, setProductList ] = useState([]);
    
    const getProductsRequestQuery = useQuery(
        ["getProductsRequestQuery"],
        getProductsRequest, {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                console.log(response)
                setProductList(response.data)
            },
            onError: (error) => {
                console.log(error);
            }
        }
    );

    return (
        <div css={s.layout}>
            <div css={s.categoryHeader}>
                <Link css={s.linkButtons} to="/all">전체</Link>
                <Link css={s.linkButtons} to="/1">사료</Link>
                <Link css={s.linkButtons} to="/2">분유</Link>
                <Link css={s.linkButtons} to="/3">간식</Link>
                <Link css={s.linkButtons} to="/4">영양제</Link>
                <Link css={s.linkButtons} to="/5">위생/배변</Link>
                <Link css={s.linkButtons} to="/6">미용/목욕용품</Link>
                <Link css={s.linkButtons} to="/7">하우스</Link>
                <Link css={s.linkButtons} to="/8">장난감/훈련용품</Link>
                <Link css={s.linkButtons} to="/9">울타리/이동장</Link>
            </div>
            <div css={s.shoppingFilter}>
            <div>{count}개의 상품</div>
            <div>
                좋아요순
            </div>

            </div>
            <div css={s.shoppingContainer}>
                {
                    productList.map(product => 
                    <div key={product.productId} css={s.imageBox} onClick={() => navigate(`/product/pet/detail/${product.productId}/?productId=${product.productId}`)}>
                        <img src={product.productImageUrl} alt="" />
                        <div css={s.nameBox}>{product.productNameKor}</div>
                        <div css={s.moneyBox}>{product.productPrice}원</div>
                    </div>)
                }
                <div css={s.imageBox} onClick={() => navigate("/product/pet/detail")}>
                    <img src="https://cdn.imweb.me/thumbnail/20210905/71c22225938ec.jpg" alt="" />
                    <div css={s.nameBox}>BBR체크 멜빵바지 올인원 2021년 F/W 신상</div>
                    <div css={s.moneyBox}>
                        20000원
                    </div>
                </div>
                <div css={s.imageBox} >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9G83jGA2p3VdAc_LtIqfu_zNEIVPxB_9F85CyYNL7iA&s" alt="" />
                    <div css={s.nameBox}>짱구 우산</div>
                    <div css={s.moneyBox}>
                        20000원
                    </div>
                </div>
                <div css={s.imageBox}>
                    <img src="https://i.namu.wiki/i/zfd-NOPP39XJ49BUBLXu8d3SAPsYnpvqYviuQHzSe8FqI6DhYAaHp5Nx30dWi_Q5XGUcbczMfuSp1lOMAN3NvA.webp" alt="" />
                    <div css={s.nameBox}>훈발롬</div>
                    <div css={s.moneyBox}>
                        20000원
                    </div>
                </div>
                <div css={s.imageBox}>
                    <img src="https://i.namu.wiki/i/2NE9ni_Jk32mN-zEQrswpjEA_iZ1lK_gbDo2tG44wlLxmN-0M4wp8ALSIX-Qxy1yK1fpBqEO1jDXxWyViV_pBA.webp" alt="" />
                    <div css={s.nameBox}>맹궁</div>
                    <div css={s.moneyBox}>
                        20000원
                    </div>
                </div>
                <div css={s.imageBox}>
                    <img src="https://i.namu.wiki/i/G9zOqNkgEpgPj7nx65voRxEER5xG_jBeXugTKthz6qN4HLIyZ81c-Q9C0QsAxaiNpLmg5xOpoY4QdVLP0ZAo9g.webp" alt="" />
                    <div css={s.nameBox}>짱앙</div>
                    <div css={s.moneyBox}>
                        20000원
                    </div>
                </div>
                <div css={s.imageBox}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs_W8Hg8qiuj1qe4ZvNtd_rF3iaU4J0U18wa7RRIrl2Q&s" alt="" />
                    <div css={s.nameBox}>철쑤</div>
                    <div css={s.moneyBox}>
                        20000원
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductPetShoppingPage;