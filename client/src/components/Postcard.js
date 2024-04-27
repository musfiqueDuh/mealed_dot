import React from "react";
import { Link } from "react-router-dom";

function Postcard({ content, hashtags, postedBy, likes }) {
    const likesCount = Array.isArray(likes) ? likes.length : 0;

    return (
        <div className="card postCard">
            {/* Link to the user profile instead of a specific post */}
            <Link to={`/profile/${postedBy}`} className="postCardLink">
                <div className="card-header">
                    <strong>{postedBy}</strong>
                </div>
                <div className="card-body">
                    <p>{content}</p>
                    <div className="hashtags">
                        {hashtags && hashtags.map((tag, index) => (
                            <span key={index} className="hashtag">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="card-footer">
                    <span>{likesCount} likes</span>
                </div>
            </Link>
        </div>
    );
}

export default Postcard;
