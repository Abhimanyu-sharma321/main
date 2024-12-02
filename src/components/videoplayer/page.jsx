import React, { useEffect } from 'react'


const VideoPlayer = ({ url, style, className }) => {

    return <iframe src={url} allowFullScreen style={style} className={className}></iframe>
}

export default VideoPlayer;
