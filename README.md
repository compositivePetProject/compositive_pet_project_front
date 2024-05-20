
# 🔖 목차

> ## ✨[프로젝트 소개](#-프로젝트-소개)
>
> ## 👥[팀원 소개](#-팀원-소개-및-역할-분담)
>
> ## 🤝[협업 방식](#-협업-방식)
>
> ## 📚[프로젝트 진행 상황 관리](#-프로젝트-진행-상황-관리)
>
> ## 🔍[브랜치 전략](#-브랜치-전략)
>
> ## ✔[컨벤션](#-컨벤션)
>
> ## ⚙️[배포](#-배포)
>
> ## 🛠[개발 도구](#-개발-도구)
>
> ## 📆[프로젝트 일정](#-프로젝트-일정)
>
> ## 📄[API 명세서 ERD 설계도](#-API-명세서-ERD-설계도)
>
> ## 📋[메뉴 구조도](#-메뉴-구조도)
>
> ## 🖥[화면 구현](#-화면-구현)
>
> ## 🙋‍♂️[주요 기능 및 코드 리뷰](#-주요-기능-및-코드-리뷰)
>
> ## 💡[느낀점](#-느낀점)


## ✨ 프로젝트 소개
- 애완동물을 키우는 사람들에게 유용한 기능을 제공하는 애완 커뮤니티 개발
### 🌟 제목
- Pet Community(애완인 프로젝트)
### 🚀 목적
- 애완동물 주인이 애완동물과 관련된 정보를 공유하고 커뮤니케이션할 수 있는 게시판을 제공
- 지도를 통해 동물병원 등 애완동물과 관련된 시설들의 정보 제공
- 온라인 쇼핑몰 서비스 제공하는 통합 웹사이트 개발
### 🤝 팀 프로젝트
- 팀원 4명
### 📆 제작 기간
-   2024.04.01 ~ 2024.05.17
### 🔎 주요 기능

## 👥 팀원 소개 및 역할 분담
<h3> 🐉 팀장: 도경록 </h3>

### 🔧 Back-End
- 관리자 쇼핑몰 가입고 정보 CRUD
- 관리자 쇼핑몰 정보 CRUD
- 관리자 쇼핑몰 재고 정보 CRUD
- 관리자 쇼핑몰 사용자 주문 정보 CRUD
- 관리자 쇼핑몰 출고 정보 CRUD
- 프로젝트 배포

### 🖥 Front-End
- 쇼핑몰 관리자 가입고 정보 페이지
- 쇼핑몰 관리자 정보 페이지
- 쇼핑몰 관리자 재고 정보 페이지
- 쇼핑몰 관리자 사용자 주문 정보 페이지
- 쇼핑몰 관리자 출고 정보 페이지
- 퀵 메뉴 사이드 바

### etc.
- 전체적인 코드 Refactoring
- 전체적인 페이지 CSS 디자인
- 프로젝트 최종 발표발표
- DB 설계

<h3> 팀원: 서창현 </h3>

### 🔧 Back-End
- 회원가입/로그인
- OAuth2 소셜 로그인/회원가입
- 마이페이지 회원 정보 CRUD
- 쇼핑몰 사용자 주문 CRUD
- 쇼핑몰 사용자 장바구니 CRUD
- 쇼핑몰 사용자 리뷰 및 별점 CRUD
- 쇼핑몰 좋아요 (오름차순, 내림차순 정렬)

### 🖥 Front-End
- 회원가입/로그인 페이지
- 마이페이지 사용자 정보 페이지
- 메인페이지 자동 슬라이싱
- 쇼핑몰 사용자 페이지
- 쇼핑몰 장바구니 페이지
- 쇼핑몰 상세페이지 사진 확대 기능
- Kakao Map 지도 페이지
- Kakao Pay 결제 페이지

### etc.
- 전체적인 코드 Refactoring
- 전체적인 페이지 CSS 디자인

<h3> 팀원: 권기범 </h3>

### 🔧 Back-End
- 분양 게시판 커뮤니티 CRUD
- 분양 게시판 좋아요
- 분양 게시판 댓글 CRUD

### 🖥 Front-End
- 분양 게시판 정보 페이지
- 분양 게시판 상세 페이지
- 분양 게시판 작성 페이지
- 분양 게시판 댓글 페이지

### etc.
- 프로젝트 보고서 담당

<h3> 팀원: 이평원 </h3>

### 🔧 Back-End
- 게시판 커뮤니티 CRUD
- 게시판 좋아요
- 게시판 댓글 CRUD

### 🖥 Front-End
- 게시판 정보 페이지
- 게시판 상세 페이지
- 게시판 작성 페이지
- 게시판 댓글 페이지

### etc.
- Api 명세서, ERD 명세서 담당
- PPT 제작

<br/>
<br/>

## 🤝 협업 방식

1. 해당하는 업무에 대해 GitHub Issue를 생성합니다.
2. GitHub Actions에 의해 자동으로 생성된 브랜치로 전환하여 해당하는 업무를 진행합니다.
3. 작업을 완료하면 각자의 생성한 브랜치에서 코드를 push합니다.
4. PR(Pull Request) 을 오픈합니다.

-   PR(pull request)을 오픈하면, 팀장이 코드를 확인하고 승인합니다.

-   코드 리뷰 & 승인은 팀장이 일임했지만, 팀원들의 코드 스타일은 다같이 공유하며 서로 잘 이해할 수 있도록 다 같이 정리하는 시간을 가지도록 하였습니다.

