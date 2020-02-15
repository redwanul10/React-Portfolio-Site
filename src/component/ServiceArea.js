import React from 'react';
import SingleService from './SingleService'
import SectionTitle from './SectionTitle'


const ServiceArea = ({serviceData}) => {
    return (
        <div id="services">
            <div className="container">

                <SectionTitle anim={serviceData.titleAnimation}>
                    {serviceData.sectionTitle}
                </SectionTitle>
                
                <div className="row">
                    {
                        serviceData.serviceList.map((item,index) =>(
                            <SingleService service={item} 
                            anim={item.animation}
                            delay={index*150}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceArea;