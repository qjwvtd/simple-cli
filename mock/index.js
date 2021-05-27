const login = require('./login.js');
module.exports = {
    'get /api/react': {
        desc: '用于构建用户界面的 JavaScript 库',
        href: 'https://react.docschina.org/'
    },
    'GET /api/typescript': (req, res) => {
        const result = {
            href: 'https://www.tslang.cn/',
            desc: 'TypeScript是JavaScript类型的超集，它可以编译成纯JavaScript。'
        };
        res.json(result);
    },
    'get /api/antd': {
        href: 'https://ant.design/docs/react/introduce-cn',
        desc: 'antd 是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品'
    },
    ...login
};