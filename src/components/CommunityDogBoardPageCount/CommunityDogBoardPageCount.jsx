/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

function CommunityDogBoardPageCount({dogMaxPageNumber,totalCount}) {

    const [searchParams] = useSearchParams();
    const [boardNumbers, setBoardNumbers] = useState([])
    const page = parseInt(searchParams.get("page"))

    useEffect(() => {
        const startBoardPageNumber = page % 10 === 0 ? page - 9 : (page - (page % 10 )) + 1;
        const endBoardPageNumber  = startBoardPageNumber + 9 > dogMaxPageNumber ? dogMaxPageNumber : startBoardPageNumber + 9;
        let pageNumbers = [];

        for(let i = startBoardPageNumber; i <= endBoardPageNumber; i++) {
            pageNumbers = [... pageNumbers, i];
        }

        setBoardNumbers(() => pageNumbers);

    }, [page,totalCount])

    
    return (
        <div css={s.pageButtonLayout}>
            <div css={s.pageNumbers}>
                {
                    page !== 1 &&
                    <Link css={s.pageButton(false)}
                            to={`/community/dog?page=${page -1}`}>&#60;</Link>
                }
                {
                    boardNumbers.map(number =>
                        <Link
                        key={number}
                        css={s.pageButton(number === page)}
                        to={`/community/dog?page=${number}`}
                        >{number}</Link>
                    )
                }
                {
                    page !== dogMaxPageNumber &&
                    <Link css={s.pageButton(false)} to={`/community/dog?page=${page + 1}`}>&#62;</Link>
                }
                </div>
            <div css= {s.pageCount}>
                <div css={s.page} >현재 페이지: {page} of {dogMaxPageNumber}</div>
                <div css={s.count}>총 게시물: {totalCount}</div>
            </div>
            
        </div>
    );
}

export default CommunityDogBoardPageCount;