# Rest API

## 1. 미디어 정보 제공

### 1.1 VOD 컨텐츠 목록 제공

Get Example
#### Request

| ID     | URL                        | HOST                        | METHOD |
| ------ | -------------------------- | --------------------------- | ------ |
| BA01-1 | /api/video/vod-list | http:// | GET    |

---

#### Response

| Name               | Type     | Description                                  |
| ------------------ | -------- | -------------------------------------------- |
| Video_info     | Object[]   | 6개 VOD 컨텐츠들의 정보                    |
| - video_id   | Integer     | 컨텐츠의 고유 ID                      |
| - url              | String   | 컨텐츠 주소                                  |
| - title | String | 컨텐츠의 제목                    |
| - description       | String | 컨텐츠의 정보                       |                |
| - thumb      | String   | 컨텐츠 썸네일 이미지 주소                                |
| - tags     | String   | 컨텐츠의 태그 정보                                |
| - streaming_type         | String   | VOD 컨텐츠인지 라이브 컨텐츠인지                     |

---

### 1.2 라이브 컨텐츠 목록 제공

Get Example
#### Request

| ID     | URL                        | HOST                        | METHOD |
| ------ | -------------------------- | --------------------------- | ------ |
| BA02-1 | /api/video/live-list | http:// | GET    |

---

#### Response

| Name               | Type     | Description                                  |
| ------------------ | -------- | -------------------------------------------- |
| Video_info     | Objec[]   | 6개 VOD 컨텐츠들의 정보                    |
| - video_id   | Integer     | 컨텐츠의 고유 ID                      |
| - url              | String   | 컨텐츠 주소                                  |
| - title | String | 컨텐츠의 제목                    |
| - description       | String | 컨텐츠의 정보                       |                |
| - thumb      | String   | 컨텐츠 썸네일 이미지 주소                                |
| - tags     | String   | 컨텐츠의 태그 정보                                |
| - streaming_type         | String   | VOD 컨텐츠인지 라이브 컨텐츠인지                     |

---

## 2. 동영상 스트리밍 품질 데이터 저장

사용자가 컨텐츠의 재생을 시작하면 해당 컨텐츠의 정보 및 스트리밍 품질 데이터를 서버로 전달하여 DB에 저장한다.

POST Example
### Request
|ID|URL|HOST|METHOD|
|---|---|---|---|
|BA03-1|/api/update-data|http://|GET|

---

### Parameter
| Name             | Type     | Description                | Required |
| ---------------- | -------- | -------------------------- | -------- |
| user_id              | Integer   | 사용자의 ID   | TRUE    |
| video_id | Integer | 재생한 컨텐츠의 ID      | TRUE    |
| time      | String   | 재생을 시작한 시각             | TRUE    |
| bandwidth         | Integer   | 사용자가 재생을 시작했을 때의 비트레이트   | TRUE    |

---
### Response

| Name | Type   | Description                 |
| ---- | ------ | --------------------------- |
| message | string | POST 성공 여부 |

---

## 3. 동영상 시청 기록 및 품질 데이터를 이용한 시각화

사용자의 컨텐츠 재생을 통하여 수집한 데이터를 가져와 시각화를 진행한다.

Get Example
### Request

| ID     | URL                        | HOST                        | METHOD |
| ------ | -------------------------- | --------------------------- | ------ |
| BA04-1 | /api/data/<user_id>| http:// | GET    |

---

### Parameter
| Name             | Type     | Description                | Required |
| ---------------- | -------- | -------------------------- | -------- |
| user_id              | Integer   | 사용자의 ID   | TRUE    |


### Response

| Name               | Type     | Description                                  |
| ------------------ | -------- | -------------------------------------------- |
| name     | String   | 사용자의 이름(닉네임)                    |
| watched_history   | Object[]     | 사용자가 최근 시청한 상위 5개의 컨텐츠 정보                     |
| - time              | String   | 시청 시각                                 |
| - title  | String | 컨텐츠의 제목                    |
| - thumb      | String   | 컨텐츠 썸네일 이미지 주소                                |
| far_past_history   | Object[]     | 사용자가 1달 이전에 시청한 상위 5개의 컨텐츠 정보                     |
| - time              | String   | 시청 시각                                 |
| - title  | String | 컨텐츠의 제목                    |
| - thumb      | String   | 컨텐츠 썸네일 이미지 주소                                |
| time_history      | Object[]   | 각 시간별로 사용자가 컨텐츠를 시청한 횟수                              |
| - time     | String   | 0~23시                              |
| - value     | Integer   | 해당 시간에 컨텐츠를 시청한 횟수                                |
| tag_history     | Object[]   | 사용자가 시청한 컨텐츠들의 태그 정보                                |
| - tag         | String   | 컨텐츠의 태그                     |
| - value         | Integer   | 해당 태그의 컨텐츠를 시청한 횟수                    |
| same_age_tag     | Object[]   | 사용자와 동일한 연령대의 다른 사용자들이 시청한 컨텐츠들의 태그 정보                                |
| - tag         | String   | 컨텐츠의 태그                     |
| - value         | Integer   | 해당 태그의 컨텐츠를 시청한 횟수                    |
| bandwidth_history     | Object[]   | 시간 별 사용자의 평균 비트레이트                                |
| - time         | String   | 컨텐츠를 시청한 시간                  |
| - avg_bandwidth         | Integer   | 해당 시간의 평균 비트레이트                   |



