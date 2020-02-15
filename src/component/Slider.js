import React, { Component } from "react";
import Slider from "react-slick";

const SimpleSlider = ({slides})=>{
    
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 3500,
    }
    return (
      <div>
        <Slider {...settings}>
          {slides.map(slide=>{
              const style={background: 'url( '+ slide.photo.mediaItemUrl + ') no-repeat center center',backgroundSize: "cover"}
              console.log(style)
                return(
                    <div className="single_Slide" >
                        <div className="slide_background" style={style}>
                            <div className="slide_caption" >
                                {slide.slideText}
                            </div>
                        </div>
                    </div>
                )
          })}
        </Slider>
      </div>
    );
}

export default SimpleSlider