*   컨펌 담당
    -   창현 : <code>경록</code>
    -   기범 : <code>경록</code>
    -   평원 : <code>창현</code>

5. PR이 merge되어 close 되면 해당 이슈는 자동으로 Done상태로 변경됩니다.
</p>
<br/>
<br/>

## 📚 프로젝트 진행 상황 관리

-   <a href="https://github.com/compositivePetProject/compositive_pet_project_front/issues?q=is%3Aissue+is%3Aclosed">📋 GitHub Issues(Front) & </a>
    <a href="https://github.com/compositivePetProject/compositive_pet_project_back/issues?q=is%3Aissue+is%3Aclosed"> GitHub Issues(Back) </a>
    -   간편한 이슈 생성을 위해 이슈 템플릿을 만들어 사용했습니다. + 팀원이 현재 어떤 작업을 진행하고 있는지를 바로 알 수 있어 의사소통 비용을 줄일 수 있었습니다.
-   <a href="https://github.com/orgs/compositivePetProject/projects/8">📁 GitHub Projects(Front) & </a>
    <a href="https://github.com/orgs/compositivePetProject/projects/7">GitHub Project(back)</a>
    -   칸반 보드로 프로젝트 진행 상황을 한 눈에 확인할 수 있어 일정을 관리하기 수월했습니다.
</p>
    
<br/>
<br/>

## 🔍 브랜치 전략

<h3>💡 GitHub Flow 전략</h3>

-   개발과 동시에 지속적으로 배포를 진행할 것이 아니라, 기능을 모두 개발하고 최종적으로 배포를 할 예정이었기 때문에 Git flow에 비해 흐름이 단순해짐에 따라 그 규칙도 단순한 GitHub Flow 전략이 적합하다고 생각했습니다.

-   프로젝트 기간 동안 팀원들이 같은 시간에 작업하기 때문에 잦은 충돌이 발생할 것을 우려하여 충돌의 크기를 줄이고자 GitHub Flow 전략을 채택하여 작은 단위로 이슈를 쪼개 이슈 별로 브랜치를 분기하고 main 브랜치에 지속적으로 merge 하는 방식으로 진행했습니다.

-   기본적으로 master branch에 대한 규칙만 정확하게 정립되어 있다면 나머지 가지들에 대해서는 특별한 관여를 하지 않으며 pull request기능을 사용하도록 권장하였습니다.

<br/>
<br/>

## ✔ 컨벤션

팀원 간의 원활한 소통과 협업을 위해 커밋 컨벤션과, 코드 컨벤션을 만들어 이를 따랐습니다. 리드미에는 간략히 작성하고, 자세한 컨벤션은 각각의 타이틀에 링크된 깃허브 위키에 적어두었습니다.

<h3>
<a href="">📍 커밋 컨벤션</a>
</h3>

<div>
<pre background-color="#dbdbdb">
<p>
1. 커밋 유형 지정
    - 커밋 유형은 영어 대문자로 작성하기
    - 커밋 유형
    - Feat : 새로운 기능 추가
    - Fix : 버그 수정
    - Docs : 문서 수정
    - Style : 코드 formatting, 세미콜론 누락, 코드 자체의 변경이 없는 경우
    - Refactor : 코드 리팩토링
    - Test : 테스트 코드, 리팩토링 테스트 코드 추가
    - Chore : 패키지 매니저 수정, 그 외 기타 수정 ex) .gitignore
    - Design : CSS 등 사용자 UI 디자인 변경
    - Comment : 필요한 주석 추가 및 변경
    - Rename : 파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우
    - Remove : 파일을 삭제하는 작업만 수행한 경우
    - !BREAKING CHANGE : 커다란 API 변경의 경우
    - !HOTFIX : 급하게 치명적인 버그를 고쳐야 하는 경우

🧾 2. 제목과 본문을 빈행으로 분리 - 커밋 유형 이후 제목과 본문은 한글로 작성하여 내용이 잘 전달될 수 있도록 할 것 - 본문에는 변경한 내용과 이유 설명 (어떻게보다는 무엇 & 왜를 설명)

#️⃣ 3. 제목 첫 글자는 대문자로, 끝에는 . 금지

↩️ 4. 제목은 영문 기준 50자 이내로 할 것

⏺️ 5. 자신의 코드가 직관적으로 바로 파악할 수 있다고 생각하지 말자

👆 6. 여러가지 항목이 있다면 글머리 기호를 통해 가독성 높이기
</p></pre></div>

<h3>
<a href="">📍 코드 컨벤션</a>
</h3>
<div>
<pre>
<p>
🛼 문자열을 처리할 때는 쌍따옴표를 사용하도록 합니다.

🐫 문장이 종료될 때는 세미콜론을 붙여줍니다.

💄 함수명, 변수명은 카멜케이스로 작성합니다.

🐫 가독성을 위해 한 줄에 하나의 문장만 작성합니다.

❓ 주석은 설명하려는 구문에 맞춰 들여쓰기 합니다.

🔠 연산자 사이에는 공백을 추가하여 가독성을 높입니다.

🔢 콤마 다음에 값이 올 경우 공백을 추가하여 가독성을 높입니다.

💬 생성자 함수명의 맨 앞글자는 대문자로 합니다.

🔚 var는 절대 사용하지 않는다. (const를 let 보다 위에 선언한다)

👆 const와 let은 사용 시점에 선언 및 할당을 한다. (함수는 변수 선언문 다음에 오도록한다.)

