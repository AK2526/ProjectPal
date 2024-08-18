import React, { useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Formfield from '../components/Formfield'
import Button from '../components/Button'
import { generateIdea, getYoutubeSearchResults } from '../lib/helpers'
import { currentContext } from '../App'

function Core() {
    const [input, setinput] = useState("")
    const [idea, setidea] = useState("")
    const [updateButton, setupdateButton] = useState(0)
    const { setData} = useContext(currentContext)
    const [loading, setloading] = useState(false)

    const nav = useNavigate()

    const submit = async () => {
        setloading(true)
        setidea(await generateIdea(input))
        setupdateButton(prev => prev + 1)
        setloading(false)
    }

    return (
        <div className='p-10'>
            <h1 className='text-white text-4xl font-semibold mb-7 '>Let's come up with an idea!</h1>

            <h2 className='text-gray-400 text-2xl font-semibold'>Enter your ideas below or leave blank for a random idea</h2>
            <Formfield value={input} setvalue={setinput} />
            
            <div className='flex-row flex justify-end '>
            <Button title={idea? "Generate Another Idea":"Generate Idea"} styles={"mt-2 px-8"}  fn={submit} setVisible={updateButton} />
            </div>

            {loading && <h2 className='text-white text-2xl font-semibold mt-4 text-center'>Loading...</h2>}
            {idea && <h2 className='text-white text-2xl font-semibold mt-4'>{idea}</h2>}

            {idea && <Button title="I'm happy with my idea!" styles="mt-4" containerStyles='mt-5' fn={()=>{setData({idea: idea}); nav("/features")}}/>}


            
        </div>
    )
}

export default Core