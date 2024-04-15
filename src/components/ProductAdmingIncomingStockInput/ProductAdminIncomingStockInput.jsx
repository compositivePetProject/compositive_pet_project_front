/** @jsxImportSource @emotion/react */
import * as s from "./style";

function ProductAdminIncomingStockInput({ value, onChage, onKeyDown, productIncomingStockRef }) {
  return (
    <input
      css={s.inputBox}
      type="text"
      value={value}
      onChange={onChage}
      onKeyDown={onKeyDown}
      ref={productIncomingStockRef}
    />
  )
}

export default ProductAdminIncomingStockInput;