/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style";
import { useSearchParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useQuery } from "react-query";
import { getProductOutgoingAdminCountRequest, getProductOutgoingStocksAdminRequest } from "../../../apis/api/productAdmin";
import AdminProductSearchPageNumbers from "../AdminProductSearchPageNumbers/AdminProductSearchPageNumbers";

function AdminOutgoingStockSearch() {
    const [ searchParams, setSearchParams ] = useSearchParams();
    // const [ searchOrderProductData, setSearchOrderProductData ] = useRecoilState(null);
    const searchCount = 10;
    const [ outgoingList, setOutgoingList ] = useState([]);
    const [ maxPageNumber, setMaxPageNumber ] = useState(0);
    const [ totalCount, setTotalCount ] = useState(0);

    const searchOutgoingStockQuery = useQuery(
        ["searchOutgoingStockQuery", searchParams.get("page")],
        async () => {
            return await getProductOutgoingStocksAdminRequest({
                page: searchParams.get("page"),
                count: searchCount
            })
        },
        {
            retry: 0,
            refetchInterval: false,
            onSuccess: (response) => {
                console.log(response);
                setOutgoingList(() => response.data.map((product) => {
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

    const getOutgoingStockCountQuery = useQuery(
        ["getOutgoingStockCountQuery"],
        async () => await getProductOutgoingAdminCountRequest({
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

    return (
        <div css={s.layout}>
            <div css={s.row}>
                <div css={s.label}>ID</div>
                <div css={s.label}>상품명</div>
                <div css={s.label}>사이즈</div>
                <div css={s.label}>출고갯수</div>
                <div css={s.label}>출고일자</div>
            </div>
            <div css={s.productTable}>
                {
                    outgoingList.map((product) => 
                        <div css={s.rowData} key={product.productOutgoingStockId}>
                            <div css={s.labelData}>{product.productOutgoingStockId}</div>
                            <div css={s.labelData}>{product.productNameKor}</div>
                            <div css={s.labelData}>{product.productSizeCategoryName}</div>
                            <div css={s.labelData}>{product.productOutgoingStockCount}</div>
                            <div css={s.labelData}>{product.updateDate}</div>
                        </div>
                    )
                }
            </div>
            {
                !searchOutgoingStockQuery.isLoading && <AdminProductSearchPageNumbers maxPageNumber={maxPageNumber} totalCount={totalCount} path={"outgoing/"} />
            }
        </div>
    )
};

export default AdminOutgoingStockSearch;