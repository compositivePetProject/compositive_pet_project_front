import { useState } from "react"

export const useProductOnKeyUpInput = (enterFn, ref) => {
    const [value, setValue] = useState("");

    const handleOnChange = (e) => {
        if (!!e.target) {
            setValue(() => e.target.value);
        } else {
            setValue(() => e);
        }
    }

    const handleOnKeyUp = (e) => {
        if (e.keyCode === 13) {
            enterFn(ref);
        }
    }
    return { value, handleOnChange, handleOnKeyUp, setValue };
}