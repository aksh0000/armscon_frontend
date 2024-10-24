import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useEffect,useState } from 'react';
import {photo} from './assets/headerbackground.jpg';
import About from './components/About';
import StarNight from './components/StarNight';
import Testimonials_container from './components/Testimonials_container';
import Register from './components/Register';
import Footer from './components/Footer';
import Hr from './components/Hr';
import MenuBtn from './components/MenuBtn';

function Home() {
  return <div style={{oveflowX:'hidden'}}>
    
    <Header/>

    
    <About/>
    <StarNight/>
    <Testimonials_container/>
    <Register/>
  
    <Footer/>
  </div>
}

export default Home;
