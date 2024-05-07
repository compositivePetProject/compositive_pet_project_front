/** @jsxImportSource @emotion/react */
import { Route, Routes } from "react-router-dom";
import ProductPetShoppingPage from '../../pages/ProductPetShoppingPage/ProductPetShoppingPage';
import ProductPetDetailPage from '../../pages/ProductPetDetailPage/ProductPetDetailPage';
import ProductPetCartPage from '../../pages/ProductPetCartPage/ProductPetCartPage';
import ProductPayment from "../../components/ProductPayment/ProductPayment"

function ProductPage({}) {
  return (
    <>
      <Routes>
        <Route path="/pet/shopping" element={ <ProductPetShoppingPage /> } />
        <Route path="/pet/detail" element={<ProductPetDetailPage />} />
        <Route path="/pet/payment" element={<ProductPayment />} />
        <Route path="/pet/cart" element={<ProductPetCartPage />} />
      </Routes>
    </>
  )
}

export default ProductPage;