import {Container, Header, Content, ButtonToolbar, Button} from 'rsuite';
import useModal from './lib/useModal';

function App() {

    const [open, close, Modal] = useModal();

    function handleClickOpen() {
        open();
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
                </ButtonToolbar>
                <Modal title={'테스트에용'}>
                    TEST
                </Modal>
            </Content>
          </Container>
        </Container>
    );
}

export default App;
