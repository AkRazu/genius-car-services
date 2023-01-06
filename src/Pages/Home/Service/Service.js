import React from 'react';
import './Service.css'
import { useNavigate } from "react-router-dom"

const Service = ({service}) => {
    const {id,name,price,description,img} = service;
    const navigate = useNavigate()
    const navigateToSErviceDetail = id=>{
        navigate(`/service/${id}`)
    }
    return (
        <div id='services' className='col-sm-6 col-md-3'>
            <div class="card h-100">
                <img src={img} class="card-img-top" alt="..."/>
                <div class="card-body text-center">
                    <h5 class="card-title">{name}</h5>
                    <p>${price}.00</p>
                    <p class="card-text">{description}</p>
                    <button onClick={()=> navigateToSErviceDetail(id)} className='btn btn-primary'>Book: {name}</button>
                </div>
            </div>
        </div>
    );
};

export default Service;