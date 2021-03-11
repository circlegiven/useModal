import React, {forwardRef, useImperativeHandle, useState, useRef} from 'react';
import { InputGroup, Input, ButtonToolbar, Button} from "rsuite";
import useModal from '../lib/useModal';

const styles = {
    marginBottom: 10
};

const Contents = forwardRef((props, ref) => {

    const [values, setValues] = useState({
        id: '',
        password: ''
    });

    // 외부에서 참조할 목록
    useImperativeHandle(ref, () => ({
        data: values
    }));

    function handleChangeId(value) {
        setValues({...values, id: value});
    }

    function handleChangePassword(value) {
        setValues({...values, password: value});
    }

    return (
       <>
           <InputGroup style={styles}>
               <InputGroup.Addon>ID</InputGroup.Addon>
               <Input value={values.id} onChange={handleChangeId}/>
           </InputGroup>
           <InputGroup style={styles}>
               <InputGroup.Addon>PASSWORD</InputGroup.Addon>
               <Input value={values.password} type={'password'} onChange={handleChangePassword}/>
           </InputGroup>
       </>
    );
});

const BottomButtons = ({ onClose, onConfirm }) => {

    function handleClose() {
        if (onClose) {
            onClose();
        }
    }

    function handleConfirm() {
        if (onConfirm) {
            onConfirm();
        }
    }

    return (
        <ButtonToolbar>
            <Button onClick={handleClose}>close</Button>
            <Button onClick={handleConfirm}>confirm</Button>
        </ButtonToolbar>
    );
}

const AddModal = forwardRef(({ onConfirm }, ref) => {

    const [open, close, Modal] = useModal();
    const contents = useRef(null);

    // 외부에서 참조할 목록
    useImperativeHandle(ref, () => ({
        open: open
    }));

    function handleClose() {
        close();
    }

    function handleConfirm() {
        close();
        if (onConfirm) {
            onConfirm(contents.current.data);
        }
    }

    return (
        <Modal Footer={ <BottomButtons onClose={handleClose} onConfirm={handleConfirm}/> }>
            <Contents ref={contents}/>
        </Modal>
    )
});

export default AddModal;
