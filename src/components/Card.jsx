import React from 'react'
import jsGame from '../resources/images/projects/jsGame.jpg'

const Card = () => {
    return (
        <div className='mx-auto w-full p-3 bg-sky-300'>
            <div className='relative bg-overlay bg-cover h-[150px]'>
                <img className='w-full h-full bg-contain' src={jsGame} alt="" />
                <h1 className='absolute bottom-0 w-full text-left py-2 px-2 font-medium text-white'>Title</h1>
            </div>
        </div>
    )
}

export default Card
