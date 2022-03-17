import { Button, Layout } from 'antd';
import useModal from './hooks/useModal';
import AddContents from './components/AddContents';

const { Header, Footer, Content } = Layout;

function App() {

    const [modalOpen, Modal] = useModal(AddContents);
    const [dragModalOpen, DraggableModal] = useModal(AddContents);

    return (
        <>
            <Layout className="layout">
                <Header>
                    <h2>Modal Control</h2>
                </Header>
                <Content style={{ height: '100%' }}>
                    <Button onClick={modalOpen}>Modal</Button>
                    <Button onClick={dragModalOpen}>Draggable Modal</Button>
                </Content>
                <Footer style={{ textAlign: 'center' }}>useModal ©2018 Created by circlegiven</Footer>
            </Layout>
            <Modal title="Modal"/>
            <DraggableModal title="Draggable Modal" draggable/>
        </>

    );
}

export default App;
