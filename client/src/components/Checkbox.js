import React, { useContext } from 'react'
import { currentContext } from '../App'
import { useNavigate } from 'react-router-dom'

function Checkbox({ index }) {
    const { data, setData } = useContext(currentContext)
    const nav = useNavigate()

    const handleChange = (e) => {
        const newData = { ...data }
        newData.done[index] = e.target.checked
        setData(newData)
    }
    return (
        <div className='flex flex-row p-4 pl-8 rounded-md border-4 border-gray-400 hover:border-white  bg-slate-900 '>
            <input type="checkbox" className='' style={{transform: 'scale(4)'}} checked={data.done[index]} onChange={handleChange}/>
            <div className='ml-8'>
            <label className='text-white text-3xl'>{data.plan[index]}</label>
            <a onClick={() => nav("/info/" + index)} className='text-gray-500 text-2xl ml-4 hover:cursor-pointer underline'>More info</a>
            </div>
            

        </div>
    )
}

export default Checkbox