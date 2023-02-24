import Container from 'react-bootstrap/esm/Container';
import Menu from '../components/Menu'
import logo from '../assets/logo-400px.png'

const HomePage = () => {
    return (
        <div>
            <Menu />
            <h1>Home Page</h1>
            <p>Sem přijde menu a logo</p>
            <Container className='d-flex justify-content-center'>
                <img src={logo} alt='logo'></img>
            </Container>

        </div>
    );
};

export default HomePage;
