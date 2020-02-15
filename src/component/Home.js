import React from 'react';
import Header from './Header'
import ServiceArea from './ServiceArea'
import PortfolioArea from './PortfolioArea'
import BlogSection from './BlogSection'
import ContactArea from './ContactArea'
import FooterArea from './FooterArea'
import content from '../data.json'



const Home = () => {

  const data = content.data
  console.log(data)
  console.log(data.movieBy.Layout)

  return (
    <>
    <Header         headerData  ={data.movieBy.Layout.layout[0]}/>
    <ServiceArea    serviceData ={data.movieBy.Layout.layout[1]}/>
    <PortfolioArea  portfolioData={data.movieBy.Layout.layout[2]}/>
    <BlogSection    blogData    ={data.movieBy.Layout.layout[3]}/>
    <ContactArea    contactData ={data.movieBy.Layout.layout[4]}/>
    <FooterArea     footerData  ={data.movieBy.Layout.layout[5]}/>
    </>
  );
};

export default Home;