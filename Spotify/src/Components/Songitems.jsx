import React, { useContext } from 'react'
import { PlayerContext } from '../Context/PlayerContext'

const Songitems = ({name, image, desc, id}) => {

    const {PlayWithId} = useContext(PlayerContext)
  return (
    <div onClick={()=>PlayWithId(id)} className='min-w-[180px] p-2 px3
    rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img src={image} className='rounded' alt="" />
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default Songitems