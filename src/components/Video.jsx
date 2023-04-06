import React from 'react';
import '../stylesheets/video.css';

const Video = ({ videoId }) => {
    const src = `https://www.youtube.com/embed/${videoId}`;
    return (
        <div className='video'>
            <iframe src={src} title="video player"></iframe>
        </div>
    );
};

export default Video;
