import React from 'react'
import Header1 from '../component/Header1'
import { Link } from 'react-router-dom'
export default function Home() {
  return (<>
    <div className='home' >
      <Header1></Header1>
      <div className="home_detail">
        {/* <img src={require('../image/image/hero-bg.jpg')} alt="" /> */}
      <div className="home_content">
        <h1>Get ahead of the class with</h1>{' '}
        <h1><b><u>College Hub</u></b>   App,</h1>{' '}
        <h3>your one-stop for study materials and resources</h3>{'   '}
       <div className="app">
        <nav className="nav_store">
        <Link to='/download' className=''><img src={require('../image/image/app_store_white.jpeg') } height={70} width={210}   alt="" /></Link>{' '} {' '}
        <Link to='/download' className=''><img src={require('../image/image/play_store_white.jpeg')}  height={70} width={210}   alt="" /></Link>{' '}
        </nav>
         <nav className="nav">
        <Link to='/download' className='download_btn'>Download vit apk</Link>
        </nav>
        </div>
        </div>
      <div className="home_hero">
        <img src={require('../image/image/hero-img.png')} height={1000} width={700} alt="" />
      </div>
    </div>
    </div>
    
    <div className="feature">
      {/* <img src= {require('../image/image/college hub.jpg')}  height={700} width={1200}  alt="" /> */}
    
 
    
    <nav className="feature_img"><img src={require('../image/image/feature_1.jpeg')} height={650} width={360} alt="" /></nav>
    <nav className="feature_img"><img src={require('../image/image/fetaure_2.jpeg')}height={650} width={360} alt="" /></nav>
   <nav className="feature_img"><img src={require('../image/image/feature_3.jpeg')}height={650}  width={360} alt="" /></nav> 
   <nav className="feature_img"><img src={require('../image/image/feature_4.jpeg')}height={650} width={360} alt="" /></nav>
    </div>

    <div className="about">
      
    </div>
    </>
  )
}
