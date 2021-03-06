import React from 'react';
import "./Home.css"
import Laptop from "../../images/banner.png"
import useCustomer from '../../Hook/useCustomer';
import Customer from '../Customer/Customer';
import CustomLink from '../CustomLink/CustomLink';

const Home = () => {
    const [customers] = useCustomer()
    return (
        <div className='container'>
            <div className="row align-items-center justify-content-between g-5">
                <div className="col-lg-6">
                    <h1 className='heading mt-5 font-monospace fw-bold text-secondary'>Honda Motor</h1>
                    <h1 className='heading text-success fs-2 fw-bold font-monospace'>A product of Fidelity</h1>
                    <p className='font-monospace text-secondary'>Honda Motor Company, Ltd. is a Japanese public multinational conglomerate manufacturer of automobiles, motorcycles, and power equipment, headquartered in Minato, Tokyo, Japan</p>
                    <button className='btn-success border-0 p-2 rounded'>Buy Now</button>
                </div>
                <div className="col-lg-6">
                    <img className='img-fluid w-100' src={Laptop} alt="" />
                </div>
            </div>
            <div className='container mt-3'>
                <h2 className='text-center text-success'>Customer Reviews</h2>
            </div>
            <div className="container mt-5 grid">
                {
                    customers.slice(0, 3).map(customer => <Customer
                        key={customer.id}
                        customer={customer}
                    ></Customer>)
                }
            </div>
            <div className='d-flex justify-content-center mt-2 mb-5'>
                <CustomLink to="/reviews" className="btn-success p-2 rounded">More Reviews</CustomLink>
            </div>
        </div>
    );
};

export default Home;