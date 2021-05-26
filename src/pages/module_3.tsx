import React from 'react';
import { Typography, Button } from 'antd';
import { getAntd, getOther } from '@/common/api';
const { Text } = Typography;

const Module3: React.FC = () => {
    const [desc, setDesc] = React.useState<string>('');
    const [href, setHref] = React.useState<string>('');
    const [other, setOther] = React.useState<any>(null);
    React.useEffect(() => {
        getAntd().then((res) => {
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
        <h4><b>Antd</b></h4>
        <p><a href={href}>{desc}</a></p>
        {
            other ?
                JSON.stringify(other) :
                <Button type="primary" onClick={() => {
                    getOther().then((res) => {
                        if (res) {
                            setOther(res);
                        }
                    });
                }}>get other</Button>
        }
    </Text>;
};
export default Module3;
