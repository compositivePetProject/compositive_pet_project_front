/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';



function CommunityBoardPageCount({maxPageNumber,totalCount}) {

    const [searchParams] = useSearchParams();
    const [boardNumbers, setBoardNumbers] = useState([])
    const page = parseInt(searchParams.get("page"))
    

    useEffect(() => {
        const startBoardPageNumber = page % 5 === 0 ? page - 4 : (page - (page % 5)) + 1;
        const endBoardPageNumber = startBoardPageNumber + 4 > maxPageNumber ? maxPageNumber : startBoardPageNumber + 4;
        let pageNumbers = [];

        for(let i = startBoardPageNumber; i <= endBoardPageNumber; i++) {
            pageNumbers = [...pageNumbers, i];
        }

        setBoardNumbers(() => pageNumbers);
    }, [page, maxPageNumber, totalCount])


    return (
        <div css={s.pageButtonLayout}>
            <div css={s.pageNumbers}>
            {
                page !== 1 &&
                <Link css={s.pageButton(false)}
                    to={`/community/getboards?page=${page - 1}`}>&#60;</Link>
            }
            {
                boardNumbers.map(number =>
                    <Link
                    key={number}
                    css={s.pageButton(number === page)}
                    to={`/community/getboards?page=${number}`}
                    >{number}</Link>
                )
            }
            {
                page !== maxPageNumber &&
                <Link 
                css={s.pageButton(false)} 
                to={`/community/getboards?page=${page + 1}`}>&#62;</Link>    
            }
            </div>
            <div css={s.pageCount}>
                <div css={s.page} >현재 페이지: {page} of {maxPageNumber}</div>
                <div css={s.count}>총 게시물: {totalCount}</div>
            
            </div>
        </div>
    );
}

export default CommunityBoardPageCount;