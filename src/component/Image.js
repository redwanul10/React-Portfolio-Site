import React from 'react';
// import { SRLWrapper } from "simple-react-lightbox";
import ScrollAnimation from 'react-animate-on-scroll';


const Image = ({ url, delay, anim }) => {

    const options = {
        enablePanzoom: false,
        showThumbnails: false,
        thumbnailsOpacity: 0
    }

    const iniVisible = anim ? false : true;

    return (
        <div className="col-md-4">
            {/* <SRLWrapper {...options}> */}
            <ScrollAnimation delay={delay} animateIn={anim} animateOnce={true} initiallyVisible={iniVisible}>
                <div className="imageWrapper">
                    <img src={url} alt="..." />
                </div>
            </ScrollAnimation>
            {/* </SRLWrapper> */}
        </div>
    );
};

export default Image;