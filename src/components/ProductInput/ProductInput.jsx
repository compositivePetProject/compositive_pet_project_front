/** @jsxImportSource @emotion/react */
import * as s from "./style";

function ProductInput({ value, onChange, onKeyDown, productRef, isDisabled, placeholder }) {
  return (
    <input
        css={s.inputBox}
        type='text'
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        ref={productRef}
        disabled={isDisabled}
        placeholder={placeholder}
    />
  )
}

export default ProductInput;