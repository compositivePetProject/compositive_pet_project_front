// /** @jsxImportSource @emotion/react */
// import { useSearchParams } from "react-router-dom";
// import * as s from "./style";
// import { useEffect, useState } from "react";
// import { useQuery } from "react-query";
// import { getProductIncomingAdminCountRequest, getProductInocmingStocksRequest } from "../../../apis/api/productAdmin";
// import { count } from "firebase/firestore";
// import AdminProductSearchPageNumbers from "../AdminProductSearchPageNumbers/AdminProductSearchPageNumbers";
// import { incomingProductDataState } from "../../../atoms/admin/incomingProductDataAtom";
// import { useRecoilState } from "recoil";
// import { deleteIncomingStocksState } from "../../../atoms/admin/deleteIncomingStocksState";
// import { searchIncomingProductDataState } from "../../../atoms/admin/searchIncomingProductDataAtom";

// function AdminIncomingStockSearch({ selectedProductSizeCategory, searchText, refetch, setRefetch}) {
//     const [ searchParams, setSearchParams ] = useSearchParams();
//     const searchCount = 10;
//     const [ incomingProductList, setIncomingProductList ] = useState([]);
//     const [ maxPageNumber, setMaxPageNumber ] = useState(0);
//     const [ totalCount, setTotalCount ] = useState(0);
//     const [ checkAll, setCheckAll ] = useState({
//         checked : false,
//         target: 1
//     })
//     const [ lastCheckedProductId, setLastCheckedProductId ] = useState(0);
//     const [ incomingProductData, setIncomingProductData ] = useRecoilState(incomingProductDataState);
//     const [ incomingProductsIds, setIncomingProductsIds ] = useRecoilState(deleteIncomingStocksState);
//     const [ searchIncomingProductData, setSearchIncomingProductData ] = useRecoilState(searchIncomingProductDataState);
//     useEffect(() => {
//         console.log(searchText);
//         console.log(selectedProductSizeCategory);
//     }, [selectedProductSizeCategory, searchText])

//     useEffect(() => {
//         searchIncomingProductsQuery.refetch();
//         setRefetch(() => false);
//       }, [refetch])

//     const searchIncomingProductsQuery = useQuery(
//         ["searchIncomingProductsQuery", searchParams.get("page")],
//         async () => {
//             return await getProductInocmingStocksRequest({
//                 page: searchParams.get("page"),
//                 count: searchCount,
//                 productSizeCategoryId : selectedProductSizeCategory,
//                 productNameKor : searchText
//             })
//         },
//         {
//             retry: 0,
//             refetchInterval: false,
//               onSuccess: (response) => {
//                 setIncomingProductList(() => response.data.map((product) => {
//                     return {
//                         ...product
//                     }
//                 }))
//               },
//               onError: (error) => {
//                 console.log(error);
//               }
//           }
//     )

//     const getIncomingStockCountQuery = useQuery(
//         ["getIncomingStockCountQuery"],
//         async () => await getProductIncomingAdminCountRequest({
//             count : searchCount,
//             productSizeCategoryId : selectedProductSizeCategory,
//             productNameKor : searchText
//         }),
//         {
//             retry: 0,
//             refetchOnWindowFocus: false,
//             onSuccess: (response) => {
//                 setMaxPageNumber(response.data.maxPageNumber)
//                 setTotalCount(response.data.totalCount)
//             },
//             onError: (error) => {
//                 console.log(error);
//             }
//         }
//     )
    
//     const handleCheckAllChange = (e) => {
//         setCheckAll(() => {
//             return {
//                 checked: e.target.checked,
//                 target: 1
//             }
//         })
//     }

//     const handleCheckOnChange = (e) => {
//         const productIncomingStockId = parseInt(e.target.value);
//         setIncomingProductList(() => 
//             incomingProductList.map((product) => {
//                 if(product.productIncomingStockId === productIncomingStockId) {
//                 return {
//                     ...product,
//                     checked: e.target.checked
//                 }
//                 }
//             return product;
//           })
//         );
//         setLastCheckedProductId(() => productIncomingStockId);
//         setIncomingProductData(incomingProductList.filter(product => product.productIncomingStockId === productIncomingStockId)[0]);
//         setIncomingProductsIds([...incomingProductsIds, {productIncomingStockId}]);
//         console.log(productIncomingStockId);
//     }

//     useEffect(() => {
//         console.log(incomingProductsIds)
//     }, [incomingProductsIds])

//     useEffect(() => {
//         if(checkAll.target === 1) {
//             setIncomingProductList(() => 
//                 incomingProductList.map((product) => {
//                     return {
//                         ...product,
//                         checked: checkAll.checked
//                     }
//                 })
//             );
//         }
//     }, [checkAll.checked]);
    
//     useEffect(() => {
//         const findCount = incomingProductList.filter((product) => product.checked === false).length;
//         if(findCount === 0) {
//           setCheckAll(() => {
//             return {
//               checked: false,
//               target: 2
//             }
//           });
//         } else {
//           setCheckAll(() => {
//             return {
//               checked: false,
//               target: 2
//             }
//           })
//         }
//     }, [incomingProductList]);
    
//     return (
//         <div css={s.layout}>
//             <div css={s.row}>
//                 <div css={s.label}><input type="checkbox" checked={checkAll.checked} onChange={handleCheckAllChange}/></div>
//                 <div css={s.label}>ID</div>
//                 <div css={s.label}>상품명</div>
//                 <div css={s.label}>사이즈</div>
//                 <div css={s.label}>상품갯수</div>
//             </div>
//             <div css={s.productTable}>
//                 {
//                     incomingProductList.map((product) => 
//                         <div css={s.rowData} key={product.productIncomingStockId}>
//                             <div css={s.labelData}><input type="checkbox" value={product.productIncomingStockId} checked={product.checked} onChange={handleCheckOnChange} /></div>
//                             <div css={s.labelData}>{product.productIncomingStockId}</div>
//                             <div css={s.labelData}>{product.productNameKor}</div>
//                             <div css={s.labelData}>{product.productSizeCategoryName}</div>
//                             <div css={s.labelData}>{product.productIncomingStockCount}</div>
//                         </div>
//                     )
//                 }
//             </div>
//             {
//                 !searchIncomingProductsQuery.isLoading &&  <AdminProductSearchPageNumbers maxPageNumber={maxPageNumber} totalCount={totalCount} path={"incoming/"} />
//             }
//         </div>
//     )
// }

// export default AdminIncomingStockSearch;