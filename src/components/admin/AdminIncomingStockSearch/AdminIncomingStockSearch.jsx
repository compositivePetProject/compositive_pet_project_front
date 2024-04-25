/** @jsxImportSource @emotion/react */
import { useSearchParams } from "react-router-dom";
import * as s from "./style";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getProductIncomingAdminCountRequest, getProductInocmingStocksRequest } from "../../../apis/api/productAdmin";
import { count } from "firebase/firestore";
import AdminProductSearchPageNumbers from "../AdminProductSearchPageNumbers/AdminProductSearchPageNumbers";
import { incomingProductDataState } from "../../../atoms/admin/incomingProductDataAtom";
import { useRecoilState } from "recoil";
import { deleteIncomingStocksState } from "../../../atoms/admin/deleteIncomingStocksState";
import { searchIncomingProductDataState } from "../../../atoms/admin/searchIncomingProductDataAtom";

function AdminIncomingStockSearch({ refetch, setRefetch, setIncomingProductsIds}) {
    const [ searchParams, setSearchParams ] = useSearchParams();
    const searchCount = 10;
    const [ incomingProductList, setIncomingProductList ] = useState([]);
    const [ searchIncomingProductData, setSearchIncomingProductData ] = useRecoilState(searchIncomingProductDataState);
    const [ incomingProductData, setIncomingProductData ] = useRecoilState(incomingProductDataState);

    const [ maxPageNumber, setMaxPageNumber ] = useState(0);
    const [ totalCount, setTotalCount ] = useState(0);

    const [ checkAll, setCheckAll ] = useState(
        {
            checked: false,
            target: 1
        }
    )

    useEffect(() => {
        searchIncomingProductsQuery.refetch();
        setRefetch(() => false);
      }, [refetch])

    const searchIncomingProductsQuery = useQuery(
        ["searchIncomingProductsQuery", searchParams.get("page")],
        async () => {
            return await getProductInocmingStocksRequest({
                page: searchParams.get("page"),
                count: searchCount,
                productSizeCategoryId : searchIncomingProductData.productSizeCategoryId,
                productNameKor : searchIncomingProductData.productNameKor
            })
        },
        {
            retry: 0,
            refetchInterval: false,
              onSuccess: (response) => {
                setIncomingProductList(() => response.data.map((product) => {
                    return {
                        ...product
                    }
                }))
              },
              onError: (error) => {
                console.log(error);
              }
          }
    )

    const getIncomingStockCountQuery = useQuery(
        ["getIncomingStockCountQuery", searchIncomingProductsQuery.data],
        async () => await getProductIncomingAdminCountRequest({
            count : searchCount,
            productSizeCategoryId : searchIncomingProductData.productSizeCategoryId,
            productNameKor : searchIncomingProductData.productNameKor
        }),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                setMaxPageNumber(response.data.maxPageNumber)
                setTotalCount(response.data.totalCount)
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
        })
    }

    useEffect(() => {
        if(checkAll.checked === true && checkAll.target === 1) {
            setIncomingProductList(incomingProductList.map((product) => {
                return {
                    ...product,
                    checked: true
                }
            }))
        } else if(checkAll.checked === false && checkAll.target === 1) {
            setIncomingProductList(incomingProductList.map((product) => {
                return {
                    ...product,
                    checked: false
                }
            }))
        }
    }, [checkAll.checked]);

    const handleCheckOnChange = (e) => {
        const productIncomingStockId = parseInt(e.target.value);
        setIncomingProductList(incomingProductList.map((product) => {
            if(product.productIncomingStockId === productIncomingStockId) {
                return {
                    ...product,
                    checked: e.target.checked
                }
            }
            return product;
        }));
        if(incomingProductList.filter((product) => product.checked === true).length !== 0) {
            setCheckAll({
                target: 2,
                checked: false
            })
        }

        setIncomingProductData(
            incomingProductList.filter((product) => product.productIncomingStockId === productIncomingStockId)[0],
        );
    }

    useEffect(() => {
        if(incomingProductList.filter((product) => product.checked === false).length !== 0) {
            setCheckAll({
                target: 2,
                checked: false
            })
        } else if(incomingProductList.filter((product) => product.checked === true).length === 7) {
            setCheckAll({
                target: 1,
                checked: true
            })
            setIncomingProductData(incomingProductList.filter((product) => product.checked === true)[incomingProductList.filter((product) => product.checked === true).length - 1]);
        }
        setIncomingProductsIds(incomingProductList.filter(product => product.checked === true).map(product => product.productIncomingStockId));
    }, [incomingProductList])
    
    
    return (
        <div css={s.layout}>
            <div css={s.row}>
                <div css={s.label}><input type="checkbox" checked={checkAll.checked} onChange={handleCheckAllChange}/></div>
                <div css={s.label}>ID</div>
                <div css={s.label}>상품명</div>
                <div css={s.label}>사이즈</div>
                <div css={s.label}>상품갯수</div>
            </div>
            <div css={s.productTable}>
                {
                    incomingProductList.map((product) => 
                        <div css={s.rowData} key={product.productIncomingStockId}>
                            <div css={s.labelData}><input type="checkbox" value={product.productIncomingStockId} checked={product.checked} onChange={handleCheckOnChange} /></div>
                            <div css={s.labelData}>{product.productIncomingStockId}</div>
                            <div css={s.labelData}>{product.productNameKor}</div>
                            <div css={s.labelData}>{product.productSizeCategoryName}</div>
                            <div css={s.labelData}>{product.productIncomingStockCount}</div>
                        </div>
                    )
                }
            </div>
            {
                !searchIncomingProductsQuery.isLoading &&  <AdminProductSearchPageNumbers maxPageNumber={maxPageNumber} totalCount={totalCount} path={"incoming/"} />
            }
        </div>
    )
}

export default AdminIncomingStockSearch;