import { Link } from 'react-router-dom';
import '../layout/NotFound.css';

const NotFound = () => {
    return (
        <body>
            <div className="vertical-center">
                <div className="container-notFound">
                    <div id="notfound" className="text-center">
                        <h1>😮</h1>
                        <h2>Oops! Page Not Found</h2>
                        <p>Sorry, but the page you are looking for does not exist.</p>
                        <Link to="/" className="nav-link">Back to homepage</Link>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default NotFound;
