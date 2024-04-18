/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useMemo } from "react";
import AdminPageLayout from "../../../components/admin/AdminPageLayout/AdminPageLayout";
import SearchTop from "../../../components/admin/SearchTop/SearchTop";
import TopInput from "../../../components/admin/TopInput/TopInput";
import { productSizeCategoryOptions } from "../../../constants/productSizeCategoryOptions";
import TopSelect from "../../../components/admin/TopSelect/TopSelect";
import { productCategoryOptions } from "../../../constants/productCategoryOptions";
import { productAnimalCategoryOptions } from "../../../constants/productAnimalCategoryOptions";
import RegisterTop from "../../../components/admin/RegisterTop/RegisterTop";
import { useRecoilState } from "recoil";
import { productDataState } from "../../../atoms/admin/productDataAtom";
import { incomingProductDataState } from "../../../atoms/admin/incomingProductDataAtom";
import { useMutation } from "react-query";
import { postProductIncomingStockRequest } from "../../../apis/api/productAdmin";
import { searchIncomingProductDataState } from "../../../atoms/admin/searchIncomingProductDataAtom";

function ProductManagementIcomingStockPage({title}) {
    const [ searchIncomingProductData, setSearchIncomingProductData ] = useRecoilState(searchIncomingProductDataState);
    const [ incomingProductData, setIncomingProductData ] = useRecoilState(incomingProductDataState);

    const incomingProductRegisterMutation = useMutation({
        mutationKey: "incomingProductRegisterMutation",
        mutationFn: postProductIncomingStockRequest,
        onSuccess: response => {
            alert("가입고 상품 등록 완료");
        },
        onError: error => {
            alert("실패");
        }
    })

    const searchInputs = useMemo(() => [
        [
            <TopSelect label={"상품구분"} name={"productCategoryId"} setState={setSearchIncomingProductData} options={productCategoryOptions} />,
            <TopSelect label={"동물구분"} name={"productAnimalCategoryId"} setState={setSearchIncomingProductData} options={productAnimalCategoryOptions} />,
            <TopSelect label={"상품사이즈"} name={"productSizeCategoryId"} setState={setSearchIncomingProductData} options={productSizeCategoryOptions} />,
            <TopInput label={"상품명"} name={"productNameKor"} setState={setSearchIncomingProductData} inputSize={20}/>
        ]
    ], []);

    const registerInputs = [
        [
            <TopInput label={"가입고ID"} name={"productIncomingId"} setState={setIncomingProductData} disabled={true} inputSize={5}/>,
            <TopInput label={"상품ID"} name={"productId"} setState={setIncomingProductData} inputSize={5}/>,
            <TopSelect label={"상품사이즈"} name={"productSizeCategoryId"} setState={setIncomingProductData} options={productSizeCategoryOptions} />
        ],
        [
            <TopInput label={"상품가입고갯수"} name={"productIncomingStockCount"} setState={setIncomingProductData} inputSize={8}/>,
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
            <RegisterTop registerInputs={registerInputs} submitClick={() => incomingProductRegisterMutation.mutate(incomingProductData)}/>
        </AdminPageLayout>
    )
};

export default ProductManagementIcomingStockPage;