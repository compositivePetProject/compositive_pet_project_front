/** @jsxImportSource @emotion/react */
import * as s from "./style";

function TopSelect({label, disabled, options, name, setState}) {
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setState(stateValue => {
            return {
                ...stateValue,
                [name]: value
            }
        })
    }

    return (
        <div css={s.item}>
            <div css={s.label}>
                {label}
            </div>
            <div css={s.inputBox}>
                <select css={s.select} name={name} onChange={handleOnChange}>
                    <option value={0}>{"전체"}</option>
                    {options.map(option => {
                        return <option key={option.value} value={option.value}>{option.label}</option>
                    })}
                </select>
            </div>
        </div>
    );
}

export default TopSelect;