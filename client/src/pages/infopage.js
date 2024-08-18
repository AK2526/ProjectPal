import React, { useContext, useEffect, useState } from 'react'
import { currentContext } from '../App'
import { useNavigate, useParams } from 'react-router-dom'
import { answerQuestion, generateInfo, getVideos } from '../lib/helpers'
import ParagraphView from '../components/ParagraphView'
import Video from '../components/Video'
import Formfield from '../components/Formfield'
import Button from '../components/Button'

function InfoPage() {
    const { index } = useParams()

    const { data, setData } = useContext(currentContext)

    const [question, setQuestion] = useState("")
    const [answer, setAnswer] = useState("")
    const [updateButton, setupdateButton] = useState(0)
    const [loading, setloading] = useState(false)

    const nav = useNavigate();

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

    const askQuestion = async () => {
        if (question === "") {
            return;
        }
        setloading(true)
        setAnswer(await answerQuestion(question, data.info[index], data.idea))
        setloading(false)
        setupdateButton(prev => prev + 1)
    }

    useEffect(() => {
        handleInfoChange()
    }, [])


    useEffect(() => {
        console.log(data.videos[index])
    }, [data.videos])
    return (
        <div className='px-10'>
            <div className='w-44 my-6'>
            <Button fn={() => nav("/list")} title={"Go back"} />
            </div>
            <div className='flex flex-row  pl-8 rounded-md justify-center  '>
                <input type="checkbox" className='h-[15px] mt-7' style={{ transform: 'scale(4)' }} checked={data.done[index]} onChange={handleChange} />
                <div className='ml-8'>
                    <label className='text-white text-5xl'>{data.plan[index]}</label>
                </div>

            </div>

            <ParagraphView text={data.info[index]} />


            {data.videos[index].length !== 0 &&
                <div className=''>
                    <h2 className='text-white text-3xl font-semibold my-8 text-center '>Related Videos</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                        {data.videos[index].map((video, i) => { return <Video data={video} key={i} /> })}
                    </div>
                </div>

            }

            {data.info[index] !== "##Loading..." &&
                <div>
                    <h3 className='text-white text-3xl font-semibold mt-4'>Have a question?</h3>
                    <div className='flex flex-row justify-evenly'>
                        <div className='w-[70%]'> <Formfield value={question} setvalue={setQuestion} placeholder={"Type your question here"} /></div>
                        <div className='w-[30%]'><Button title="Ask" styles="m-3" fn={askQuestion} setVisible={updateButton} /></div>

                    </div>

                </div>}
            {loading && <h2 className='text-white text-2xl font-semibold mt-4 text-center'>Loading...</h2>}

            {answer !== "" &&
                <div>
                    <ParagraphView text={answer} />
                </div>
}
        </div>
    )
}

export default InfoPage