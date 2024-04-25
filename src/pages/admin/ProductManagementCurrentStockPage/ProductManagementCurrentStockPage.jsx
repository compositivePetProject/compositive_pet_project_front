/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useRecoilState } from "recoil";
import { currentProductDataState } from "../../../atoms/admin/currentProductDataAtom";
import AdminPageLayout from "../../../components/admin/AdminPageLayout/AdminPageLayout";
import SearchTop from "../../../components/admin/SearchTop/SearchTop";
import RegisterTop from "../../../components/admin/RegisterTop/RegisterTop";
import { useEffect, useMemo, useState } from "react";
import TopSelect from "../../../components/admin/TopSelect/TopSelect";
import TopInput from "../../../components/admin/TopInput/TopInput";
import { productCategoryOptions } from "../../../constants/productCategoryOptions";
import { productAnimalCategoryOptions } from "../../../constants/productAnimalCategoryOptions";
import { productSizeCategoryOptions } from "../../../constants/productSizeCategoryOptions";
import { useMutation } from "react-query";
import { postProductCurrentStockRequest, updateProductCurrentStockRequest } from "../../../apis/api/productAdmin";
import { searchCurrentProductDataState } from "../../../atoms/admin/searchCurrentProductDataAtom";
import AdminCurrentStockSearch from "../../../components/admin/AdminCurrentStockSearch/AdminCurrentStockSearch";
import { selectedProductData } from "../../../atoms/admin/selectedProductDataAtom";
import { selectedCurrentProductData } from "../../../atoms/admin/selectedCurrentProductData";

function ProductManagementCurrentStockPage({title}) {
  const [ searchCurrentProductData, setSearchCurrentProductData ] = useRecoilState(searchCurrentProductDataState);
  const [ currentProductData, setCurrentProductData ] = useRecoilState(currentProductDataState);
  const [ buttonState, setButtonState ] = useState(0);
  const [ refetch, setRefetch ] = useState(false);

  const currentProductUpdateMutation = useMutation({
    mutationKey: "currentProductUpdateMutation",
    mutationFn: updateProductCurrentStockRequest,
    onSuccess: response => {
      alert("상품 재고 수정 완료");
      window.location.reload();
    },
    onError: error => {
      alert("실패");
    }
  })

  const searchHandleKeyDown = (e) => {
    if(e.key === "Enter") {
      searchSubmit();
    }
  }

  const updateHandleKeyDown = (e) => {
    if(e.key === "Enter") {
      currentProductUpdateMutation.mutate(currentProductData);
    }
  }

  const searchInputs = useMemo(() => [
    [
      <TopSelect label={"상품사이즈"} name={"productSizeCategoryId"} setState={setSearchCurrentProductData} options={productSizeCategoryOptions} />,
      <TopInput label={"상품명"} name={"productNameKor"} setState={setSearchCurrentProductData} inputSize={20} onKeyDown={searchHandleKeyDown}/>
    ]
  ], []);

  const registerInputs = [
    [
      <TopInput label={"재고ID"} name={"productStockId"} setState={setCurrentProductData} disabled={true} inputSize={5} value={currentProductData.productStockId}/>,
      <TopInput label={"상품ID"} name={"productId"} setState={setCurrentProductData} inputSize={5} disabled={true} buttonState={buttonState} value={currentProductData.productId}/>,
      <TopSelect label={"상품사이즈"} name={"productSizeCategoryId"} setState={setCurrentProductData} disabled={true} options={productSizeCategoryOptions} buttonState={buttonState} value={currentProductData.productSizeCategoryId} />
    ],
    [
      <TopInput label={"재고갯수"} name={"productStockCount"} setState={setCurrentProductData} inputSize={8} disabled={buttonState === 0 ? true : false} buttonState={buttonState} value={currentProductData.productStockCount} onKeyDown={updateHandleKeyDown}/>,
    ]
  ];

  const searchSubmit = () => {
    setRefetch(() => true);
  }

  return (
    <AdminPageLayout>
        <div css={s.header}>
            <h1 css={s.title}>{title}</h1>
            <div>
            <button onClick={() => setButtonState(2)} css={s.button}>수정</button>
            </div>
        </div>
        <SearchTop searchInputs={searchInputs} submit={searchSubmit} />
        <RegisterTop registerInputs={registerInputs} submitClick={() => currentProductUpdateMutation.mutate(currentProductData)}/>
        <AdminCurrentStockSearch refetch={refetch} setRefetch={setRefetch} />
    </AdminPageLayout>
)
}

export default ProductManagementCurrentStockPage;