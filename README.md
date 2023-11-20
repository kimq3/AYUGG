# 리그오브레전드 전적,통계 사이트 AYUGG

- 챔피언 정보, 사용자 전적, 통계, 프로경기 일정 등을 볼 수 있는 홈페이지이다.

## 멤버소개

- 김규섭(조장): 챔피언 통계 페이지, 유저랭킹 상세 페이지, 챌린저 매치 페이지, DB 구축, API 기능 구축
- 강신혁: 소환사 전적 페이지, 멀티 서치 페이지
- 박준완: 메인페이지, 챔피언 통계 페이지, 챔피언 상세 페이지, API 기능 구축
- 이희준: 유저 랭킹 페이지, 대회 일정 페이지
- 공통: Git 협업.

## 개발 환경 (`23. 11. 20. 기준)

- `Node.js v18.16.0`
- `NPM v9.5.1`
- **Front-end** : React.js
- **Back-end** : express (JS)
- **DATABASE** : SQLite3 (Python)

## 주요기능

- Mock up 확인 → [이동하기](https://ovenapp.io/view/DkBV5wcJtmXETiCxL22WhWusXtOgwi71/)

1.  **메인화면 (기존)** : 사용자 검색, 금주 로테이션 챔피언 안내 기능 페이지
2.  **챔피언 분석 (기존)** : 챔피언에 대한 통계를 라인별로 확인이 가능한 페이지
3.  **챔피언 상세 (기존)** : 특정 챔피언의 룬세팅, 아이템, 스펠 등을 안내하는 페이지
4.  **전적 페이지 (기존)** : 특정 유저의 정보와 최근 진행한 게임을 확인할 수 있는 페이지
5.  **멀티 서치 (기존)** : 닉네임을 입력하면(복수가능) 유저의 정보를 간단히 파악이 가능한 페이지
6.  **챔피언 통계 (신규)** : 필터링에 따라 원하는 조건의 챔피언들의 통계를 볼 수 있는 페이지
7.  **유저 랭킹 페이지 (신규)** : 솔로랭크, 자유랭크의 최상위 유저들을 간략히 파악할 수 있는 페이지
8.  **유저 랭킹 자세히보기 (신규)** : 최상위 유저의 정보를 자세하게 파악 가능한 페이지
9.  **챌린저 매치 결과 (신규)** : 최상위 유저의 랭크 경기들의 결과를 볼 수 있는 페이지
10. **대회일정 페이지 (신규)** : LCK 등의 대회 일정을 보여주는 페이지
