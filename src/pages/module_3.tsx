import React from 'react';
import { Typography } from 'antd';
import {getProject } from '@/common/api/project';
const { Text } = Typography;

const Module3: React.FC = () => {
    React.useEffect(() => {
        getProject().then((res) => {
            console.log(res);
        });
    }, []);
    return <Text strong>
        2022 届校招火热进行中 ❤️ 如果你擅长
        React/Vue/Angular/JavaScript，热爱前端开发和开源技术氛围，追求极致的用户体验，欢迎发简历到
        mochen.zy@alibaba-inc.com，加入蚂蚁集团体验技术部，参与 Ant Design/Umi/语雀/AntV
        的开发，和支付宝一起成长。
    </Text>;
};
export default Module3;