✏️ 외부 모듈과 내부 모듈을 구분하여 사용한다.

🧮 배열과 객체는 반드시 리터럴로 선언한다. (new 사용 X)

📠 배열 복사 시 반복문을 사용하지 않는다.

😎 배열의 시작 괄호 안에 요소가 줄 바꿈으로 시작되었다면 끝 괄호 이전에도 일관된 줄 바꿈 해야한다. (일관되게 모두 줄 바꿈을 해주어야 한다.)

🧶 객체의 프로퍼티가 1개인 경우에만 한 줄 정의를 허용하며, 2개 이상일 경우에는 개행을 강제한다. (객체 리터럴 정의 시 콜론 앞은 공백을 허용하지 않음 콜론 뒤는 항상 공백을 강제)

🧂 메서드 문법 사용 시 메서드 사이에 개행을 추가한다.

🌭 화살표 함수의 파라미터가 하나이면 괄호를 생략한다.

🍳 변수 등을 조합해서 문자열을 생성하는 경우 템플릿 문자열을 이용한다.

🧇 변수 등을 조합해서 문자열을 생성하는 경우 템플릿 문자열을 이용한다.

🥞 wildcard import는 사용하지 않는다. (import문으로부터 직접 export하지 않는다.)

🥖 한 줄짜리 블록일 경우라도 {}를 생략하지 않으며 명확히 줄 바꿈 하여 사용한다.

🥯 switch-case 사용 시 첫 번째 case문을 제외하고 case문 사용 이전에 개행한다.

🥐 삼중 등호 연산자인 ===, !==만 사용한다.

🚐 반복문 사용은 일반화된 순회 메서드 사용을 권장한다.

🚑 람다함수 안에서 밖에 있는 변수를 사용하지 말라

🚚 코드 블럭 주석 처리를 위해서는 한 줄 주석을 사용한다. 여러 줄 주석을 작성할 때는 \*의 들여쓰기를 맞춘다. 주석의 첫 줄과 마지막 줄은 비워둠

💫 시작 괄호 바로 다음과 끝 괄호 바로 이전에 공백이 있으면 안 된다.

</p>
</pre>
</div>

</p>

<br/>
<br/>

## ⚙️ 배포
![무중단 배포](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/9412eee1-ae75-43f1-b84c-1b6d44948e5b)
<p>
확장성 및 유지보수성을 고려하여 배포에 대한 고민을 해보았습니다. 대부분의 팀 프로젝트의 경우 팀원들끼리 로컬 환경에서 개발 후 배포를 하고 프로젝트가 종료되는게 일반적입니다. 하지만, 배포 후 예상치 못한 버그 수정이나 기능 추가 등의 상황까지 고려한다면 배포된 상태에서 해당 서버를 중지시키고 작업을 하여 재배포하게 됩니다. 그 때 접속되어 있는 사용자의 경우는 해당 서비스를 이용하지 못하는 불편함을 겪게 됩니다. 즉, 중단된 상태를 나타내고 저희 조에서는 무중단 배포의 개념을 적용시켜 보았습니다. 서버를 Blue(8080 Port), Green(9090 Port) 각각의 백엔드 서버를 구동하면서 첫 배포시 사용자에게 Blue 서버를 구동하여 배포합니다. 이후 서비스의 추가적인 개발 작업이 필요할 경우 남아있는 Green 서버가 존재하기 때문에 여러 테스트 과정을 진행하고 Push를 하게되면 Github Action 에 의해 자동 CI/CD 작업을 Dokcer 파일에 입력된 되로 업데이트 되며, NGINX 에서 기존 사용자들에게 제공중인 Blue 서버에서 GREEN 서버로 이동하게 만들어 줍니다. 이렇게 되면 Blue -> Green 서버의 전환이 계속해서 반복되게 되는 구조로 사용자의 입장에서 서비스를 이용하는데 문제가 발생하지 않게 됩니다.
</p>

<br/>
<br/>

## 🛠 개발 도구

### 1. Back-End

<p>
<img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=Java&logoColor=white"/>
<img src="https://img.shields.io/badge/SpringBoot-6DB33F?style=for-the-badge&logo=SpringBoot&logoColor=white"/>
<img src="https://img.shields.io/badge/Amazon Aws-232F3E?style=for-the-badge&logo=Amazon Aws&logoColor=white"/>
<img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=white"/>
</p>

### 2. Front-End

<p>
<img src="https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=for-the-badge&logo=JAVASCRIPT&logoColor=white"/>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTMl5&logoColor=white"/>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"/>
<img src="https://img.shields.io/badge/kakao-FFCD00?style=for-the-badge&logo=kakao&logoColor=white"/>
</p>

### 3. Database

<img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white"/>

### 4. SCM & Deployment

<p>
<img src="https://img.shields.io/badge/Git-181717?style=for-the-badge&logo=Git&logoColor=white"/>
<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>
<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white">
<img src="https://img.shields.io/badge/maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white">
<img src="https://img.shields.io/badge/amazonec2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white">
<img src="https://img.shields.io/badge/SpringBoot-6DB33F?style=for-the-badge&logo=SpringBoot&logoColor=white"/>
<img src="https://img.shields.io/badge/nginx-009639?style=for-the-badge&logo=SpringBoot&logoColor=white"/>
<img src="https://img.shields.io/badge/githubactions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white"/>
</p>

### 5. Library

