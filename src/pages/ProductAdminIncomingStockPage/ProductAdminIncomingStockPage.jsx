/** @jsxImportSource @emotion/react */
import { useEffect, useRef } from "react";
import * as s from "./style";
import { productSizeCategoryOptions } from "../../constants/productSizeCategoryOptions";
import { useMutation } from "react-query";
import { useProductInput } from "../../hooks/useProductInput";
import ProductAdminIncomingStockInput from "../../components/ProductAdmingIncomingStockInput/ProductAdminIncomingStockInput";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { postProductIncomingStockRequest } from "../../apis/api/productAdmin";
import ProductAdminIncomingStockSearch from "../../components/ProductAdminIncomingStockSearch/ProductAdminIncomingStockSearch";
import { productAdminIncomingStockSelectedAtom } from "../../atoms/productAdminIncomingStockSelectedAtom";
import { useRecoilState } from "recoil";

function ProductAdminIncomingStockPage() {
    const navigate = useNavigate();
    const inputRefs = [
        useRef(),
        useRef(),
        useRef(),
        useRef()
    ];

    const [ lastCheckProductIncomingStockId, setLastCheckProductIncomingStockId ] = useRecoilState(productAdminIncomingStockSelectedAtom);

    useEffect(() => {
        console.log(lastCheckProductIncomingStockId)
    }, [lastCheckProductIncomingStockId])

    const registerProductIncomingStockMutation = useMutation({
        mutationKey: "registerProductIncomingStockMutation",
        mutationFn: postProductIncomingStockRequest,
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
        console.log(productId.value);
        console.log(productSizeCategoryId.value);
        console.log(productIcomingStockCount.value);
    }
    
    const productIncomingStockId = useProductInput(nextInput, inputRefs[1]);
    const productId = useProductInput(nextInput, inputRefs[2]);
    const productSizeCategoryId = useProductInput(nextInput, inputRefs[3]);
    const productIcomingStockCount = useProductInput(submit);
    

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
                    <h2>상품가입고관리</h2>
                    <button onClick={() => submit()}>등록</button>
                    <button onClick={null}>수정</button>
                    <button onClick={null}>삭제</button>
                </div>
                <div>
                    <div css={s.managementIncomingStock}>
                        <div>
                            <div css={s.managementTitle}>상품가입고ID</div>
                            <div>
                                <ProductAdminIncomingStockInput
                                    value={productIncomingStockId.value}
                                    productIncomingStockRef={inputRefs[0]}
                                    onChage={productIncomingStockId.handleOnChange}
                                    onKeyDown={productIncomingStockId.handleOnKeyDown}
                                    disabled={true}
                                />
                            </div>
                        </div>
                        <div>
                            <div css={s.managementTitle}>상품ID</div>
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
                            <div css={s.managementTitle}>상품사이즈카테고리ID</div>
                            <div>
                                <Select
                                    options={productSizeCategoryOptions}
                                    ref={inputRefs[2]}
                                    onChange={productSizeCategoryId.handleOnChange}
                                    onKeyDown={productSizeCategoryId.handleOnKeyDown}
                                />
                            </div>
                        </div>
                        <div>
                            <div css={s.managementTitle}>상품가입고갯수</div>
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
                <ProductAdminIncomingStockSearch/>
            </div>
            
        </div>
    )
}

export default ProductAdminIncomingStockPage;