import { useContext, useState } from 'react'
import './index.css'
import Sidebar from './Components/Sidebar'
import Player from './Components/Player'
import Displa from './Components/Displa'
import { PlayerContext } from './Context/PlayerContext'

function App() {
  const {audioRef, track} = useContext(PlayerContext)

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar/>
        <Displa />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default App
