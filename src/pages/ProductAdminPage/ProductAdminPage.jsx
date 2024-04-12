/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { getProductIncomingStocksAdminRequest, getProductOrderDetailsADminRequest, getProductOutgoingStocksAdminRequest, getProductStocksAdminRequest, getProductsAdminRequest } from "../../apis/api/productAdmin";
import * as s from "./style";
import { useQuery } from "react-query";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ProductAdminPage(props) {
    const navigate = useNavigate();
    const [ productsAdmin, setProductsAdmin ] = useState([]);
    const [ productIncomingStocks, setProductIncomingStocks ] = useState([]);
    const [ productCurrentStocks, setProductCurrentsStocks ] = useState([]);
    const [ productOrderDetails, setProductOrderDetails ] = useState([]);
    const [ productOutgoingStocks, setProductOutgoingStocks ] = useState([]);
    
    const getProductsAdminRequestQuery = useQuery(
        ["getProductsAdminRequestQuery"],
        getProductsAdminRequest, {
            retry: 0,
            onSuccess: (response) => {
                setProductsAdmin(response.data);
            },
            onError: (error) => {
                console.log(error);
            }
        }
    );

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
                <div onClick={() => navigate("/product/admin/incomming/stock")}>가입고현황</div>
                <div onClick={() => navigate("/product/admin/current/stock")}>재고현황</div>
                <div onClick={() => navigate("/product/admin/order/detail")}>주문현황</div>
                <div onClick={() => navigate("/product/admin/outgoing/stock")}>출고현황</div>
            </div>
            <div css={s.right}>
                <div css={s.productRegister}>
                    <div>
                        <h2>상품등록 현황</h2>
                        <FaPlus/>
                    </div>
                    <table css={s.productRegisterTable}>
                        <thead>
                            <tr>
                                <th>상품ID</th>
                                <th>상품이름</th>
                                <th>상품가격</th>
                                <th>상품카테고리ID</th>
                                <th>상품카테고리이름</th>
                                <th>상품동물카테고리ID</th>
                                <th>상품동물카테고리이름</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                productsAdmin.map((product) =>
                                    <tr key={product.productId}>
                                        <td>{product.productId}</td>
                                        <td>{product.productNameKor}</td>
                                        <td>{product.productPrice}</td>
                                        <td>{product.productCategoryId}</td>
                                        <td>{product.productCategoryNameKor}</td>
                                        <td>{product.productAnimalCategoryId}</td>
                                        <td>{product.productAnimalCategoryNameKor}</td>
                                    </tr>         
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div>
                    <div css={s.stock}>
                        <div css={s.incomingStock}>
                            <div>
                                <h2>가입고 재고 현황</h2>
                                <FaPlus/>
                            </div>

                            <table>
                                <thead>
                                    <tr>
                                        <th>상품가입고ID</th>
                                        <th>상품ID</th>
                                        <th>상품이름</th>
                                        <th>상품사이즈카테고리ID</th>
                                        <th>상품사이즈카테고리이름</th>
                                        <th>상품사이즈카테고리이름(한글)</th>
                                        <th>상품가입고재고갯수</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        productIncomingStocks.map((stock) => 
                                            <tr key={stock.productIncomingStockId}>
                                                <td>{stock.productIncomingStockId}</td>
                                                <td>{stock.productId}</td>
                                                <td>{stock.productNameKor}</td>
                                                <td>{stock.productSizeCategoryId}</td>
                                                <td>{stock.productSizeCategoryName}</td>
                                                <td>{stock.productSizeCategoryNameKor}</td>
                                                <td>{stock.productIncomingStockCount}</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div css={s.currentStock}>
                            <div>
                                <h2>재고 현황</h2>
                                <FaPlus/>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>상품재고ID</th>
                                        <th>상품ID</th>
                                        <th>상품이름</th>
                                        <th>상품사이즈카테고리ID</th>
                                        <th>상품사이즈카테고리이름</th>
                                        <th>상품사이즈카테고리이름(한글)</th>
                                        <th>상품재고갯수</th>
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
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div css={s.order}>
                        <div css={s.orderStock}>
                            <div>
                                <h2>주문 현황</h2>
                                <FaPlus/>
                            </div>
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
                                        <th>상품재고갯수</th>
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
                                                <td>{order.productSizeCategoryNameKor}</td>
                                                <td>{order.productOrderCount}</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div css={s.outgoingStock}>
                            <div>
                                <h2>출고 현황</h2>
                                <FaPlus/>
                            </div>
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
                                        <th>상품재고갯수</th>
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
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ProductAdminPage;