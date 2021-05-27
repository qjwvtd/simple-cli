var path = require('path');
var express = require('express');
var cors = require('cors');
var app = express();
var port = 3000;
var mockFile = path.resolve(__dirname,'../mock/index.js');
var mockJson = require(mockFile);
// 处理跨域
app.use(
    cors({
        orgin: 'localhost:' + port
    })
);
//mock service
for (let mockApi in mockJson) {
    const api = mockApi.split(' ');
    const result = mockJson[mockApi];
    const method = (api[0]).toLowerCase();
    const apiPath = api[api.length - 1];
    function callback(req, res) {
        if (typeof result === 'object') {
            res.json({code: 200,data: result,message: 'success'});
        }
        if (typeof result === 'function') {
            result(req, res);
        }
    }
    switch (method) {
        case 'get':
            app.get(apiPath, callback);
            break;
        case 'post':
            app.post(apiPath, callback);
            break;
        case 'delete':
            app.delete(apiPath, callback);
            break;
        case 'put':
            app.put(apiPath, callback);
            break;
    }
};
//服务
app.listen(port, function () {
    console.log('server is started success,listening on port:' + port);
});
