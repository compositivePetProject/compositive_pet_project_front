/** @jsxImportSource @emotion/react */
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import * as s from "./style";
import { useEffect, useState } from "react";

function AdoptationPageNumbersUser({ maxPageNumber, totalCount }) {
    const [ searchParams ] = useSearchParams();
    const navigate = useNavigate();
    const page = parseInt(searchParams.get("page"));
    const [ numbers , setNumbers ] = useState([]);
    

  useEffect(() => {
    const startPageNumber = page % 10 === 0 ? page - 9 : page - (page % 10) + 1;
    const endPageNumber = startPageNumber + 9 > maxPageNumber ? maxPageNumber : startPageNumber + 9;
    let pageNumbers = [];
    for(let i = startPageNumber; i <= endPageNumber; i++) {
      pageNumbers = [...pageNumbers, i];
    }
    setNumbers(() => pageNumbers);
  }, [page, maxPageNumber, totalCount])

 

  return (
    <div css={s.layout}>
      <div css={s.pageNumbers}>
        {
          page !== 1 &&
          <Link css={s.pageButton(false)} to={`/account/mypage/Adopt?page=${page - 1}`}>&#60;</Link>
        }
        {
          numbers.map(number => 
            <Link 
            key={number} 
            css={s.pageButton(number === page)} 
            to={`/account/mypage/Adopt?page=${number}`}
            >{number}</Link>
          )
        }
        {
          page !== maxPageNumber &&
          <Link css={s.pageButton(false)} to={`/account/mypage/Adopt?page=${page + 1}`}>&#62;</Link>
        }
      </div>
      <div css={s.pageCount}>
        <div css={s.page}>Page {page} of {maxPageNumber}</div>
        <div css={s.count}>Count: {totalCount}</div>
      </div>
    </div>
  )
}


export default AdoptationPageNumbersUser;