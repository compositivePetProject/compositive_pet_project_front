/** @jsxImportSource @emotion/react */
import { useRef } from "react";
import * as s from "./style";
import { productSizeCategoryOptions } from "../../constants/productSizeCategoryOptions";
import { useMutation } from "react-query";
import { useProductInput } from "../../hooks/useProductInput";
import ProductAdminIncomingStockInput from "../../components/ProductAdmingIncomingStockInput/ProductAdminIncomingStockInput";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

function ProductAdminIncomingStockPage() {
    const navigate = useNavigate();
    const inputRefs = [
        useRef(),
        useRef(),
        useRef(),
        useRef()
    ];

    const registerProductIncomingStockMutation = useMutation({
        mutationKey: "registerProductIncomingStockMutation",
        onSuccess: (response) => {

        },
        onError: (error) => {
            console.log(error)
        }
    });

    const nextInput = (ref) => {
        ref.current.focus();
    }

    const submit = () => {

    }
    
    const productIncomingStockId = useProductInput(nextInput, inputRefs[1]);
    const productId = useProductInput(nextInput, inputRefs[2]);
    const productSizeCategoryId = useProductInput(nextInput, inputRefs[3]);
    const productIcomingStockCount = useProductInput(submit);
    

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
                    <h2>상품가입고관리</h2>
                    <button>확인</button>
                </div>
                <div>
                    <div css={s.managementIncomingStock}>
                        <div>
                            <div>상품가입고ID</div>
                            <div>
                                <ProductAdminIncomingStockInput
                                    value={productIncomingStockId.value}
                                    productIncomingStockRef={inputRefs[0]}
                                    onChage={productIncomingStockId.handleOnChange}
                                    onKeyDown={productIncomingStockId.handleOnKeyDown}
                                />
                            </div>
                        </div>
                        <div>
                            <div>상품ID</div>
                            <div>
                                <ProductAdminIncomingStockInput
                                    value={productId.value}
                                    productIncomingStockRef={inputRefs[1]}
                                    onChage={productId.handleOnChange}
                                    onKeyDown={productId.handleOnKeyDown}
                                />
                            </div>
                        </div>
                        <div>
                            <div>상품사이즈카테고리ID</div>
                            <div>
                                <Select
                                    options={productSizeCategoryOptions}
                                    value={productSizeCategoryId.value}
                                    ref={inputRefs[2]}
                                    onChage={productSizeCategoryId.handleOnChange}
                                    onKeyDown={productSizeCategoryId.handleOnKeyDown}
                                />
                            </div>
                        </div>
                        <div>
                            <div>상품가입고갯수</div>
                            <div>
                                <ProductAdminIncomingStockInput
                                    value={productIcomingStockCount.value}
                                    productIncomingStockRef={inputRefs[3]}
                                    onChage={productIcomingStockCount.handleOnChange}
                                    onKeyDown={productIcomingStockCount.handleOnKeyDown}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductAdminIncomingStockPage;