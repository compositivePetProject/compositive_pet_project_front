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
import { useEffect, useMemo, useState } from "react";
import ProductDetailModal from "../../../components/admin/ProductDetailModal/ProductDetailModal";
import { useRecoilState } from "recoil";
import { productDataState } from "../../../atoms/admin/productDataAtom";
import { useMutation } from "react-query";
import { searchProductDataState } from "../../../atoms/admin/searchProductDataAtom";
import AdminProductSearch from "../../../components/admin/AdminProductSearch/AdminProductSearch";
import { selectedProductData } from "../../../atoms/admin/selectedProductDataAtom";
import { deleteProductsAdminRequest, postProductAdminRequest, updateProductAdminRequest } from "../../../apis/api/Admin/productAdmin";
import AdminSales from "../../../components/admin/AdminSales/AdminSales";

function ProductManagementPage({title}) {
  const [ searchProductData, setSearchProductData ] = useRecoilState(searchProductDataState);
  const [ productData, setProductData ] = useRecoilState(productDataState);
  const [ isOpen, setIsOpen ] = useState(false);
  const [ buttonState, setButtonState ] = useState(0);
  const [ selectedProduct, setSelectedProduct ] = useRecoilState(selectedProductData);
  const [ refetch, setRefetch ] = useState(false);

  const [deleteProducts, setDeleteProducts] = useState([]);
  const handleSetDeleteProducts = (products) => {
    setDeleteProducts(products);
  };

  useEffect(() => {
      setProductData(selectedProduct);
  }, [selectedProduct]);
  
  const productRegisterMutation = useMutation({
    mutationKey: "productRegisterMutation",
    mutationFn: postProductAdminRequest,
    onSuccess: response => {
      alert("완료");
      window.location.reload();
    },
    onError: error => {
      alert("실패");
    }
  })

  const deleteProductsQuery = useMutation({
    mutationKey: "deleteProductsQuery",
    mutationFn: deleteProductsAdminRequest,
    onSuccess: response => {
      alert("상품 삭제 완료");
      window.location.reload();
    },
    onError: error => {
      alert("실패");
    }
  })

  const updateProductQuery = useMutation({
    mutationKey: "updateProductQuery",
    mutationFn: updateProductAdminRequest,
    onSuccess: response => {
      alert("상품 수정 완료");
      window.location.reload();
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

  const searchHandleKeyDown = (e) => {
    if(e.key === "Enter") {
        searchSubmit();
    }
  }
  
  const searchSubmit = () => {
    setRefetch(() => true);
  }
  
  const registerSubmit = () => {
    productRegisterMutation.mutate(productData);
  }
  
  const updateSubmit = () => {
    updateProductQuery.mutate(productData);
  }

  const searchInputs = [
    [
      <TopSelect label={"상품구분"} name={"productCategoryId"} setState={setSearchProductData} options={productCategoryOptions} />,
      <TopSelect label={"동물구분"} name={"productAnimalCategoryId"} setState={setSearchProductData} options={productAnimalCategoryOptions} />,
      <TopInput label={"상품명"} name={"productNameKor"} setState={setSearchProductData} inputSize={20} onKeyDown={searchHandleKeyDown}/>
    ]
  ];
  
  const registerInputs =  [
    [
      <TopInput label={"ID"} name={"productId"} setState={setProductData} disabled={true} inputSize={5} value={productData.productId}/>,
      <TopSelect label={"상품구분"} name={"productCategoryId"} setState={setProductData} disabled={buttonState === 0 ? true : false} options={productCategoryOptions} value={productData.productCategoryId} buttonState={buttonState} />,
      <TopSelect label={"동물구분"} name={"productAnimalCategoryId"} setState={setProductData} disabled={buttonState === 0 ? true : false} options={productAnimalCategoryOptions} value={productData.productAnimalCategoryId} buttonState={buttonState} />,
    ],
    [
      <TopInput label={"상품명"} name={"productNameKor"} setState={setProductData} disabled={buttonState === 0 ? true : false} inputSize={15} value={productData.productNameKor}/>,
      <TopInput label={"가격(원)"} name={"productPrice"} setState={setProductData} disabled={buttonState === 0 ? true : false} inputSize={8} value={productData.productPrice}/>,
      <TopFileUpload label={"이미지"} name={"productImageUrl"} stateValue={productData.productImageUrl} disabled={buttonState === 0 ? true : false} setState={setProductData} inputSize={20} fileUploadPath="product" buttonState={buttonState} value={productData.productImageUrl} />,
    ],
    [
      <button css={s.button} onClick={() => {setIsOpen(() => true)}}>상세정보등록</button>,
      <ProductDetailModal isOpen={isOpen} setIsOpen={setIsOpen} value={productData.productBoardContent} onchange={quillChange}/>
    ]
  ];

  return (
    <AdminPageLayout>
      <AdminSales/>
      <div css={s.header}>
        <h1 css={s.title}>{title}</h1>
        <div>
          <button onClick={() => setButtonState(1)} css={s.button}>추가</button>
          <button onClick={() => setButtonState(2)} css={s.button}>수정</button>
          <button onClick={() => deleteProductsQuery.mutate(deleteProducts)} css={s.button}>삭제</button>
        </div>
      </div>
      <SearchTop searchInputs={searchInputs} submit={searchSubmit}/>
      <RegisterTop registerInputs={registerInputs} submitClick={buttonState === 1 ? registerSubmit : buttonState === 2 ? updateSubmit : null}/>
      <AdminProductSearch refetch={refetch} setRefetch={setRefetch} selectedProductCategory={searchProductData.productCategoryId} selectedProductAnimalCategoryId={searchProductData.productAnimalCategoryId} searchText={searchProductData.productNameKor} buttonState={buttonState} onSetDeleteProducts={handleSetDeleteProducts} />
    </AdminPageLayout>
  )
}

export default ProductManagementPage;