-   ### Back-end

<p>
<img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON Web Tokens&logoColor=white"/><img src="https://img.shields.io/badge/MyBatis-271e1f?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABuElEQVR4nO3US4hPcRQH8H9RI+Wx8FohkVfkUdQkC5FXxs6WhZSysSBCTWyRZpryWDHZi7LxSGRBKUtKMmGiRB6ZIvPRqbP4u917/zP/maXv6t77u+f7Ped8z/k1GiMANuI29mJuY7yBM/7F2bGQLcR2TMR8rMVsHMJd/MSftirBKgwrx03Mwv1839BuBdHnAfzCezzH1yR9gjv53IdH+IR3uIWudkXn4G0Sf8GQapxuV2QLvmENJqRXXTiGG0k+lAmsrCLpRTc2Y2rJ+YqKuGhVYFmrLPubSh1ODx7jepSOzoq4+E8mNg+TyxKMH1fnCNahP1pUiNuKF2n2ASzBDxwuE7moNQ5iJqZVVLQYr7G+7HA6XrYQuIxd+I2HOIUdafyUaA/WFSttFlmEjzUCx7G/5rynzuiOVI9snpYED2R77tUI7C4jjrKOYjAn6Fx+25bP13ACM3L2qxDxHc3Em3A1l6iID7iAPblo0ZYH6nGkmPl544dncQuXtWcfvo+RfBALWl1ol3L0RotXWF5JXhBamstW5kkRkcyV2J0RkReEJmFnehTGvsHnvLZjuU7GKI+a+D8aBfwFL0hrRFV1ciwAAAAASUVORK5CYII=&logoColor=white">
<img src="https://img.shields.io/badge/Lombok-ca0124?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEeElEQVR4nO2aW4hVVRjHP01HzZJGJcpuU6l00Uqzgl4sCrqgDz5IZZjZQxlEaKBJWVA9pEEG3QkqESrtAqWhY+WDQZBpF2ys1DLz0s3spqU2Nr/42GvR19eZaVpzBtaZs39wmLPP3vs/a+219ndbS6SkpKSkpKSk1gEOA14H/gBukXoDmMHfvCf1BHAU8L15AHOlngAeNJ3/Augv9QIwAjhoHsAkqSeAl03nV0tPAjgDuBt4E9gItAAXm/NnAW2h8/r3HOkJAKcElxY7Z1lmrnvE/L5cegLAJGAflTkE3GCu3WnOfQyMlFoGmBw6GWkFloTfTwcGmWsHVHhAvwDjpRYBTnMj/2lH7zQwtJ1Zshc4U2oNYIXr/OBOhL77jQHUjkc+AHpLrQCMcu/52Z2870Vz33bgN3N8tdQKwP2m4Uv/x30nAdvCfa8C9xidt6RWoAhfIxPduaOBdcAmf87kAZcBhwPHGNeps6FBcgcYZzr/M9DPnZ/mjNzzQFMHel+aa0+U3AEWmAYvrnB+mOtUdI865a8HRodZol5kivMkx0nOAL2Are1Nf3PdIOCpdiLD9mjNPisELu1o+le4/oIw8n924gF8KLkDrDQNfiMYLv3b9z/uawJuDpng2mBE1VD+aPRulBrw/W2hsTqi35nGj0rQ09kR+QkYKDkDLDINft98/wrok6C32GgslJyhmMK2imOt/KwEPfUCB8L9OqtGSM4AL5kOf+YM4ZEJevOMRrPkDDDeNLbNjf78BL2BwG6jMUFyhSKD+8g0dr35/quGsgmas41GS9ZZIIXrivwO7DHHdyToaVHkW6MxWXIFODWMcuRdl8oOSNCcaTQ+yXb0gb4hYLGuzkZz1yVo9gd2GY1rJFeA+1yMriMeWa05QRct/2a1L5Kx1T9kGvuOM3xNCZrDXAnsKskRYLhzUS0uo0uK14EXjMbbKTOo2wEGhypOZI8zgs2JU3+i0dCZNUZyA+gHrDEN3e8ehhrBoQm6jW4x5CHJDaCPFjZNI3XKL3P+f2xi8URrAZHPtQ4oOQE0AK/wT+4EnjPH0xK1b3NTP68VIAq/vNx1/olw7njgMWB6ovYVwX1G7pKcoEhIVrnOP1mNsrS+Ls7lNWcV8VGEuBtc51eFabqxK++prg26SpHqNUouUCxI2IRGmQ+8Zo7PTdQ+D/jB6HytK0GSAxQW+XYX4WmF56Zw/vyQ9i5KCVGBqcFbRL5JqRN256akNW7UdXQurIK2prePOu1tWZS4KPz7bDcyMbY/tgr6lwBbnLYWTE6oTg+6bujWuca1hve9oQrl8aUVVn2ezmJlh6Liandhxg0IY7ug2Vt3e4WFDb/Ko//rWskFim1qNqafm1i31/f7IuABYAf/Rh/EM8AQyQngWdPIe0NCYj9HmDC4MdT8dUPTlcCtwMMhZY11+0odX5KNlfcAc+ge1HMs1IclOQMMcSWsVNrCXj7d3Hh5tiWsSgAnh50ZO8MKrP3EjUkHwvHWELLq9tbHQxY3ISX/LykpKSkpKZHu5C8+ETRdu+5D6AAAAABJRU5ErkJggg==&logoColor=white">
</p>

