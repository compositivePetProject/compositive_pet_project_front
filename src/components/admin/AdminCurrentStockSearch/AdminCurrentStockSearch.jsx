/** @jsxImportSource @emotion/react */
import { useSearchParams } from "react-router-dom";
import * as s from "./style";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getProductStocksAdminRequest, getProductStocksCountAdminRequest } from "../../../apis/api/productAdmin";
import AdminProductSearchPageNumbers from "../AdminProductSearchPageNumbers/AdminProductSearchPageNumbers";
import { searchCurrentProductDataState } from "../../../atoms/admin/searchCurrentProductDataAtom";
import { useRecoilState } from "recoil";
import { currentProductDataState } from "../../../atoms/admin/currentProductDataAtom";

function AdminCurrentStockSearch({refetch, setRefetch}) {
    const [ searchCurrentProductData, setSearchCurrentProductData ] = useRecoilState(searchCurrentProductDataState);
    const [ searchParams, setSearchParams ] = useSearchParams();
    const searchCount = 10;
    const [ currentProductList, setCurrentProductList ] = useState([]);
    const [ maxPageNumber, setMaxPageNumber ] = useState(0);
    const [ totalCount, setTotalCount ] = useState(0);
    const [ currentProductData, setCurrentProductData ] = useRecoilState(currentProductDataState);

    useEffect(() => {
        getCurrentProductsQuery.refetch();
        setRefetch(() => false);
    }, [refetch])

    const getCurrentProductsQuery = useQuery(
        ["getCurrentProductsQuery", searchParams.get("page")],
        async () => 
            await getProductStocksAdminRequest({
                page: searchParams.get("page"),
                count: searchCount,
                productSizeCategoryId: searchCurrentProductData.productSizeCategoryId,
                productNameKor: searchCurrentProductData.productNameKor
        }),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                setCurrentProductList(response.data.map((product) => {
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

    const getCurrentStockCountQuery = useQuery(
        ["getCurrentStockCountQuery"],
        async () => await getProductStocksCountAdminRequest({
            count: searchCount
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

    const handleCheckOnChange = (e) => {
        const productStockId = parseInt(e.target.value);
        setCurrentProductList(currentProductList.map((product) => {
            if(product.productStockId === productStockId) {
                return {
                    ...product,
                    checked: e.target.checked
                }
            } else {
                return {
                    ...product,
                    checked: false
                }
            }
        }))
    }

    useEffect(() => {
       console.log(currentProductData)
    }, [currentProductData])

    useEffect(() => {
        if(currentProductList.filter((product) => product.checked === true).length !== 0) {
            setCurrentProductData(currentProductList.filter((product) => product.checked === true)[0]);
        }
    }, [currentProductList])
    return (
        <div css={s.layout}>
        <div css={s.row}>
            <div css={s.label}></div>
            <div css={s.label}>ID</div>
            <div css={s.label}>상품명</div>
            <div css={s.label}>사이즈</div>
            <div css={s.label}>상품갯수</div>
        </div>
        <div css={s.productTable}>
            {
              currentProductList.map((product) => 
                <div css={s.rowData} key={product.productStockId}>
                  <div css={s.labelData}><input type="checkbox" value={product.productStockId} checked={product.checked} onChange={handleCheckOnChange} /></div>
                  <div css={s.labelData}>{product.productStockId}</div>
                  <div css={s.labelData}>{product.productNameKor}</div>
                  <div css={s.labelData}>{product.productSizeCategoryName}</div>
                  <div css={s.labelData}>{product.productStockCount}</div>
                </div>
              )
            }
        </div>
        {
            !getCurrentStockCountQuery.isLoading && <AdminProductSearchPageNumbers maxPageNumber={maxPageNumber} totalCount={totalCount} path={"stock/"} />
        }
        </div>
    )
}

export default AdminCurrentStockSearch;