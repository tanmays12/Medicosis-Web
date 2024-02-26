import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/about";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";


const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subtitle='Our Softwares' title='What we Offer' />
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Title subtitle='Contact Us' title='Get in Touch' />
        <Contact/>
        <Footer/>
        <VideoPlayer playState={playState} setPlayState={setPlayState} />
      </div>
    </div>
  )
}

export default App;