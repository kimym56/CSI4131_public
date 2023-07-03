# OTT WebApp Test Plan

## Overview
이 테스트 계획은 react-django-aws S3로 구성된 OTT 앱의 테스트를 위한 전체적인 접근 방식과 테스트 케이스를 기술합니다. 테스트는 FE(프론트엔드)와 BE(백엔드) 간의 상호작용, DB에 저장된 영상 목록과 썸네일, 영상 정보, 영상 링크(m3u8) 등의 데이터 정확성, 기능적인 측면 등을 확인할 수 있도록 구성되었습니다.
## Environment 
- FE : ReactJS
- BE : Django
- DB : MongoDB, AWS S3 (미디어 서버)

## Test Preconditions
react-django-aws S3로 구성된 OTT 앱이 성공적으로 배포되었음.
DB에는 영상 목록과 썸네일, 영상 정보, 영상 링크(m3u8) 등의 데이터가 저장되어 있음.
FE와 BE 간의 통신이 정상적으로 이루어짐.

## Test Scenarios
### 1.Fetching Video Listings
#### 목적: DB에서 영상 목록을 가져오는 기능을 테스트함.
Test Step | Expected Result
--- | --- |
FE는 BE에게 영상목록을 요청함 | FE는 영상 목록을 정상적으로 받아와 ListContainer에 각각 표시함.
BE는 DB에서 영상 목록을 조회하여 FE에게 응답함. | 응답 성공 메세지를 전송하는 것을 확인함.
### 2. Fetching Video Thumbnails
#### 목적: DB에 저장된 영상 썸네일을 가져오는 기능을 테스트함.
Test Step | Expected Result
--- | --- |
FE는 BE에게 영상 썸네일을 요청함. | FE는 영상 썸네일을 정상적으로 받아와 VOD와 LIVE에 각각 표시함.
BE는 DB에서 영상 썸네일을 조회하여 FE에게 응답함. | 응답 성공 메세지를 전송하는 것을 확인함.
### 3. Fetching Video Information
#### 목적: DB에 저장된 영상 정보를 가져오는 기능을 테스트함.
Test Step | Expected Result
--- | --- |
DB에 저장된 영상 정보를 가져오는 기능을 테스트함. | FE는 영상 정보를 정상적으로 받아와 OTT_Container에 표시함.
BE는 DB에서 영상 정보를 조회하여 FE에게 응답함. | 응답 성공 메세지를 전송하는 것을 확인함.
### 4. Playing Videos
#### 목적: 영상 링크(m3u8)를 통해 영상을 재생하는 기능을 테스트함.
Test Step | Expected Result
--- | --- |
FE는 BE로부터 영상 링크(m3u8)를 받아옴. | 영상 재생 화면이 ReactPlayer에 전달됨.
FE는 영상 링크를 통해 영상을 재생함.| 영상 재생 화면이 정상적으로 나타나고 Adaptive Streaming을 통해 영상이 재생됨.
### 5. Data Visualization
#### 목적: 영상 링크(m3u8)를 통해 영상을 재생하는 기능을 테스트함.
Test Step | Expected Result
--- | --- |
FE는 BE로부터 사용자의 데이터를 받아옴. | 데이터를 파싱하여 TimeTable, PieTable, BandwidthTable, WatchedTable에 각각 표시함.
BE는 DB에서 데이터를 조회하여 FE에게 응답함.| 응답 성공 메세지를 전송하는 것을 확인함.
