/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";

import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { selectedProductData } from "../../../atoms/admin/selectedProductDataAtom";
import AdminProductSearchPageNumbers from "../AdminProductSearchPageNumbers/AdminProductSearchPageNumbers";
import { searchProductDataState } from "../../../atoms/admin/searchProductDataAtom";
import { useMutation } from "react-query";
import { getProductsAdminCountRequest, getProductsAdminRequest } from "../../../apis/api/Admin/productAdmin";

function AdminProductSearch({ onSetDeleteProducts, refetch, setRefetch }) {
  const [ searchParams, setSearchParams ] = useSearchParams();
  const [ searchProductData, setSearchProductData ] = useRecoilState(searchProductDataState);
  const searchCount = 10;
  const [ productList, setProductList ] = useState([]);
  const [ checkAll, setCheckAll ] = useState({
    checked : false,
    target: 1
  });
  const [ selectedProduct, setSelectedProduct ] = useRecoilState(selectedProductData);
  const [ lastCheckedProductId, setLastCheckedProductId ] = useState(0);
  const [ maxPageNumber, setMaxPageNumber ] = useState(0);
  const [ totalCount, setTotalCount ] = useState(0);
  const [ deleteProducts, setDeleteProducts ] = useState([]);

  useEffect(() => {
    searchProductsQuery.refetch();
    setRefetch(() => false);
  }, [refetch])

  const searchProductsQuery = useQuery(
    ["searchProductsQuery", searchParams.get("page")],
    async () => await getProductsAdminRequest({
        page: searchParams.get("page"),
        count: searchCount,
        productCategoryId: searchProductData.productCategoryId,
        productAnimalCategoryId: searchProductData.productAnimalCategoryId,
        productNameKor: searchProductData.productNameKor
      }
    ),
    {
      retry: 0,
      refetchOnWindowFocus: false,
      refetchInterval: false,
        onSuccess: (response) => {
          setProductList(() => response.data.map((product) => {
            return {
              ...product,
              checked: false
            }
          }))
        },
        onError: (error) => {
          console.log(error);
        }
    }
  );

  const getProductsCountQuery = useQuery(
    ["getProductsCountQuery", searchProductsQuery.data],
    async () => await getProductsAdminCountRequest({
      count: searchCount,
      productCategoryId: searchProductData.productCategoryId,
      productAnimalCategoryId: searchProductData.productAnimalCategoryId,
      productNameKor: searchProductData.productNameKor
    }),
    {
      retry: 0,
      refetchOnWindowFocus: false,
      onSuccess: (response) => {
          setMaxPageNumber(response.data.maxPageNumber);
          setTotalCount(response.data.totalCount);
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
    const productId = parseInt(e.target.value);
    setProductList(() => 
      productList.map((product) => {
        if(product.productId === productId) {
          return {
            ...product,
            checked: e.target.checked
          }
        }
        return product;
      })
    );

    setDeleteProducts((product) => {
      if (e.target.checked) {
        return [...product, productId];
      } else {
        return product.filter((id) => id !== productId);
      }
    });
  
    setLastCheckedProductId(() => productId);
  }

  useEffect(() => {
    onSetDeleteProducts(deleteProducts);
  }, [deleteProducts, onSetDeleteProducts])
  

  useEffect(() => {
    if(checkAll.target === 1) {
        setProductList(() => 
            productList.map((product) => {
                return {
                    ...product,
                    checked: checkAll.checked
                }
            })
        );
    }
  }, [checkAll.checked]);

  useEffect(() => {
    const findCount = productList.filter((product) => product.checked === false).length;
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
  }, [productList]);

  useEffect(() => {
    let lastSelectedProduct = {...selectedProduct};
    let checkStatus = false;
    lastSelectedProduct = productList.filter((product) => product.productId === lastCheckedProductId && product.checked === true)[0];
    if(!!lastSelectedProduct) {
      checkStatus = true;
    }
    if(!checkStatus) {
      setSelectedProduct(() => {
        return{
          productId: 0,
          productCategoryId: 0,
          productAnimalCategoryId: 0,
          productNameKor: "",
          productPrice: 0,
          productImageUrl: ""
        }
      })
    } else {
      setSelectedProduct(() => lastSelectedProduct);
    }
  }, [productList]);

  return (
    <div css={s.layout}>
      <div css={s.row}>
        <div css={s.label}><input type="checkbox" checked={checkAll.checked} onChange={handleCheckAllChange} /></div>
        <div css={s.label}>ID</div>
        <div css={s.label}>상품명</div>
        <div css={s.label}>가격(원)</div>
        <div css={s.label}>상품구분</div>
        <div css={s.label}>동물구분</div>
      </div>
      <div css={s.productTable}>
        {
          productList.map((product) => 
            <div css={s.rowData} key={product.productId}>
              <div css={s.labelData}><input type="checkbox" value={product.productId} checked={product.checked} onChange={handleCheckOnChange} /></div>
              <div css={s.labelData}>{product.productId}</div>
              <div css={s.labelData}>{product.productNameKor}</div>
              <div css={s.labelData}>{product.productPrice}</div>
              <div css={s.labelData}>{product.productCategoryNameKor}</div>
              <div css={s.labelData}>{product.productAnimalCategoryNameKor}</div>
            </div>
          )
        }
      </div>
      {
        !getProductsCountQuery.isLoading && <AdminProductSearchPageNumbers maxPageNumber={maxPageNumber} totalCount={totalCount} path={""} />
      }
    </div>
  )
}

export default AdminProductSearch;