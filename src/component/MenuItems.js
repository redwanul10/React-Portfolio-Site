import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { withRouter,Link } from "react-router-dom";

const MenuItems = (props) => {

    const dBlock = props.active ?"d-block":""
    
    const Home = props.location.pathname.indexOf('/blog') !== -1 ?
                (<Link to="/">Home</Link>):
                (<AnchorLink offset='90' href="#header" >Home</AnchorLink>)

    return (
        <ul class={`nav-menu list-unstyled ${dBlock}`}>
            <li>{Home}</li>
            <li><AnchorLink offset='90' href="#services" >Services</AnchorLink></li>
            <li><AnchorLink offset='90' href="#portfolio">Portfolio</AnchorLink></li>
            <li><AnchorLink offset='90' href="#journal" >Blog</AnchorLink></li>
            <li><AnchorLink offset='90' href="#contact" >Contact</AnchorLink></li>
        </ul>
    );
};

export default withRouter(MenuItems);