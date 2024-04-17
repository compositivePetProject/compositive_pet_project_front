/** @jsxImportSource @emotion/react */
import * as s from "./style";
import AdminPageLayout from "../../../components/admin/AdminPageLayout/AdminPageLayout";
import RegisterTop from "../../../components/admin/RegisterTop/RegisterTop";
import TopInput from "../../../components/admin/TopInput/TopInput";
import TopSelect from "../../../components/admin/TopSelect/TopSelect";
import SearchTop from "../../../components/admin/SearchTop/SearchTop";
import { productCategoryOptions } from "../../../constants/productCategoryOptions";
import { productAnimalCategoryOptions } from "../../../constants/productAnimalCategoryOptions";
import TopFileUpload from "../../../components/admin/TopFileUpload/TopFileUpload";
import ReactQuill from "react-quill";
import Quill from "../../../components/Quill/Quill";
import ReactModal from "react-modal";
import { useEffect, useMemo, useState } from "react";
import ProductDetailModal from "../../../components/admin/ProductDetailModal/ProductDetailModal";
import { useRecoilState } from "recoil";
import { productDataState } from "../../../atoms/admin/productDataAtom";
import { useMutation } from "react-query";
import { postProductAdminRequest } from "../../../apis/api/productAdmin";

function ProductManagementPage({title}) {
  const [ productData, setProductData ] = useRecoilState(productDataState);
  const [ isOpen, setIsOpen ] = useState(false);

  const productRegisterMutation = useMutation({
    mutationKey: "productRegisterMutation",
    mutationFn: postProductAdminRequest,
    onSuccess: response => {
      alert("완료");
    },
    onError: error => {
      alert("실패");
    }
  })

  const quillChange = (value) => {
    setProductData(productData => {
      return {
        ...productData,
        productBoardContent: value
      }
    })
  }

  const searchInputs = useMemo(() => [
    <TopSelect label={"상품구분"} name={"productCategoryId"} options={productCategoryOptions} />,
    <TopSelect label={"동물구분"} name={"productAnimalCategoryId"} options={productAnimalCategoryOptions} />,
    <TopInput label={"상품명"} name={"productNameKor"} inputSize={20}/>
  ], []);

  const registerInputs = useMemo(() => [
    [
      <TopInput label={"ID"} name={"productId"} setState={setProductData} disabled={true} inputSize={5}/>,
      <TopSelect label={"상품구분"} name={"productCategoryId"} setState={setProductData} options={productCategoryOptions} />,
      <TopSelect label={"동물구분"} name={"productAnimalCategoryId"} setState={setProductData} options={productAnimalCategoryOptions} />,
    ],
    [
      <TopInput label={"상품명"} name={"productNameKor"} setState={setProductData} inputSize={15}/>,
      <TopInput label={"가격(원)"} name={"productPrice"} setState={setProductData} inputSize={8}/>,
      <TopFileUpload label={"이미지"} name={"productImageUrl"} stateValue={productData.productImgUrl} setState={setProductData} inputSize={20} fileUploadPath="product" />,
    ],
    [
      <button css={s.button} onClick={() => {setIsOpen(() => true)}}>상세정보등록</button>,
      <ProductDetailModal isOpen={isOpen} setIsOpen={setIsOpen} value={productData.productBoardContent} onchange={quillChange}/>
    ]
  ], [isOpen, productData.productImageUrl, productData.productBoardContent]);


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
      <RegisterTop registerInputs={registerInputs} submitClick={() => productRegisterMutation.mutate(productData)}/>
    </AdminPageLayout>
  )
}

export default ProductManagementPage;