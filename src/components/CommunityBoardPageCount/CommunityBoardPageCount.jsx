/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

function CommunityBoardPageCount({boardCount}) {
    const [ searchParams ] = useSearchParams();
    const page = parseInt(searchParams.get("page"));
    const [ numbers, setNumbers ] = useState([]);
    const maxPageNumber = boardCount?.maxPageNumber || 1;


    useEffect(() => {
        const startPageNumber = page % 5 === 0 ? page - 4 : (page - (page % 5)) + 1;
        const endPageNumber = startPageNumber + 4 > maxPageNumber ? maxPageNumber : startPageNumber + 4;
        let pageNumbers = [];

        for(let i = startPageNumber; i <= endPageNumber; i++) {
            pageNumbers = [...pageNumbers, i];
        }

        setNumbers(() => pageNumbers);
    }, [page, boardCount])

    return (
        <div css={s.layout}>
            <div css={s.pageNumbers}>
                {
                    page !== 1 &&
                    <Link 
                        css={s.pageButton(false)}
                        to={`http://localhost:3000/community/getboards?page=${page - 1}`}
                    >&#60;</Link>
                }
                {
                    numbers.map(number =>
                        <Link key={number} css={s.pageButton(number === page)} to={`http://localhost:3000/community/getboards?page=${number}`}>{number}</Link>
                    )
                }
                {
                    page !== maxPageNumber &&
                    <Link 
                        css={s.pageButton(false)}
                        to={`http://localhost:3000/community/getboards?page=${page + 1}`}
                    >&#62;</Link>
                }
            </div>
        </div>
    );
}

export default CommunityBoardPageCount;