-   ### Front-end
<p>
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"/>
<img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white"/>
<img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"/>
<img src="https://img.shields.io/badge/Emotion-cb0096?style=for-the-badge&logo=react&logoColor=white">
</p>

### ⛓️ pom.xml(Back-end)

| 라이브러리                          | 용도                                  |
| ----------------------------------- | ------------------------------------- |
| lombok                              | 어노테이션(@)으로 코드 자동 생성      |
| spring-boot-starter-security        | spring security 적용                  |
| spring-boot-starter-validation      | 입력 값 검증                          |
| spring-boot-starter-web             | Spring Web 프로젝트에 필수 라이브러리 |
| spring-boot-starter-test            | 프로젝트 작동을 테스트하는 역할       |
| mybatis-spring-boot-starter         | 백엔드에서 MyBatis 문법 적용          |
| spring-boot-devtools                | 빠른 재시작                           |
| mysql-connector-java                | DB인 MySQL과 연결                     |
| jjwt-api / jjwt-impl / jjwt-jackson | JWT(JSON Web Token) 활용              |
| spring-boot-starter-oauth2-client   | Oauth2 인증(Naver, Kakao, Google)                           |
| spring-boot-starter-aop             | spring aop 적용                       |
| spring-boot-starter-thymeleaf       | 동적인 화면 생성의 역할               |

### ⛓️ node_modules(Front-end)

| 모듈 이름                                                                   | 용도                                       |
| --------------------------------------------------------------------------- | ------------------------------------------ |
| emotion/react, emotion/styled                                               | 리액트 내 css 적용                         |
| portone/browser-sdk                                                         | QR 코드로 결제 기능 구현                   |
| react-google-maps/api                                                       | 구글 맵을 불러와 화면에 구현               |
| testing-library/jest-dom, testing-library/react, testing-library/user-event | 리액트 dom 테스트                          |
| axios                                                                       | 서버로 요청을 보내 통신                    |
| firebase                                                                    | 저장된 이미지를 업로드                     |
| react-dom, react-router-dom                                                 | 주소 요청 발생 시 각 페이지로 이동         |
| react-icons                                                                 | 리액트 아이콘을 불러와 사용                |
| react-query                                                                 | 서버 데이터 동기화(fetching, caching) 지원 |
| react-select                                                                | select 요소를 쉽게 사용                    |
| react-switch                                                                | 토글 기능 스위치 구현                      |
| react, react-scripts                                                        | 리액트 라이브러리 적용                     |
| recharts                                                                    | 가져온 데이터를 차트로 시각화하는 역할     |
| recoil                                                                      | 전역 상태 관리                             |
| styled-reset                                                                | 초기 CSS 스타일 재설정                     |
| sweetalert2                                                                 | 알림창 구현                                |
| uuid                                                                        | 고유 아이디 값을 생성하는 함수 제공        |
| web-vitals                                                                  | 사용자의 웹 바이탈 항목 측정               |
react-kakao-maps-sdk| 카카오 지도 API |
react-modal| 모달 구현 역할 |
react-daum-postcode | 다음 주소 API |

## 📄 API 명세서 ERD 설계도
### 🛰 API 명세서
### 사용자 관련 API
![API 명세서](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/3aee6468-6b99-447e-aca5-305c3acf567e)
![API 명세서](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/c0362e07-83c5-459d-999b-a3bcb9eacc65)
![API 명세서](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/58d7c496-85ff-4dda-9e36-a195dc2984bb)
![API 명세서](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/064a2aa4-85a6-4251-b0ee-1cf40246af93)
### 관리자 관련 API
![API 명세서](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/7720be4f-c156-4d58-99d0-a83a1b10fcca)

### 📐 ERD 설계도
### 메인 ERD
![ERD 설계도](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/c801a0ff-7d47-47dd-9575-d18b380a7062)
### 쇼핑몰 사용자 & 관리자 ERD
![ERD 설계도](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/6d0b087e-9c72-464c-9f4e-000d6512dbba)
![ERD 설계도](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/8aae4322-5ed7-4465-9026-a9313bd69d9a)
### 분양 게시판 ERD
![ERD 설계도](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/fc913ef8-ddc1-469a-b09e-6df0da7479e0)
### 커뮤니티 게시판 ERD
![ERD 설계도](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/2a082a4b-d374-42de-affc-dc0784735860)

