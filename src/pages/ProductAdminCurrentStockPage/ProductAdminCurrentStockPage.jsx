/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import * as s from "./style";
import { getProductStocksAdminRequest } from "../../apis/api/productAdmin";
import { useState } from "react";
import { useQuery } from "react-query";

function ProductAdminCurrentStockPage() {
  const navigate = useNavigate();
  const [ productCurrentStocks, setProductCurrentsStocks ] = useState([]);

  const getProductStocksAdminRequestQuery = useQuery(
    ["getProductStocksAdminRequestQuery"],
    getProductStocksAdminRequest, {
        retry: 0,
        onSuccess: (response) => {
            setProductCurrentsStocks(response.data);
        },
        onError: (error) => {
            console.log(error);
        }
    }
  );

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
        <div>
          <h2>재고 등록</h2>
        </div>
        <div>
          <h2>재고 현황</h2>
          <table>
            <thead>
              <tr>
                <th>상품재고ID</th>
                <th>상품ID</th>
                <th>상품이름</th>
                <th>상품사이즈카테고리ID</th>
                <th>상품사이즈카테고리이름</th>
                <th>상품카사이즈테고리이름(한글)</th>
                <th>상품재고갯수</th>
                <th>작성일자</th>
                <th>수정일자</th>
              </tr>
            </thead>
            <tbody>
              {
                productCurrentStocks.map((stock) => 
                  <tr key={stock.productStockId}>
                    <td>{stock.productStockId}</td>
                    <td>{stock.productId}</td>
                    <td>{stock.productNameKor}</td>
                    <td>{stock.productSizeCategoryId}</td>
                    <td>{stock.productSizeCategoryName}</td>
                    <td>{stock.productSizeCategoryNameKor}</td>
                    <td>{stock.productStockCount}</td>
                    <td>{stock.createDate}</td>
                    <td>{stock.updateDate}</td>
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

export default ProductAdminCurrentStockPage;