import { useState } from "react"

export const useSelect = () => {
    const [option, setOption] = useState();

    const handleOnChange = (option) => {
        setOption(() => option);
    }

    return { option, setOption, handleOnChange };
}   