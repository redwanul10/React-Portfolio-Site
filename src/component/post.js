import React from 'react';
import {Link} from 'react-router-dom'

const post = ({content}) => {

    const imgUrl = content.featuredImage ?content.featuredImage.mediaItemUrl :'';
    return (
        <div class="card">
            <div class="card-header">
                <img src={imgUrl} alt=""/>
            </div>
            <div class="card-body">
                <h3 class="card-title">{content.title}</h3>
                <div dangerouslySetInnerHTML={{
                    __html: content.content
                }} />
                <Link to={`/${content.slug}`}>More</Link>
            </div>
        </div>
    );
};

export default post;