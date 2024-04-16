/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getProductPageRequest, getProductsRequest } from "../../apis/api/product";
import ProductPetPageNumbers from "../../components/ProductPetPageNumbers/ProductPetPageNumbers";
import { getAllCategoryRequest, getAllProductTypeRequest } from "../../apis/api/options";


function ProductPetShoppingPage(props) {
    const navigate = useNavigate();
    const [ searchParams, setSearchParams ] = useSearchParams();
    const [ productList, setProductList ] = useState([]);
    const [ productTypeOptions, setProductTypeOptions ] = useState([]);
    const [ categoryTypeOptions, setCategoryTypeOptions ] = useState([]);
    const [ selectedProductType, setSelectedProductType ] = useState(0);
    const [ selectedCategory, setSelectedCategory ] = useState(0);
    const totalCount = productList.length;
    const searchCount = 20;
    
    // const getProductsRequestQuery = useQuery(
    //     ["getProductsRequestQuery"],
    //     getProductsRequest, {
    //         retry: 0,
    //         refetchOnWindowFocus: false,
    //         onSuccess: response => {
    //             console.log(response)
    //             setProductList(response.data)
    //         },
    //         onError: (error) => {
    //             console.log(error);
    //         }
    //     }
    // );

    const getProductsSearchRequestQuery = useQuery(
        ["getProductsSearchRequestQuery", searchParams.get("page"), selectedProductType],
        async () => await getProductPageRequest({
            page: searchParams.get("page"),
            count: searchCount,
            productCategoryId: selectedProductType
        }),
            {
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


    const productTypeQuery = useQuery(
        ["productTypeQuery"], 
        getAllProductTypeRequest,
        {   retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                setProductTypeOptions(() => response.data.map(productType => {
                    return {
                        productType
                    }
                }));
            }
        }
    );


    // 카테고리 (개, 고양이) 검색 기능 추가
    const categoryTypeQuery = useQuery(
        ["categoryTypeQuery"], 
        getAllCategoryRequest,
        {   retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                setCategoryTypeOptions(() => response.data.map(categoryType => {
                    return {
                        categoryType
                    }
                }));
            }
        }
    );


    return (
        <div css={s.layout}>
            <div css={s.categoryHeader}>
                <Link css={s.linkButtons} to={"http://localhost:3000/product/pet/shopping?page=1"}
                onClick={() => setSelectedProductType(0)}>
                전체
                </Link>
                {productTypeOptions.map(option  => 
                    <Link key={option.productType.productCategoryId} 
                            css={s.linkButtons} 
                            to={`http://localhost:3000/product/pet/shopping?page=1`}
                            onClick={() => setSelectedProductType(option.productType.productCategoryId)
                            }
                            >
                        {option.productType.productCategoryNameKor}
                    </Link>
                )}
            </div>
            <div css={s.shoppingFilter}>
            <div>{totalCount}개의 상품</div>
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
            {/* 수정 예정 => productCount*/}
            <ProductPetPageNumbers productCount={1}/> 
            </div>
        </div>
    );
}
export default ProductPetShoppingPage;