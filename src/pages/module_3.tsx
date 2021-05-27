import React from 'react';
import { Typography, Button } from 'antd';
import { getAntd, login } from '@/common/api';
const { Text } = Typography;

const Module3: React.FC = () => {
    const [desc, setDesc] = React.useState<string>('');
    const [href, setHref] = React.useState<string>('');
    const [loginInfo, setLoginInfo] = React.useState<any>(null);
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
        <h4><b>Ant Design of React</b></h4>
        <p><a href={href} target="_blank">{desc}</a></p>
        {
            loginInfo ?
                JSON.stringify(loginInfo) :
                <Button type="primary" onClick={() => {
                    login().then((res) => {
                        if (res) {
                            setLoginInfo(res);
                        }
                    });
                }}>Login</Button>
        }
    </Text>;
};
export default Module3;
