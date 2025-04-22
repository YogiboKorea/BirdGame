// server.js
const express = require('express');
const path    = require('path');

const app  = express();
const PORT = process.env.PORT || 3000;

// public 폴더 안의 index.html을 / 요청에 자동으로 서빙합니다.
app.use(express.static(path.join(__dirname, 'public'), {
  index: 'index.html'
}));

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});

