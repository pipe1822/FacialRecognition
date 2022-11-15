import React, { useRef } from 'react';

const Search = ({ searchUser }) => {

    const inputRef = useRef()

    return (
        <div className='my-10 flex justify-center'>
            <input required ref={inputRef} className='my-5 px-5 py-2 rounded-lg' type={'number'} placeholder='Buscar por cédula' />
            <button onClick={() => searchUser(inputRef.current.value)} className='ml-3 cursor-pointer buscador opacity-90 hover:opacity-100' type={'submit'} >Buscar</button>
        </div>
    );
}

export default Search;
