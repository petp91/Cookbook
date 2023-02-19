import React from 'react';
import { Container } from 'react-bootstrap';
import InfoCard from "../components/InfoCard";


const HomePage = () => {
    return (
        <Container className="d-flex justify-content-center align-items-center mt-5">
            <InfoCard />
        </Container>
    );
};

export default HomePage;
