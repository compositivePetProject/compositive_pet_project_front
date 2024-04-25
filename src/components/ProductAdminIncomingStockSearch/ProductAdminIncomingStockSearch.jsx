/** @jsxImportSource @emotion/react */
import { useSearchParams } from "react-router-dom";
import * as s from "./style";
import { useQuery } from "react-query";
import { useProductInput } from "../../hooks/useProductInput";
import Select from "react-select";
import { getProductIncomingStocksAdminRequest, getProductInocmingStocksRequest } from "../../apis/api/productAdmin";
import { useEffect, useState } from "react";
import { useReactSelect } from "../../hooks/useReactSelect";
import { useRecoilState } from "recoil";
import ProductAdminIncomingStockPageNumber from "../ProductAdminIncomingStockPageNumber/ProductAdminIncomingStockPageNumber";
import { productAdminIncomingStockSelectedAtom } from "../../atoms/productAdminIncomingStockSelectedAtom";

function ProductAdminIncomingStockSearch() {
    const [ searchParams, setSearchParams ] = useSearchParams();
    const searchCount = 10;
    const [ productIncomingStocks, setProductIncomingStocks ] = useState([]);
    const [ productIncomingStockList, setProductIncomingStockList ] = useState([]);
    const [ checkAll, setCheckAll ] = useState({
        checked : false,
        target: 1  // 1 => 전체 선택, 2 => 부분 선택
    });
    const [ lastCheckProductIncomingStockId, setLastCheckProductIncomingStockId ] = useRecoilState(productAdminIncomingStockSelectedAtom);
    const [ selectedProductIncomingStocks, setSelectedProductIncomingStocks ] = useState([]);

    useEffect(() => {
        
        console.log(selectedProductIncomingStocks);
    }, [lastCheckProductIncomingStockId, selectedProductIncomingStocks])

    const searchProductAdminIncomingStocksQuery = useQuery(
        ["searchProductAdminIncomingStocksQuery", searchParams.get("page")],
        async () => await getProductInocmingStocksRequest({
            page: searchParams.get("page"),
            count: searchCount,
            selectedValue : selectedValue.option.value,
            searchText : searchText.value
        }),
        {
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                console.log(response);
                setProductIncomingStocks(() => response.data.map((stock) => {
                    return {
                        ...stock,
                        checked: false
                    }
                }));
            },
            onError: (error) => {
                console.log(error);
            }
        }
    )

    const selectStyle = {
        control: (baseStyles) => ({
            ...baseStyles,
            borderRadius: "0px",
            boxShadow: "none"
        })
    }

    const searchSubmit = () => {
        console.log(selectedValue.option)
        console.log(searchText.value)
        setSearchParams({
            page: 1
        });
        searchProductAdminIncomingStocksQuery.refetch();
    }


    const searchText = useProductInput(searchSubmit);
    const selectedValue = useReactSelect({value: 0, label: "전체"});

    const searchTypeOptions = [
        {value: 0, label: "전체"},
        {value: 1, label: "상품가입고ID"},
        {value: 2, label: "상품ID"},
        {value: 3, label: "상품이름"},
        {value: 4, label: "상품사이즈카테고리ID"},
        {value: 5, label: "상품사이즈카테고리이름"},
        {value: 6, label: "상품사이즈카테고리이름(한글)"}
    ];

    const handleCheckAllChange = (e) => {
        const isChecked = e.target.checked;
        const updatedStocks = productIncomingStocks.map(stock => ({
        ...stock,
        checked: isChecked
        }));

        setProductIncomingStocks(updatedStocks);

        setCheckAll(() => {
            return {
                checked: e.target.checked,
                target: 1
            }
        });
    }

    const handleCheckboxChange = (productId) => {
        const updatedStocks = productIncomingStocks.map(stock => {
            if (stock.productIncomingStockId === productId) {
                // 선택된 요소의 정보를 selectedProductIncomingStocks에 추가 또는 제거
                const index = selectedProductIncomingStocks.findIndex(stock => stock.productIncomingStockId === productId);
                if (index === -1) {
                    // 이미 배열에 포함되어 있지 않으면 항목을 추가
                    setSelectedProductIncomingStocks(prevState => [...prevState, {
                        productIncomingStockId: stock.productIncomingStockId,
                        productId: stock.productId,
                        productNameKor: stock.productNameKor,
                        productSizeCategoryId: stock.productSizeCategoryId,
                        productSizeCategoryName: stock.productSizeCategoryName,
                        productSizeCategoryNameKor: stock.productSizeCategoryNameKor,
                        productIncomingStockCount: stock.productIncomingStockCount
                    }]);
                } else {
                    // 이미 배열에 포함되어 있으면 항목을 제거
                    setSelectedProductIncomingStocks(prevState => prevState.filter(item => item.productIncomingStockId !== productId));
                }
                setLastCheckProductIncomingStockId({
                    productIncomingStockId: stock.productIncomingStockId,
                    productId: stock.productId,
                    productNameKor: stock.productNameKor,
                    productSizeCategoryId: stock.productSizeCategoryId,
                    productSizeCategoryName: stock.productSizeCategoryName,
                    productSizeCategoryNameKor: stock.productSizeCategoryNameKor,
                    productIncomingStockCount: stock.productIncomingStockCount
                }); // 마지막으로 선택된 요소를 저장
                return {
                    ...stock,
                    checked: !stock.checked // 현재 상태의 반대로 변경
                };
            }
            return stock;
        });
        setProductIncomingStocks(updatedStocks);
        
        // 모든 개별 체크박스가 선택되었는지 확인
        const allChecked = updatedStocks.every(stock => stock.checked);
        setCheckAll({
            checked: allChecked,
            target: allChecked ? 1 : 2 // 1: 전체 선택, 2: 부분 선택
        });
    };
    
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

    useEffect(() => {
        const page = parseInt(searchParams.get("page"));
        if (isNaN(page) || page <= 0) {
            setSearchParams("page", "1");
        }
    }, [searchParams, setSearchParams]);

    return (
        <div>
            <div css={s.search}>
                <div css={s.optionsBox}>
                    <Select
                        options={searchTypeOptions}
                        styles={selectStyle}
                        defaultValue={selectedValue.defaultValue}
                        value={selectedValue.option}
                        onChange={selectedValue.handleOnChange}
                    />
                </div>
                <input type="text" value={searchText.value} onChange={searchText.handleOnChange} onKeyDown={searchText.handleOnKeyDown} placeholder="검색어를 입력해주세요." css={s.searchInputBox}/>
                <button css={s.searchButton} onClick={() => searchSubmit()}>검색</button>
            </div>
            <div>
                <div css={s.tableHeader}>
                    <div><input type="checkbox" checked={checkAll.checked} onChange={handleCheckAllChange} /></div>
                    <div>상품가입고ID</div>
                    <div>상품ID</div>
                    <div>상품이름</div>
                    <div>상품사이즈카테고리ID</div>
                    <div>상품사이즈카테고리이름</div>
                    <div>상품사이즈카테고리이름(한글)</div>
                    <div>상품가입고재고갯수</div>
                </div>
                {
                    productIncomingStocks.map((stock) => 
                        <div css={s.tableBody} key={stock.productIncomingStockId}>
                            <div><input type="checkbox" checked={stock.checked} value={stock.productIncomingStockId} onChange={() => handleCheckboxChange(stock.productIncomingStockId)} /></div>
                            <div>{stock.productIncomingStockId}</div>
                            <div>{stock.productId}</div>
                            <div>{stock.productNameKor}</div>
                            <div>{stock.productSizeCategoryId}</div>
                            <div>{stock.productSizeCategoryName}</div>
                            <div>{stock.productSizeCategoryNameKor}</div>
                            <div>{stock.productIncomingStockCount}</div>
                        </div>
                    )
                }
            </div>
            <div css={s.pagination}>
                <ProductAdminIncomingStockPageNumber searchCount={searchCount} />
            </div>
        </div>
    )
}

export default ProductAdminIncomingStockSearch;