# 1. 수업 소개
- 컴포넌트
  - 사용자 정의 태그 (가독성, 재사용성)

# 2. 공부 전략
- 포인트만 잡아서 공부하다, 필요한 부분을 채워나가기
  - CODING
  - RUN
  - DEPLOY

# 3. 개발환경의 종류
- 공식문서에 익숙해져야 한다. (한번에 익숙해지지 않는다)
- 셋팅X: Get Started -> online playGround -> code SandBox
- 셋팅: create-react-app을 설치하려면 npm(nodeJS계의 앱스토어)이 필요하다. [pick]

# 4. npm을 이용해서 create-react-app 설치
- node 설치: https://nodejs.org/ko/ (안정화 버전, 새로운 버전)
- 윈도우, mac 설치방법에 차이가 있음
- npm install careate-react-app@2.1.8 (최신 버전 설치)

# 5. create react app을 이용해서 개발환경구축
- 폴더 만들고, cd "폴더명"
- create-react-app . => .은 현재 경로
- npx: npm을 설치하면 같이 설치 (일회용 - 항상 최신 버전)

# 6. 샘플 웹앱 실행
- 실행 명령어: npm run start
- 기본 주소: localhost:3000
- 터미널 중지: ctrl + c

# 7. JS 코딩하는 법
- public: index.html이 있는 곳
  - id: root
- src: 
  - index.js: index.html의 root에 reactDom을 랜더링
  - App: 리액트를 통해 만든 사용자 정의 태그 (컴포넌트)
- etc:
  - hot loader: 저장할때마다 reload

# 8. CSS 코딩하는 법
- create-react-app에서의 사용법
  - import한 파일의 확장자(js)가 생략되어 있다. (웹팩 설정)

# 9. 배포하는 법
- 배포(deploy): npm run build
- 개발환경에서는 용량이 큰 파일을 받지만, production 모드에서는 가벼워야 한다. (build 폴더 안의 파일들)

# 10. 리액트가 없다면
- public: 리액트를 실행했을때의 document코드가 들어가는 경로
- 시멘틱 태그: 의미론적으로 정의 (리액트랑 관계 X)
- 동일한 코드가 천말줄이라면? 인지능력이 벗어나서 혼란스럽다.

# 11. 컴포넌트 만들기
- 순수한 코드를 리액트로 정리하기
- 코드묶음을 하나의 사용자 정의 태그로 만들고 싶을 때..
- 자바스크립트와 유사