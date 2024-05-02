/** @jsxImportSource @emotion/react */
import { useQuery } from "react-query";
import * as s from "./style";
import { getSalesRequest } from "../../../apis/api/Admin/productOrderAdmin";
import { useEffect, useState } from "react";

function AdminSales() {
    const [ salesList, setSalesList ] = useState();

    const searchProductSalesQuery = useQuery(
        ["searchProductSalesQuery"],
        async () => await getSalesRequest(),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            refetchInterval: false,
            onSuccess: (response) => {
                console.log(response);
                setSalesList(response.data);
            },
            onError: (error) => {
                console.log(error);
            }
        }
    )

    useEffect(() => {
        console.log(salesList)
    }, [salesList])


    return (
        <div css={s.layout}>
            <h1 css={s.title}>실시간 매출현황</h1>
            <div css={s.container}>
                <div css={s.animalCategorySalesBox}>
                    <div css={s.row}>
                        <div css={s.label}>강아지 상품 매출(원)</div>
                        <div css={s.data}>{salesList?.dogSales}</div>
                    </div>
                    <div css={s.row}>
                        <div css={s.label}>고양이 상품 매출(원)</div>
                        <div css={s.data}>{salesList?.catSales}</div>
                    </div>
                    <div css={s.row}>
                        <div css={s.label}>총 매출(원)</div>
                        <div css={s.data}>{salesList?.totalSales}</div>
                    </div>
                </div>
                <div css={s.productCategorySalesBox}>
                    <div css={s.row}>
                        <div css={s.label}>사료 매출(원)</div>
                        <div css={s.data}>{salesList?.feedSales}</div>
                    </div>
                    <div css={s.row}>
                        <div css={s.label}>간식 매출(원)</div>
                        <div css={s.data}>{salesList?.snackSales}</div>
                    </div>
                    <div css={s.row}>
                        <div css={s.label}>위생/배변 매출(원)</div>
                        <div css={s.data}>{salesList?.hygieneSales}</div>
                    </div>
                    <div css={s.row}>
                        <div css={s.label}>미용/목욕용품/기타 매출(원)</div>
                        <div css={s.data}>{salesList?.beautySales}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminSales;
