import React from 'react';
import Zoom from 'react-reveal/Zoom';
import ScrollAnimation from 'react-animate-on-scroll';


const SingleService = ({service,delay}) => {
    console.log(service.animation)
    const iniVisible = service.animation ? false:true

    return (
        <div className="col-md-3">
            <ScrollAnimation animateIn={service.animation} delay={delay} animateOnce={true} initiallyVisible={iniVisible}>
                <div class="services-block">
                    <img src={service.photo.mediaItemUrl} alt=""/>
                    <span>{service.name}</span>
                    <p class="separator">{service.description}</p>
                </div>
            </ScrollAnimation>
        </div>
    );
};

export default SingleService;