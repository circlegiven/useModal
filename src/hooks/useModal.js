import React, { useState, useCallback } from 'react';
import { Modal as DefaultModal } from 'antd';
import Draggable from 'react-draggable';


function UseModal(Component) {

    const [visible, setVisible] = useState(false);
    const [contentProps, setContentProps] = useState(null);

    function open(params) {
        setContentProps(params);
        setVisible(true);
    }

    function close() {
        setContentProps(null);
        setVisible(false);
    }

    const Modal = useCallback(props  => {

        return (
            <DefaultModal {...props}
                   visible={visible}
                   onCancel={close}
                   modalRender={modal => <Draggable disabled={props?.draggable !== true}>{modal}</Draggable>}
            >
                <Component {...contentProps} />
            </DefaultModal>
        )
    }, [visible]);

    return [open, Modal];
}
export default UseModal;
