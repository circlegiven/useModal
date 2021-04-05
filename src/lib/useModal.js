import 'rc-dialog/assets/index.css';
import 'rc-dialog/assets/bootstrap.css';
import React, { useState, useCallback } from 'react';
import Dialog from "rc-dialog";
import Draggable from 'react-draggable';


function UseModal() {

    const [visible, setVisible] = useState(false);
    const [disabled, setDisabled] = useState(false);

    function open() {
        setVisible(true);
    }

    function close() {
        setVisible(false);
    }

    const Component = useCallback(({ title, Footer, children}) => {


        return (
            <Dialog visible={visible} onClose={close} title={(
                <div className={'title'}
                    style={{
                        width: '100%',
                        cursor: 'pointer',
                    }}
                    onFocus={ () => {} }
                    onBlur={ () => {}}
                    // end
                >modal</div>
                )}
                modalRender={modal => <Draggable handle=".title" disabled={disabled}>{modal}</Draggable>}

            >
                <div
                    style={{
                        height: 200,
                    }}
                >
                    <input value={'test'}/>
                    Day before yesterday I saw a rabbit, and yesterday a deer, and today, you.
                </div>
            </Dialog>
        )
    }, [visible]);

    return [open, close, Component];
}
export default UseModal;
