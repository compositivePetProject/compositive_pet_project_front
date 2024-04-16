/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

function ProductAdminIncomingStockPageNumber({ searchCount }) {
const [ searchParams ] = useSearchParams();
    const page = parseInt(searchParams.get("page"));
    const [ numbers , setNumbers ] = useState([]);
    const maxPageNumber = searchCount.maxPageNumber;

    useEffect(() => {
        const startPageNumber = page % 10 === 0 ? page - 9 : page - (page % 10) + 1;
        const endPageNumber = startPageNumber + 9 > maxPageNumber ? maxPageNumber : startPageNumber + 9;
        let pageNumbers = [];
        for(let i = startPageNumber; i <= endPageNumber; i++) {
          pageNumbers = [...pageNumbers, i];
        }
        setNumbers(() => pageNumbers);
    }, [page, searchCount])
    
    return (
        <div css={s.layout}>
      <div css={s.pageNumbers}>
        {
          page !== 1 &&
          <Link css={s.pageButton(false)} to={`/product/admin/incoming/stock?page=${page - 1}`}>&#60;</Link>
        }
        {
          numbers.map(number => 
            <Link key={number} css={s.pageButton(number === page)} to={`/product/admin/incoming/stock?page=${number}`}>{number}</Link>
          )
        }
        {
          page !== maxPageNumber &&
          <Link css={s.pageButton(false)} to={`/product/admin/incoming/stock?page=${page + 1}`}>&#62;</Link>
        }
      </div>
    </div>
    )
}

export default ProductAdminIncomingStockPageNumber;