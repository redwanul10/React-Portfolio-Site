import React from 'react';
import Typed from 'react-typed'

const Header = ({headerData}) => {

    const url = `url(${headerData.backgroundImage.mediaItemUrl}) repeat scroll center center / cover`
    const Text = [];
    headerData.typedText.map(item=> Text.push(item.text))

    return (
    <div id="header" class="home" style={{background:url}}>
        <div class="container">
            <div class="header-content">
                <h1>I'm 
                    <span class="typed">
                        <Typed
                         strings={Text}
                         typeSpeed={100}
                         backSpeed={50}
                         loop
                        />   
                    </span>
                </h1>
                <p>{headerData.skills}</p>

                <ul class="list-unstyled list-social">
                    <li><a href="#"><i class="ion-social-facebook"></i></a></li>
                    <li><a href="#"><i class="ion-social-twitter"></i></a></li>
                    <li><a href="#"><i class="ion-social-instagram"></i></a></li>
                    <li><a href="#"><i class="ion-social-googleplus"></i></a></li>
                    <li><a href="#"><i class="ion-social-tumblr"></i></a></li>
                    <li><a href="#"><i class="ion-social-dribbble"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
    );
};

export default Header;