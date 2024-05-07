/** @jsxImportSource @emotion/react */
import * as s from "./style";

function ProductSelect({disabled, options, name, onChange, setState, buttonState, value}) {
    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        onChange(selectedValue); 
    };

    return (
        <div css={s.item}>
            <div css={s.inputBox}>
                <select disabled={disabled} css={s.select} name={name} onChange={handleSelectChange} value={value}>
                    {!value && <option value=""> 옵션</option>}
                    {options.map(option => {
                        return <option key={option.value} value={option.value}>{option.label}</option>
                    })}
                </select>
            </div>
        </div>
    );
}

export default ProductSelect;