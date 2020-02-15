import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const SectionTitle = (props) => {
    
    const iniVisible = props.anim ? false:true

    return (
        <div class="section-title text-center">
            <ScrollAnimation delay={150}animateIn={props.anim} animateOnce={true} initiallyVisible={iniVisible}>
                <h2>{props.children}</h2>
            </ScrollAnimation>
        </div>
    );
};

export default SectionTitle;