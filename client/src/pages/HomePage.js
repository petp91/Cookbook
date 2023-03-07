import { Container, Image } from 'react-bootstrap';
import logo from '../assets/logo-512px.png'

const HomePage = () => {
    return (
        <Container fluid className='d-flex justify-content-center'>
            <Image src={logo} fluid className='m-5'></Image>
        </Container>
    );
};

export default HomePage;
