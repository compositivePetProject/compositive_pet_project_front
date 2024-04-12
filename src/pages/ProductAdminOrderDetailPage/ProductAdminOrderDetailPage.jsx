/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getProductOrderDetailsADminRequest } from "../../apis/api/productAdmin";

function ProductAdminOrderDetailPage() {
  const navigate = useNavigate();
  const [ productOrderDetails, setProductOrderDetails ] = useState([]);

  const getProductOrderDetailsADminQuery = useQuery(
    ["getProductOrderDetailsADminQuery"],
    getProductOrderDetailsADminRequest, {
        retry: 0,
        onSuccess: (response) => {
            setProductOrderDetails(response.data);
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
        <div onClick={() => navigate("/product/admin/incomming/stock")}>가입고현황</div>
        <div onClick={() => navigate("/product/admin/current/stock")}>재고현황</div>
        <div onClick={() => navigate("/product/admin/order/detail")}>주문현황</div>
        <div onClick={() => navigate("/product/admin/outgoing/stock")}>출고현황</div>
      </div>
      <div css={s.right}>
        <h2>주문 현황</h2>
        <table>
          <thead>
            <tr>
              <th>상품주문상세ID</th>
              <th>상품주문ID</th>
              <th>상품ID</th>
              <th>상품이름</th>
              <th>상품사이즈카테고리ID</th>
              <th>상품사이즈카테고리이름</th>
              <th>상품사이즈카테고리이름(한글)</th>
              <th>상품주문갯수</th>
              <th>상품주문자ID</th>
              <th>상품주문자이름</th>
              <th>상품주문자주소</th>
              <th>상품주문자상세주소</th>
              <th>상품주문일자</th>
              <th>상품주문수정일자</th>
            </tr>
          </thead>
          <tbody>
            {
              productOrderDetails.map((order) => 
                <tr key={order.productOrderDetailId}>
                  <td>{order.productOrderDetailId}</td>
                  <td>{order.productOrderId}</td>
                  <td>{order.productId}</td>
                  <td>{order.productNameKor}</td>
                  <td>{order.productSizeCategoryId}</td>
                  <td>{order.productSizeCategoryName}</td>
                  <td>{order.productSizeCategoryNameKor}</td>
                  <td>{order.productOrderCount}</td>
                  <td>{order.userId}</td>
                  <td>{order.userName}</td>
                  <td>{order.productOrderAddress}</td>
                  <td>{order.productOrderDetailAddress}</td>
                  <td>{order.createDate}</td>
                  <td>{order.updateDate}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProductAdminOrderDetailPage;