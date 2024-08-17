import React, { useContext, useEffect } from 'react'
import { currentContext } from '../App'
import { useParams } from 'react-router-dom'
import { generateInfo } from '../lib/helpers'
import ParagraphView from '../components/ParagraphView'

function InfoPage() {
    const { index } = useParams()

    const { data, setData } = useContext(currentContext)

    const handleChange = (e) => {
        const newData = { ...data }
        newData.done[index] = e.target.checked
        setData(newData)
    }

    const handleInfoChange = async () => {
        if (data.info[index] === "##Loading...") {
            const newData = { ...data }
            newData.info[index] = await generateInfo(data.idea, data.features,data.tools, data.plan[index])
            setData(newData)
        }
    }

    useEffect(() => {
        handleInfoChange()
    }, [])


    return (
        <div className='p-10'>
            <div className='flex flex-row  pl-8 rounded-md justify-center  '>
                <input type="checkbox" className='' style={{ transform: 'scale(4)' }} checked={data.done[index]} onChange={handleChange} />
                <div className='ml-8'>
                    <label className='text-white text-5xl'>{data.plan[index]}</label>
                </div>

            </div>

            <ParagraphView text={data.info[index]} />
        </div>
    )
}

export default InfoPage