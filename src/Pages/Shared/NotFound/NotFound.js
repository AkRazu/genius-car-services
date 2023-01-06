import React from 'react';
import sleeping from '../../../images/404.jpg'
const NotFound = () => {
    return (
        <div >
            <h2 className='text-primary text-center mt-1'>Mechanic is sleeping</h2>
            <div className="d-flex justify-content-center" >
            <img className='w-50 ' src={sleeping} alt="" />
            </div>
        </div>
    );
};

export default NotFound;