import React from 'react';
import '../stylesheets/videoitem.css';

const VideoItem = ({ video, onVideoSelect }) => {
    const handleVideoSelect = () => {
        onVideoSelect(video);
    };

    return (
        <div className='video-item' onClick={handleVideoSelect}>
            <img src={video.thumbnail ? video.thumbnail : ''} alt={video.title} />
            <div className='video-info'>
                <h3>{video.title}</h3>
                <p>{video.channel}</p>
            </div>
        </div>
    );
};

export default VideoItem;
