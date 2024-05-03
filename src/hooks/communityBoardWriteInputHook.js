
export function useInput() {
    const [ communityInputValue, setCommunityInputValue ] = useState("");

    const onChange = (e) => {
        const {value} = e.target;
        setInputValue(() => value);
    }

    return [inputValue, onChange];
}
/**
 * 
 * @param {*} maxSize
 * @returns
 * 
 */

export function useMaxSizeTitleValidateInput(maxSize) {
    const [inputValue, setInputValue] = useState("");

    const onChange = (e) => {
        const {value} = e.target;
        if(value.length <= maxSize) {
            setInputValue(() => value);
        }
    }

    return [ inputValue, onChange]
}
