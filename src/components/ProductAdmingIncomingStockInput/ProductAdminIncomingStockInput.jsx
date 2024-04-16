/** @jsxImportSource @emotion/react */
import * as s from "./style";

function ProductAdminIncomingStockInput({ value, onChage, onKeyDown, productIncomingStockRef, disabled }) {
  return (
    <input
      css={s.inputBox}
      type="text"
      value={value}
      onChange={onChage}
      onKeyDown={onKeyDown}
      ref={productIncomingStockRef}
      disabled={disabled}
    />
  )
}

export default ProductAdminIncomingStockInput;