/** @jsxImportSource @emotion/react */
import { Link, useSearchParams } from "react-router-dom";
import * as s from "./style";
import React, { useEffect, useState } from 'react';

function ProductPetPageDetailPageNumbers({reviewsCount, productId}) {
    const [ searchParams ] = useSearchParams();
    const page = parseInt(searchParams.get("page"));
    const [ numbers, setNumbers ] = useState([]);
    const maxPageNumber = reviewsCount.maxPageNumber;


    useEffect(() => {
        const startPageNumber = page % 5 === 0 ? page - 4 : (page - (page % 5)) + 1;
        const endPageNumber = startPageNumber + 4 > maxPageNumber ? maxPageNumber : startPageNumber + 4;
        let pageNumbers = [];

        for(let i = startPageNumber; i <= endPageNumber; i++) {
            pageNumbers = [...pageNumbers, i];
        }

        setNumbers(() => pageNumbers);
    }, [page, reviewsCount])

    return (
        <div css={s.layout}>
            <div css={s.pageNumbers}>
                {
                    page !== 1 &&
                    <Link 
                        css={s.pageButton(false)}
                        to={`/product/pet/detail/1/?productId=${productId}&page=${page - 1}`}
                    >&#60;</Link>
                }
                {
                    numbers.map(number =>
                        <Link key={number} css={s.pageButton(number === page)} to={`/product/pet/detail/1/?productId=${productId}&page=${number}`}>{number}</Link>
                    )
                }
                {
                    page !== maxPageNumber &&
                    <Link 
                        css={s.pageButton(false)}
                        to={`/product/pet/detail/1/?productId=${productId}&page=${page + 1}`}
                    >&#62;</Link>
                }
            </div>
        </div>
    );
}

export default ProductPetPageDetailPageNumbers;