import React from 'react'

const Modal = ({project, visibility, setVisibility}) => {

    return (
        <>
            <div 
                className={`fixed h-screen w-screen flex justify-center items-center z-10  ${visibility ? 'visible top[0%]' : 'invisible top-[100%]' }`}
                
            >
                <div 
                    className='absolute w-full h-full bg-neutral-900 bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-90'
                    onClick={() => setVisibility(false)}
                ></div>
                <div className='w-[80%] max-h-[800px] max-w-[1024px] z-10 bg-slate-200 dark:bg-slate-800 rounded-lg shadow-2xl shadow-purple-400/25 overflow-y-scroll remove-scroll-bar'>
                    
                    <div className="w-ful rounded-t-lg overflow-hidden" >
                        <img className='w-full aspect-video' style={{objectFit: 'cover'}} src={project.imgURL} alt="" />
                    </div>
                    <div className='flex flex-col h-full gap-y-3 w-full text-left py-2 px-2 blur-filter'>
                        <h1 className=' font-bold text-purple-400 text-lg sm:text-2xl text-center'>{project.title}</h1>
                        <p className='text-slate-400 leading-wide text-lg'>{project.description}</p>
                        <div className='relative h-full bottom-0 mt-10'>
                            <a href={project.ghLink} target='_blank' rel="noreferrer" className='flex w-auto gap-x-3 items-center justify-center bg-slate-900 hover:bg-gray-700 p-2 rounded-t-lg'>
                                <p className="text-lg text-purple-400">GitHub Link</p>
                                <i className="fa-brands fa-github text-xl text-purple-400 hover:text-purple-200"></i>
                            </a>
                            {project.liveLink && (
                                <a href={project.liveLink} target='_blank' rel="noreferrer" className='flex w-auto gap-x-3 items-center justify-center bg-slate-900 hover:bg-gray-700 p-2'>
                                    <p className="text-lg text-purple-400">Live Link</p>
                                    <i className="fa-solid fa-link text-xl text-purple-400 hover:text-purple-200"></i>
                                </a>
                            )}
                            <p className={`${project.isCompleted ? 'bg-purple-400' : 'bg-amber-400' } text-black text-right text-lg font-medium px-2 py-1 ml-auto rounded-b-lg`}>{project.isCompleted ? 'completed' : 'ongoing'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
