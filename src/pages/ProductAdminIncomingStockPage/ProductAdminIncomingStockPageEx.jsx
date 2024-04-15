/** @jsxImportSource @emotion/react */
import * as s from "./styleEx";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { getProductIncomingStocksAdminRequest } from "../../apis/api/productAdmin";
import { useState } from "react";

function ProductAdminIncomingStockPageEx() {
  const navigate = useNavigate();
  const [ productIncomingStocks, setProductIncomingStocks ] = useState([]);

  const getProductIncomingStocksAdminRequestQuery = useQuery(
    ["getProductIncomingStocksAdminRequestQuery"],
    getProductIncomingStocksAdminRequest, {
        retry: 0,
        onSuccess: (response) => {
            setProductIncomingStocks(response.data);
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
        <div onClick={() => navigate("/product/admin/incomming/stock")}>가입고현황</div>
        <div onClick={() => navigate("/product/admin/current/stock")}>재고현황</div>
        <div onClick={() => navigate("/product/admin/order/detail")}>주문현황</div>
        <div onClick={() => navigate("/product/admin/outgoing/stock")}>출고현황</div>
      </div>
      <div css={s.right}>
        <div>
          <h2>상품 가입고 등록</h2>
        </div>
        <div>
          <h2>상품 가입고 현황</h2>
          <table>
            <thead>
              <tr>
                <th><input type="checkbox" /></th>
                <th>상품가입고ID</th>
                <th>상품ID</th>
                <th>상품이름</th>
                <th>상품사이즈카테고리ID</th>
                <th>상품사이즈이름</th>
                <th>상품사이즈이름(한글)</th>
                <th>상품가입고갯수</th>
                <th>가입고작성일자</th>
              </tr>
            </thead>
            <tbody>
              {
                productIncomingStocks.map((stock) =>
                  <tr key={stock.productIncomingStockId}>
                    <td><input type="checkbox" value={stock.productIncomingStockId} /></td>
                    <td>{stock.productIncomingStockId}</td>
                    <td>{stock.productId}</td>
                    <td>{stock.productNameKor}</td>
                    <td>{stock.productSizeCategoryId}</td>
                    <td>{stock.productSizeCategoryName}</td>
                    <td>{stock.productSizeCategoryNameKor}</td>
                    <td>{stock.productIncomingStockCount}</td>
                    <td>{stock.createDate}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ProductAdminIncomingStockPageEx;