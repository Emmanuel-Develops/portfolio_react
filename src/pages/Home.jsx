import { useState, useEffect } from "react"
import Spinner from "../components/Spinner"
import Card from "../components/Card"
import 'animate.css'
// import abstractBlue from '../resources/images/abstract_blue.png'
import {getProjects} from "../store/data"
import veto from '../resources/images/projects/veto.jpg'


const Home = () => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        setProjects(getProjects)      
    }, [])

    // const project = {
    //     id: 0,
    //     imgURL: '../resources/images/projects/veto.jpg',
    //     title: 'Veto - a dApp for voting', 
    //     description: 'Veto is a decentralised app built on the celo blockchain. Its primary objective is to provide a platform to vote on various matters. Users can create their projects to vote on and create propositions that can be voted for regarding the project.',
    //     ghLink: 'https://github.com/Emmanuel-Develops/voting-celo-blockchain-app',
    //     liveLink: 'https://vetovote.netlify.app/',
    //     isCompleted: false
    // }

    return (
        <div className="bg-cover bg-slate-200 dark:bg-slate-900 min-h-screen">
            <div className="max-w-6xl mx-auto px-2 md:px-4">
                <div className="flex justify-center items-center gap-x-8 min-h-[80vh]">
                    <h1 className="font-bold text-3xl lg:text-5xl capitalize text-blue-500">In development</h1>
                    <Spinner/>
                </div>
                <div className="relative w-full py-4">
                    <div className="gear relative w-fit text-xl md:text-3xl -left-2">⚙️</div>
                    <div className="underline h-2 rounded-md bg-violet-400 -left-2 "></div>
                </div>
                <div className="text-center text-slate-400 text-sm md:text-base font-osans font-medium ">
                    <p className="animate__animated animate__fadeIn animate__delay-2s">while you're here, <span className="text-md lowercase text-slate-500">Checkout some of my projects below ...</span> </p>
                </div>
                <div className="animate__animated animate__fadeInLeft animate__delay-3s mt-6 md:mt-24">
                    <h2 className="font-medium text-2xl text-blue-500 py-4">Feature Projects</h2>
                    <div className="">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                            {projects.map((project) => (
                                <Card key={project.id} project={project} />
                            ))}
                            {/* <Card project={project}/> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
