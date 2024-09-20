# Camping location infomation provide

<div align="center">
<img width="329" alt="image" src="https://github.com/user-attachments/assets/5b87ead5-73ff-4790-a7c1-01420f09274c">

</div>

# 프로젝트 정보

> **Codelab Academy AICC first project team seven** <br/> **개발기간: 2024.08.22 ~ 2024.09.04**

## 배포 주소

> **프론트 서버** : [https://campingfront.cmehapdls.com](https://campingfront.cmehapdls.com)<br> **백엔드 서버** : [https://campingback.cmehapdls.com](https://campingback.cmehapdls.com)

## 개발 팀 소개

최민경

- github address : https://github.com/choimings
- role : frontend, design

정민석

- github address : https://github.com/Jeongminseok-web
- role : backend, database

## 프로젝트 소개

AICC 수업 내용으로서, html, css, javascript 학습을 토대로 react.js를 활용한 사이트를 제작하였습니다.
사이트 제작의 주제는 team six에서 의뢰를 받았습니다.
캠핑장 위치 정보 제공 사이트를 통해 대한민국 고캠핑에 등록되어 있는 캠핑장 정보를 알 수 있습니다.

---

## 주요 기능

### ⭐️ 다양한 카테고리별 캠핑장 정보

- 지역을 선택하면 해당 지역에 위치하는 캠핑장 정보를 알 수 있습니다.
- 특정 테마를 선택하면 테마를 태그로 지니고 있는 캠핑장 정보를 알 수 있습니다.

### ⭐️ 인기순 캠핑장 정보

- 고캠핑 사이트 기준 조회순 상위 20개의 캠핑장 정보를 알 수 있습니다.

### ⭐️ 캠핑장 저장

- visited 페이지에 관심이 있거나 방문했던 캠핑장을 저장할 수 있습니다. (구글 로그인 필수)

### ⭐️ 캠핑장 리뷰 작성 (추가 개발 사항)

- review 페이지의 + 버튼을 이용하여 방문했던 캠핑장에 대한 별점, 후기, 날짜를 기록할 수 있습니다.
- 구글 로그인을 필수로 하지만 작성된 리뷰는 로그인 없이도 열람할 수 있습니다.

---

#### You can check the locations of various campsites.

As part of the AICC course content, we created a website using React.js based on our learning of HTML, CSS, and JavaScript.
The theme of the website was commissioned by Team Six.
Through this camping location information website, you can access information about campsites registered with GoCamping in South Korea.

#### Our website supports the following features:

1. Campsite locations by region
2. Campsite locations by theme
3. Top 20 most popular campsites
4. Save campsites you've visited or are interested in
5. Camping Site Review (Additional Development Features)

## 시작 가이드

### Requirements

For building and running the application you need:

- [Node.js 20.15.1](https://nodejs.org/en)
- [npm 10.7.0](https://www.npmjs.com/package/download)

### Installation

```bash
$ git clone https://github.com/choimings/camping_front.git
$ cd camping_front
```

#### Run

```
$ cd camping_front
$ npm i
$ npm start
```

---

## Stacks 🐈

### Environment

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)

### Config

![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

### Development

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

---

## 화면 구성 📺

|                                               메인 페이지                                                |                                               지역 페이지                                                |
| :------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------: |
| <img width="329" src="https://github.com/user-attachments/assets/73aadabb-6c14-4f25-879b-bdcd3b1e1666"/> | <img width="329" src="https://github.com/user-attachments/assets/a728e447-c5c9-4240-933d-1b2374f65123"/> |
|                                               테마 페이지                                                |                                               인기 페이지                                                |
| <img width="329" src="https://github.com/user-attachments/assets/56a68da3-39f3-4592-b541-77bd47e0cc63"/> | <img width="329" src="https://github.com/user-attachments/assets/4e10ae01-b00e-4fff-bd94-6e909ef5040e"/> |
|                                          방문 페이지(로그인 O)                                           |                                          방문 페이지(로그인 X)                                           |
| <img width="329" src="https://github.com/user-attachments/assets/19668b6a-93a3-4cb8-ad7b-f5f7db7c1c75"/> | <img width="329" src="https://github.com/user-attachments/assets/9b5c342f-2915-4058-a810-ddfd5f60a967"/> |
|                                       리뷰 페이지(추가 개발 사항)                                        |                                          리뷰 페이지(리뷰 작성)                                          |
| <img width="329" src="https://github.com/user-attachments/assets/8ddc90bb-74eb-4d48-904a-72e3413173e6"/> | <img width="329" src="https://github.com/user-attachments/assets/5e94083e-bbca-44ef-bfd5-7f99c5ec38af"/> |

## flowchart

### front

<div align="center">
<img width="329" alt="image" src="https://github.com/user-attachments/assets/86f7a2b6-52e0-4f8d-b324-11d369a57762">

</div>

### back

<div align="center">
<img width="329" alt="image" src="https://github.com/user-attachments/assets/c7618727-9188-45e7-b7c7-6f7cf7dd373c">

</div>

### front-back-db

<div align="center">
<img width="329" alt="image" src="https://github.com/user-attachments/assets/19e24418-89f1-487e-854e-1e11a48c75f0">

</div>
