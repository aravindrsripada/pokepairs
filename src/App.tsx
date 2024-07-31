import './App.css'
import { useState } from 'react';
import TileCard from './components/TileCard';
import WelcomePage from './pages/WelcomePage';
import { Card, monList, monUsedTable } from './utils/data-cards';


// const updateMap = () => {
//     for (let i = 0; i < 4; i++) {
//         for (let j = 0; j < 13; j++) {
//             let randomNum = Math.floor(Math.random() * monList.length)
//             let name = monList[randomNum]
//             tileList[i][j] = { mon: name, position: { row: i, column: j } }
//             if (!monUsedTable.get(name)) {
//                 monUsedTable.set(name, true)
//                 console.log('a')
//             } else {
//                 monUsedTable.delete(name)
//                 monList.splice(randomNum, 1)
//                 console.log(monList)
//             }
//         }
//     }
// }



function App() {
    const [welcome, setWelcome] = useState(true); //Did app just start? Do we need to be on welcome page?
    const [game, setGame] = useState(); //which game is being played?
    const [cardList, setCardList] = useState<[Card[], Card[], Card[], Card[]]>([[], [], [], []]); //shuffles cards
    return (
        <div className='items-center' style={{ backgroundColor: "#282e6c" }}>

            {welcome ? <WelcomePage /> : null}
        </div>
    );
}

export default App
