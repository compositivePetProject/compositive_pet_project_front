/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useQueryClient } from "react-query";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { useInput } from "../../hooks/useInput";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { v4 as uuid } from "uuid";
import { storage } from "../../apis/firebase/firebaseConfig";
import { useMutation } from "react-query";
import AuthPageInput from "../../components/AuthPageInput/AuthPageInput";
import { authNicknameCheckRequest } from "../../apis/api/authSignup";
import { nicknameAndProfileImageUrlEditRequest, passwordEditRequest } from "../../apis/api/acoountPrincipal";


function MyProfilePage() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const principalQueryState = queryClient.getQueryState("principalQuery");
    const [ isEditing, setIsEditng ] = useState(false);
    const [ newNickname, newNicknameChange, newNicknameMessage, setnewNicknameValue, setNewNicknameMessage ] = useInput("newNickname");
    const [ newProfileImageUrl, newProfileImageUrlChange, newProfileImageUrlMessage, setNewProfileImageUrl ] = useInput("newProfileImageUrl");
    const [ oldPassword, oldPasswordChange, oldPasswordMessage, setOldPassword, setOldPasswordMessage ] = useInput("oldPassword");
    const [ newPassword, newPasswordChange, newPasswordMessage, setNewPassword, setNewPasswordMessage ] = useInput("newPassword");
    const [ newPasswordCheck, newPasswordCheckChange, newPasswordCheckMessage, setNewPasswordCheck, setNewPasswordCheckMessage ] = useInput("newPasswordCheck");
    const fileRef = useRef();

    const nicknameCheck = useMutation({
        mutationKey: "nicknameCheck",
        mutationFn: authNicknameCheckRequest,
        onSuccess: success => {
            const successMap = success.data;
            const successEntries = Object.entries(successMap);
            for(let [ k, v ] of successEntries) {
                if(k === "newNickname") {
                    setNewNicknameMessage(() => {
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
                    if(k === "newNickname") {
                        setNewNicknameMessage(() => {
                            return {
                                type: "error",
                                text: v
                            }
                        })
                    }
                }
            } 
        }})
    
    const nicknameAndProfileImageUrlEdit = useMutation({
        mutationKey: "nicknameAndProfileImageUrlEdit",
        mutationFn: nicknameAndProfileImageUrlEditRequest,
        onSuccess: success => {
            alert("수정 완료 되었습니다.")
            queryClient.refetchQueries("principalQuery");
            window.location.replace("/");
        },
        onError: error => {
            alert(error.response.data.newNickname);
    }})


    const passwordEdit = useMutation({
        mutationKey: "passwordEdit",
        mutationFn: passwordEditRequest,
        onSuccess: success => {
            alert("비밀번호 수정이 완료되었습니다.")
            localStorage.removeItem("AccessToken")
            window.location.replace("/auth/sign-in")
        },
        onError: error => {
            if(error.response.status === 400) {
                const errorMap = error.response.data;
                const errorEntries = Object.entries(errorMap);
                setOldPasswordMessage(null);
                setNewPasswordMessage(null);
                setNewPasswordCheckMessage(null);
                for(let [ k, v ] of errorEntries) {
                    const message = {
                        type: "error",
                        text: v
                    }
                    if(k === "oldPassword") {
                        setOldPasswordMessage(() => message);
                    }
                    if(k === "newPassword") {
                        setNewPasswordMessage(() => message);
                    }
                    if(k === "newPasswordCheck") {
                        setNewPasswordCheckMessage(() => message);
                    }
                }
            }
        }
    })

    const handleNicknameCheck = () => {
        nicknameCheck.mutate({
            newNickname
        })
    }

    const handleNicknameEdit = () => {
        nicknameAndProfileImageUrlEdit.mutate({
            newNickname,
            newProfileImageUrl
        })
    }

    const handleEditSubmitClick = () => {
        passwordEdit.mutate({
            oldPassword,
            newPassword,
            newPasswordCheck
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
                    setNewProfileImageUrl(() => url);
                });
            }
        )
    }


    
    return (
        <div css={s.layout}>
            <div css={s.userInfoBox}>
                <div css={s.infoBox}>
                    <h3>내 정보 관리</h3>
                    <div css={s.buttons} onClick={() => navigate("/account/mypage/profile")}>계정 관리</div>
                    <h3>내 쇼핑 관리</h3>
                    <div css={s.buttons} onClick={() => navigate("/account/mypage/orders")}>주문 내역</div>
                    <div css={s.buttons} onClick={() => navigate("/account/mypage/reviews")}>리뷰 관리</div>
                </div>
            </div>

            <div css={s.userDetails}>
                <div css={s.title}>계정 관리</div>
                <div>기본 정보</div>
                <div css={s.box}>
                    {!isEditing 
                    ?
                    <>
                        <div css={s.imgBox}>
                            <div css={s.profileImg}>
                                <img src={principalQueryState.data?.data.profileImageUrl}
                                alt="" />
                            </div>
                        </div>
                        <div>{principalQueryState.data?.data.nickname}</div>
                        <div>{principalQueryState.data?.data.email}</div>
                        <button css={s.buttons3} onClick={() => setIsEditng(true)}>수정</button>
                    </>
                    :
                    <>
                    <div css={s.editimgBox}>
                        <div css={s.profileImg}>
                            <img 
                                onClick={() => fileRef.current.click()}
                                src={principalQueryState.data?.data.profileImageUrl} alt="" 
                            />
                            <input 
                                    type="file" 
                                    style={{
                                        display: "none"
                                    }}
                                    onChange={handleFileChange}
                                    ref={fileRef}
                            />
                        </div>
                        <div onClick={() => fileRef.current.click()}><HiOutlinePencilAlt /></div>
                    </div>
                    <div css={s.nicknameEdit}>닉네임 변경</div>
                    <div css={s.nicknameEditBox}>
                        <AuthPageInput type="text"  name={"newNickname"} placeholder={principalQueryState.data?.data.nickname} value={newNickname} onChange={newNicknameChange} message={newNicknameMessage} />
                        <button css={s.nickCheckButton} onClick={handleNicknameCheck}>닉네임 중복확인</button>
                    </div>
                    <div>
                        <button css={s.buttons3} onClick={() => setIsEditng(false)}>취소</button>
                        <button css={s.buttons3} onClick={handleNicknameEdit}>확인</button>
                    </div>
                    </>
                    }
                    <div>
                </div>
            </div>
                <div>비밀번호 변경</div>
                <div css={s.passwordBox}>
                    <AuthPageInput  type="password" name={"oldPassword"} placeholder={"현재 비밀번호를 입력하세요."} value={oldPassword} onChange={oldPasswordChange} message={oldPasswordMessage}/>
                    <AuthPageInput  type="password" name={"newPassword"} placeholder={"새로운 비밀번호를 입력하세요."} value={newPassword} onChange={newPasswordChange} message={newPasswordMessage}/>
                    <AuthPageInput  type="password" name={"newPasswordCheck"} placeholder={"새로운 비밀번호를 확인하세요."} value={newPasswordCheck} onChange={newPasswordCheckChange} message={newPasswordCheckMessage}/>
                    <button css={s.buttons2} onClick={handleEditSubmitClick}>비밀번호 변경하기</button>
                </div>
            </div>  
        </div>
    );
}

export default MyProfilePage;