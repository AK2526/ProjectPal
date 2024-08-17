import React, { useContext, useEffect } from 'react'
import { currentContext } from '../App'
import { useParams } from 'react-router-dom'
import { generateInfo, getVideos } from '../lib/helpers'
import ParagraphView from '../components/ParagraphView'
import Video from '../components/Video'

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
            let newData = { ...data }
            newData.info[index] = await generateInfo(data.idea, data.features, data.tools, data.plan[index])
            setData(newData)

            newData = { ...data }
            newData.videos[index] = await getVideos(data.info[index], data.plan[index])
            setData(newData)

        }
    }

    useEffect(() => {
        handleInfoChange()
    }, [])


    useEffect(() => {
        console.log(data.videos[index])
    }, [data.videos])
    return (
        <div className='p-10'>
            <div className='flex flex-row  pl-8 rounded-md justify-center  '>
                <input type="checkbox" className='' style={{ transform: 'scale(4)' }} checked={data.done[index]} onChange={handleChange} />
                <div className='ml-8'>
                    <label className='text-white text-5xl'>{data.plan[index]}</label>
                </div>

            </div>

            <ParagraphView text={data.info[index]} />

            
            {data.videos[index].length !== 0 &&
            <div className=''>
            <h2 className='text-white text-3xl font-semibold mt-4 text-center mt-7'>Related Videos</h2>
                <div className='flex flex-row justify-evenly'>
                    
                    {data.videos[index].map((video, i) =>
                        {return <Video data={video} key={i} />} )}
                </div>
            </div>

            }
        </div>
    )
}

export default InfoPage