import React, { useContext, useState } from 'react'
import { currentContext } from '../App'
import { generateTools } from '../lib/helpers'
import Button from '../components/Button'
import Textfield from '../components/Textfield'
import { useNavigate } from 'react-router-dom'

function Platforms() {
    const { data, setData } = useContext(currentContext)
    const [tools, settools] = useState("")
    const [updateButton, setupdateButton] = useState(0)
    const [loading, setloading] = useState(false)

    const nav = useNavigate();

    const figureoutTools = async () => {
        setloading(true)
        let tools = await generateTools(data.idea, data.features)
        settools(tools)
        setupdateButton(prev => prev + 1)
        setloading(false)
    }

    return (
        <div className='p-10'>
            <h2 className='text-white text-2xl font-semibold mt-5'>What will you use to make it come to life? (Tools, Platforms, Engines, Languages, etc.)</h2>
            <div className='flex-row flex justify-end '>
                <Button title={"I have no clue 💀 😭"} styles={"mt-2 px-8"} fn={figureoutTools} setVisible={updateButton} />
                {loading && <h2 className='text-white text-2xl font-semibold mt-4 text-center'>Loading...</h2>}
            </div>
            <Textfield rows={8} value={tools} setValue={settools} placeholder="Type here (:" />

            { tools !== "" && <Button title="I'm done and ready to move on!!" styles="mt-4" containerStyles='mt-5' fn={() => { setData({ idea: data.idea, features: data.features, tools: tools }); nav("/generate") }} />}
        </div>
    )
}

export default Platforms