import "./App.scss";
import Nav from "./components/nav/nav";
import "./fonts/fonts.scss";
import React, { useState, useEffect } from "react";
import Preloader from "./components/Preloader/Preloader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clients from "./components/clients/clients";
import LICENSES_CERTIFICATION from "./components/LICENSES_CERTIFICATION/LICENSES_CERTIFICATION";
import MainApp from "./MainApp";
import $ from "jquery";

require("jquery-scrollify");

function App() {
  useEffect(() => {
    window.addEventListener("wheel", { passive: false });
    window.scrollTo(0, 0);
    window.$.scrollify({
      section: ".section",
      interstitialSection: "",
      // updateHash: false,
      easing: "easeOutExpo",
      scrollSpeed: 1500,
      // overflowScroll: false,
      setHeights: true,
      overflowScroll: false,
      updateHash: false,
      touchScroll: true,
      speed: 1000,
    });
  }, []);

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
    setInterval(() => {
      setisrender(true);
    }, 2000);
  }, []);

  useEffect(() => {
    if (!isrender) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowX = "hidden";
      const Wrapper_block_GEOTEC_block1 = document.querySelector(
        ".Wrapper_block_GEOTEC_block1"
      );
      const Wrapper_block_GEOTEC_block2 = document.querySelector(
        ".Wrapper_block_GEOTEC_block2"
      );
      const Wrapper_block_GEOTEC_block3 = document.querySelector(
        ".Wrapper_block_GEOTEC_block3"
      );
      if (
        Wrapper_block_GEOTEC_block1 !== null &&
        Wrapper_block_GEOTEC_block2 !== null &&
        Wrapper_block_GEOTEC_block3 !== null
      ) {
        Wrapper_block_GEOTEC_block1.style.opacity = 1;
        Wrapper_block_GEOTEC_block2.style.opacity = 1;
        Wrapper_block_GEOTEC_block3.style.opacity = 1;

        Wrapper_block_GEOTEC_block1.style.transform = "translateY(0px)";
        Wrapper_block_GEOTEC_block2.style.transform = "translateY(0px)";
        Wrapper_block_GEOTEC_block3.style.transform = "translateY(0px)";
      }
    }
  }, [isrender]);

  return (
    <div className="App" id="App">
      <BrowserRouter>
        {!isrender && <Preloader />}
        <Nav />
        <Routes>
          <Route path="/" element={<MainApp />} />
          <Route path="*" element={<MainApp />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/licenses" element={<LICENSES_CERTIFICATION />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
