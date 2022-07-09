# 문서

## 1. Git commit convention

참조: [Udacity Git Commit Message Style Guide](https://udacity.github.io/git-styleguide/)

```
type: Subject

body

footer
```

```
feat: add user models

개인화 기능에 필요해 user models을 추가함

Resolves: #12
See also: #23, #24
```

### 1.A. **Type**

| 종류     | 내용                                                  | 기타                          |
| -------- | ----------------------------------------------------- | ----------------------------- |
| feat     | 파일, 폴더, 새로운 기능 추가                          |
| fix      | 버그 수정                                             |
| docs     | 문서 생성, 추가, 수정                                 |
| style    | 포멧팅, 빠진 세미콜론 추가 등 코드 스타일 변경        | 코드의 변화는 없다            |
| refactor | 리팩토링                                              |
| test     | 테스트 코드 추가 및 리펙토링                          | production code의 변화는 없다 |
| chore    | build 작업, 패키지 관리, JSON데이터 포멧, CSS 변경 등 | production code의 변화는 없다 |
| conf     | .env, .gitignore 추가                                 |
| rename   | 파일 혹은 폴더명 수정, 옮기는 작업만 한 경우          |
| remove   | 파일 삭제                                             |

### 1.B. **The Subject**

주제는 50자 미만으로 하고, 대문자로 시작해 마지막에 마침표는 쓰지 않는다. 명령적인 문장을 사용해 커밋이 무엇을 했는지 설명하기보다 하는 일을 설명한다. 예시, use change; not changed or changes.

### 1.C. **The Body**

몸통에는 커밋에 설명이나 상황이 필요할 때만 사용한다. 어떻게 했는지가 아니라 한 일의 내용과 이유를 설명한다.
몸통과 주제 사이에 빈 줄이 필요 하고 각 줄의 길이는 72자 이하로 한다

### 1.D. **The Footer**

바닥글은 선택사항이고 issue tracker IDs를 참조하는데 사용한다
