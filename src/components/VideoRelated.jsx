import React from 'react';
import '../stylesheets/videorelated.css';
import VideoItem from './VideoItem';

const VideoRelated = ({ videos, onVideoSelect }) => {
    const renderedVideos = videos.map((video) => {
        return <VideoItem key={video.id} video={video} onVideoSelect={onVideoSelect} />;
    });

    return (
        <div className='video-related'>
            {renderedVideos}
        </div>
    );
};

export default VideoRelated;
