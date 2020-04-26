import React from 'react';
import './post.scss'

function Post ({author, content, image, date}) {
return (
    <div className="post">
        <div className="post__logo">
            <img src={author.photo} alt={author.name}/>
        </div>
        <div className="post__content">
            <div className="post__text">
                <div className="post__author">
                    <div className="post__author__name">
                        {author.name}
                    </div>
                    <div className="author__nick-name">
                        {author.nickname}

                        {date}
                    </div>
                </div>
                <div className="post__author__text">
                    {content}
                </div>
            </div>
            <div className="post__img">
                <img src={image} alt="post img"/>
            </div>
            <div className='post__status'></div>
        </div>
    </div>
);
};

export default Post