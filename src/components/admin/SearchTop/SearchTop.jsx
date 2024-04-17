/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { FaSearch } from "react-icons/fa";

function SearchTop({searchInputs}) {
    return (
        <div css={s.layout}>
            <div css={s.row}>
                {
                    searchInputs.map((input, index) => <div key={index}>{input}</div>)
                }
                <button css={s.searchButton}><FaSearch /></button>
            </div>
        </div>
    );
}

export default SearchTop;