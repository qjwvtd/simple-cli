import React from 'react';
import { Typography } from 'antd';
import { getGirl } from '@/common/api/public';
const { Text } = Typography;
const Module1: React.FC = () => {
    const [name, setName] = React.useState<string>('HanMeimei');
    React.useEffect(() => {
        getGirl().then((res) => {
            console.log(res);
            const resName = res?.data?.name;
            if (resName) {
                setName(resName);
            }
        });
    }, []);
    return <Text strong>
        <b>{ name }</b>牌酸菜鱼采用特殊的制作工艺,做出的酸菜鱼不仅口感好,而且营养价值也特别高,受到无数消费者的高度认可。由于它拥有秘制的配方,让同行无法模仿,能够让加盟商轻松在市场上立足。
    </Text>;
};
export default Module1;
