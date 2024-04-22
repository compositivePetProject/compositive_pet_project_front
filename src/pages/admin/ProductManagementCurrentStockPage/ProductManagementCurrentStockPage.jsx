/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useRecoilState } from "recoil";
import { currentProductDataState } from "../../../atoms/admin/currentProductDataAtom";
import AdminPageLayout from "../../../components/admin/AdminPageLayout/AdminPageLayout";
import SearchTop from "../../../components/admin/SearchTop/SearchTop";
import RegisterTop from "../../../components/admin/RegisterTop/RegisterTop";
import { useEffect, useMemo } from "react";
import TopSelect from "../../../components/admin/TopSelect/TopSelect";
import TopInput from "../../../components/admin/TopInput/TopInput";
import { productCategoryOptions } from "../../../constants/productCategoryOptions";
import { productAnimalCategoryOptions } from "../../../constants/productAnimalCategoryOptions";
import { productSizeCategoryOptions } from "../../../constants/productSizeCategoryOptions";
import { useMutation } from "react-query";
import { postProductCurrentStockRequest } from "../../../apis/api/productAdmin";
import { searchCurrentProductDataState } from "../../../atoms/admin/searchCurrentProductDataAtom";
import AdminCurrentStockSearch from "../../../components/admin/AdminCurrentStockSearch/AdminCurrentStockSearch";

function ProductManagementCurrentStockPage({title}) {
  const [ searchCurrentProductData, setSearchCurrentProductData ] = useRecoilState(searchCurrentProductDataState);
  const [ currentProductData, setCurrentProductData ] = useRecoilState(currentProductDataState);

  const currentProductRegisterMutation = useMutation({
    mutationKey: "currentProductRegisterMutation",
    mutationFn: postProductCurrentStockRequest,
    onSuccess: response => {
      alert("상품 재고 등록 완료")
    },
    onError: error => {
      alert("실패");
    }
  })

  const searchInputs = useMemo(() => [
    [
      <TopSelect label={"상품사이즈"} name={"productSizeCategoryId"} setState={setSearchCurrentProductData} options={productSizeCategoryOptions} />,
      <TopInput label={"상품명"} name={"productNameKor"} setState={setSearchCurrentProductData} inputSize={20}/>
    ]
  ], []);

  const registerInputs = [
    [
      <TopInput label={"재고ID"} name={"productStockId"} setState={setCurrentProductData} disabled={true} inputSize={5}/>,
      <TopInput label={"상품ID"} name={"productId"} setState={setCurrentProductData} inputSize={5}/>,
      <TopSelect label={"상품사이즈"} name={"productSizeCategoryId"} setState={setCurrentProductData} options={productSizeCategoryOptions} />
    ],
    [
      <TopInput label={"재고갯수"} name={"productStockCount"} setState={setCurrentProductData} inputSize={8}/>,
    ]
  ];

  return (
    <AdminPageLayout>
        <div css={s.header}>
            <h1 css={s.title}>{title}</h1>
            <div>
            <button css={s.button}>추가</button>
            <button css={s.button}>수정</button>
            <button css={s.button}>삭제</button>
            </div>
        </div>
        <SearchTop searchInputs={searchInputs} />
        <RegisterTop registerInputs={registerInputs} submitClick={() => currentProductRegisterMutation.mutate(currentProductData)}/>
        <AdminCurrentStockSearch />
    </AdminPageLayout>
)
}

export default ProductManagementCurrentStockPage;