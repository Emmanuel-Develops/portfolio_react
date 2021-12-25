import jsGame from '../resources/images/projects/jsGame.jpg'
import veto from '../resources/images/projects/veto.jpg'
import aigis from '../resources/images/projects/aigis.jpg'
import celo from '../resources/images/projects/celo.jpg'
import altVision from '../resources/images/projects/altVision.png'
import oneplus from '../resources/images/projects/oneplus.jpg'
import noImage from '../resources/images/projects/noImage.jpg'

const projects = [
    {
        id: 0,
        imgURL: veto,
        title: 'Veto - a dApp for voting', 
        description: 'Veto is a decentralised app built on the celo blockchain. Its primary objective is to provide a platform to vote on various matters. Users can create their projects to vote on and create propositions that can be voted for regarding the project.',
        ghLink: 'https://github.com/Emmanuel-Develops/voting-celo-blockchain-app',
        liveLink: 'https://vetovote.netlify.app/',
        isCompleted: false
    },
    {
        id: 1,
        imgURL: aigis,
        title: 'Aigis', 
        description: 'A project developed by a team of 9 for an hackathon. This app was developed as a solution to the growing number of fradulent second-hand vehicles sale',
        ghLink: 'https://github.com/Emmanuel-Develops/Aegis-frontend',
        liveLink: 'https://aigisorg.netlify.app/',
        isCompleted: true
    },
    {
        id: 2,
        imgURL: jsGame,
        title: 'A JavaScript Memory Game', 
        description: 'A simple JS game that involves remembering order of button press. I love Neumorphimism as a design style and chose to implement it for this project',
        ghLink: 'https://github.com/Emmanuel-Develops/javascript_simon_game',
        liveLink: 'https://emmanuel-develops.github.io/javascript_simon_game/index.html',
        isCompleted: true
    },
    {
        id: 3,
        imgURL: celo,
        title: 'Street food kigali', 
        description: 'A project based tutorial to understand web3 development with solidity. Street food kigali is a platform that enables users connect their ethereum wallets and buy/sell food items with a celo USD token',
        ghLink: 'https://github.com/Emmanuel-Develops/celo-web-dapp-completed',
        liveLink: 'https://emmanuel-develops.github.io/celo-web-dapp-completed/',
        isCompleted: true
    },
    {
        id: 4,
        imgURL: altVision,
        title: 'ALT Vision', 
        description: 'A proof of concept that proves google depth API can be utilized in real-time to provide accurate navigation feedbacks for the visually impaired. I built this as my final year project for BEng. Information and Communication Engineering',
        ghLink: 'https://github.com/Emmanuel-Develops/final-year-project',
        liveLink: '',
        isCompleted: false
    },
    {
        id: 5,
        imgURL: noImage,
        title: 'React Task Tracker', 
        description: 'A task tracker built in react, easily keep track of tasks, edit, delete and set reminders',
        ghLink: 'https://github.com/Emmanuel-Develops/react-task-tracker',
        liveLink: '',
        isCompleted: true
    },
    {
        id: 6,
        imgURL: oneplus,
        title: 'OnePlus Nord Landing Page', 
        description: 'A landing page for oneplus nord a budget phone released by the company in 2020. This page was made for a free code camp challenge, needless to say it passed the tests.',
        ghLink: 'https://github.com/Emmanuel-Develops/OnePlusNord-LandingPage-FCC',
        liveLink: 'https://emmanuel-develops.github.io/OnePlusNord-LandingPage-FCC/',
        isCompleted: true
    },
]

// export default projects
export const getProjects = () => projects