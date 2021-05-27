import React from 'react';
import { Typography } from 'antd';
import { getTypescript } from '@/common/api';
const { Text } = Typography;

const Module2: React.FC = () => {
    const [desc, setDesc] = React.useState<string>('');
    const [href, setHref] = React.useState<string>('');
    React.useEffect(() => {
        getTypescript().then((res) => {
            console.log(res);
            const resDesc = res?.data?.desc;
            const resHref = res?.data?.href;
            if (resDesc) {
                setDesc(resDesc);
            }
            if (resHref) {
                setHref(resHref);
            }
        });
    }, []);
    return <Text strong>
        <h4><b>Typescript</b></h4>
        <p><a href={ href } target="_blank">{ desc }</a></p>
    </Text>;
};
export default Module2;
