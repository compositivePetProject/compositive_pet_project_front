/** @jsxImportSource @emotion/react */
import { useRecoilState } from "recoil";
import { incomingProductDataState } from "../../../atoms/admin/incomingProductDataAtom";
import * as s from "./style";
import { FaSearch } from "react-icons/fa";

function TopInput({label, disabled, inputSize, name, setState, buttonState, value}) {

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
            <input css={s.input(inputSize)} type="text" name={name} onChange={handleOnChange} disabled={disabled} value={value}/>
        </div>
    </div>
  )
}

TopInput.defaultProps = {
  label: "",
  disabled: false,
  inputSize: 20
}

export default TopInput;