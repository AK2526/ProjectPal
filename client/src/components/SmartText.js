import React from 'react'

function SmartText({text}) {
    let item;
    if (text.substring(0, 1) === "\t")
    {
        item = item.substring(1);
    }
    else{
        item = text;
    }
  if (item.substring(0, 2) === "##")
  {
    return (
      <h2 className='text-white text-3xl font-semibold my-8'>{item.substring(2)}</h2>
    )
  }
  else if (item.substring(0, 2) === "**")
  {
    return (
      <h3 className='text-white text-2xl font-semibold my-5'>{item.substring(2, item.length - 2)}</h3>
    )
  }
  else if (item.substring(0, 2) === "* ")
  {
    let remaining = item.substring(2)
    if (remaining.indexOf("**") !== -1)
    {
        let start = remaining.indexOf("**")
        let end = remaining.indexOf("**", start + 2)
        return (
            <div>
                <p className='text-white text-lg m-2'>
                    {remaining.substring(0, start)}
                    <span className='font-bold'>
                        {remaining.substring(start + 2, end)}
                    </span>
                    {remaining.substring(end + 2)}
                </p>
            </div>
        )
    }
    else{
        return (
            <div>
                <p className='text-white text-lg m-2'>{remaining}</p>
            </div>
        )
    }
  }
  else
  {
    let remaining = item
    if (remaining.indexOf("**") !== -1)
    {
        let start = remaining.indexOf("**")
        let end = remaining.indexOf("**", start + 2)
        return (
            <div>
                <p className='text-white text-lg m-2'>
                    {remaining.substring(0, start)}
                    <span className='font-bold'>
                        {remaining.substring(start + 2, end)}
                    </span>
                    {remaining.substring(end + 2)}
                </p>
            </div>
        )
    }
    else{
        return (
            <div>
                <p className='text-white text-lg m-2'>{remaining}</p>
            </div>
        )
    }
  }
}

export default SmartText