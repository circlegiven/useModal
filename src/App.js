import { useRef } from 'react';
import {Container, Header, Content, ButtonToolbar, Button} from 'rsuite';
import useModal from './lib/useModal';
import AddModal from "./components/AddModal";

function App() {

    const [open, close, Modal] = useModal();
    const modal = useRef(null);

    function handleClickOpen() {
        open();
    }

    function handleClickCustomOpen() {
        modal.current.open();
    }

    return (
        <Container>
          <Container>
            <Header>
              <h2>Modal Control</h2>
            </Header>
            <Content>
                <ButtonToolbar>
                    <Button onClick={handleClickOpen}> Pure Modal</Button>
                    <Button onClick={handleClickCustomOpen}> Custom Modal</Button>
                </ButtonToolbar>
                <Modal title={'테스트에용'}>
                    TEST
                </Modal>
                <AddModal ref={modal} onConfirm={data => console.log(data)}/>
            </Content>
          </Container>
        </Container>
    );
}

export default App;
