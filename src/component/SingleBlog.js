import React from 'react';
import {Link} from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll';


const singleBlog = ({postData,delay}) => {
    console.log(postData)
    const iniVisible = postData.postAnim.animationName ? false:true
    const slug = postData.title.split(' ').join('-')
    return (
        <div class="col-lg-4 col-md-6">
            <ScrollAnimation animateIn={postData.postAnim.animationName} animateOnce={true} initiallyVisible={iniVisible} delay={postData.postAnim.delay || 0}>       
                <div class="journal-info">
                    <img src={postData.featuredImage.mediaItemUrl} class="img-responsive" alt="img"/>
                    
                    <div class="journal-txt">
                        <h4><Link to={`/blog/${slug}`}>{postData.title}</Link></h4>
                        <div class="separator" dangerouslySetInnerHTML={{__html:postData.excerpt}}></div>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
    );
};

export default singleBlog;