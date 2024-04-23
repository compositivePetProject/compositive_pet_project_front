/** @jsxImportSource @emotion/react */
import { useRef, useState } from "react";
import * as s from "./style";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getProductPageRequest, getProductsSearchCountRequest } from "../../apis/api/product";
import ProductPetPageNumbers from "../../components/ProductPetPageNumbers/ProductPetPageNumbers";
import { getAllCategoryRequest, getAllProductTypeRequest } from "../../apis/api/options";
import { useProductOnKeyUpInput } from "../../hooks/useProductOnKeyUpInput";
import { CiSearch } from "react-icons/ci";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";


function ProductPetShoppingPage(props) {
    const navigate = useNavigate();
    const [ searchParams, setSearchParams ] = useSearchParams();
    const [ productList, setProductList ] = useState([]);
    const [ productTypeOptions, setProductTypeOptions ] = useState([]);
    const [ categoryTypeOptions, setCategoryTypeOptions ] = useState([]);
    const [ selectedProductType, setSelectedProductType ] = useState(0);
    const [ selectedCategory, setSelectedCategory ] = useState(0);
    const [totalCount, setTotalCount ] = useState(0);
    const searchCount = 16;
    const inputRef = useRef();
    const [orderBy, setOrderBy] = useState("desc");
    
    const getProductsSearchRequestQuery = useQuery(
        ["getProductsSearchRequestQuery", searchParams.get("page"), selectedProductType, orderBy],
        async () => await getProductPageRequest({
            page: searchParams.get("page"),
            count: searchCount,
            productCategoryId: selectedProductType,
            searchText: searchText.value,
            orderBy : orderBy
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

    const getProductsSearchCountRequestQuery = useQuery(
        ["getProductsSearchCountRequestQuery", getProductsSearchRequestQuery.data],
        async () => await getProductsSearchCountRequest({
            count: searchCount,
            productCategoryId: selectedProductType,
            searchText: searchText.value
        }),
        {
            refetchOnWindowFocus: false,
            onSuccess: response => {
                setTotalCount(response.data.totalCount)
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
    
    const searchSubmit = () => {
        setSearchParams({
            page: 1
        })
        getProductsSearchRequestQuery.refetch();
    }
    const searchText = useProductOnKeyUpInput(searchSubmit);

    const handleOrderByChange = (value) => {
        setOrderBy(value);
    };
    console.log(orderBy);
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
                <div css={s.searchBar}>   
                    <input css={s.searchBarInput} type="text" 
                        ref={inputRef} 
                        value={searchText.value} 
                        onChange={searchText.handleOnChange} 
                        onKeyUp={searchText.handleOnKeyUp}
                        placeholder="검색"
                    />
                    <button css={s.searchBarButton} >
                        <CiSearch onClick={() => searchSubmit()}/>
                    </button>
                </div>
            </div>
            <div css={s.shoppingFilter}>
            <div>{totalCount}개의 상품</div>
            <div>
                {orderBy === "desc"
                ?
                <button css={s.productLikeButtons} onClick={() => setOrderBy("asc")}>좋아요순 <VscChevronDown /></button>
                :
                <button css={s.productLikeButtons} onClick={() => setOrderBy("desc")}>좋아요순 <VscChevronUp /></button>
                }
            </div>

            </div>
            <div css={s.shoppingContainer}>
                {
                    productList.map(product => 
                    <div key={product.productId} css={s.imageBox} onClick={() => navigate(`/product/pet/detail/${product.productId}/?productId=${product.productId}&page=1`)}>
                        <img src={product.productImageUrl} alt="" />
                        <div css={s.nameBox}>{product.productNameKor}</div>
                        <div css={s.moneyBox}>{product.productPrice}원</div>
                    </div>)
                }
                {   
                    !getProductsSearchCountRequestQuery.isLoading &&
                    <ProductPetPageNumbers productCount={getProductsSearchCountRequestQuery.data?.data}/> 
                }
            </div>
        </div>
    );
}
export default ProductPetShoppingPage;