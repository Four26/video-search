import React, { useState } from 'react';
import '../stylesheets/header.css';
import Video from './Video';
import VideoRelated from './VideoRelated';
import Videodetails from './Videodetails';
import Comment from './Comment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import VideoAPI from '../api/VideoAPI';

const Header = () => {
    const [searchResult, setSearchResult] = useState([]);
    const [query, setQuery] = useState('');
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [comments, setComments] = useState([]);

    const handleSearch = async () => {
        const result = await VideoAPI(query);
        setSearchResult(result);
        setSelectedVideo(result.length > 0 ? result[0] : null); // Select the first video by default
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleVideoSelect = (video) => {
        setSelectedVideo(video);
        setComments([]);
    };

    const handleAddComment = (comment) => {
        // Create a new comment object with the comment text, videoId, and the timestamp
        const newComment = {
            text: comment,
            videoId: selectedVideo.id,
            timestamp: new Date().toISOString(),
        };
        setComments([...comments, newComment]); // add new comment to comments array
    };

    return (
        <div className="header-container">
            <div className="search-container">
                <h1>Video Search</h1>
                <div className="input-container">
                    <input
                        id="search-input"
                        type="text"
                        placeholder="Search..."
                        onKeyDown={handleKeyDown}
                        onChange={handleInputChange}
                    />
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        className="magnifying-glass"
                        onClick={handleSearch}
                    />
                </div>
            </div>
            <div className="video-container">
                <Video videoId={selectedVideo ? selectedVideo.id : null} />
                <VideoRelated videos={searchResult} onVideoSelect={handleVideoSelect} />
                <Videodetails video={selectedVideo} />
            </div>
            <div className="comment-container">
                <Comment onAddComment={handleAddComment} comments={comments} selectedVideo={selectedVideo} />
            </div>
        </div>
    );
};

export default Header;