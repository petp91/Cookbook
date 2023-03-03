import { Container, Row, Col, Image } from 'react-bootstrap';
import logo from '../assets/logo-512px.png'

const HomePage = () => {
    return (
        <Container className='d-flex justify-content-center'>
            <Row className='justify-content-center pt-5'>
                <Col xs='8'>
                    <Image src={logo} fluid='true'></Image>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;
