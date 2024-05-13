/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";
import * as s from "./style";
import AuthPageInput from "../../components/AuthPageInput/AuthPageInput";
import { useInput } from "../../hooks/useInput";
import { useMutation } from "react-query";
import { authSigninRequest } from "../../apis/api/authSignin";
import { authSignupRequest, usernameCheckRequest } from "../../apis/api/authSignup";
import { useNavigate } from "react-router-dom";
import { storage } from "../../apis/firebase/firebaseConfig";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { CiSquarePlus } from "react-icons/ci";
import { v4 as uuid } from "uuid";
import DaumPostcode from "react-daum-postcode";
import ReactModal from 'react-modal';

function AuthenticationPage() {
    const fileRef = useRef();
    const navigate = useNavigate();

    const [ authState, setAuthState ] = useState(1); // 1 : 로그인 2 : 회원가입

    const [ username, usernameChange ] = useInput();
    const [ password, passwordChange ] = useInput();

    const [ userName, userNameChange, userNameMessage, setUserNameValue , setUserNameMessage ] = useInput("username");
    const [ passWord, passWordChange, passWordMessage ] = useInput("password");
    const [ checkPassword, checkPasswordChange ] = useInput("checkPassword");
    const [ name, nameChange, nameMessage ] = useInput("name");
    const [ address, addressChange, addressMessage, setAddressValue, setAddressMessage] = useInput("address");
    const [ detailAddress, detailAddressChange, detailAddressMessage ] = useInput("detailAddress");
    const [ telNumber, telNumberChange, telNumberMessage ] = useInput("telNumber");
    const [ nickname, nicknameChange, nicknameMessage, setNicknameValue, setNicknameMessage ] = useInput("nickname");
    const [ email, emailChange, emailMessage ] = useInput("email");
    const [ profileImageUrl, profileImageUrlChange, profileImageUrlMessage, setProfileImageUrl ] = useInput("profileImageUrl");
    const [ checkPasswordMessage, setCheckPasswordMessage ] = useState(null);

    const [ addressModalOpen, setAddressModalOpen ] = useState(false);

    const authSigninMutation = useMutation({
        mutationKey: "authSigninMutation",
        mutationFn: authSigninRequest,
        onSuccess: response => {
            const accessToken = response.data;
            localStorage.setItem("AccessToken", accessToken);
            alert("로그인 완료 되었습니다.")
            window.location.replace("/");
        },
        onError: error => {
            alert(error.response.data);
        }
    })

    const handleSigninSubmit = () => {
        authSigninMutation.mutate({
            username,
            password
        })
    }

    const authSignupMutation = useMutation({
        mutationKey: "authSignupMutation",
        mutationFn: authSignupRequest,
        onSuccess: response => {
            alert("가입이 완료되었습니다.")
            navigate("/");
        },
        onError: error => {
            if(error.response.status === 400) {
                const errorMap = error.response.data;
                const errorEntries = Object.entries(errorMap);
                for(let [ k, v ] of errorEntries) {
                    if(k === "username") {
                        setUserNameMessage(() => {
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
                    setUserNameMessage(() => {
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
                        setUserNameMessage(() => {
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
            username : userName
        })
    }

    useEffect(() => {
        if(!checkPassword || !passWord) {
            setCheckPasswordMessage(() => null);
            return;
        }

        if(checkPassword === passWord) {
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
    }, [checkPassword, passWord]);

    const handleSignupSubmit = () => {
        const checkFlags = [
            userNameMessage?.type,
            passWordMessage?.type,
            checkPasswordMessage?.type,
            nameMessage?.type,
            addressMessage?.type,
            detailAddressMessage?.type,
            telNumberMessage?.type,
            nicknameMessage?.type,
            emailMessage?.type
        ];

        if(checkFlags.includes("error") || checkFlags.includes(undefined) || checkFlags.includes(null)) {
            alert("가입 정보를 다시 확인하세요.");
            return;
        }
        authSignupMutation.mutate({
            username: userName,
            password: passWord,
            name: name,
            address: address,
            detailAddress: detailAddress,
            telNumber: telNumber,
            nickname: nickname,
            email: email,
            profileImageUrl: profileImageUrl
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

    const submitHandleKeyDown = (e) => {
        if(e.key === "Enter") {
            handleSigninSubmit();
        }
    }

    const handlePostCode = (data) => {
        let fullAddress = data.address;
        let extraAddress = ''; 
        
        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname;
          }
          if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
          }
          fullAddress += (extraAddress !== '' ? ` ${extraAddress}` : '');
        }
        console.log(data)
        console.log(fullAddress)
        console.log(data.zonecode)
        setAddressValue(fullAddress);
        setAddressModalOpen(false);
    }



    return (
        <div css={s.layout}>
            <div css={s.container}>
                <div css={s.header(authState)}>
                    <div onClick={() => setAuthState(1)}>로그인</div>
                    <div onClick={() => setAuthState(2)}>회원가입</div>
                </div>
                <div>
                    {
                        authState === 1 ?
                            <>
                                <div css={s.inputLayout}>
                                    <div css={s.input}>
                                        <AuthPageInput type={"text"} name={"username"} placeholder={"사용자이름"} value={username} onChange={usernameChange} />
                                        <AuthPageInput type={"password"} name={"password"} placeholder={"비밀번호"} value={password} onChange={passwordChange} onKeyDown={submitHandleKeyDown} />
                                    </div>
                                    <button css={s.logInButton} onClick={handleSigninSubmit}>로그인</button>
                                </div>
                                <div css={s.signUp}>
                                    계정이 없으신가요? <span onClick={() => setAuthState(2)}>회원가입</span>
                                </div>
                                <div css={s.oauth}>
                                    <a href="http://localhost:8080/oauth2/authorization/google">
                                        <img src="https://d1nuzc1w51n1es.cloudfront.net/d99d8628713bb69bd142.png" alt="google"/>
                                    </a>
                                    <a href="http://localhost:8080/oauth2/authorization/kakao">
                                        <img src="https://d1nuzc1w51n1es.cloudfront.net/c9b51919f15c93b05ae8.png" alt="kakao"/>
                                    </a>
                                    <a href="http://localhost:8080/oauth2/authorization/naver">
                                        <img src="https://d1nuzc1w51n1es.cloudfront.net/6e4f331986317290b3ee.png" alt="naver"/>
                                    </a>
                                </div>
                            </> 
                            : 
                            <>
                                <div css={s.signUpLayout}>
                                    <AuthPageInput type={"text"} name={"username"} placeholder={"사용자이름"} value={userName} onChange={userNameChange} message={userNameMessage} />
                                    <button css={s.idCheckButton} onClick={handleUsernameCheck}>중복체크</button>
                                </div>
                                <div css={s.signUpLayoutInputList}>
                                    <AuthPageInput type={"password"} name={"password"} placeholder={"비밀번호"} value={passWord} onChange={passWordChange} message={passWordMessage} />
                                    <AuthPageInput type={"password"} name={"checkPassword"} placeholder={"비밀번호 확인"} value={checkPassword} onChange={checkPasswordChange} message={checkPasswordMessage} />
                                    <AuthPageInput type={"text"} name={"name"} placeholder={"성명"} value={name} onChange={nameChange} message={nameMessage} />
                                </div>
                                <div css={s.addressLayout}>
                                    <AuthPageInput type={"text"} name={"address"} placeholder={"주소"} value={address} onChange={addressChange} message={addressMessage} />
                                    <button css={s.addressCheckButton} onClick={() => setAddressModalOpen(true)}>주소찾기</button>
                                    
                                    <ReactModal
                                     isOpen={addressModalOpen}
                                     onRequestClose={() => setAddressModalOpen(false)}
                                     style={
                                        {
                                            content: {
                                                margin: "150px auto",
                                                width: "500px",
                                                height: "400px",
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center"
                                            }
                                        }
                                    }
                                    >
                                        <DaumPostcode
                                            onComplete={handlePostCode}
                                        />
                                    </ReactModal>
                                </div>
                                <div css={s.signUpLayoutInputList}>
                                    <AuthPageInput type={"text"} name={"detailAddress"} placeholder={"상세주소"} value={detailAddress} onChange={detailAddressChange} message={detailAddressMessage} />
                                    <AuthPageInput type={"text"} name={"telNumber"} placeholder={"전화번호"} value={telNumber} onChange={telNumberChange} message={telNumberMessage} />
                                    <AuthPageInput type={"text"} name={"nickname"} placeholder={"닉네임"} value={nickname} onChange={nicknameChange} message={nicknameMessage} />
                                    <AuthPageInput type={"text"} name={"email"} placeholder={"이메일"} value={email} onChange={emailChange} message={emailMessage} />
                                </div>
                                <div css={s.fileImageUpload}>
                                    <AuthPageInput type={"text"} 
                                        name={"profileImageUrl"} 
                                        value={profileImageUrl}
                                        onChange={profileImageUrlChange}
                                        placeholder={"프로필 이미지"}
                                        message={profileImageUrlMessage} 
                                    />
                                    <input 
                                        type="file" 
                                        style={{
                                            display: "none"
                                        }}
                                        onChange={handleFileChange}
                                        ref={fileRef}
                                    />
                                    <button css={s.fileButton} onClick={() => fileRef.current.click()}><CiSquarePlus /></button>
                                </div>
                                
                                <div css={s.regiseterButton}>
                                    <button onClick={handleSignupSubmit}>가입하기</button>
                                </div>
                            </> 
                    }
                </div>
            </div>
        </div>
    )
}

export default AuthenticationPage