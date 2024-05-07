import { Route, Routes, useLocation } from 'react-router-dom';
import ProductPage from '../../pages/ProductPage/ProductPage';
import ProductManagementIcomingStockPage from '../../pages/admin/ProductManagementIcomingStockPage/ProductManagementIcomingStockPage';
import ProductManagementCurrentStockPage from '../../pages/admin/ProductManagementCurrentStockPage/ProductManagementCurrentStockPage';
import ProductManagementOrderPage from '../../pages/admin/ProductManagementOrderPage/ProductManagementOrderPage';
import ProductManagementOutgoingStockPage from '../../pages/admin/ProductManagementOutgoingStockPage/ProductManagementOutgoingStockPage';
import ProductManagementPage from '../../pages/admin/ProductManagementPage/ProductManagementPage';
import { useEffect } from 'react';

function ProductRoute(props) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <>
      <Routes>
        <Route path='/product/*' element={<ProductPage/>} />
        <Route path='/admin/management/product' element={<ProductManagementPage title={"상품관리"}/>} />
        <Route path='/admin/management/incoming/product' element={<ProductManagementIcomingStockPage title={"상품가입고관리"} />} />
        <Route path='/admin/management/stock/product' element={<ProductManagementCurrentStockPage title={"재고관리"} />} />
        <Route path='/admin/management/order/product' element={<ProductManagementOrderPage title={"주문현황"} />} />
        <Route path='/admin/management/outgoing/product' element={<ProductManagementOutgoingStockPage title={"출고현황"} />} />
      </Routes>
    </>
  )
}

export default ProductRoute;