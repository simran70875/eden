import React from 'react'
import Header from '../components/other/header';
import Footer from '../components/other/footer';
import Brands from '../components/pages/brands';

const Insights = () => {
  return (
    <>

      <div id="header-outer">
        <Header headerStyle={{backgroundColor: "rgb(227 227 227 / 40%)"}} navItemStyle={{color:"#000"}}/>
      </div>


      <Brands style={{padding: "10rem 0 0"}}/>
      <Footer />
    </>
  )
}

export default Insights;