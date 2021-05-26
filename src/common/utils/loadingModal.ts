import { Modal } from 'antd';

class LoadingModal {
    modal: any;
    constructor() {
        this.modal = null;
    }
    start(text: string): void {
        text = text || 'loading...';
        this.modal = Modal.warning({
            title: null,
            content: text,
            width: 320,
            className: '', //用这个class自定义样式
            maskClosable: false,
            icon: null,
            okText: null,
            cancelText: null
        });
    }
    end(): void {
        this.modal.destroy();
    }
}
export const loadingModal = new LoadingModal();
