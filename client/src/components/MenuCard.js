import React from "react";
import '../layout/MenuCard-style.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Card = ({ item }) => {
    return (
        <>
            <div className='card text-center shadow'>
                <div className='row'>
                    {item.map((Val) => {
                        return (
                            <div
                                className="col-md-4 col-sm-6 card my-2 py-3 card text-center"
                                key={Val.id}
                            >
                                <div className="overflow">
                                    <img src={Val.displayImage} alt={Val.displayName} className="card-img-top" />
                                </div>
                                <div className="card-body text-dark">
                                    <div className="card-text text-secondary">
                                        {Val.displayName}
                                        {Val.size}
                                    </div>
                                    <div className="card-text">{Val.description}</div>
                                </div>
                                <a href="#" className="btn btn-outline-success">
                                    Detail
                                </a>
                            </div>

                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Card;