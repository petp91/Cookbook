//import { Container, Image } from 'react-bootstrap';
//import logo from '../assets/logo-512px.png'

import "../layout/HomePage.css";
import { Link } from 'react-router-dom';



const HomePage = () => {

    return (
        <div className="home-page">
            <header className="hero">
                <h1 className="title">Welcome to Our Website</h1>
                <p className="subtitle">Discover these amazing pizza recipes.</p>
                <Link to="/recipes" className="cta-button">
                    Get Started
                </Link>
            </header>

            <section className="features">
                <div className="feature">
                    <i className="fas fa-search"></i>
                    <h3 className="feature-title">Search Recipes</h3>
                    <p className="feature-description">Find delicious recipes for any occasion</p>
                </div>
                <div className="feature">
                    <i className="fas fa-book"></i>
                    <h3 className="feature-title">Recipe Collections</h3>
                    <p className="feature-description">Explore curated collections of recipes</p>
                </div>
                <div className="feature">
                    <i className="fas fa-heart"></i>
                    <h3 className="feature-title">Save Favorites</h3>
                    <p className="feature-description">Save your favorite recipes for quick access</p>
                </div>
            </section>

            <section className="testimonial">
                <h3 className="testimonial-title">Reviews from our users:</h3>
                <div className="testimonial-table">

                    <div className="testimonial-row">
                        <div className="testimonial-cell">
                            <div className="testimonial-content">
                                <p className="quote">"The pizza recipes on this site are amazing! I've tried several and they always turn out delicious."</p>
                                <p className="author">- John Smith</p>
                            </div>
                        </div>
                        <div className="testimonial-cell">
                            <div className="testimonial-content">
                                <p className="quote">"As a pizza lover, I appreciate the variety of recipes available here. It's like a pizza paradise!"</p>
                                <p className="author">- Emily Johnson</p>
                            </div>
                        </div>
                        <div className="testimonial-cell">
                            <div className="testimonial-content">
                                <p className="quote">"I've been searching for the perfect pizza dough recipe, and I finally found it on this site. Highly recommended!"</p>
                                <p className="author">- David Anderson</p>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-row">
                        <div className="testimonial-cell">
                            <div className="testimonial-content">
                                <p className="quote">"The step-by-step instructions make it easy to follow the recipes. Thanks to this site, I can now make homemade pizza like a pro."</p>
                                <p className="author">- Sarah Thompson</p>
                            </div>
                        </div>
                        <div className="testimonial-cell">
                            <div className="testimonial-content">
                                <p className="quote">"I'm a fan of thin-crust pizza, and this site has some fantastic thin-crust recipes. My family loves it!"</p>
                                <p className="author">- Michael Davis</p>
                            </div>
                        </div>
                        <div className="testimonial-cell">
                            <div className="testimonial-content">
                                <p className="quote">"The toppings combinations on this site are creative and delicious. I've discovered new flavor combinations I never thought of before."</p>
                                <p className="author">- Jennifer Rodriguez</p>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-row">
                        <div className="testimonial-cell">
                            <div className="testimonial-content">
                                <p className="quote">"Being able to customize and create your own pizza recipe is a great feature. It's fun experimenting with different flavors."</p>
                                <p className="author">- Andrew Wilson</p>
                            </div>
                        </div>
                        <div className="testimonial-cell">
                            <div className="testimonial-content">
                                <p className="quote">"The site provides useful tips and tricks for achieving the perfect pizza. My pizzas have improved significantly since I started using this resource."</p>
                                <p className="author">- Jessica Lee</p>
                            </div>
                        </div>
                        <div className="testimonial-cell">
                            <div className="testimonial-content">
                                <p className="quote">"The site has a great selection of gluten-free pizza recipes. Finally, I can enjoy a tasty pizza without worrying about gluten."</p>
                                <p className="author">- Christopher Martinez</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


        </div>
    );
};

export default HomePage;
