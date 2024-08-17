import React, { useContext, useEffect } from 'react'
import { currentContext } from '../App'
import { generateProjectPlan } from '../lib/helpers'
import { useNavigate } from 'react-router-dom'

function Generate() {
    const { data, setData} = useContext(currentContext)

    const nav = useNavigate();
    generateProjectPlan(data.idea, data.features, data.tools)
    .then(a => setData(
        {idea: data.idea, 
        features: data.features, 
        tools: data.tools, 
        plan: a,
        done: a.map((b, i)=> false)}))

    useEffect(() => {
        if (data.plan === undefined)
        {
            return;
        }
        nav("/list")
    }, [data, nav])

  return (
    <div className='p-10'>
        <h1 className='text-white text-4xl font-semibold '>Almost done...</h1>
        <h1 className='text-gray-300 text-3xl font-semibold '>Your pal is busy generating a plan for you!</h1>
    </div>
  )
}

export default Generate