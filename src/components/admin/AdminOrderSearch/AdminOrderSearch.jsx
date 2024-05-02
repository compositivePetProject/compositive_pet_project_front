/** @jsxImportSource @emotion/react */
import { useSearchParams } from "react-router-dom";
import * as s from "./style";
import { searchOrderProductDataState } from "../../../atoms/admin/searchOrderProductDataAtom";
import { useRecoilState } from "recoil";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import AdminProductSearchPageNumbers from "../AdminProductSearchPageNumbers/AdminProductSearchPageNumbers";
import { getOrderProductsCountRequest, getOrderProductsRequest } from "../../../apis/api/Admin/productOrderAdmin";

function AdminOrderSearch({refetch, setRefetch}) {
    const [ searchParams, setSearchParams ] = useSearchParams();
    const [ searchOrderProductData, setSearchOrderProductData ] = useRecoilState(searchOrderProductDataState);
    const searchCount = 10;
    const [ orderList, setOrderList ] = useState([]);
    const [ maxPageNumber, setMaxPageNumber ] = useState(0);
    const [ totalCount, setTotalCount ] = useState(0);

    useEffect(() => {
        searchOrderProductsQuery.refetch();
        setRefetch(() => false);
    }, [refetch])

    const searchOrderProductsQuery = useQuery(
        ["searchOrderProductsQuery", searchParams.get("page")],
        async () => {
            return await getOrderProductsRequest({
                page: searchParams.get("page"),
                count: searchCount,
                productSizeCategoryId: searchOrderProductData.productSizeCategoryId,
                productNameKor: searchOrderProductData.productNameKor
            })
        },
        {
            retry: 0,
            refetchInterval: false,
              onSuccess: (response) => {
                setOrderList(() => response.data.map((order) => {
                  return {
                    ...order,
                  }
                }))
              },
            onError: (error) => {
                console.log(error);
            }
        }
    )

    const searchOrderProductsCountquery = useQuery(
        ["searchOrderProductsCountquery", searchOrderProductsQuery.data],
        async () => {
            return await getOrderProductsCountRequest({
                count: searchCount,
                productCategoryId: searchOrderProductData.productCategoryId,
                productNameKor: searchOrderProductData.productNameKor
            })
            
        },
        {
            retry: 0,
            refetchInterval: false,
              onSuccess: (response) => {
                setMaxPageNumber(response.data.maxPageNumber);
                setTotalCount(response.data.totalCount);
              },
            onError: (error) => {
                console.log(error);
            }
        }
    )

    return (
        <div css={s.layout}>
            <div css={s.row}>
                <div css={s.label}>ID</div>
                <div css={s.label}>상품명</div>
                <div css={s.label}>사이즈</div>
                <div css={s.label}>주문갯수</div>
                <div css={s.label}>고객명</div>
                <div css={s.label}>주소</div>
                <div css={s.label}>상세주소</div>
            </div>
            <div css={s.productTable}>
                {
                    orderList.map((product) => 
                    <div css={s.rowData} key={product.productOrderId}>
                        <div css={s.labelData}>{product.productOrderId}</div>
                        <div css={s.labelData}>{product.productNameKor}</div>
                        <div css={s.labelData}>{product.productSizeCategoryName}</div>
                        <div css={s.labelData}>{product.productOrderCount}</div>
                        <div css={s.labelData}>{product.name}</div>
                        <div css={s.labelData}>{product.productOrderAddress}</div>
                        <div css={s.labelData}>{product.productOrderDetailAddress}</div>
                    </div>
                    )
                }
            </div>
            {
                !searchOrderProductsQuery.isLoading && <AdminProductSearchPageNumbers maxPageNumber={maxPageNumber} totalCount={totalCount} path={"order/"} />
            }
        </div>
    )
}

export default AdminOrderSearch;