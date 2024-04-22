/** @jsxImportSource @emotion/react */
import { useSearchParams } from "react-router-dom";
import * as s from "./style";
import { searchOrderProductDataState } from "../../../atoms/admin/searchOrderProductDataAtom";
import { useRecoilState } from "recoil";
import { useQuery } from "react-query";
import { getOrderProductsRequest } from "../../../apis/api/productAdmin";
import { useState } from "react";

function AdminOrderSearch() {
    const [ searchParams, setSearchParams ] = useSearchParams();
    const [ searchOrderProductData, setSearchOrderProductData ] = useRecoilState(searchOrderProductDataState);
    const searchCount = 10;
    const [ orderList, setOrderList ] = useState([]);
    const [ maxPageNumber, setMaxPageNumber ] = useState(0);
    const [ totalCount, setTotalCount ] = useState(0);

    const searchOrderProductsQuery = useQuery(
        ["searchOrderProductsQuery", searchParams.get("page")],
        async () => {
            return await getOrderProductsRequest({
                page: searchParams.get("page"),
                count: searchCount,
                productCategoryId: searchOrderProductData.productCategoryId,
                productAnimalCategoryId : searchOrderProductData.productAnimalCategoryId,
                productSizeCategoryId: searchOrderProductData.productSizeCategoryId,
                productNameKor: searchOrderProductData.productNameKor
            })
        },
        {
            retry: 0,
            refetchInterval: false,
              onSuccess: (response) => {
                // setOrderList(() => response.data.map((order) => {
                //   return {
                //     ...order,
                //   }
                // }))
                console.log(response)
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

            </div>
        </div>
    )
}

export default AdminOrderSearch;