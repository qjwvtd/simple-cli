import { Modal } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

export default function Confirm(options: any, okFn: Function, cancalFn: Function) {
    const opt = { ...options };
    delete options.onOk;
    delete options.onCancel;
    Modal.confirm({
        ...opt,
        icon: QuestionCircleOutlined,
        onOk: () => {
            okFn();
        },
        onCancel: () => {
            cancalFn ? cancalFn() : null;
        }
    });
}
