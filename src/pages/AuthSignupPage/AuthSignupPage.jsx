/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useRef, useState } from "react";
import AuthPageInput from "../../components/AuthPageInput/AuthPageInput";
import { useInput } from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { v4 as uuid } from "uuid";
import { CiSquarePlus } from "react-icons/ci";
import { storage } from "../../apis/firebase/firebaseConfig";
import { useMutation } from "react-query";
import { authSignupRequest, usernameCheckRequest } from "../../apis/api/authSignup";

function AuthSignupPage() {
    const fileRef = useRef();
    const navigate = useNavigate();

    const [ username, userNameChange, usernameMessage, setUsernameValue , setUsernameMessage ] = useInput("username");
    const [ password, passwordChange, passwordMessage ] = useInput("password");
    const [ checkPassword, checkPasswordChange ] = useInput("checkPassword");
    const [ name, nameChange, nameMessage ] = useInput("name");
    const [ address, addressChange, addressMessage ] = useInput("address");
    const [ telNumber, telNumberChange, telNumberMessage ] = useInput("telNumber");
    const [ nickname, nicknameChange, nicknameMessage, setNicknameValue, setNicknameMessage ] = useInput("nickname");
    const [ email, emailChange, emailMessage ] = useInput("email");
    const [ profileImageUrl, profileImageUrlChange, profileImageUrlMessage, setProfileImageUrl ] = useInput("profileImageUrl");
    const [ checkPasswordMessage, setCheckPasswordMessage ] = useState(null);
   
    const authSignupMutation = useMutation({
        mutationKey: "authSignupMutation",
        mutationFn: authSignupRequest,
        onSuccess: response => {
            alert("가입이 완료되었습니다.")
            navigate("/auth/sign-in");
        },
        onError: error => {
            if(error.response.status === 400) {
                const errorMap = error.response.data;
                const errorEntries = Object.entries(errorMap);
                for(let [ k, v ] of errorEntries) {
                    if(k === "username") {
                        setUsernameMessage(() => {
                            return {
                                type: "error",
                                text: v
                            }
                        })
                    }
                    if(k === "nickname") {
                        setNicknameMessage(() => {
                            return {
                                type: "error",
                                text: v
                            }
                        })
                    }
                }
            } else {
                alert("회원가입 오류");
            }
        }});

    const usernameCheck = useMutation({
        mutationKey: "usernameCheck",
        mutationFn: usernameCheckRequest,
        onSuccess: success => {
            const successMap = success.data;
            const successEntries = Object.entries(successMap);
            for(let [ k, v ] of successEntries) {
                if(k === "username") {
                    setUsernameMessage(() => {
                        return {
                            type: k,
                            text: v
                        }
                    })
                }
            }
        },
        onError: error => {
            if(error.response.status === 400) {
                const errorMap = error.response.data;
                const errorEntries = Object.entries(errorMap);
                for(let [ k, v ] of errorEntries) {
                    if(k === "username") {
                        setUsernameMessage(() => {
                            return {
                                type: "error",
                                text: v
                            }
                        })
                    }
                }
            } 
        }
    })

    const handleUsernameCheck = () => {
        usernameCheck.mutate({
            username
        })
    }
    
    useEffect(() => {
        if(!checkPassword || !password) {
            setCheckPasswordMessage(() => null);
            return;
        }

        if(checkPassword === password) {
            setCheckPasswordMessage(() => {
                return {
                    type: "success",
                    text: ""
                }
            })
        } else {
            setCheckPasswordMessage(() => {
                return {
                    type: "error",
                    text: "비밀번호가 일치하지 않습니다."
                }
            })
        }
    }, [checkPassword, password]);

    const handleSignupSubmit = () => {
        const checkFlags = [
            usernameMessage?.type,
            passwordMessage?.type,
            checkPasswordMessage?.type,
            nameMessage?.type,
            addressMessage?.type,
            telNumberMessage?.type,
            nicknameMessage?.type,
            emailMessage?.type
        ];

        if(checkFlags.includes("error") || checkFlags.includes(undefined) || checkFlags.includes(null)) {
            alert("가입 정보를 다시 확인하세요.");
            return;
        }
        authSignupMutation.mutate({
            username,
            password,
            name,
            address,
            telNumber,
            nickname,
            email,
            profileImageUrl
        })
    }
    

    const handleFileChange = (e) => {
        
        const files = Array.from(e.target.files);
        
        if(files.length === 0) {
            e.target.value = "";
            return;
        }
        
        if(!window.confirm("파일을 업로드 하시겠습니까?")) {
            e.target.value = "";
            return;
        }

        const storageRef = ref(storage, `pet/profileImageUrl/${uuid()}_${files[0].name}`);
        const uploadTask = uploadBytesResumable(storageRef, files[0]);

        uploadTask.on(
            "state_changed",
            snapshot => {},
            error => {},
            () => {
                alert("업로드를 완료하셨습니다.");
                getDownloadURL(storageRef)
                .then(url => {
                    setProfileImageUrl(() => url);
                });
            }
        )

    }
    // css 수정 예정
    return (
        <div>
            <div css={s.layout}>
                <div css={s.container}>
                    <div css={s.memberContainer}>
                        <div css={s.titleHeader}>
                            <div>회원 가입</div>
                        </div>
                        <div css={s.header}>
                            <AuthPageInput type={"text"} name={"username"} placeholder={"사용자이름"} value={username} onChange={userNameChange} message={usernameMessage} />
                            <button css={s.idCheckvbutton} onClick={handleUsernameCheck}>아이디 중복체크</button>
                            <AuthPageInput type={"password"} name={"password"} placeholder={"비밀번호"} value={password} onChange={passwordChange} message={passwordMessage} />
                            <AuthPageInput type={"password"} name={"checkPassword"} placeholder={"비밀번호 확인"} value={checkPassword} onChange={checkPasswordChange} message={checkPasswordMessage} />
                            <AuthPageInput type={"text"} name={"name"} placeholder={"성명"} value={name} onChange={nameChange} message={nameMessage} />
                            <AuthPageInput type={"text"} name={"address"} placeholder={"주소"} value={address} onChange={addressChange} message={addressMessage} />
                            <AuthPageInput type={"text"} name={"telNumber"} placeholder={"전화번호"} value={telNumber} onChange={telNumberChange} message={telNumberMessage} />
                            <AuthPageInput type={"text"} name={"nickname"} placeholder={"닉네임"} value={nickname} onChange={nicknameChange} message={nicknameMessage} />
                            <AuthPageInput type={"text"} name={"email"} placeholder={"이메일"} value={email} onChange={emailChange} message={emailMessage} />
                            <div css={s.btnContainer}>
                                <span css={s.imgUrlBox}>
                                    <AuthPageInput type={"text"} 
                                        name={"profileImageUrl"} 
                                        value={profileImageUrl}
                                        onChange={profileImageUrlChange}
                                        placeholder={"프로필 이미지"}
                                        message={profileImageUrlMessage} 
                                    />
                                </span>
                                <input 
                                    type="file" 
                                    style={{
                                        display: "none"
                                    }}
                                    onChange={handleFileChange}
                                    ref={fileRef}
                                />
                                <button css={s.imgAddButton} onClick={() => fileRef.current.click()}><CiSquarePlus /></button>
                            </div>
                            <div css={s.btnContainer2}>
                                <button css={s.button} onClick={handleSignupSubmit}>가입하기</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default AuthSignupPage;