import React from 'react';
import { Link } from 'react-router-dom';

const Results = ({ pass, message }) => {
    return (
        <div className='w-full h-screen bg-p bg-opacity-100 fixed top-0 left-0 flex justify-center items-center mx-auto'>
            <div className='modal-results py-10 px-7 rounded-lg'>
                <div className='flex justify-center flex-col text-center'>
                    {pass !== null ? (pass ?
                        <h1 className='mb-5'>Felicitaciones haz pasado la prueba</h1>
                        :
                        <div className='mb-5'>
                            <h1>Lo sentimos no haz pasado la prueba</h1>
                            <span className='text-white text-lg'>{message}</span>
                        </div>)
                        :
                        <div className='mb-5'>
                            <h1>Ha ocurrido algo inesperado</h1>
                            <span className='text-white text-lg'>{message}</span>
                        </div>
                    }
                    <p className='mb-5 text-white text-sm'>Te enviaremos un mail con la información y la documentación correspondiente</p>
                    <Link className='buttonLink mb-0' to={'/validation-software/'}>Volver al inicio</Link>
                </div>
            </div>
        </div>
    );
}

export default Results;
