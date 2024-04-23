/** @jsxImportSource @emotion/react */
import { useSearchParams } from "react-router-dom";
import * as s from "./style";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getProductStocksAdminRequest, getProductStocksCountAdminRequest } from "../../../apis/api/productAdmin";
import AdminProductSearchPageNumbers from "../AdminProductSearchPageNumbers/AdminProductSearchPageNumbers";

function AdminCurrentStockSearch() {
    const [ searchParams, setSearchParams ] = useSearchParams();
    const searchCount = 10;
    const [ lastCheckedProductId, setLastCheckedProductId ] = useState(0);
    const [ currentProductList, setCurrentProductList ] = useState([]);
    const [ maxPageNumber, setMaxPageNumber ] = useState(0);
    const [ totalCount, setTotalCount ] = useState(0);
    const [ checkAll, setCheckAll ] = useState({
        checked : false,
        target: 1
    })

    const searchCurrentStocksQuery = useQuery(
        ["searchCurrentStocksQuery", searchParams.get("page")],
        async () => {
            return await getProductStocksAdminRequest({
                page: searchParams.get("page"),
                count: searchCount
            })
        },
        {
            retry: 0,
            refetchInterval: false,
              onSuccess: (response) => {
                setCurrentProductList(() => response.data.map((product) => {
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
                console.log(response);
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

    const handleCheckOnChange = (e) => {
        const productStockId = parseInt(e.target.value);
        setCurrentProductList(() => 
            currentProductList.map((product) => {
            if(product.productStockId === productStockId) {
              return {
                ...product,
                checked: e.target.checked
              }
            }
            return product;
          })
        );
        setLastCheckedProductId(() => productStockId);
    }

    useEffect(() => {
        if(checkAll.target === 1) {
            setCurrentProductList(() => 
                currentProductList.map((product) => {
                    return {
                        ...product,
                        checked: checkAll.checked
                    }
                })
            );
        }
    }, [checkAll.checked]);
    
    useEffect(() => {
        const findCount = currentProductList.filter((product) => product.checked === false).length;
        if(findCount === 0) {
            setCheckAll(() => {
                return {
                checked: true,
                target: 2
                }
            });
        } else {
            setCheckAll(() => {
                return {
                checked: false,
                target: 2
                }
            })
        }
    }, [currentProductList]);

    return (
        <div css={s.layout}>
        <div css={s.row}>
        <div css={s.label}>
            <input type="checkbox"checked={checkAll.checked} onChange={handleCheckAllChange}/></div>
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