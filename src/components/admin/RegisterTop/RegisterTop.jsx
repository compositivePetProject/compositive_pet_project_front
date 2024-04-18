/** @jsxImportSource @emotion/react */
import * as s from "./style";
import RegisterTopInput from "../TopInput/TopInput";

function RegisterTop({registerInputs, submitClick, cancelClick}) {

  return (
    <div css={s.layout}>
      {
        registerInputs.map((row, index) => {
          return <div css={s.row} key={index}>
            {row.map((input, index) => <div key={index}>{input}</div>)}
          </div>
        })
      }
      
      <div css={s.buttons}>
        <button css={s.button} onClick={submitClick}>확인</button>
        <button css={s.button} onClick={cancelClick}>취소</button>
      </div>
    </div>
  )
}

export default RegisterTop