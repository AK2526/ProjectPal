import React from 'react'
import SmartText from './SmartText';

function ParagraphView({ text }) {
    const arr = text.split('\n');
    return (
        <div className='mt-5'>
            {
                arr.map((item, index) => {
                    return (
                        <div>
                            <SmartText text={item}/>
                        </div>

                    )
                })
            }
        </div>
    )
}

export default ParagraphView