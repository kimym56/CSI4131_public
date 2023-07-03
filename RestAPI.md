# Rest API
### 1. 미디어 목록 제공
### 1.1 영상 썸네일 + 제목(?)
### 목록만? 개별 영상링크까지 한번에?

Get Example
#### Request

| ID     | URL                        | HOST                        | METHOD |
| ------ | -------------------------- | --------------------------- | ------ |
| BA01-1 | /session-info/session-list | http://tvmedia.lge.com:5000 | GET    |

---

#### Response

| Name               | Type     | Description                                  |
| ------------------ | -------- | -------------------------------------------- |
| ids                | String[] | 데이터베이스에 존재하는 document의 object id |
| contetn_info       | Object   | 해당 세션의 content_info                     |
| - content\_ date   | Date     | 컨텐츠 정보를 받은 시간                      |
| - url              | String   | 컨텐츠 주소                                  |
| - bitrate_resource | Number[] | 제공되는 bitrate 정보                        |
| - resolution       | Object[] | 컨텐츠의 width, height                       |                |
| - stream_type      | String   | 스트리밍 종류                                |
| - protocol         | String   | 비디오 스트리밍 프로토콜                     |

---
### 2. 미디어 기본 재생 기능
### 2.1 영상링크
### 해상도&배속 어떻게..?

Post Example
### Request
|ID|URL|HOST|METHOD|
|---|---|---|---|
|BA02-1|/player-session|http://tvmedia.lge.com:5000|POST|

---

#### Parameter
| Name             | Type     | Description                | Required |
| ---------------- | -------- | -------------------------- | -------- |
| url              | string   | 클라이언트가 실행한 영상   | FALSE    |
| bitrate_resource | Number[] | 제공되는 bitrate 정보      | FALSE    |
| resolution       | Object[] | width, height              | FALSE    |
| stream_type      | String   | 스트리밍 종류              | FALSE    |
| protocol         | String   | 비디오 스트리밍 프로토콜   | FALSE    |

---
#### Response

| Name | Type   | Description                 |
| ---- | ------ | --------------------------- |
| \_id | String | 생성한 document의 object id |


### 3. 미디어 재생 관련 심화 기능
      - 해상도 설정 기능
      - 배속 기능
### 4. 동영상 스트리밍 품질 데이터 저장
### 4.1 Get, 어느 타이밍마다 전송..?
### 5. 동영상 시청 기록 및 품질 데이터를 이용한 시각화 and/or 킬러 기능 제공 
### 5.1 UI 어떻게?
### 6. Good User Experience
