const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const postsRouter = require('./routes/posts');

const app = express();
const port = 3000;

// 连接到 MongoDB
mongoose.connect('mongodb://localhost:27017/timeline', { useNewUrlParser: true, useUnifiedTopology: true });

// 使用body-parser中间件
app.use(bodyParser.json());

// 设置静态文件目录
app.use(express.static(path.join(__dirname, '../public')));

// 使用路由
app.use('/posts', postsRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
