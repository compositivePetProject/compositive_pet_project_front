/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useMemo } from "react";
import AdminPageLayout from "../../../components/admin/AdminPageLayout/AdminPageLayout";
import SearchTop from "../../../components/admin/SearchTop/SearchTop";
import TopInput from "../../../components/admin/TopInput/TopInput";
import TopSelect from "../../../components/admin/TopSelect/TopSelect";
import { productCategoryOptions } from "../../../constants/productCategoryOptions";
import { productAnimalCategoryOptions } from "../../../constants/productAnimalCategoryOptions";
import { productSizeCategoryOptions } from "../../../constants/productSizeCategoryOptions";
import { useRecoilState } from "recoil";
import { searchOrderProductDataState } from "../../../atoms/admin/searchOrderProductDataAtom";

function ProductManagementOrderPage({title}) {
    const [ searchOrderProductData, setSearchOrderProductData ] = useRecoilState(searchOrderProductDataState);

    const searchInput = useMemo(() => [
        [
            <TopSelect label={"상품구분"} name={"productCategoryId"} setState={setSearchOrderProductData} options={productCategoryOptions} />,
            <TopSelect label={"동물구분"} name={"productAnimalCategoryId"} setState={setSearchOrderProductData} options={productAnimalCategoryOptions} />,
            <TopSelect label={"상품사이즈"} name={"productSizeCategoryId"} setState={setSearchOrderProductData} options={productSizeCategoryOptions} />,
            <TopInput label={"상품명"} name={"productNameKor"} setState={setSearchOrderProductData} inputSize={20}/>
        ]
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
        <SearchTop searchInputs={searchInput} />
        </AdminPageLayout>
    )
}

export default ProductManagementOrderPage;