import Spinner from "../components/Spinner"
import Card from "../components/Card"
import 'animate.css'
// import abstractBlue from '../resources/images/abstract_blue.png'


const Home = () => {
    return (
        <div className="bg-cover bg-slate-200 dark:bg-slate-900 min-h-screen">
            <div className="max-w-6xl mx-auto px-2 md:px-4">
                <div className="flex justify-center items-center gap-x-8 min-h-[60vh]">
                    <h1 className="font-bold text-3xl lg:text-5xl capitalize text-blue-500">In development</h1>
                    <Spinner/>
                </div>
                <div className="relative w-full py-4">
                    <div className="gear relative w-fit text-xl md:text-3xl -left-2">⚙️</div>
                    <div className="underline h-2 rounded-md bg-violet-400 -left-2 "></div>
                </div>
                <div className="text-center text-slate-400 text-sm md:text-base font-osans font-medium ">
                    <p className="animate__animated animate__fadeIn animate__delay-2s">while you're here, <span className="text-md lowercase text-slate-500">Checkout some of my projects...</span> </p>
                </div>
                <div className="animate__animated animate__fadeInLeft animate__delay-3s mt-2 md:mt-8">
                    <h2 className="font-medium text-2xl text-blue-500 py-4">Feature Projects</h2>
                    <div className="bg-gray-100 rounded-md">
                        <div className="grid grid-cols-2 p-3">
                            <Card />
                            <Card />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
