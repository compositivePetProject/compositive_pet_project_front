/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useMemo, useState } from "react";
import AdminPageLayout from "../../../components/admin/AdminPageLayout/AdminPageLayout";
import SearchTop from "../../../components/admin/SearchTop/SearchTop";
import TopInput from "../../../components/admin/TopInput/TopInput";
import TopSelect from "../../../components/admin/TopSelect/TopSelect";
import { productCategoryOptions } from "../../../constants/productCategoryOptions";
import { productAnimalCategoryOptions } from "../../../constants/productAnimalCategoryOptions";
import { productSizeCategoryOptions } from "../../../constants/productSizeCategoryOptions";
import { useRecoilState } from "recoil";
import { searchOrderProductDataState } from "../../../atoms/admin/searchOrderProductDataAtom";
import AdminOrderSearch from "../../../components/admin/AdminOrderSearch/AdminOrderSearch";
import AdminSales from "../../../components/admin/AdminSales/AdminSales";

function ProductManagementOrderPage({title}) {
    const [ searchOrderProductData, setSearchOrderProductData ] = useRecoilState(searchOrderProductDataState);

    const [ refetch, setRefetch ] = useState(false);

    const searchSubmit = () => {
        setRefetch(() => true);
    }

    const searchHandleKeyDown = (e) => {
        if(e.key === "Enter") {
          searchSubmit();
        }
    }

    const searchInput = useMemo(() => [
        [
            <TopSelect label={"상품사이즈"} name={"productSizeCategoryId"} setState={setSearchOrderProductData} options={productSizeCategoryOptions} />,
            <TopInput label={"상품명"} name={"productNameKor"} setState={setSearchOrderProductData} inputSize={20} onKeyDown={searchHandleKeyDown}/>
        ]
    ], []);

    return (
        <AdminPageLayout>
            <AdminSales/>
            <div css={s.header}>
                <h1 css={s.title}>{title}</h1>
            </div>
            <SearchTop searchInputs={searchInput} />
            <AdminOrderSearch refetch={refetch} setRefetch={setRefetch}/>
        </AdminPageLayout>
    )
}

export default ProductManagementOrderPage;