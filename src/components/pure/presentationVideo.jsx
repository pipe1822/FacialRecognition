import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PresentationVideo = () => {

    const [viewVideo, setViewVideo] = useState(false);

    setTimeout(() => {
        setViewVideo(true)
    }, 10000);


    return (
        <div className='flex flex-col overscroll-none'>
            <h1 className='text-white text-4xl text-left mb-2 uppercase ml-20 mt-10'>Introducción al curso</h1>
            <p className='text-white text-xl text-left mb-10 ml-20'>Te dejamos un video introductorio para que puedas realizar el curso satisfactoriamente</p>

            <div className='mx-20'>
                <h2 className='text-2xl text-white mt-10 mb-5 text-left'>Ten en cuenta las siguientes reglas para comletar el curso satisfactoriamente</h2>
                <ol className='list-disc text-white text-lg'>
                    <li>Ver el video por completo.</li>
                    <li>Poder contestar al menos el 70% de las preguntas.</li>
                    <li>Estar el 100% del tiempo frente a la pantalla.</li>
                    <li>Ser usted el que se encuentra haciendo el curso todo el tiempo.</li>
                    <li>Estar siempre completando el curso usted solo</li>
                </ol>

                <div className='text-left text-white mt-10 mb-10 text-lg'>
                    <span>En caso de no cumplir alguna de estas se le sumara un strike, excepto si cambia la persona que esta haciendo el curso que recibiría la sanción completa. Al llegar a los 4 strikes se le desaprobará el curso automaticamente.</span>
                    <span>Si tiene en cuenta toda esta lista y ha visualizado el video esta en condiciones de seguir con el curso</span>
                </div>
            </div>

            <Link className='buttonLink mt-10 mb-14' to={'/validation-software/curso/test'}>Ir al curso</Link>
        </div>
    );
}

export default PresentationVideo;
