import React, { useState } from 'react';
import '../stylesheets/comment.css';

const Comment = ({ onAddComment, comments, selectedVideo }) => {
    const [comment, setComment] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddComment(comment);
        setComment('');
    };

    // Filter comments by videoId
    const filteredComments = comments.filter((c) => c.videoId === selectedVideo?.id);

    return (
        <div className="comment-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="comment">Post a Comment:</label>
                <input
                    id="comment"
                    type="text"
                    value={comment}
                    placeholder="Add a comment..."
                    onChange={(event) => setComment(event.target.value)}
                />
                <div className="button-container">
                    <button className="cancel">Cancel</button>
                    <button type="submit" className="submit">
                        Submit
                    </button>
                </div>
            </form>
            <div className="comments">
                {filteredComments.map((comment, index) => (
                    <div>
                        <p key={index}>{comment.text}</p>
                        <p>{comment.timestamp}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Comment;
