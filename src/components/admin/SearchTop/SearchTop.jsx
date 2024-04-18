/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { FaSearch } from "react-icons/fa";

function SearchTop({searchInputs}) {
    return (
        <div css={s.layout}>
                { searchInputs.map((row, index) => {
                    return <div css={s.row} key={index}>
                        {row.map((input, index) => <div key={index}>{input}</div>)}
                    </div>
                    })
                }
        <button css={s.searchButton}><FaSearch /></button>

        </div>
    );
}

export default SearchTop;