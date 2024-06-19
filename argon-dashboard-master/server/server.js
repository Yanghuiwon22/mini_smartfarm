// server.js
// express 모듈 호출


import express from 'https://cdn.skypack.dev/express';
// const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

// localhost:4000 으로 접속하면 응답하는 api
app.get('/', (req,res) =>{
  res.send( {test:'Server Response Success'} );
})

// vscode 터미널에 찍힐 log
app.listen(PORT, () => {
  console.log(`Server run : http://localhost:${PORT}/`)
})

// 모듈 내보내기
module.exports = app;