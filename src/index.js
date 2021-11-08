//npm init -y
//npm install --save express
//nodemon 설치 -> npm i -g nodemon  / npm i -g nodemon@특정버젼

const path = require('path');
// html의 위치를 알려주기 위해서 라이브러리를 임포트 해야함
const express = require('express'); // 라이브러리 임포트
// import express from 'express' => 🧨 ES6 Syntax <- 쓸수없음
const app = express();
const publicDirectoryPath = path.join(__dirname, '../ts_server/public');
app.use(express.static(publicDirectoryPath));

// //route handler
// app.get('/', (req, res) => {
//   res.send('안녕하세요!');
// });

// app.get('/help', (req, res) => {
//   res.send('어떤 도움이 필요하십니까?');
// });

// app.get('/about', (req, res) => {
//   res.send('application 입니다.');
// });

//port number
app.listen(4000, () => {
  console.log('SERVER IS UP AND RUNNING PORT 4000');
});
