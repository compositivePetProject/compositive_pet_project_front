/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./style";
import { useSearchParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useQuery } from "react-query";
import AdminProductSearchPageNumbers from "../AdminProductSearchPageNumbers/AdminProductSearchPageNumbers";
import { searchOutgoingProductDataState } from "../../../atoms/admin/searchOutgoingProductDataAtom";
import { getProductOutgoingAdminCountRequest, getProductOutgoingStocksAdminRequest } from "../../../apis/api/Admin/productOutgoingAdmin";

function AdminOutgoingStockSearch({refetch, setRefetch}) {
    const [ searchParams, setSearchParams ] = useSearchParams();
    const [ searchOutgoingProductData, setSearchOutgoingProductData ] = useRecoilState(searchOutgoingProductDataState);
    const searchCount = 10;
    const [ outgoingList, setOutgoingList ] = useState([]);
    const [ maxPageNumber, setMaxPageNumber ] = useState(0);
    const [ totalCount, setTotalCount ] = useState(0);

    useEffect(() => {
        searchOutgoingStockQuery.refetch();
        setRefetch(() => false);
    }, [refetch])

    const searchOutgoingStockQuery = useQuery(
        ["searchOutgoingStockQuery", searchParams.get("page")],
        async () => {
            return await getProductOutgoingStocksAdminRequest({
                page: searchParams.get("page"),
                count: searchCount,
                productSizeCategoryId: searchOutgoingProductData.productSizeCategoryId,
                productNameKor: searchOutgoingProductData.productNameKor,
            })
        },
        {
            retry: 0,
            refetchInterval: false,
            onSuccess: (response) => {
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
        ["getOutgoingStockCountQuery", searchOutgoingStockQuery.data],
        async () => await getProductOutgoingAdminCountRequest({
            count: searchCount,
            productSizeCategoryId: searchOutgoingProductData.productSizeCategoryId,
            productNameKor: searchOutgoingProductData.productNameKor,
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

    const dateFormatChange = (date) => {
        const dateData = new Date(date);

        const year = dateData.getFullYear();
        const month = dateData.getMonth() + 1;
        const day = dateData.getDate();
        const hour = dateData.getHours() < 10 ? "0" + dateData.getHours() : dateData.getHours();
        const minute = dateData.getMinutes() < 10 ? "0" + dateData.getMinutes() : dateData.getMinutes();

        const formattedMonth = month < 10 ? `0${month}` : month;
        const formattedDay = day < 10 ? `0${day}` : day;

        const formattedDate = `${year}년${formattedMonth}월${formattedDay}일 ${hour}시${minute}분`;

        return formattedDate;
    }

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
                            <div css={s.labelData}>{dateFormatChange(product.updateDate)}</div>
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