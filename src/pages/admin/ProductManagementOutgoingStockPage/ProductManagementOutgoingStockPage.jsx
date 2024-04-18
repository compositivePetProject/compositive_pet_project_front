/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useMemo } from "react";
import AdminPageLayout from "../../../components/admin/AdminPageLayout/AdminPageLayout";
import SearchTop from "../../../components/admin/SearchTop/SearchTop";
import TopSelect from "../../../components/admin/TopSelect/TopSelect";
import { productAnimalCategoryOptions } from "../../../constants/productAnimalCategoryOptions";
import { productCategoryOptions } from "../../../constants/productCategoryOptions";
import { productSizeCategoryOptions } from "../../../constants/productSizeCategoryOptions";
import TopInput from "../../../components/admin/TopInput/TopInput";
import { useRecoilState } from "recoil";
import { searchOutgoingProductDataState } from "../../../atoms/admin/searchOutgoingProductDataAtom";

function ProductManagementOutgoingStockPage({title}) {
    const [ searchOutgoingProductData, setSearchOutgoingProductData ] = useRecoilState(searchOutgoingProductDataState);

    const searchInputs = useMemo(() => [
        [
            <TopSelect label={"상품구분"} name={"productCategoryId"} setState={setSearchOutgoingProductData} options={productCategoryOptions} />,
            <TopSelect label={"동물구분"} name={"productAnimalCategoryId"} setState={setSearchOutgoingProductData} options={productAnimalCategoryOptions} />,
            <TopSelect label={"상품사이즈"} name={"productSizeCategoryId"} setState={setSearchOutgoingProductData} options={productSizeCategoryOptions} />,
            <TopInput label={"상품명"} name={"productNameKor"} setState={setSearchOutgoingProductData} inputSize={20}/>
        ],
    ], []);
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
        <SearchTop searchInputs={searchInputs}/>
        </AdminPageLayout>
  )
}

export default ProductManagementOutgoingStockPage;