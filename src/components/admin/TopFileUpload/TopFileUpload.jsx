/** @jsxImportSource @emotion/react */
import { useRef } from "react";
import * as s from "./style";
import { IoCloudUploadOutline } from "react-icons/io5";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../apis/firebase/firebaseConfig";
import { v4 as uuid } from "uuid";

function TopFileUpload({label, disabled, inputSize, fileUploadPath, name, stateValue, setState, buttonState, value}) {
    const fileRef = useRef();

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setState(stateValue => {
            return {
                ...stateValue,
                [name]: value
            }
        })
    }

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        if(files.length === 0) {
            e.target.value = "";
            return;
        }
        if(!window.confirm("상품 대표 이미지 파일을 업로드 하시겠습니까?")) {
            e.target.value = "";
            return;
        }
        const storageRef = ref(storage, `${fileUploadPath}/${uuid()}_${files[0].name}`);
        const uploadTask = uploadBytesResumable(storageRef, files[0]);

        uploadTask.on(
            "state_changed",
            snapshot => {},
            error => {},
            () => {
                alert("업로드를 완료하셨습니다.");
                getDownloadURL(storageRef)
                .then(url => {
                    setState(stateValue => {
                        return {
                            ...stateValue,
                            [name]: url
                        }
                    })
                });
            }
        );
    }

    return (
        <div css={s.item}>
            <div css={s.label}>
                {label}
            </div>
            <div css={s.inputBox}>
                <input css={s.input(inputSize)} type="text" name={name} value={buttonState === 1 ? stateValue : value} onChange={handleOnChange} disabled={disabled}/>
                <input css={s.file} type="file" ref={fileRef} onChange={handleFileChange}/>
                <button css={s.button} disabled={buttonState === 0 ? true : false} onClick={() => {
                    fileRef.current.click();
                }}>
                    <IoCloudUploadOutline />
                </button>
            </div>
        </div>
      )
}

export default TopFileUpload;