import "./our_technologies.css";
import React, { useState, useEffect } from "react";

import ourTech1 from "../../media/OIU_1.png";
import ourTech2 from "../../media/OU_2.png";
import ourTech3 from "../../media/OU_3.png";
import ourTech4 from "../../media/OU_4.png";
import ourTech5 from "../../media/OU_5.png";
import ourTech6 from "../../media/OU_6.png";
import ourTech7 from "../../media/OU_7.png";
import ourTech8 from "../../media/OU_8.png";

import ourTechBack1 from "../../media/ourTechBack1.png";
import ourTechBack2 from "../../media/ourTechBack2.png";
import parse from "html-react-parser";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Our_technologies = () => {
  const { t, i18n } = useTranslation();
  const [Image_TechState, setImage_TechState] = useState();
  const [active, setActive] = useState();
  const [activePrev, setActivePrev] = useState();
  const [activePrev2, setActivePrev2] = useState();
  const [activeSec, setActiveSec] = useState();
  const [activeSec2, setActiveSec2] = useState();
  const [our_technologies_title, setour_technologies_title] = useState();
  const [our_technologies_perhaps, setour_technologies_perhaps] = useState();

  const [stateDisableStat8object, setstateDisableStat8object] = useState(false);

  useEffect(() => {
    setImage_TechState(document.querySelectorAll(".Image_Tech"));
    setour_technologies_perhaps(document.querySelectorAll(".our_technologies_title"));
    setour_technologies_title(document.querySelectorAll(".our_technologies_perhaps"));

    document.querySelector('.').addEventListener("touchstart", handleTouchStart, false);
    document.querySelector('.').addEventListener("touchmove", handleTouchMove, false);

    var xDown = null;
    var yDown = null;

    function getTouches(evt) {
      return (
        evt.touches || // browser API
        evt.originalEvent.touches
      ); // jQuery
    }

    function handleTouchStart(evt) {
      const firstTouch = getTouches(evt)[0];
      xDown = firstTouch.clientX;
      yDown = firstTouch.clientY;
    }

    function handleTouchMove(evt) {
      if (!xDown || !yDown) {
        return;
      }

      var xUp = evt.touches[0].clientX;
      var yUp = evt.touches[0].clientY;

      var xDiff = xDown - xUp;
      var yDiff = yDown - yUp;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        /*most significant*/
        if (xDiff > 0) {
          /* right swipe */
        } else {
          /* left swipe */
        }
      } else {
        if (yDiff > 0) {
          /* down swipe */
        } else {
          /* up swipe */
        }
      }
      /* reset values */
      xDown = null;
      yDown = null;
    }
  }, []);

  const leftTech = () => {
    document.querySelector(".our_technologies_right_left").style.pointerEvents = "none";
    document.querySelector(".our_technologies_right_right").style.pointerEvents = "none";
    for (let i = 0; i < Image_TechState.length; i++) {
      // Image_TechState[i].style.
    }
    setActivePrev((prev) => (prev <= 0 ? 7 : prev - 1));
    setActivePrev2((prev) => (prev <= 0 ? 7 : prev - 1));
    setActiveSec((prev) => (prev <= 0 ? 7 : prev - 1));
    setActiveSec2((prev) => (prev <= 0 ? 7 : prev - 1));
    setActive((prev) => (prev <= 0 ? 7 : prev - 1));
    setTimeout(() => {
      document.querySelector(".our_technologies_right_left").style.pointerEvents = "all";
      document.querySelector(".our_technologies_right_right").style.pointerEvents = "all";
    }, 600);
  };

  const rightTech = () => {
    document.querySelector(".our_technologies_right_left").style.pointerEvents = "none";
    document.querySelector(".our_technologies_right_right").style.pointerEvents = "none";
    for (let i = 0; i < Image_TechState.length; i++) {
      // Image_TechState[i].style.
    }
    setActive((prev) => (prev >= 7 ? 0 : prev + 1));
    setActivePrev((prev) => (prev >= 7 ? 0 : prev + 1));
    setActivePrev2((prev) => (prev >= 7 ? 0 : prev + 1));
    setActiveSec((prev) => (prev >= 7 ? 0 : prev + 1));
    setActiveSec2((prev) => (prev >= 7 ? 0 : prev + 1));
    setTimeout(() => {
      document.querySelector(".our_technologies_right_left").style.pointerEvents = "all";
      document.querySelector(".our_technologies_right_right").style.pointerEvents = "all";
    }, 600);
  };

  useEffect(() => {
    // if (active) {
    //   document.querySelector(".number_hopeful_models_block").style.opacity = 0;
    // }
    if (Image_TechState !== undefined) {
      // console.log(activePrev2);
      // console.log(activePrev);
      // console.log(active);
      // console.log(activeSec);
      // console.log(activeSec2);
      // console.log(Image_TechState);
      Image_TechState[activePrev2].style.transform = "translateX(-200%) translateY(20%) scale(0.5)";
      Image_TechState[active].style.filter = "blur(0px)";
      Image_TechState[activePrev].style.filter = "blur(0px)";
      Image_TechState[activePrev].style.transform = "translateX(-90%) translateY(50%) scale(0.5)";
      Image_TechState[activePrev].style.opacity = 0;
      Image_TechState[activePrev2].style.opacity = 0;
      Image_TechState[active].style.opacity = 1;
      // Image_TechState[active].style.backgroundImage = `url('${ourTechBack1}')`;
      if (window.innerWidth > 1134) {
        Image_TechState[activeSec].style.transform = "translateX(120%) translateY(0%) scale(0.5)";
        Image_TechState[active].style.transform = "translateX(20%) translateY(10%) scale(1)";
      } else if (window.innerWidth > 720) {
        Image_TechState[activeSec].style.transform = "translateX(80%) translateY(-10%) scale(0.5)";
        Image_TechState[active].style.transform = "translateX(0%) translateY(10%) scale(1)";
      } else {
        Image_TechState[active].style.transform = "translateX(0%) translateY(10%) scale(1)";
        Image_TechState[activeSec].style.transform = "translateX(40%) translateY(-10%) scale(0.5)";
      }
      // Image_TechState[activeSec].style.backgroundImage = `url('${ourTechBack2}')`;
      Image_TechState[activeSec].style.opacity = 1;
      Image_TechState[activeSec2].style.opacity = 0;
      Image_TechState[activeSec].style.filter = "blur(10px)";
      Image_TechState[activeSec2].style.transform = "translateX(200%) translateY(50%) scale(0.5)";

      our_technologies_title[active + 1].style.display = "block";
      our_technologies_perhaps[active + 1].style.display = "block";

      our_technologies_title[activePrev + 1].style.display = "none";
      our_technologies_perhaps[activePrev + 1].style.display = "none";
      our_technologies_title[activeSec + 1].style.display = "none";
      our_technologies_perhaps[activeSec + 1].style.display = "none";

      if (active === 1) {
        our_technologies_title[9].style.display = "block";
        our_technologies_perhaps[9].style.display = "block";
      } else {
        our_technologies_title[9].style.display = "none";
        our_technologies_perhaps[9].style.display = "none";
      }
    }
    // setstateDisableStat8object(true);
  }, [active]);

  const checkTech = () => {
    document.querySelector(".our_technologies_right_left").style.pointerEvents = "all";
    document.querySelector(".our_technologies_right_right").style.pointerEvents = "all";
    // document.querySelector(".our_technologies_right_left").style.cursor = "cursor: url(../../media/goback.png) 14 0, pointer";
    // document.querySelector(".our_technologies_right_right").style.cursor = "cursor: url(../../media/goTo.png) 14 0, pointer;";
    document.querySelector(".our_technologies_left").style.width = "30%";
    document.querySelector(".our_technologies_right").style.width = "70%";

    our_technologies_title[1].style.display = "block";
    our_technologies_perhaps[1].style.display = "block";
    our_technologies_title[0].style.display = "none";
    our_technologies_perhaps[0].style.display = "none";

    setActivePrev(7);
    setActivePrev2(6);
    setActiveSec(1);
    setActiveSec2(2);
    setActive(0);

    document.querySelector(".number_hopeful_models_block").style.opacity = 0;
    document.querySelector(".circleButton").style.display = "none";

    document.querySelector(".ourTech1").style.transform = "translateX(0%)";
    document.querySelector(".ourTech2").style.transform = "translateX(0%)";
  };

  useEffect(() => {
    if (window.innerWidth > 1134) {
      document.querySelector(".ourTech1").style.transform = "translateX(30%)";
      document.querySelector(".ourTech2").style.transform = "translateX(80%)";
      document.querySelectorAll(".Image_Tech")[1].style.transform = "translateX(120%) translateY(0%) scale(0.5)";
      document.querySelectorAll(".Image_Tech")[0].style.transform = "translateX(20%) translateY(10%) scale(1)";
    } else if (window.innerWidth > 720) {
      document.querySelector(".ourTech1").style.transform = "translateX(30%)";
      document.querySelector(".ourTech2").style.transform = "translateX(50%)";
      document.querySelectorAll(".Image_Tech")[1].style.transform = "translateX(80%) translateY(10%) scale(0.5)";
      document.querySelectorAll(".Image_Tech")[0].style.transform = "translateX(10%) translateY(10%) scale(1)";
    } else {
      document.querySelector(".ourTech1").style.transform = "translateX(0%)";
      document.querySelector(".ourTech2").style.transform = "translateX(50%)";
      document.querySelectorAll(".Image_Tech")[1].style.transform = "translateX(25%) translateY(30%) scale(0.5)";
      document.querySelectorAll(".Image_Tech")[0].style.transform = "translateX(10%) translateY(15%) scale(1)";
    }
  }, []);

  return (
    <div className="our_technologies">
      <div className="our_technologies_block element-animation">
        <div className="our_technologies_left" style={{ width: "40%" }}>
          <div className="our_technologies_title" style={{ display: "block" }}>
            {parse(t("our_technologies.our_technologies_title1"))}
          </div>
          <div className="our_technologies_perhaps" style={{ display: "block" }}>
            {parse(t("our_technologies.our_technologies_perhaps1"))}
          </div>
          <div className="our_technologies_title" style={{ display: "none" }}>
            {parse(t("our_technologies.our_technologies_title2"))}
          </div>
          <div className="our_technologies_perhaps" style={{ display: "none" }}>
            {parse(t("our_technologies.our_technologies_perhaps2"))}
          </div>
          <div className="our_technologies_title" style={{ display: "none" }}>
            {parse(t("our_technologies.our_technologies_title3"))}
          </div>
          <div className="our_technologies_perhaps" style={{ display: "none" }}>
            {parse(t("our_technologies.our_technologies_perhaps3"))}
          </div>
          <div className="our_technologies_title" style={{ display: "none" }}>
            {parse(t("our_technologies.our_technologies_title4"))}
          </div>
          <div className="our_technologies_perhaps" style={{ display: "none" }}>
            {parse(t("our_technologies.our_technologies_perhaps4"))}
          </div>
          <div className="our_technologies_title" style={{ display: "none" }}>
            {parse(t("our_technologies.our_technologies_title5"))}
          </div>
          <div className="our_technologies_perhaps" style={{ display: "none" }}>
            {parse(t("our_technologies.our_technologies_perhaps5"))}
          </div>
          <div className="our_technologies_title" style={{ display: "none" }}>
            {parse(t("our_technologies.our_technologies_title6"))}
          </div>
          <div className="our_technologies_perhaps" style={{ display: "none" }}>
            {parse(t("our_technologies.our_technologies_perhaps6"))}
          </div>
          <div className="our_technologies_title" style={{ display: "none" }}>
            {parse(t("our_technologies.our_technologies_title7"))}
          </div>
          <div className="our_technologies_perhaps" style={{ display: "none" }}>
            {parse(t("our_technologies.our_technologies_perhaps7"))}
          </div>
          <div className="our_technologies_title" style={{ display: "none" }}>
            {parse(t("our_technologies.our_technologies_title8"))}
          </div>
          <div className="our_technologies_perhaps" style={{ display: "none" }}>
            {parse(t("our_technologies.our_technologies_perhaps8"))}
          </div>
          <div className="our_technologies_title" style={{ display: "none" }}>
            {parse(t("our_technologies.our_technologies_title9"))}
          </div>
          <div className="our_technologies_perhaps" style={{ display: "none" }}>
            {parse(t("our_technologies.our_technologies_perhaps9"))}
          </div>
          <div className="our_technologies_title" style={{ display: "none" }}>
            {parse(t("our_technologies.our_technologies_title3_2"))}
          </div>
          <div className="our_technologies_perhaps" style={{ display: "none" }}>
            {parse(t("our_technologies.our_technologies_perhaps3_2"))}
          </div>
          <div className="circleButton" onClick={checkTech} style={{ display: "flex" }}>
            Посмотреть технологии
          </div>
        </div>
        <div className="our_technologies_right" style={{ width: "60%" }}>
          <img src={ourTechBack1} alt="" className="ourTech1" style={{ transform: "translateX(30%)" }} />
          <img src={ourTechBack2} alt="" className="ourTech2" style={{ transform: "translateX(80%)" }} />
          <div className="our_technologies_right_left" onClick={leftTech} style={{ pointerEvents: "none" }}>
            <div className="number_hopeful_models_block" style={{ opacity: 1 }}>
              <div className="number_hopeful_models_block_number PoppinsLight fontweight300">8</div>
              <div className="number_hopeful_models_block_title">
                <span className="PoppinsLight fontweight300">
                  hopeful
                  <br />
                  models
                </span>
              </div>
            </div>
          </div>
          <div className="our_technologies_right_right" onClick={rightTech} style={{ pointerEvents: "none" }}>
            <div className="Image_Tech" style={{ transform: "translateX(30%) translateY(0%) scale(1)", opacity: 1, filter: "blur(0px)" }}>
              <img src={ourTech1} alt="" />
            </div>
            <div className="Image_Tech" style={{ transform: "translateX(70%) translateY(20%) scale(0.6)", opacity: 1, filter: "blur(0px)" }}>
              <img src={ourTech2} alt="" />
            </div>
            <div className="Image_Tech" style={{ transform: "translateX(180%) translateY(10%) scale(0.6)", opacity: 0, filter: "blur(0px)" }}>
              <img src={ourTech3} alt="" />
            </div>
            <div className="Image_Tech" style={{ transform: "translateX(-180%) translateY(50%) scale(0.6)", opacity: 0, filter: "blur(0px)" }}>
              <img src={ourTech4} alt="" />
            </div>
            <div className="Image_Tech" style={{ transform: "translateX(-180%) translateY(50%) scale(0.6)", opacity: 0, filter: "blur(0px)" }}>
              <img src={ourTech5} alt="" />
            </div>
            <div className="Image_Tech" style={{ transform: "translateX(-180%) translateY(50%) scale(0.6)", opacity: 0, filter: "blur(0px)" }}>
              <img src={ourTech6} alt="" />
            </div>
            <div className="Image_Tech" style={{ transform: "translateX(-180%) translateY(50%) scale(0.6)", opacity: 0, filter: "blur(0px)" }}>
              <img src={ourTech7} alt="" />
            </div>
            <div className="Image_Tech" style={{ transform: "translateX(-100%) translateY(10%) scale(0.6)", opacity: 0, filter: "blur(0px)" }}>
              <img src={ourTech8} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Our_technologies;
