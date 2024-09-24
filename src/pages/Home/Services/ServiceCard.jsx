import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const {_id, title, img, price } = service;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={img}
                    className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{title}</h2>
                <p className='text-xl text-orange-500'>Price: ${price}</p>
                <div className="card-actions justify-end pr-2">
                    <Link to={`/checkout/${_id}`}>
                    <button className="btn btn-primary">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;