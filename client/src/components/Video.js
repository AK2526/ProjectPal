import React from 'react'

function Video({data}) {
    console.log("VID", data)
    return (
        <div>
            <iframe width="350" height="300"
                src={`https://www.youtube.com/embed/${data.id.videoId}`} >
            </iframe>
        </div>
    )
}

export default Video