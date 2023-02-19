import React from 'react';
import { Button } from 'react-bootstrap';
import {Link} from "react-router-dom";

const RedirectButton = ({ text, link }) => {
    return (
        <Link to={link}>
            <Button variant="dark">{text}</Button>
        </Link>
    );
};

export default RedirectButton;
