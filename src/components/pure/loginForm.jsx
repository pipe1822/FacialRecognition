import React from 'react';
import '../../styles/login.css'
import Logo from '../../resources/logo.webp'
import { Link } from 'react-router-dom';

const LoginForm = () => {
    return (
        <form className='text-white form-login mx-auto m-auto rounded-xl py-10 px-8 flex flex-col shadow-md login'>
            <div className='logo mb-10 flex items-center justify-center'>
                <img src={Logo} />
                <h1 className='uppercase text-4xl tracking-tight ml-5'>Validation <br />Software</h1>
            </div>
            <div className="grid grid-cols-2 gap-6">
                <div className="relative z-0 mb-10 w-full group">
                    <input type="text" name="firstName" id="firstName" className="input block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " required />
                    <label htmlFor="firstName" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre/s</label>
                </div>
                <div className="relative z-0 mb-10 w-full group">
                    <input type="text" name="lastName" id="lastName" className="input block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " required />
                    <label htmlFor="lastName" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellidos/s</label>
                </div>
            </div>
            <div className="relative z-0 mb-10 w-full group">
                <input type="email" name="email" id="email" className="input block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " required />
                <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mail</label>
            </div>
            <div className="relative z-0 mb-10 w-full group">
                <input type="number" name="identification" id="identification" className="input block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " required />
                <label htmlFor="identification" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Cédula</label>
            </div>

            <div className='flex items-center px-1'>
                <label className="text-sm font-medium">Subir imagen: huella dactilar</label>
                <input className="py-1 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none" id="file_input" type="file" required />
            </div>
            <Link to={'/validation-software/validation'} className='mx-auto'>
                <button type="submit" id='button-submit' className="text-white opacity-90 hover:opacity-100 focus:ring-4 font-medium rounded-lg text-sm px-3 py-2.5 focus:outline-none mt-8 transition-all">Iniciar sesión</button>
            </Link>
        </form>
    );
}

export default LoginForm;
