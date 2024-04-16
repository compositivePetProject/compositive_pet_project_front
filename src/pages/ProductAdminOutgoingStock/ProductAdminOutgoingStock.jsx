/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getProductOutgoingStocksAdminRequest } from "../../apis/api/productAdmin";

function ProductAdminOutgoingStock() {
  const navigate = useNavigate();
  const [ productOutgoingStocks, setProductOutgoingStocks ] = useState([]);
  const getProductOutgoingStocksAdminQuery = useQuery(
    ["getProductOutgoingStocksAdminQuery"],
    getProductOutgoingStocksAdminRequest, {
        retry : 0,
        onSuccess: (response) => {
            setProductOutgoingStocks(response.data);
        },
        onError: (error) => {
            console.log(error);
        }
    }
  )
  return (
    <div css={s.layout}>
      <div css={s.left}>
        <div onClick={() => navigate("/product/admin/register")}>상품등록및현황</div>
          <div onClick={() => navigate("/product/admin/incoming/stock")}>가입고현황</div>
          <div onClick={() => navigate("/product/admin/current/stock")}>재고현황</div>
          <div onClick={() => navigate("/product/admin/order/detail")}>주문현황</div>
          <div onClick={() => navigate("/product/admin/outgoing/stock")}>출고현황</div>
        </div>
      <div css={s.right}>
        <h2>상품출고 현황</h2>
        <table>
          <thead>
            <tr>
              <th>상품출고ID</th>
              <th>상품주문ID</th>
              <th>상품ID</th>
              <th>상품이름</th>
              <th>상품사이즈카테고리ID</th>
              <th>상품사이즈카테고리이름</th>
              <th>상품사이즈카테고리이름(한글)</th>
              <th>상품출고갯수</th>
              <th>상품출고일자</th>
            </tr>
          </thead>
          <tbody>
            {
              productOutgoingStocks.map((stock) => 
                <tr key={stock.productOutgoingStockId}>
                  <td>{stock.productOutgoingStockId}</td>
                  <td>{stock.productOrderId}</td>
                  <td>{stock.productId}</td>
                  <td>{stock.productNameKor}</td>
                  <td>{stock.productSizeCategoryId}</td>
                  <td>{stock.productSizeCategoryName}</td>
                  <td>{stock.productSizeCategoryNameKor}</td>
                  <td>{stock.productOutgoingStockCount}</td>
                  <td>{stock.createDate}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProductAdminOutgoingStock;