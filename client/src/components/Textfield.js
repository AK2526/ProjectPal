import React from 'react'

function Textfield({label, placeholder, rows, value, setValue, max}) {

  return (
    <div className='space-y-2'>
         <h3 className='text-white text-xl font-semibold'>{label}</h3>
        <textarea 
        className='w-full bg-white text-black p-2 rounded-md border font-bold resize-none' 
        rows={rows? rows: 3} value={value} 
        onChange={(e) => {setValue(e.target.value);}}
        placeholder={placeholder? placeholder: "Type here..."}></textarea>
    </div>
  )
}

export default Textfield