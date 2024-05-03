/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useMemo, useState } from "react";
import AdminPageLayout from "../../../components/admin/AdminPageLayout/AdminPageLayout";
import SearchTop from "../../../components/admin/SearchTop/SearchTop";
import TopSelect from "../../../components/admin/TopSelect/TopSelect";
import { productAnimalCategoryOptions } from "../../../constants/productAnimalCategoryOptions";
import { productCategoryOptions } from "../../../constants/productCategoryOptions";
import { productSizeCategoryOptions } from "../../../constants/productSizeCategoryOptions";
import TopInput from "../../../components/admin/TopInput/TopInput";
import { useRecoilState } from "recoil";
import { searchOutgoingProductDataState } from "../../../atoms/admin/searchOutgoingProductDataAtom";
import AdminOutgoingStockSearch from "../../../components/admin/AdminOutgoingStockSearch/AdminOutgoingStockSearch";
import AdminSales from "../../../components/admin/AdminSales/AdminSales";

function ProductManagementOutgoingStockPage({title}) {
    const [ searchOutgoingProductData, setSearchOutgoingProductData ] = useRecoilState(searchOutgoingProductDataState);
    const [ refetch, setRefetch ] = useState(false);

    const searchSubmit = () => {
        setRefetch(() => true);
    }

    const searchHandleKeyDown = (e) => {
        if(e.key === "Enter") {
          searchSubmit();
        }
    }

    const searchInputs = [
        [
            <TopSelect label={"상품사이즈"} name={"productSizeCategoryId"} setState={setSearchOutgoingProductData} options={productSizeCategoryOptions} />,
            <TopInput label={"상품명"} name={"productNameKor"} setState={setSearchOutgoingProductData} inputSize={20} onKeyDown={searchHandleKeyDown}/>
        ],
    ];


    return (
        <AdminPageLayout>
            <AdminSales/>
            <div css={s.header}>
                <h1 css={s.title}>{title}</h1>
            </div>
            <SearchTop searchInputs={searchInputs} submit={searchSubmit}/>
            <AdminOutgoingStockSearch refetch={refetch} setRefetch={setRefetch}/>
        </AdminPageLayout>
  )
  
}

export default ProductManagementOutgoingStockPage;