// /** @jsxImportSource @emotion/react */
// import * as s from "./style";
// import { useEffect, useMemo, useState } from "react";
// import AdminPageLayout from "../../../components/admin/AdminPageLayout/AdminPageLayout";
// import SearchTop from "../../../components/admin/SearchTop/SearchTop";
// import TopInput from "../../../components/admin/TopInput/TopInput";
// import { productSizeCategoryOptions } from "../../../constants/productSizeCategoryOptions";
// import TopSelect from "../../../components/admin/TopSelect/TopSelect";
// import { productCategoryOptions } from "../../../constants/productCategoryOptions";
// import { productAnimalCategoryOptions } from "../../../constants/productAnimalCategoryOptions";
// import RegisterTop from "../../../components/admin/RegisterTop/RegisterTop";
// import { useRecoilState } from "recoil";
// import { productDataState } from "../../../atoms/admin/productDataAtom";
// import { incomingProductDataState } from "../../../atoms/admin/incomingProductDataAtom";
// import { useMutation, useQueryClient } from "react-query";
// import { deleteProductIncomingStocksAdminRequest, postProductIncomingStockRequest, updateProductIncomingStockAdminRequest } from "../../../apis/api/productAdmin";
// import { searchIncomingProductDataState } from "../../../atoms/admin/searchIncomingProductDataAtom";
// import AdminIncomingStockSearch from "../../../components/admin/AdminIncomingStockSearch/AdminIncomingStockSearch";
// import { deleteIncomingStocksState } from "../../../atoms/admin/deleteIncomingStocksState";

// function ProductManagementIcomingStockPage({title}) {
//     const [ searchIncomingProductData, setSearchIncomingProductData ] = useRecoilState(searchIncomingProductDataState);
//     const [ incomingProductData, setIncomingProductData ] = useRecoilState(incomingProductDataState);
//     const queryClient = useQueryClient();
//     const [ buttonState, setButtonState ] = useState(0);
//     const [ incomingProductIds, setIncomingProductsIds ] = useRecoilState(deleteIncomingStocksState);
//     const [ refetch, setRefetch ] = useState(false);

//     const incomingProductRegisterMutation = useMutation({
//         mutationKey: "incomingProductRegisterMutation",
//         mutationFn: postProductIncomingStockRequest,
//         onSuccess: response => {
//             alert("가입고 상품 등록 완료");
//             setIncomingProductData({
//                 productIncomingStockId: 0,
//                 productId: 0,
//                 productNameKor: "",
//                 productSizeCategoryId: 0,
//                 productSizeCategoryName: "",
//                 productIncomingStockCount: 0
//             });
//             window.location.reload();
//         },
//         onError: error => {
//             alert("실패");
//         }
//     });

//     const incomingProductUpdateMutation = useMutation({
//         mutationKey: "incomingProductUpdateMutation",
//         mutationFn: updateProductIncomingStockAdminRequest,
//         onSuccess: response => {
//             alert("가입고 상품 수정 완료");
//             setIncomingProductData({
//                 productIncomingStockId: 0,
//                 productId: 0,
//                 productNameKor: "",
//                 productSizeCategoryId: 0,
//                 productSizeCategoryName: "",
//                 productIncomingStockCount: 0
//             });
//             window.location.reload();
//         },
//         onError: error => {
//             alert("실패");
//         }
//     })

//     const incomingProductDeleteMutation = useMutation({
//         mutationKey: "incomingProductDeleteMutation",
//         mutationFn: deleteProductIncomingStocksAdminRequest,
//         onSuccess: response => {
//             alert("가입고 상품 삭제 완료");
//             window.location.reload();
//         },
        
//         onError: error => {
//             alert("실패");
//         }
//     })

//     const searchInputs = [
//         [
//             <TopSelect label={"상품사이즈"} name={"productSizeCategoryId"} setState={setSearchIncomingProductData} options={productSizeCategoryOptions} />,
//             <TopInput label={"상품명"} name={"productNameKor"} setState={setSearchIncomingProductData} inputSize={20}/>
//         ]
//     ];

//     const registerInputs = [
//         [
//             <TopInput label={"가입고ID"} name={"productIncomingId"} setState={setIncomingProductData} disabled={true} inputSize={5} buttonState={buttonState} value={incomingProductData.productIncomingStockId}/>,
//             <TopInput label={"상품ID"} name={"productId"} setState={setIncomingProductData} disabled={buttonState === 0 ? true : false} inputSize={5} buttonState={buttonState} value={incomingProductData.productId}/>,
//             <TopSelect label={"상품사이즈"} name={"productSizeCategoryId"} setState={setIncomingProductData} disabled={buttonState === 0 ? true : false} options={productSizeCategoryOptions} buttonState={buttonState} value={incomingProductData.productSizeCategoryId}/>
//         ],
//         [
//             <TopInput label={"상품가입고갯수"} name={"productIncomingStockCount"} setState={setIncomingProductData} disabled={buttonState === 0 ? true : false} inputSize={8} buttonState={buttonState} value={incomingProductData.productIncomingStockCount}/>,
//         ]
//     ];

    
//     const submit = () => {
//         if(buttonState === 1) {
//             incomingProductRegisterMutation.mutate(incomingProductData);
//         }
        
//         if(buttonState === 2) {
//             setButtonState(2);
//             incomingProductUpdateMutation.mutate({
//                 productIncomingStockId: incomingProductData.productIncomingStockId,
//                 productId: incomingProductData.productId,
//                 productSizeCategoryId: incomingProductData.productSizeCategoryId,
//                 productIncomingStockCount: incomingProductData.productIncomingStockCount
//             })
//         }
//     }
    
//     const deleteSubmit = () => {
//         if(window.confirm("가입고 상품을 삭제하시겠습니까?")) {
//             let ids = incomingProductIds.map(product => product.productIncomingStockId);
//             incomingProductDeleteMutation.mutate(ids);
//         } else {
//             alert("가입고 상품 삭제가 취소되었습니다.");
//         }
//     }

//     const searchSubmit = () => {
//         setRefetch(() => true);
//     }

//     useEffect(() => {
//         console.log(searchIncomingProductData)
//     }, [searchIncomingProductData]);
    
//     return (
//         <AdminPageLayout>
//             <div css={s.header}>
//                 <h1 css={s.title}>{title}</h1>
//                 <div>
//                 <button css={s.button} onClick={() => setButtonState(1)}>추가</button>
//                 <button css={s.button} onClick={() => setButtonState(2)}>수정</button>
//                 <button css={s.button} onClick={deleteSubmit}>삭제</button>
//                 </div>
//             </div>
//             <SearchTop searchInputs={searchInputs} submit={searchSubmit} />
//             <RegisterTop registerInputs={registerInputs} submitClick={submit} buttonState={buttonState}/>
//             <AdminIncomingStockSearch refetch={refetch} setRefetch={setRefetch} selectedProductSizeCategory={searchIncomingProductData.productSizeCategoryId} searchText={searchIncomingProductData.productNameKor}/>
//         </AdminPageLayout>
//     )
// };

// export default ProductManagementIcomingStockPage;