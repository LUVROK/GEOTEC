import "./App.scss";
import Wrapper from "./components/Wrapper/Wrapper";
import AllContentSection from "./components/AllContentSection/AllContentSection";
import "./fonts/fonts.scss";
import Subtract from "./media/Subtract.webp";
import React, { useState, useEffect } from "react";
import History from "./components/history/history";
import Whyarewe from "./components/whyarewe/whyarewe";
import AboutUs from "./components/aboutUs/aboutUs";
import Projects from "./components/projects/projects";
import Our_technologies from "./components/our_technologies/our_technologies";
import Contacts from "./components/contacts/contacts";
import Preloader from "./components/Preloader/Preloader";

function MainApp() {
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

      Wrapper_block_GEOTEC_block1.style.opacity = 1;
      Wrapper_block_GEOTEC_block2.style.opacity = 1;
      Wrapper_block_GEOTEC_block3.style.opacity = 1;

      Wrapper_block_GEOTEC_block1.style.transform = "translateY(0px)";
      Wrapper_block_GEOTEC_block2.style.transform = "translateY(0px)";
      Wrapper_block_GEOTEC_block3.style.transform = "translateY(0px)";
    }
  }, [isrender]);

  return (
    <div className="MainApp container" id="App">
      {!isrender && <Preloader />}
      <img src={Subtract} alt="" className="Subtract_left"></img>
      <img src={Subtract} alt="" className="Subtract_right"></img>
      <Wrapper />
      <AllContentSection />
      <History />
      <Whyarewe />
      <AboutUs />
      <Projects />
      <Our_technologies />
      <Contacts />
    </div>
  );
}

export default MainApp;
