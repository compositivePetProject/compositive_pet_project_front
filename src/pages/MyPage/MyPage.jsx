/** @jsxImportSource @emotion/react */
import * as s from "./style";

function MyPage() {
    return (
        <div css={s.layout}>
            <div css={s.container}>
                <div>
                    <h3>내 정보 관리</h3>
                    <div>임시1</div>
                    <div>임시2</div>
                    <div>임시3</div>
                </div>
            </div>
            <div css={s.container2}>
                <h1>계정 관리</h1>
                <div>프로필 변경</div>
                <div>비밀번호 변경</div>
                <div>닉네임 변경</div>
            </div>  
        </div>
    );
}

export default MyPage;