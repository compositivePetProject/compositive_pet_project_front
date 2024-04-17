/** @jsxImportSource @emotion/react */
import { useMemo } from "react";
import AdminPageLayout from "../../../components/admin/AdminPageLayout/AdminPageLayout";
import SearchTop from "../../../components/admin/SearchTop/SearchTop";
import * as s from "./style";
import TopInput from "../../../components/admin/TopInput/TopInput";
import { productSizeCategoryOptions } from "../../../constants/productSizeCategoryOptions";
import TopSelect from "../../../components/admin/TopSelect/TopSelect";
import { productCategoryOptions } from "../../../constants/productCategoryOptions";
import { productAnimalCategoryOptions } from "../../../constants/productAnimalCategoryOptions";
import RegisterTop from "../../../components/admin/RegisterTop/RegisterTop";

function ProductManagementIcomingStockPage({title}) {


    const searchInput = useMemo(() => [
        <TopSelect label={"상품구분"} name={"productCategoryId"} options={productCategoryOptions} />,
        <TopSelect label={"동물구분"} name={"productAnimalCategoryId"} options={productAnimalCategoryOptions} />,
        <TopSelect label={"상품사이즈"} name={"productSizeCategoryId"} options={productSizeCategoryOptions} />,
        <TopInput label={"상품명"} name={"productNameKor"} inputSize={20}/>
    ]);

    const registerInputs = [
        [
            <TopInput label={"가입고ID"} name={"productIncomingId"} setState={null} disabled={true} inputSize={5}/>,
            <TopInput label={"상품ID"} name={"productId"} setState={null} inputSize={5}/>,
            <TopSelect label={"상품사이즈"} name={"productSizeCategoryId"} options={productSizeCategoryOptions} />
        ],
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
            <SearchTop searchInputs={searchInput} />
            <RegisterTop registerInputs={registerInputs} submitClick={() => null}/>
        </AdminPageLayout>
    )
};

export default ProductManagementIcomingStockPage;