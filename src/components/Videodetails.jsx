import React from 'react';
import '../stylesheets/videodetails.css';

const Videodetails = ({ video }) => {
    return (
        <div>
            {video ? (
                <div className='details-container'>
                    <h2>{video.title}</h2>
                    <p>{video.description}</p>
                    <p>{video.channel}</p>
                </div>
            ) : (
                <p>No video selected</p>
            )}
        </div>
    );
};

export default Videodetails;
