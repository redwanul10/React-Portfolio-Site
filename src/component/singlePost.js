import React, {useState}from 'react';
import { gql } from "apollo-boost";
import {useQuery} from '@apollo/react-hooks'
import Post from './post'
import content from '../data.json'



const GqlPost = (props) => {
    const slug = props.match.params.postId.split('-').join(" ");

    const blog = content.data.movieBy.Layout.layout.find(section=> section.fieldGroupName === "movie_Layout_Layout_BlogSection")
    const data = blog.selectPosts.find(post=>post.title === slug)
    console.log(data)
    console.log(blog)
    return (
        <div class="main-content paddsection">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-md-offset-2">
                        <div class="row">
                            <div class="container-main single-main">
                                <div class="col-md-12">
                                <img src={data.featuredImage.mediaItemUrl} alt=""/>
                                        
                                    <div className="post padDiv">
                                        <div className="postTitle">
                                            <h4>{data.title}</h4>
                                        </div>
                                        <div className="postContent" dangerouslySetInnerHTML={{ __html: data.content }}></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
};

export default GqlPost;