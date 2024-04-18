import { Route, Routes } from 'react-router-dom';
import ProductPage from '../../pages/ProductPage/ProductPage';
import ProductAdminPage from '../../pages/ProductAdminPage/ProductAdminPage';
import ProductAdminRegisterPage from '../../pages/ProductAdminRegisterPage/ProductAdminRegisterPage';
import ProductAdminIncomingStockPage from '../../pages/ProductAdminIncomingStockPage/ProductAdminIncomingStockPage';
import ProductAdminCurrentStockPage from '../../pages/ProductAdminCurrentStockPage/ProductAdminCurrentStockPage';
import ProductAdminOrderDetailPage from '../../pages/ProductAdminOrderDetailPage/ProductAdminOrderDetailPage';
import ProductAdminOutgoingStock from '../../pages/ProductAdminOutgoingStock/ProductAdminOutgoingStock';
import ProductManagementPage from '../../pages/admin/ProductManagementPage/ProductManagementPage';
import ProductManagementIcomingStockPage from '../../pages/admin/ProductManagementIcomingStockPage/ProductManagementIcomingStockPage';
import ProductManagementCurrentStockPage from '../../pages/admin/ProductManagementCurrentStockPage/ProductManagementCurrentStockPage';
import ProductManagementOrderPage from '../../pages/admin/ProductManagementOrderPage/ProductManagementOrderPage';
import ProductManagementOutgoingStockPage from '../../pages/admin/ProductManagementOutgoingStockPage/ProductManagementOutgoingStockPage';

function ProductRoute(props) {
  return (
    <>
      <Routes>
        <Route path='/product' element={<ProductPage/>} />
        <Route path='/product/admin' element={<ProductAdminPage />} />
        <Route path='/product/admin/register' element={<ProductAdminRegisterPage/>} />
        <Route path='/product/admin/incoming/stock' element={<ProductAdminIncomingStockPage/>} />
        <Route path='/product/admin/current/stock' element={<ProductAdminCurrentStockPage/>} />
        <Route path='/product/admin/order/detail' element={<ProductAdminOrderDetailPage/>} />
        <Route path='/product/admin/outgoing/stock' element={<ProductAdminOutgoingStock/>} />

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