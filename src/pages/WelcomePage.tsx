
const WelcomePage
    = () => {
        return (
            <div className='' id='welcome-page'>
                <img src='src\assets\Designer.png' className='h-96 w-96' />
                <div className="flex gap-2">
                    <button className='text-xl font-medium text-white rounded-md p-1 border-solid border-white' id='start-game-button'>single player</button>
                    <button className='text-xl font-medium text-white rounded-md p-1 border-solid border-white' id='start-game-button'>against friends</button>
                </div>
            </div>
        )
    }

export default WelcomePage;