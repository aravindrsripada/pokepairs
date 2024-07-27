import './App.css'
import TileCard from './components/TileCard'
import { Tile, mons, Mon } from './utils/data-tiles'

const updateMap = () => {
    const list = mons.concat(mons)
    console.log(list.length)
}

function App() {

    return (
        <>
            <div>
                {() => updateMap()}
            </div>
        </>
    )
}

export default App
