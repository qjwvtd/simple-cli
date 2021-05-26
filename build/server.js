var express = require('express');
var cors = require('cors');
var app = express();
var port = 3000;
// 处理跨域
app.use(
    cors({
        orgin: 'localhost:' + port
    })
);
//project
app.get('/api/project', function (req, res) {
    // 定义列表
    var project = {
        code: 200,
        data: {
            id: 1,
            name: '双江口项目',
            address: '马尔康大渡河上源足木足河与绰斯甲河汇口处以下2 km河段'
        },
        message: 'success'
    };
    res.json(project);
});
//user
app.get('/api/user', function (req, res) {
    var user = {
        code: 200,
        data: {
            id: 123,
            name: 'Andy',
            age: 20
        },
        message: 'success'
    };
    res.json(user);
});
//登录
//服务
app.listen(port, function () {
    console.log('server is started success,listening on port:' + port);
});
