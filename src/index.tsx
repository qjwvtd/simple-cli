import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import View from './pages/app';
/**
 * require less
 * **/
require('@/assets/style/index.less');

function App() {
    //antd国际化,默认中文
    return (
        <ConfigProvider locale={zhCN} componentSize={'middle'}>
            <View />
        </ConfigProvider>
    );
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
