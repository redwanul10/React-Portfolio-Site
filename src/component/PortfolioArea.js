import React from 'react';
import SectionTitle from './SectionTitle'
import Image from "./Image";


const PortfolioArea = ({portfolioData}) => {
    
    return (
        <div id="portfolio" class='paddsection'>
                <div className="container">
                    <SectionTitle anim={portfolioData.titleAnimation}>
                        {portfolioData.sectionTitle}
                    </SectionTitle>
                    <div className="row">
                            {portfolioData.images.map((singleImage,index)=> (
                                    <Image 
                                    url={singleImage.mediaItemUrl}
                                    anim={portfolioData.galleryAnimation}
                                    delay={index*150}
                                    />
                            ))}
                    </div>
                </div>
        </div>
    );
};

export default PortfolioArea;