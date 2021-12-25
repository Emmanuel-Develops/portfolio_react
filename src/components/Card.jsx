import jsGame from '../resources/images/projects/jsGame.jpg'

const Card = ({project}) => {
    return (
        <div className='relative mx-auto w-full aspect-video bg-sky-300 rounded-xl overflow-hidden'>
            <div className='absolute w-full h-full bg-overlay'></div>
            <div className=' bg-cover  rounded-xl'>
                <img className='w-full h-full bg-contain' style={{objectFit: 'cover'}} src={project.imgURL} alt="" />
                <div className='absolute bottom-0 flex flex-col gap-y-3 w-full text-left py-2 px-2 blur-filter'>
                    <h1 className=' font-bold text-purple-400'>{project.title}</h1>
                    <p className='clamp-text text-slate-400 leading-none line-clamp-2'>{project.description}</p>
                    <div className='flex items-center gap-x-2'>
                        <a href={project.ghLink} target='_blank'>
                            <i className="fa-brands fa-github text-xl text-purple-400 hover:text-purple-200"></i>
                        </a>
                        {project.liveLink && (
                            <a href={project.liveLink} target='_blank'>
                                <i className="fa-solid fa-link text-xl text-purple-400 hover:text-purple-200"></i>
                            </a>
                        )}
                        <p className={`${project.isCompleted ? 'bg-purple-400' : 'bg-amber-400' } text-black px-2 py-1 ml-auto rounded-l-lg`}>{project.isCompleted ? 'completed' : 'ongoing'}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
