import React, { useContext, useState } from 'react'
import { currentContext } from '../App'
import Formfield from '../components/Formfield'
import Button from '../components/Button'
import Textfield from '../components/Textfield'
import { generateFeature } from '../lib/helpers'
import { useNavigate } from 'react-router-dom'

function AddFeatures() {
    const { data, setData} = useContext(currentContext)
    const [featurePrompt, setfeaturePrompt] = useState("")
    const [updateButton, setupdateButton] = useState(0)
    const [features, setFeatures] = useState("")
    const [loading, setloading] = useState(false)

    const nav = useNavigate()

    const addFeature = async () => {
        setloading(true)
        let feature = await generateFeature(data.idea, featurePrompt, features)
        setFeatures(prev => prev + "\n" + feature)
        setupdateButton(prev => prev + 1)
        setloading(false)
    }

    return (
        <div className='p-10'>
            <h1 className='text-white text-4xl font-semibold '>Let's think of some features for our project!</h1>

            <h2 className='text-gray-400 text-2xl mt-3 font-semibold'>Your Idea: {data.idea}</h2>
            <h2 className='text-white text-2xl font-semibold mt-5'>Ask your pal to help add a feature you want by typing it below!</h2>
            <Formfield value={featurePrompt} setvalue={setfeaturePrompt} placeholder="Leave blank for a custom feature"/>

            <div className='flex-row flex justify-center '>
            <Button title={updateButton !== 0? "Generate Another Feature":"Generate Feature"} styles={"mt-2 px-8"}  fn={addFeature} setVisible={updateButton} />
            </div>

            {loading && <h2 className='text-white text-2xl font-semibold mt-4 text-center'>Loading Feature...</h2>}

            <h2 className='text-white text-2xl font-semibold mt-5'>Your features so far!</h2>

            <Textfield label="" placeholder={"You can edit this box!"} value={features} setValue={setFeatures} rows={10} />

            { features !== "" && <Button title="I'm happy with my features!" styles="mt-4" containerStyles='mt-5' fn={()=>{setData({idea: data.idea, features: features}); nav("/platforms")}}/>}

        </div>
    )
}

export default AddFeatures