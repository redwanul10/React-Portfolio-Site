import React from 'react';
import SectionTitle from './SectionTitle'
import SingleBlog from './SingleBlog'

const BlogSection = ({blogData}) => {
    return (
        <div id="journal" class='paddsection'>
            <div className="container">

                <SectionTitle anim={blogData.titleAnimation}>
                    {blogData.sectionTitle}
                </SectionTitle>
                
                <div className="journal-block">
                    <div className="row">
                        {
                            blogData.selectPosts.map((post,index)=>(
                                <SingleBlog 
                                postData={post}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};


export default BlogSection;