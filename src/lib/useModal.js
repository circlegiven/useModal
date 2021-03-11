import React, { useState, useCallback } from 'react';
import { Modal } from 'rsuite';

function UseModal() {

    const [visible, setVisible] = useState(false);

    function open() {
        setVisible(true);
    }

    function close() {
        setVisible(false);
    }

    const Component = useCallback(({ title, Footer, children}) => {


        return (
            <Modal show={visible} onHide={close}>
                <Modal.Header>
                    <Modal.Title>{ title }</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    { children }
                </Modal.Body>
                <Modal.Footer>
                    { Footer }
                </Modal.Footer>
            </Modal>
        )
    }, [visible]);

    return [open, close, Component];
}
export default UseModal;
