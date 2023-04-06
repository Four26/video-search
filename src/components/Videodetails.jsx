import React from 'react';

const Videodetails = ({ video }) => {
    return (
        <div>
            {video ? (
                <div>
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
