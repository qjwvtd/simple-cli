import React from 'react';
import { Typography } from 'antd';
import { getUser } from '@/common/api/user';
const { Text } = Typography;

const Module2: React.FC = () => {
    const [name, setName] = React.useState<string>('');
    React.useEffect(() => {
        getUser().then((res) => {
            console.log(res);
            setName(res?.data?.name);
        });
    }, []);
    return <Text strong>
        <b>{ name } say:</b><br />
        AntV
        是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、不限可能的数据可视化最佳实践。得益于丰富的业务场景和用户需求挑战，AntV
        经历多年积累与不断打磨，已支撑整个阿里集团内外 20000+ 业务系统，通过了日均千万级 UV
        产品的严苛考验。
        我们正在基础图表，图分析，图编辑，地理空间可视化，智能可视化等各个可视化的领域耕耘，欢迎同路人一起前行。
    </Text>;
};
export default Module2;
