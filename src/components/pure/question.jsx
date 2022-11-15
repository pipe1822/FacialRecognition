import React from 'react';

const Question = ({ questionIndex, question, options }) => {
    return (
        <div className='my-14 text-left question mx-auto'>
            <h1 className='text-2xl mb-4 tracking-tighter text-white'>{question}</h1>
            <ol className='list-decimal'>
                {options.map((option, index) => (
                    <li className='mb-1' key={index}>
                        <input required id={`o${questionIndex}${index}`} name={questionIndex} type={'radio'} />
                        <label className='cursor-pointer text-lg tracking-tighter text-gray-500 leading-none ml-2' htmlFor={`o${questionIndex}${index}`}>{option.name}</label>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Question;
