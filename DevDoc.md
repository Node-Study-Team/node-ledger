# 추상구현체
## 시나리오
- 메인 화면
https://github.com/PTU-Node/node-ledger/blob/main/pics/1.png?raw=true
- 메인 화면 중 한 날짜 클릭 시
https://github.com/PTU-Node/node-ledger/blob/main/pics/2.png?raw=true
- 날짜 클릭 화면에서 버튼 추가 시
https://github.com/PTU-Node/node-ledger/blob/main/pics/3.png?raw=true

## 구현 방법
- 메인 화면: Table 태그 -> 달력을 표로 만들어 관리
- 테이블의 한 요소를 누르면(버튼) 해당하는 날짜 경로로 라우팅(ex. '/contents/20220508' 등)
- 월간/주간 전환 버튼(우선 순위 낮음)
- 날짜를 클릭해 나온 페이지에서 사용자가 내용 추가하기 버튼 클릭 시 DB에 추가(MongoDB의 CRUD 이용하면 될 듯)
- 내용 추가하기를 클릭해 나온 페이지에서 사용자가 자산종류, 분류, 내용, 메모 등의 데이터를 입력하면 정의된 schema에 따라 db에 저장

## 라우팅 구조
### '/'
- HTTP METHOD - GET
### '/contents/{{date}}'
- HTTP METHOD - GET
### '/addcontents/{{date}}'
- HTTP METHOD - GET, POST, DELETE
- post 요청을 통해 DB에 수정을 가함. 입력된 데이터를 DB에 저장
- delete 요청을 통해 이미 등록한 내용을 삭제할 수 있도록 함

## DB schema
- userid
- date
- 자산종류 - 현금 / 카드 / 상품권 등
- 분류 - 식비 / 생활비 / 여가 등
- 내용 - (사용자 직접 입력)
- 메모 - (사용자 직접 입력)
