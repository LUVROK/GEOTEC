import './App.css';
import Nav from './components/nav/nav';
import Wrapper from './components/Wrapper/Wrapper';
import AllContentSection from './components/AllContentSection/AllContentSection';
import './fonts/fonts.css';
import Subtract from './media/Subtract.png'
import React, { useState, useEffect, useRef } from 'react';
import $ from 'jquery';
import Preloader from './components/Preloader/Preloader';
// import { Scrollbar as BaseScrollbar } from "smooth-scrollbar/scrollbar";
// import Scroll from './components/SmothScroll.js'
// import './jquery.pagepiling';
// import './jquery.pagepiling.css';
import ScrollBar from 'smooth-scrollbar';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


// import { Scrollbar } from 'smooth-scrollbar-react';
// import Scrollbar from 'react-smooth-scrollbar';

// import Scrollbar from "react-smooth-scrollbar";
// import SmoothScrollbar, { ScrollbarPlugin } from "smooth-scrollbar";
// import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";

// class HorizontalScrollPlugin extends ScrollbarPlugin {
//   static pluginName = "verticalScroll";

//   transformDelta(delta, fromEvent) {
//     if (!/wheel/.test(fromEvent.type)) {
//       return delta;
//     }

//     // @see: https://github.com/idiotWu/smooth-scrollbar/issues/181

//     const { x, y } = delta;

//     return {
//       y: Math.abs(x) > Math.abs(y) ? x : y,
//       x: 0
//       // x: Math.sign(x || y) * Math.sqrt(x*x + y*y),
//     };
//   }
// }

// SmoothScrollbar.use(HorizontalScrollPlugin, OverscrollPlugin);

function App() {
  const [isrender, setisrender] = useState(false);
  // const scrollbar = useRef(null);
  const scroller = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scroller = document.querySelector(".scroller");
    const bodyScrollBar = ScrollBar.init(scroller, {duration: 0.02});

    ScrollTrigger.scrollerProxy(scroller, {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
      }
    });

    bodyScrollBar.addListener(ScrollTrigger.update);

    // gsap.to(document.querySelector("#box"), {
    //   duration: 4,
    //   scrollTrigger: {
    //     trigger: document.querySelector("#box"),
    //     // start: "top 80%",
    //     markers: true,
    //     scroller: scroller,
    //     pin: true
    //   }
    // });

    // This part is only neccessary if you're using ScrollTrigger's markers for testing:
    // if (document.querySelector(".gsap-marker-scroller-start")) {
    //   const markers = gsap.utils.toArray('[class *= "gsap-marker"]');
    //   bodyScrollBar.addListener(({ offset }) =>
    //     gsap.set(markers, { marginTop: -offset.y })
    //   );
    // }
  }, []);

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
      // document.getElementById("App").style = "background: #FFFFFF;";
      // document.body.style.overflow = "hidden";
    } else {
      // Scrollbar.init(document.body);

      // document.getElementById("App").style = "background: #FFFFFF;";
      document.getElementById("block_All").style = "opacity: 1";
      // document.body.style.overflow = "scroll";
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
    <div className="App" id="App">
      {/* <div ref={scroller} className="scroller"> */}
      {/* <Scrollbar
        plugins={{
          disableScroll: { direction: 'x' },
          overscroll: { effect: "bounce", damping: 0.04 }
        }}
      > */}
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
        {/* </div> */}
        {/* </Scrollbar> */}
      </div>
    </div>

    // {/* </Scrollbar> */}
  );
}

export default App;
