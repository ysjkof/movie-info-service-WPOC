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
- [x] API 호출을 최소화(debounce)
- [x] Fuzzy String Matching

## 사용한 라이브러리나 프레임워크

### React, Typescript

[https://reactjs.org](https://reactjs.org)

[https://www.typescriptlang.org](https://www.typescriptlang.org)

### vite.js

프로젝트 빌더 [https://vitejs-kr.github.io/](https://vitejs-kr.github.io/)

[https://github.com/ysjkof/wanted-pre-onboarding-challenge-fe-1#vitejs](https://github.com/ysjkof/wanted-pre-onboarding-challenge-fe-1#vitejs)

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
   ├── constant
   ├── hook
   ├── models
   ├── pages
   ├── services
   ├── styles
   └── utils
```

| 폴더    | 용도                                                                    |
| ------- | ----------------------------------------------------------------------- |
| **api** | 프로젝트에서 낮은 단계의 인스턴스나 모듈을 보관. fetcher와 fetch module |

## 고민한 점

## 커밋 기록
