/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { Link } from "react-router-dom";
import { useInput } from "../../hooks/useInput";
import { useMutation } from "react-query";
import { authSigninRequest } from "../../apis/api/authSignin";
import AuthPageInput from "../../components/AuthPageInput/AuthPageInput";

function AuthSigninPage() {
    const [ username, usernameChange ] = useInput();
    const [ password, passwordChange ] = useInput();

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

    const handleSigninSubmit = (e) => {
        authSigninMutation.mutate({
            username,
            password
        })
    }

    // css 추가 예정
    return (
        <div css={s.layout}> 
            <div>
                <div css={s.font}>로그인</div>
                <div css={s.loginContainer}>
                    <AuthPageInput type={"text"} name={"username"} placeholder={"사용자이름"} value={username} onChange={usernameChange} />
                    <AuthPageInput type={"password"} name={"password"} placeholder={"비밀번호"} value={password} onChange={passwordChange} />
                    <div>
                        <button css={s.buttons} onClick={handleSigninSubmit}>로그인하기</button>
                        <Link css={s.buttons}  to={"/auth/sign-up"}>회원가입</Link>
                    </div>
                    <div css={s.imgBox}>
                        <a href="http://localhost:8080/oauth2/authorization/google">
                            <img css={s.img} src="https://d1nuzc1w51n1es.cloudfront.net/d99d8628713bb69bd142.png" alt="google"/>
                        </a>
                        <a href="http://localhost:8080/oauth2/authorization/kakao">
                            <img css={s.img} src="https://d1nuzc1w51n1es.cloudfront.net/c9b51919f15c93b05ae8.png" alt="kakao"/>
                        </a>
                        <a href="http://localhost:8080/oauth2/authorization/naver">
                            <img css={s.img} src="https://d1nuzc1w51n1es.cloudfront.net/6e4f331986317290b3ee.png" alt="naver"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthSigninPage;