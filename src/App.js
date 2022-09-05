import './App.css';
import Nav from './components/nav/nav';
import Wrapper from './components/Wrapper/Wrapper';
import AllContentSection from './components/AllContentSection/AllContentSection';
import './fonts/fonts.css';
import Subtract from './media/Subtract.png'
import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import Preloader from './components/Preloader/Preloader';
// import { Scrollbar as BaseScrollbar } from "smooth-scrollbar/scrollbar";
import Scroll from './components/SmothScroll.js'

function App() {
  const [isrender, setisrender] = useState(false);
  // const scrollbar = useRef(null);

  useEffect(() => {
    setInterval(() => {
      setisrender(true);
    }, 2000);

    const Wrapper_block_GEOTEC_block1 = document.querySelector(".Wrapper_block_GEOTEC_block1");
    const Wrapper_block_GEOTEC_block2 = document.querySelector(".Wrapper_block_GEOTEC_block2");
    const Wrapper_block_GEOTEC_block3 = document.querySelector(".Wrapper_block_GEOTEC_block3");
    const AllContentSection_block = document.querySelector(".AllContentSection_block");

    // window.onload = function () {
    //   setTimeout(() => {
    //     console.log(Wrapper_block_GEOTEC_block1)

    //     // window.scrollTo(0, 0);
    //     Wrapper_block_GEOTEC_block1.style.opacity = 1;
    //     Wrapper_block_GEOTEC_block2.style.opacity = 1;
    //     Wrapper_block_GEOTEC_block3.style.opacity = 1;

    //     Wrapper_block_GEOTEC_block1.style.transform = 'translateY(0px)';
    //     Wrapper_block_GEOTEC_block2.style.transform = 'translateY(0px)';
    //     Wrapper_block_GEOTEC_block3.style.transform = 'translateY(0px)';
    //   }, 2000)

    // }

    window.addEventListener("scroll", function () {
      if ($(document).scrollTop() >= $(window).height() * 0.8) {
        Wrapper_block_GEOTEC_block1.style.opacity = 0;
        Wrapper_block_GEOTEC_block2.style.opacity = 0;
        Wrapper_block_GEOTEC_block3.style.opacity = 0;
        AllContentSection_block.style.backgroundColor = '#ffffffb9';
      }
      else {
        Wrapper_block_GEOTEC_block1.style.opacity = 1;
        Wrapper_block_GEOTEC_block2.style.opacity = 1;
        Wrapper_block_GEOTEC_block3.style.opacity = 1;
        AllContentSection_block.style.backgroundColor = '#ffffffb0';
      }
    })


  }, [])

  useEffect(() => {
    if (!isrender) {
      document.getElementById("App").style = "background: #FFFFFF;";
      document.body.style.overflow = "hidden";
    } else {
      // Scrollbar.init(document.body);

      document.getElementById("App").style = "background: #FFFFFF;";
      document.getElementById("block_All").style = "opacity: 1";
      document.body.style.overflow = "scroll";
      document.body.style.overflowX = "hidden";

      const Wrapper_block_GEOTEC_block1 = document.querySelector(".Wrapper_block_GEOTEC_block1");
      const Wrapper_block_GEOTEC_block2 = document.querySelector(".Wrapper_block_GEOTEC_block2");
      const Wrapper_block_GEOTEC_block3 = document.querySelector(".Wrapper_block_GEOTEC_block3");

      Wrapper_block_GEOTEC_block1.style.opacity = 1;
      Wrapper_block_GEOTEC_block2.style.opacity = 1;
      Wrapper_block_GEOTEC_block3.style.opacity = 1;

      Wrapper_block_GEOTEC_block1.style.transform = 'translateY(0px)';
      Wrapper_block_GEOTEC_block2.style.transform = 'translateY(0px)';
      Wrapper_block_GEOTEC_block3.style.transform = 'translateY(0px)';
    }
  }, [isrender]);


  return (
    // <Scrollbar onScroll={() => console.log(1)}>
    <div className="App" id='App'>
      {
        !isrender &&
        <Preloader />
      }
      <div className="block_All" id="block_All">
        <Nav />
        <Wrapper />
        <img src={Subtract} alt="" className='Subtract_left'></img>
        <img src={Subtract} alt="" className='Subtract_right'></img>
        <AllContentSection />
      </div>
    </div>
    // {/* </Scrollbar> */}
  );
}

export default App;
