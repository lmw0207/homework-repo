# 공개 API 응답 분석하기

### 1. 브라우저에서 공개 API URL을 직접 접속해보세요

(예: https://jsonplaceholder.typicode.com/)

https://jsonplaceholder.typicode.com/posts/1

---

### 2. 응답 데이터의 JSON 구조를 분석하고 각 필드의 의미를 작성하세요

{
"userId": 1, = <br>
"id": 1, <br>
"title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", <br>
"body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"<br>
}
"userId" : 사용자의 고유 식별 번호
"id" : 자체의 고유 ID
"title" : 제목
"body" : 본문 내용

---

### 3. Request와 Response의 차이를 실제 예시와 함께 설명하세요

Request : 요청 / 프론트엔드 → API → 백엔드
Response : 응답 / 백엔드 → API → 프론트엔드

실제 레스토랑에 비유하면 손님이 웨이터에게 주문을 하고 웨이터는 주문을 받아 주방에 알려준다. 손님(프론트) 주문 → 웨이터(API) 주문 받음 → 주방(백)에게 전달

---

### 4. API 키가 필요한 이유와 보안상 주의점을 정리하세요

1. API키 없이 접근하면 아무나 데이터에 접근하고, 일관성이 없고 유지보수가 어려워 진다.
2. 자바스크립트 코드안에 API 키를 그대로 직접 작성 금지
3. Github에 절대 업로드 금지
4. 비밀번호처럼 관리를 해야하기에 API 키를 노출 시키는 것은 하면 안된다.

---
