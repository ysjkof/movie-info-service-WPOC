# Movie Info Service

- [Movie Info Service](#movie-info-service)
  - [구현 화면](#구현-화면)
  - [프로젝트 실행 방법](#프로젝트-실행-방법)
    - [접속](#접속)
    - [실행이 안될 때](#실행이-안될-때)
  - [클라이언트 구현 요구 사항](#클라이언트-구현-요구-사항)
    - [영화 정보 사이트](#영화-정보-사이트)
    - [검색어 추천](#검색어-추천)
  - [사용한 라이브러리나 프레임워크](#사용한-라이브러리나-프레임워크)
    - [React, Typescript](#react-typescript)
    - [vite.js](#vitejs)
    - [axios](#axios)
    - [json-server](#json-server)
    - [styled-components](#styled-components)
  - [폴더 구조](#폴더-구조)
  - [고민한 점](#고민한-점)
  - [커밋 기록](#커밋-기록)

## 구현 화면


- 버튼 상호작용

![login button](https://user-images.githubusercontent.com/77876601/187838928-f7d7c317-74cd-49c4-afcd-0cb0aed65402.gif)

- 인풋 검증

![login input validation](https://user-images.githubusercontent.com/77876601/187838938-9f3c00f8-0e28-4d7a-97ba-ea51cc256e06.gif)

- 즐겨찾기 버튼 상호작용

![click favorite on main](https://user-images.githubusercontent.com/77876601/187838953-57623fb0-f466-474c-ad4f-60860ba80557.gif)

- 즐겨찾기, 검색 화면 전환

![toggle favorite, search](https://user-images.githubusercontent.com/77876601/187838960-6596fa46-a227-4ad9-9ac7-09d19215ed85.gif)

- Fuzzy String Matching

![fuzzy search](https://user-images.githubusercontent.com/77876601/187838966-b0493461-939f-4246-ba78-b6a13f9984e4.gif)

## 프로젝트 실행 방법

1. 프로젝트 다운로드
2. 터미널에서 프로젝트 폴더로 이동
   1. `npm run install` 입력 : 패키지 설치(node v16.16)
   2. `npm run dev` 입력 : json-server와 프로젝트가 동시에 실행됨

### 접속

- 브라우저에서 `http://localhost:5174`로 접속
- 회원가입 하거나 아래 id로 로그인할 수 있습니다.
- 로그인 정보는 local환경의 json-server(./database.json)에 저장됩니다.

> email : `test@t.co`
>
> password : `asd123!@`

### 실행이 안될 때

아래 경고가 나오며 실행이 안된다면 **node_modules**와 **package-lock.json**파일을 삭제 후 다시 패키지 설치부터 해봅니다. [참조, esbuild와 vite의 종속성 문제](https://stackoverflow.com/questions/71837533/why-vite-js-doesnt-work-when-i-use-npm-run-dev)

```bash
sh: vite: command not found
```

## 클라이언트 구현 요구 사항

- [x] **Local Storage** 를 활용하여 유저 데이터를 처리
- [x] **Data Fetching**을 활용하여 필요한 데이터를 호출
  - [x] **Data Fetching Module** 구현
- [x] **Routing**을 활용하여 유저 로그인 상태에 따른 페이지 이동

### 영화 정보 사이트

- [x] **즐겨찾기** 구현
- [x] **검색 기능** 구현
  - [x] 검색 결과 없는 경우 "검색 결과가 없습니다" 표시
- [x] 화면 최하단에 **infinity scroll** 구현

### 검색어 추천

- [x] 검색어를 입력하면 입력된 문자열을 통해 데이터에서 추천 검색어를 출력
- [x] 검색어가 없을 시 “검색어 없음”으로 노출
- [x] API 호출을 최소화(**debounce**)
- [x] **Fuzzy String Matching**

## 사용한 라이브러리나 프레임워크

### React, Typescript

[https://reactjs.org](https://reactjs.org)

[https://www.typescriptlang.org](https://www.typescriptlang.org)

### vite.js

프로젝트 빌더 [https://vitejs-kr.github.io/](https://vitejs-kr.github.io/)

- 기존에 설정이 편해서 CRA(Create React App) 사용
- 프로젝트 수정한 게 갱신되지 않아 프로젝트 재시작을 자주하게 됨
  - 이때 2~3초 걸리는 게 낭비가 크다고 느낌
- vite.js라는 걸 알게됨
- [왜 vite를 사용해야 하는지](https://vitejs-kr.github.io/guide/why.html)를 읽어보니 ES Modules과 Go로 작성된 Esbuild를 사용해 빠르다고함.
- 일단 한 번 사용해봄
  - CRA와 사용방법이 같아서 신경 쓸 게 없다
  - 설치 속도가 빠르다!
    - CRA는 다운받고 설치할 때 터미널이 많이 올라가고 시간이 걸리는데 vite는 그런거 없다.
  - 프로젝트 시작하는 속도가 분명히 느껴질만큼 빠르다!
  - 프로젝트 수정 갱신되는 게 분명히 느껴질만큼 빠르다!

### axios

[axios](https://axios-http.com/kr/)

### json-server

[JSON Server](https://github.com/typicode/json-server)

### styled-components

[styled components](https://styled-components.com)

## 폴더 구조

```
└── src
   ├── api
   ├── components
   ├── constants
   ├── hooks
   ├── models
   ├── pages
   ├── services
   ├── styles
   └── utils
```

폴더 구조는 데이터를 요청하는 기능, 데이터를 가공하는 기능, 화면에 그리는 기능을 분리하기 위해 구성됐습니다.

- hook은 controller에 데이터를 요청합니다
- controller는 api를 사용해 서버에서 데이터를 받고 hook에 보냅니다
- hook은 받은 데이터를 필요한 형태로 가공합니다
- page는 훅에서 받은 데이터를 화면에 보여줍니다

| 폴더            | 용도                                                                                        |
| --------------- | ------------------------------------------------------------------------------------------- |
| **api**         | 프로젝트에서 낮은 단계의 인스턴스나 모듈을 보관. fetcher와 fetch module                     |
| **components**  | 페이지를 구성하는 요소들을 보관                                                             |
| **constants**   | 상수 모음. 정규표현식, 로컬스토리지 키, type, 에러메시지 등                                 |
| **hooks**       | 훅을 보관. 여기서 controller를 사용해 데이터를 받고 처리한다                                |
| **controllers** | 데이터 요청을 하기 위해 endpoint를 갖고 처리를 하는 기능                                    |
| **pages**       | 최종적으로 화면에 나타나는 페이지 보관                                                      |
| **services**    | controller와 hook에 들어가지 않는 관심사(auth, todo)에 연관된 기능                          |
| **styles**      | CSS                                                                                         |
| **utils**       | 다른 폴더에 들어가기 적합하지 않은 특정 기능에 종속되지 않거나 전역적인 1~2줄의 간단한 함수 |

