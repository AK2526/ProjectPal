import React from 'react'

function Video({data}) {
    return (
        <div>
            <iframe width="420" height="315"
                src={`https://www.youtube.com/embed/${data.id.videoId}`} >
            </iframe>
        </div>
    )
}

export default Video