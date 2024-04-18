/** @jsxImportSource @emotion/react */
import { Route, Routes } from "react-router-dom";
import ProductPetShoppingPage from '../../pages/ProductPetShoppingPage/ProductPetShoppingPage';
import ProductPetDetailPage from '../../pages/ProductPetDetailPage/ProductPetDetailPage';
import ProductPetCartPage from '../../pages/ProductPetCartPage/ProductPetCartPage';
import ProductPetShopPaymentPage from '../../pages/ProductPetShopPaymentPage/ProductPetShopPaymentPage';

function ProductPage({}) {
  return (
    <>
      <Routes>
        <Route path="/pet/shopping" element={ <ProductPetShoppingPage /> } />
        <Route path="/pet/detail/:productId" element={<ProductPetDetailPage />} />
        <Route path="/pet/order/payment" element={<ProductPetShopPaymentPage />} />
        <Route path="/pet/cart" element={<ProductPetCartPage />} />
      </Routes>
    </>
  )
}

export default ProductPage;