var path = require('path');
var express = require('express');
var cors = require('cors');
var app = express();
var port = 3000;
var mockFile = path.resolve(__dirname,'../mock/index.ts');
var mockJson = require(mockFile);
// 处理跨域
app.use(
    cors({
        orgin: 'localhost:' + port
    })
);
//mock service
for (let mockApi in mockJson) {
    const api = mockApi;
    const data = mockJson[mockApi];
    app.get(api, function (req, res) {
        res.json({
            code: 200,
            data: data,
            message: 'success'
        });
    });
};
//服务
app.listen(port, function () {
    console.log('server is started success,listening on port:' + port);
});
