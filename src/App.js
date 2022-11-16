import "./App.css";
import Nav from "./components/nav/nav";
import Wrapper from "./components/Wrapper/Wrapper";
import AllContentSection from "./components/AllContentSection/AllContentSection";
import "./fonts/fonts.css";
import Subtract from "./media/Subtract.png";
import React, { useState, useEffect, useRef } from "react";
import History from "./components/history/history";
import Whyarewe from "./components/whyarewe/whyarewe";
import AboutUs from "./components/aboutUs/aboutUs";
import Projects from "./components/projects/projects";
import Our_technologies from "./components/our_technologies/our_technologies";
import Contacts from "./components/contacts/contacts";
import Preloader from "./components/Preloader/Preloader";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clients from "./components/clients/clients";
import LICENSES_CERTIFICATION from "./components/LICENSES_CERTIFICATION/LICENSES_CERTIFICATION";
import MainApp from "./MainApp";

import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  function onEntry(entry) {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        change.target.classList.add("element-show");
      }
    });
  }

  let options = {
    threshold: [0.5],
  };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll(".element-animation");

  for (let elm of elements) {
    observer.observe(elm);
  }

  const [isrender, setisrender] = useState(false);

  useEffect(() => {
    
  }, []);

  useEffect(() => {
    setInterval(() => {
      setisrender(true);
    }, 2000);

    // const Wrapper_block_GEOTEC_block1 = document.querySelector(".Wrapper_block_GEOTEC_block1");
    // const Wrapper_block_GEOTEC_block2 = document.querySelector(".Wrapper_block_GEOTEC_block2");
    // const Wrapper_block_GEOTEC_block3 = document.querySelector(".Wrapper_block_GEOTEC_block3");

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

    // window.addEventListener("scroll", function () {
    // if ($(document).scrollTop() >= $(window).height() * 0.8) {
    //   Wrapper_block_GEOTEC_block1.style.opacity = 0;
    //   Wrapper_block_GEOTEC_block2.style.opacity = 0;
    //   Wrapper_block_GEOTEC_block3.style.opacity = 0;
    //   // AllContentSection_block.style.backgroundColor = '#ffffffb9';
    // }
    // else {
    //   Wrapper_block_GEOTEC_block1.style.opacity = 1;
    //   Wrapper_block_GEOTEC_block2.style.opacity = 1;
    //   Wrapper_block_GEOTEC_block3.style.opacity = 1;
    //   // AllContentSection_block.style.backgroundColor = '#ffffffb0';
    // }
    // })
  }, []);

  useEffect(() => {
    if (!isrender) {
      // document.getElementById("App").style = "background: #FFFFFF;";
      document.body.style.overflow = "hidden";
    } else {
      // Scrollbar.init(document.body);

      // document.getElementById("App").style = "background: #FFFFFF;";
      // document.getElementById("block_All").style = "opacity: 1";
      document.body.style.overflow = "scroll";
      document.body.style.overflowX = "hidden";

      const Wrapper_block_GEOTEC_block1 = document.querySelector(".Wrapper_block_GEOTEC_block1");
      const Wrapper_block_GEOTEC_block2 = document.querySelector(".Wrapper_block_GEOTEC_block2");
      const Wrapper_block_GEOTEC_block3 = document.querySelector(".Wrapper_block_GEOTEC_block3");

      if (Wrapper_block_GEOTEC_block1 !== null && Wrapper_block_GEOTEC_block2 !== null && Wrapper_block_GEOTEC_block3 !== null) {
        Wrapper_block_GEOTEC_block1.style.opacity = 1;
        Wrapper_block_GEOTEC_block2.style.opacity = 1;
        Wrapper_block_GEOTEC_block3.style.opacity = 1;

        Wrapper_block_GEOTEC_block1.style.transform = "translateY(0px)";
        Wrapper_block_GEOTEC_block2.style.transform = "translateY(0px)";
        Wrapper_block_GEOTEC_block3.style.transform = "translateY(0px)";
      }
    }
    // console.log(t("title"))
  }, [isrender]);

  const [currentPage, setCurrentPage] = useState(null);
  const handlePageChange = (number) => {
    setCurrentPage(number);
  };

  return (
    <div className="App" id="App">
      {/* <Scrollbar onScroll={() => console.log(1)}> */}
      <BrowserRouter>
        {/* <div ref={scroller} className="scroller"> */}
        {/* <Scrollbar
        plugins={{
          disableScroll: { direction: 'x' },
          overscroll: { effect: "bounce", damping: 0.04 }
        }}
      > */}
        {!isrender && <Preloader />}
        <Nav />
        <Routes>
          <Route path="/" element={<MainApp />} />
          <Route path="*" element={<MainApp />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/licenses" element={<LICENSES_CERTIFICATION />} />
        </Routes>
      </BrowserRouter>

      {/* </ReactPageScroller> */}
      {/* </Scrollbar> */}
    </div>
  );
}

export default App;
