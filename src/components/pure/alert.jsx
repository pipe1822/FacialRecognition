import React from 'react';

const Alert = ({ cause, strikes }) => {
    return (
        <div className='alert fixed right-3 top-60 flex flex-col text-white bg-red-600 px-4 py-2 rounded-lg'>
            <span>Acabas de sumar un strike {`(${strikes})`}</span>
            <span>Motivo: {cause}</span>
        </div>
    );
}

export default Alert;
