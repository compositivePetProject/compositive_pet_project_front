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
import { authNicknameEditRequest } from "../../apis/api/acoountPrincipal";

function MyPage() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const principalQueryState = queryClient.getQueryState("principalQuery");
    const [ isEditing, setIsEditng ] = useState(false);
    const [ newNickname, newNicknameChange, newNicknameMessage, setnewNicknameValue, setNewNicknameMessage ] = useInput("newNickname");
    const [ profileImageUrl, profileImageUrlChange, profileImageUrlMessage, setProfileImageUrl ] = useInput("profileImageUrl");
    const fileRef = useRef();

    const nicknameCheck = useMutation({
        mutationKey: "nicknameCheck",
        mutationFn: authNicknameCheckRequest,
        onSuccess: success => {
            alert("사용 가능한 닉네임입니다.")
        },
        onError: error => {
            if(error.response.status === 400) {
                const errorMap = error.response.data;
                const errorEntries = Object.entries(errorMap);
                console.log(errorEntries);  
                for(let [ k, v ] of errorEntries) {
                    if(k === "nickname") {
                        setNewNicknameMessage(() => {
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
        }})
    
        const nicknameEdit = useMutation({
            mutationKey: "nicknameEdit",
            mutationFn: authNicknameEditRequest,
            onSuccess: success => {
                alert("닉네임 변경이 완료 되었습니다.")
            },
            onError: error => {
                if(error.response.status === 400) {
                    const errorMap = error.response.data;
                    const errorEntries = Object.entries(errorMap);
                    console.log(errorEntries);  
                    for(let [ k, v ] of errorEntries) {
                        if(k === "nickname") {
                            setNewNicknameMessage(() => {
                                return {
                                    type: "error",
                                    text: v
                                }
                            })
                        }
                    }
                } else {
                    alert("닉네임 변경");
                }
        }})

    const handleNicknameCheck = () => {
        nicknameCheck.mutate({
            newNickname
        })
    }

    const handleNicknameEdit = () => {
        nicknameEdit.mutate({
            newNickname
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


    
    return (
        <div css={s.layout}>
            <div css={s.userInfoBox}>
                <div css={s.infoBox}>
                    <h3>내 정보 관리</h3>
                    <div css={s.buttons} onClick={() => navigate("/account/mypage")}>계정 관리</div>
                    <div css={s.buttons}>임시 @@@</div>
                </div>
            </div>

            <div css={s.userDetails}>
                <div>계정 관리</div>
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
                        <button onClick={() => setIsEditng(true)}>수정</button>
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
                        <AuthPageInput type="text"  name={"newNickname"} placeholder={"새로운 닉네임을 입력해주세요"} value={newNickname} onChange={newNicknameChange} message={newNicknameMessage} />
                        <button css={s.nickCheckButton} onClick={handleNicknameCheck}>닉네임 중복확인</button>
                    </div>
                    <div>
                        <button onClick={() => setIsEditng(false)}>취소</button>
                        <button onClick={handleNicknameEdit}>확인</button>
                    </div>
                    </>
                    }
                    <div>
                </div>
            </div>

                <div>비밀번호 변경</div>
                <div css={s.box}>

                </div>
            </div>  
        </div>
    );
}

export default MyPage;