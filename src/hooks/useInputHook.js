import { useState } from "react"

export const useInputHook = () => {
    const [value, setValue] = useState("");

    const handleOnChange = (e) => {
        setValue(() => e.target.value);
    }

    return [value, setValue, handleOnChange];
}