/** @jsxImportSource @emotion/react */
import { Route, Routes } from "react-router-dom";
import ProductPetShoppingPage from '../../pages/ProductPetShoppingPage/ProductPetShoppingPage';
import ProductPetDetailPage from '../../pages/ProductPetDetailPage/ProductPetDetailPage';
import ProductPetCartPage from '../../pages/ProductPetCartPage/ProductPetCartPage';
import ProductPayment from "../../components/ProductPayment/ProductPayment"
import ProductPetShoppingCatPage from "../ProductPetShoppingCatPage/ProductPetShoppingCatPage";
import ProductPetShoppingDogPage from "../ProductPetShoppingDogPage/ProductPetShoppingDogPage";

function ProductPage({}) {
  return (
    <>
      <Routes>
        <Route path="/pet/shopping" element={ <ProductPetShoppingPage /> } />
        <Route path="/pet/shopping/cat" element={ <ProductPetShoppingCatPage /> } />
        <Route path="/pet/shopping/dog" element={ <ProductPetShoppingDogPage /> } />
        <Route path="/pet/detail" element={<ProductPetDetailPage />} />
        <Route path="/pet/payment" element={<ProductPayment />} />
        <Route path="/pet/cart" element={<ProductPetCartPage />} />
      </Routes>
    </>
  )
}

export default ProductPage;