## 📋 메뉴 구조도
### 메인페이지(사용자)
![메인페이지(사용자)](https://github.com/compositivePetProject/compositive_pet_project_back/assets/118997608/b3b1e2b8-4148-4d15-812c-54ada67186b4)
### 관리자 페이지(관리자)
![관리자 페이지(관리자)](https://github.com/compositivePetProject/compositive_pet_project_back/assets/118997608/1d1d8a17-c735-40ad-816b-287029f05246)

## 🖥 화면 구현
### 로그인/회원가입 페이지
#### 일반 로그인/회원가입 페이지
![일반 회원가입 영상](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/c3087c7a-fa9b-4739-93e8-e039ed5053d0)
![일반 로그인 영상](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/a0ca9483-b0f4-4ee9-a6db-06305fff9fa1)

#### OAuth2 소셜 로그인/회원가입 페이지(구글)
![구글 회원가입 영상](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/cb8ae8e7-c641-4f50-831e-60985d8748f9)
![구글 로그인 영상](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/2af6215a-1605-42cb-b920-1bf2d24fc421)
![구글 이미 회원인 사용자 로그인 영상](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/79acd74a-92fd-4d4d-b248-fe7ac2ea8814)

#### OAuth2 소셜 로그인/회원가입 페이지(카카오)
![카카오 회원가입 영상](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/ea9d372e-ae02-4d15-a552-810ae98becc8)
![카카오 로그인 영상](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/61b6bbae-533d-4356-b576-32af69b5fc50)
![카카오 이미 회원인 사용자 로그인 영상](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/0e2e210e-c278-4633-8fde-f05fe3d1b407)

#### OAuth2 소셜 로그인/회원가입 페이지(네이버)
![네이버 회원가입 영상](https://github.com/compositivePetProject/compositive_pet_project_back/assets/118997608/0102cdbf-4b4e-4db5-833c-203006beaf90)
![네이버 로그인 영상](https://github.com/compositivePetProject/compositive_pet_project_back/assets/118997608/68110d6f-eff0-4a04-a8ab-0894819f533b)
![네이버 이미 회원인 사용자 로그인 영상](https://github.com/compositivePetProject/compositive_pet_project_back/assets/118997608/6e75d112-1dd6-4700-9d6b-7b5eba69c9f4)

### 지도 페이지
#### 카카오 지도 API를 이용한 주변 애완업 관련 업체 검색 페이지
![지도 영상](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/0d82ffdc-a6ca-489b-8454-4e131e0cfda0)

### 메인 페이지
#### 여러 컨텐츠들을 간략적으로 보여주는 메인 페이지
![메인페이지 수정본](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/3be15e32-165d-44ba-aeb7-e67a2488ac7d)

### 쇼핑몰 페이지
#### 쇼핑몰 리스트 페이지
![쇼핑몰 리스트 페이지](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/3be15e32-165d-44ba-aeb7-e67a2488ac7d)
#### 쇼핑몰 리스트 카테고리 조회 페이지
![쇼핑몰 리스트 카테고리 조회 페이지](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/f1ad2359-1803-4e4b-a5b5-0de391d75fd5)
#### 쇼핑몰 상품 상세 페이지
![쇼핑몰 상품 상세 페이지](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/29bfeb28-e3f9-49d5-bc2a-cd9c95762034)
#### 쇼핑몰 상품 결제 페이지
![쇼핑몰 상품 결제 페이지](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/9018bf26-3a39-4a77-b9ad-f26d3acf20ef)
#### 쇼핑몰 장바구니 추가 및 결제 페이지
![쇼핑몰 장바구니 추가 및 결제 페이지1](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/484c6da3-7b5d-4713-9662-7e9c8dfbe8c3)
![쇼핑몰 장바구니 추가 및 결제 페이지2](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/3aada6c1-51dd-4317-bc04-24f3edbe1468)
![쇼핑몰 장바구니 추가 및 결제 페이지3](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/317470a2-ff34-478e-9e54-75a1d994ffd0)
![쇼핑몰 장바구니 추가 및 결제 페이지4](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/9ac04641-008e-4d67-b084-ea1da7d11a16)
![쇼핑몰 장바구니 추가 및 결제 페이지5](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/aebec7ea-023e-4255-a03a-8944f4e7f7f3)
#### 쇼핑몰 관리자 상품 관리 페이지
![쇼핑몰 관리자 상품 관리 페이지1](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/8f5e3bc0-6505-4a36-9620-ff3ac98e2345)
![쇼핑몰 관리자 상품 관리 페이지2](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/3c9b67b5-758e-4c49-918e-677d89503052)
![쇼핑몰 관리자 상품 관리 페이지3](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/d1d340a4-0324-42c2-b9f4-0f90228ed578)
#### 쇼핑몰 관리자 재고 관리 페이지
![쇼핑몰 관리자 재고 관리 페이지](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/29b822df-2fee-428d-9842-0db5be5f11ef)
#### 쇼핑몰 관리자 가입고 관리 페이지
![쇼핑몰 관리자 가입고 관리 페이지1](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/84e8510c-c7d1-41ea-830a-ad37b4480968)
![쇼핑몰 관리자 가입고 관리 페이지2](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/c358da59-d87a-49cd-aea2-20350f7e9be9)
![쇼핑몰 관리자 가입고 관리 페이지3](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/49c50f01-c318-4570-b063-2ab935f6f441)
![쇼핑몰 관리자 가입고 관리 페이지4](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/9903d746-458a-42ee-bba1-a590f5721b4c)
#### 쇼핑몰 관리자 출고 관리 페이지
![쇼핑몰 관리자 출고 관리 페이지](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/2d91bc0a-1fd6-4bf4-9277-124713920fc7)
#### 쇼핑몰 관리자 주문 관리 페이지
![쇼핑몰 관리자 주문 관리 페이지](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/816c1d77-6929-4876-a67d-0c4dfcccc40d)

### 분양 커뮤니티 게시판 페이지
#### 분양 커뮤니티 리스트 페이지
![분양 커뮤니티 리스트 페이지](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/e2be0f1d-59f0-47bd-9bc1-854a9655bbea)
#### 분양 커뮤니티 상세 페이지
![분양 커뮤니티 상세 페이지](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/44b07403-db79-44b8-a2f4-60f2d199b51b)
#### 분양 커뮤니티 상세 댓글 관련 페이지
![분양 커뮤니티 상세 댓글 관련 페이지](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/0e10e5fa-3a55-45ec-8341-64ebd9474e2f)
#### 분양 커뮤니티 게시글 작성 페이지
![분양 커뮤니티 게시글 작성 페이지](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/0877c97b-6ce9-4189-bb95-d137320b56b1)

### 커뮤니티 게시판 페이지
#### 커뮤니티 리스트 페이지
![커뮤니티 리스트 페이지](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/e8baab06-2d1c-491c-a1c9-c5279c80a336)
#### 커뮤니티 리스트 상세 페이지
![커뮤니티 리스트 상세 페이지](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/ce80ba90-cfe7-424e-82ef-6da0d78d5d0d)
#### 커뮤니티 리스트 상세 댓글 관련 페이지
![커뮤니티 리스트 상세 댓글 관련 페이지](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/32ce8e26-0c7b-4ae6-bd8a-edb3006df10c)
#### 커뮤니티 리스트 게시글 작성 페이지
![커뮤니티 리스트 게시글 작성 페이지](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/bd474bf5-aa94-49b5-9cc6-3590d0b014ac)

### 마이페이지
#### 사용자 정보 수정 관련 페이지
![사용자 정보 수정 페이지](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/520ecc86-7932-447f-8843-56d3ce89d4b3)
![사용자 정보 수정 페이지](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/c51fc0c2-cdcd-45dd-b281-c5b1efb99a40)
#### 사용자 주문 내역 및 장바구니 관련 페이지
![사용자 주문 내역 및 장바구니 관련 페이지](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/f4a3c45c-876a-4eac-894f-72e8fe7ba8bd)
#### 사용자 리뷰 관리 관련 페이지
![사용자 리뷰 관리 관련 페이지](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/23b2aae5-342d-41da-9cbf-276ab11958b6)
#### 사용자 커뮤니티 게시판 관련 페이지
![사용자 커뮤니티 게시판 관련 페이지](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/ff005e94-d1af-4879-a90f-21076d4e0937)
#### 사용자 분양 커뮤니티 게시판 관련 페이지
![사용자 분양 커뮤니티 게시판 관련 페이지](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/c9115efe-90d5-4c38-a9e6-5c743b826e84)

### etc
#### 퀵메뉴
![퀵메뉴](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/50a2d6cd-a1d2-4b03-9255-e0decd69d91d)
#### 비로그인 제어
![비로그인 제어](https://github.com/compositivePetProject/compositive_pet_project_front/assets/118997608/fb8fd44c-959c-4d1f-b2aa-6fe324c3264d)

## 🙋‍♂️ 주요 기능 및 코드 리뷰
### 게시판 TOP 3 기능
![TOP3](https://github.com/compositivePetProject/compositive_pet_project_back/assets/118997608/87314dcc-8d70-4605-bf1a-db49751c8e6f)
### 장바구니 결제
#### 백엔드
![장바구니결제(백엔드)](https://github.com/compositivePetProject/compositive_pet_project_back/assets/118997608/39bce939-6d93-404d-878b-9418f493b57e)
#### 프론트
![장바구니결제(프론트)](https://github.com/compositivePetProject/compositive_pet_project_back/assets/118997608/7b150ab7-7661-472b-bd92-17c4bc75d96d)
### 상품 사진 확대 기능
![상품사진확대기능](https://github.com/compositivePetProject/compositive_pet_project_back/assets/118997608/d3dab8a4-6fe9-4b44-a805-76d53a9e8130)
### 관리자 매출 현황 조회
![관리자매출현황조회](https://github.com/compositivePetProject/compositive_pet_project_back/assets/118997608/d9fbeffb-ac7a-478e-ab57-45d0e9234682)
### 지도 api 기능 구현
![지도api기능](https://github.com/compositivePetProject/compositive_pet_project_back/assets/118997608/3180d6d0-e492-4f41-ad76-2367f3420080)

## 💡 느낀점
### 도경록
- 팀 프로젝트에서 팀장으로 참여하면서 프로젝트의 전반적인 이해도를 갖추며 팀원들의 작업 분담 및 개발 프로세스의 원할한 진행을 위한 커뮤니케이션의 중요성에 생각해 보게 되었습니다. 이러한 과정에서 발생하는 다양한 이슈들을 효과적으로 관리하고 해결하기 위해 팀원들과 지속적으로 소통하고 협력하였습니다. 이를 통해 커뮤니케이션의 중요성과 효과적인 의사소통이 팀의 성과에 큰 영향을 미치는 것을 몸소 체험하였습니다.
- 개발 간 코드의 유지보수성과 확장성을 향상시키는 모듈화 및 클린코드에 대해 깊이 생각해보게 되는 경험이 되었고, 다음 프로젝트 때에는 더 효율적인 코드작성으로 개발자로써의 역량을 더욱 높이겠다는 다짐을 하였습니다.
- 이번 프로젝트에서 관리자의 쇼핑몰 재고관련 기능을 담당하여 코드 로직을 구성하면서 개발 역량 이외에도 프로젝트 주제에 관련한 여러 배경지식들에 대한 공부들도 필요하다고 느꼈습니다.
---

### 서창현
- 팀 프로젝트는 개인 프로젝트와 많은 부분에서 다르다는 것을 크게 느꼈다.  우리 조는 효율성을 중시해 커뮤니티, 분양 커뮤니티, 쇼핑몰, 쇼핑몰 어드민 페이지 및 DB를 기준으로 철저한 분업을 꾀했다. 철저한 분업은 맡은 기능에 대한 전문성을 강화하고 책임감과 의욕을 고취하는 데 큰 장점이 있었지만 팀원 간 소통의 필요성을 잊게했다. 소통의 부족은 코드 리뷰를 하거나 피드백을 주고받는 지식 공유의 시간을 감소시켰고  이는 협업에서의 가장 큰 장점인 집단지성을 활용하지 못하는 결과를 낳았다.
주기적인 미팅과 코드 리뷰와 같은 협업 시스템 내지 협업 규칙의 중요성, 그리고 비록 사소해 보이는 루틴일지라도 개개인이 이러한 체계를 지키려는 노력이 정말 중요하다는 것을 깨닫게 되었다. 또한 역할분담 내지 개발론과 같은 협업 방식을 채택할 때에는 프로젝트의 목적 및 규모, 팀원의 역량 및 경험 등을 종합적으로 고려해야 하고, 채택 후에는 채택한 방식의 리스크를 최소화 할 수 있는 시스템을 반드시 마련해야 함을 느꼈다.

- 이제껏 수업에서는 배우지 않았던 카카오맵 라이브러리(react-kakao-maps-sdk)를 도입했다. 요구사항에 맞게 새로운 기술을 응용해 사용하기가 쉽지는 않았지만, 새로운 기술을 습득하는 과정이 흥미로웠고 완성도 높은 라이브러리를 사용함으로서 프로젝트의 퀄리티도 높아짐에 따라 성취감을 느낄 수 있었다.
한편, 쇼핑몰에서 사진을 볼때 불편함을 느껴 확대기능을 추가하였고 이 기능은 보기와 달리 더더욱 쉽지 않았다. 특히 마우스의 타겟에 맞게 보여지는 화면의 타겟 위치를 맞추는 것이 어려웠다. 마음을 다잡고 직면한 문제와 요구사항에 대해 차분히 고민하며 해결 로직을 단계별로 정리했고, 이에 필요한 함수와 기능을 학습한 후 정리한 로직을 코드로 옮겨내는 데 성공했다. 이런 경험을 통해 포기하지 않으면 어떤 문제라도 반드시 해결할 수 있다는 믿음과 자신감을 얻게 되었다.

- 게시판에서 분양 게시판과 커뮤니티 게시판의 Top3을 조회할 때 처음에는 데이터 많지않아 문제 없지만 나중에 데이터가 많아지면서 DB에서 조회할때 성능 문제가 발생했다. 문제를 찾아보니 첫번째, 문제는 table join이 많이해서였고 두번째 문제는 distinct을 사용하면서 중복제거 할 때 데이터 양이 많아서 느려지는 문제를 파악하고  OOP에 대한 이해와 개발 언어 및 SQL의 기본기, 클린코드, 알고리즘과 자료구조 등 CS 공부가 필수적임을 깨닫게 되었다.
---

### 권기범
- 팀 프로젝트를 수행하면서, 게시판 CRUD와 관리자 게시판 CRUD를 구현하는 작업을 맡았습니다. 처음에는 게시판 CRUD를 쉬운 작업으로 생각했지만, 실제로는 생각보다 많은 기능을 구현해야 했고 여러 오류가 발생하여 작업 속도가 늦어졌습니다. 결과적으로 관리자 대시보드를 구현하지 못하고 프로젝트 전체의 진도가 늦어졌습니다. 다행히도 팀원이 코드 작성 절차와 요령을 알려주어 프로젝트를 무사히 마무리할 수 있었습니다.
- 이번 프로젝트를 통해 프로그래밍은 끊임없이 개인의 역량을 쌓아야 함을 깨달았습니다. 또한, 팀원 간의 커뮤니케이션이 프로젝트의 핵심이라는 것을 알게 되었습니다. 프로젝트를 진행하면서 수업 내용이 점차 이해되고, 모듈화와 클린 코드의 중요성을 깨달았습니다.
- 앞으로는 이번 팀 프로젝트에서 얻은 경험을 살려 개인 프로젝트를 꾸준히 수행하고, 개인의 역량을 키우며 커뮤니케이션을 적극적으로 하여 다음 프로젝트에 더 많은 기여를 할 것입니다.
---

### 이평원
- 이번 프로젝트를 하면서 제가 부족한 능력이 무엇인지 다시한번 현실적으로 깨닫고 앞으로 다른 프로젝트를 준비하면서 생각나게 될 가장 큰 동기부여가 되는 것 같았습니다 . 프로젝트를 수행하면서 커뮤니티 게시판 기능 CRUD를 개발하면서 능력이 부족한데가 진도가 굉장히 느려 기획하고자 했던 다른 기능들을 구현하지 못했습니다.  다른 프로젝트 담당 업무를 수행하는 팀원들에게 많은 미안함이 느껴졌습니다. 

- 팀장님과 부팀장님께서 가이드라인을 만들어주시면서 제가 담당하는 커뮤니티 게시판의 코드 작성 절차와 코드를 개발하면서 어떤식으로 코드를 짜야하는지 유의사항을 알려주었습니다. 어떻게든 프로젝트를 마무리까지 이끌어준 팀장님과 부팀장, 그리고 팀원분께 정말 감사드립니다. 

- 이번 프로젝트 과정의 경험을 통하며 취업을 위해 개인 프로젝트를 준비를 하면서 제가 부족한 능력을 다시 채우고 만약 다른 팀 프로젝트를 수행할 시 이번 프로젝트를 경험을 토대로  내가 담당받은 업무를 성실히 수행을 할 것 같습니다. 


