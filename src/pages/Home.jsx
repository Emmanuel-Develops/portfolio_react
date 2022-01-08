import { useState, useEffect } from "react"
import Spinner from "../components/Spinner"
import Card from "../components/Card"
import 'animate.css'
// import abstractBlue from '../resources/images/abstract_blue.png'
import {getProjects} from "../store/data"
import Modal from "../components/Modal"


const Home = () => {
    const projectData = getProjects()
    const [projects, setProjects] = useState(projectData)
    const [selectedProject, setSelectedProject] = useState(projectData[0])
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [gearVisible, setGearVisible] = useState(true)

    const handleModal = (id) => {
        setSelectedProject(projects[id])
        setIsModalVisible(true)
    }

    useEffect(() => {

        if (isModalVisible) {
            document.body.style.display = 'block'
            document.body.style.overflow = 'hidden'
        }
        if (!isModalVisible) {
            document.body.style.display = ''
            document.body.style.overflow = 'visible'
        }
    }, [isModalVisible])

    return (
        <div className={`bg-cover bg-slate-200 dark:bg-slate-900 min-h-screen ${isModalVisible && ''}`}>
            <Modal project={selectedProject} visibility={isModalVisible} setVisibility={setIsModalVisible}/>
            <div className={`max-w-6xl mx-auto px-2 md:px-4 ${isModalVisible && 'overflow-hidden'}`}>
                <div className="flex justify-center items-center gap-x-8 min-h-[80vh]">
                    <h1 className="font-bold text-3xl lg:text-5xl capitalize text-blue-500">In development</h1>
                    <Spinner/>
                </div>
                <div className="relative w-full py-4">
                    <div className={`gear relative w-fit text-xl md:text-3xl -left-2 ${!gearVisible && "invisible"}` } onAnimationEnd={() => setGearVisible(false)}>⚙️</div>
                    <div className="underline h-2 rounded-md bg-violet-400 -left-2 "></div>
                </div>
                <div className="text-center text-slate-400 text-sm md:text-base font-osans font-medium ">
                    <p className="animate__animated animate__fadeIn animate__delay-2s">while you're here, <span className="text-md lowercase text-slate-500">Checkout some of my projects below ...</span> </p>
                </div>
                <div className="animate__animated animate__fadeInLeft animate__delay-3s mt-6 md:mt-24">
                    <h2 className="font-medium text-2xl text-blue-500 py-4">Feature Projects</h2>
                    <div className="">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                            {projects && projects.map((project) => (
                                <Card key={project.id} project={project} handleClick={handleModal}/>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex gap-x-4 font-bold text-center items-center justify-center mt-20 pb-5">
                    <span className="dark:text-blue-400">Contact me:</span>
                    <a href='https://github.com/Emmanuel-Develops' target='_blank' rel="noreferrer">
                        <i className="fa-brands fa-github text-xl text-purple-400 hover:text-purple-200"></i>
                    </a>
                    <a href='https://www.linkedin.com/in/emmanuel-itakpe' target='_blank' rel="noreferrer">
                        <i className="fa-brands fa-linkedin-in text-xl text-purple-400 hover:text-purple-200"></i>
                    </a>
                    <a href='mailto:itakpeemma@gmail.com' target='_blank' rel="noreferrer">
                        <i className="fa-solid fa-envelope text-xl text-purple-400 hover:text-purple-200"></i>
                    </a>
                    <a href='https://twitter.com/iPreferNoel' target='_blank' rel="noreferrer">
                        <i className="fa-brands fa-twitter text-xl text-purple-400 hover:text-purple-200"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home
