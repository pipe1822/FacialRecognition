import React from 'react';
import { Link } from 'react-router-dom';

const PayValidation = () => {
    return (
        <div className='w-full h-screen bg-p bg-opacity-100 fixed top-0 left-0 flex justify-center items-center mx-auto'>
            <div className='modal-results py-10 px-7 rounded-lg'>
                <div className='flex justify-center flex-col text-center'>
                    <p className='text-white text-sm'>Estamos validando tu pago, esto podría tomar unos segundos</p>
                </div>
            </div>
        </div>
    );
}

export default PayValidation;
