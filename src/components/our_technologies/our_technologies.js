import "./our_technologies.scss";
import React, { useState, useEffect } from "react";

import ourTech1 from "../../media/OIU_1.webp";
import ourTech2 from "../../media/OU_2.webp";
import ourTech3 from "../../media/OU_3.webp";
import ourTech4 from "../../media/OU_4.webp";
import ourTech5 from "../../media/OU_5.webp";
import ourTech6 from "../../media/OU_6.webp";
import ourTech7 from "../../media/OU_7.webp";
import ourTech8 from "../../media/OU_8.webp";

// import ourTechBack1 from "../../media/ourTechBack1.webp";
import ourTechBack1 from "../../media/EllipseOurTech.svg";
import ourTechBack2 from "../../media/ourTechBack2.webp";
import parse from "html-react-parser";
import { useTranslation } from "react-i18next";

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

  useEffect(() => {
    setImage_TechState(document.querySelectorAll(".Image_Tech"));
    setour_technologies_perhaps(
      document.querySelectorAll(".our_technologies_title")
    );
    setour_technologies_title(
      document.querySelectorAll(".our_technologies_perhaps")
    );

    document
      .querySelector(".our_technologies_right_right")
      .addEventListener("touchstart", handleTouchStart, false);
    document
      .querySelector(".our_technologies_right_right")
      .addEventListener("touchmove", handleTouchMove, false);

    var xDown = null;
    var yDown = null;

    function getTouches(evt) {
      return evt.touches || evt.originalEvent.touches;
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
          rightTech();
          /* right swipe */
        } else {
          /* left swipe */
          leftTech();
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
    document.querySelector(".our_technologies_right__pseudo_left").style.pointerEvents =
      "none";
    document.querySelector(
      ".our_technologies_right__pseudo_right"
    ).style.pointerEvents = "none";
    setActivePrev((prev) => (prev <= 0 ? 7 : prev - 1));
    setActivePrev2((prev) => (prev <= 0 ? 7 : prev - 1));
    setActiveSec((prev) => (prev <= 0 ? 7 : prev - 1));
    setActiveSec2((prev) => (prev <= 0 ? 7 : prev - 1));
    setActive((prev) => (prev <= 0 ? 7 : prev - 1));
    setTimeout(() => {
      document.querySelector(
        ".our_technologies_right__pseudo_left"
      ).style.pointerEvents = "all";
      document.querySelector(
        ".our_technologies_right__pseudo_right"
      ).style.pointerEvents = "all";
    }, 600);
  };

  const rightTech = () => {
    document.querySelector(".our_technologies_right__pseudo_left").style.pointerEvents =
      "none";
    document.querySelector(
      ".our_technologies_right__pseudo_right"
    ).style.pointerEvents = "none";
    setActive((prev) => (prev >= 7 ? 0 : prev + 1));
    setActivePrev((prev) => (prev >= 7 ? 0 : prev + 1));
    setActivePrev2((prev) => (prev >= 7 ? 0 : prev + 1));
    setActiveSec((prev) => (prev >= 7 ? 0 : prev + 1));
    setActiveSec2((prev) => (prev >= 7 ? 0 : prev + 1));
    setTimeout(() => {
      document.querySelector(
        ".our_technologies_right__pseudo_left"
      ).style.pointerEvents = "all";
      document.querySelector(
        ".our_technologies_right__pseudo_right"
      ).style.pointerEvents = "all";
    }, 600);
  };

  useEffect(() => {
    if (Image_TechState !== undefined) {
      Image_TechState[activePrev2].style.transform =
        "translateX(-100vw) translateY(20vh) scale(0.6)";
      Image_TechState[active].style.filter = "blur(0px)";
      Image_TechState[activePrev].style.filter = "blur(0px)";
      Image_TechState[activePrev].style.transform =
        "translateX(-45vw) translateY(50vh) scale(0.6)";
      Image_TechState[activePrev].style.opacity = 0;
      Image_TechState[activePrev2].style.opacity = 0;
      Image_TechState[active].style.opacity = 1;
      if (window.innerWidth > 1134) {
        Image_TechState[activeSec].style.transform =
          "translateX(35vw) translateY(0vh) scale(0.6)";
        Image_TechState[active].style.transform =
          "translateX(10vw) translateY(10vh) scale(1)";
      } else if (window.innerWidth > 720) {
        Image_TechState[activeSec].style.transform =
          "translateX(40vw) translateY(-10vh) scale(0.6)";
        Image_TechState[active].style.transform =
          "translateX(0vw) translateY(10vh) scale(1)";
      } else {
        Image_TechState[active].style.transform =
          "translateX(5vw) translateY(10vh) scale(1)";
        Image_TechState[activeSec].style.transform =
          "translateX(35vw) translateY(5vh) scale(0.55)";
      }
      Image_TechState[activeSec].style.opacity = 1;
      Image_TechState[activeSec2].style.opacity = 0;
      Image_TechState[activeSec].style.filter = "blur(10px)";
      Image_TechState[activeSec2].style.transform =
        "translateX(100vw) translateY(50vh) scale(0.6)";

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
  }, [active]);

  const checkTech = () => {
    document.querySelector(".our_technologies_right__pseudo_left").style.pointerEvents =
      "all";
    document.querySelector(
      ".our_technologies_right__pseudo_right"
    ).style.pointerEvents = "all";
    document.querySelector(".our_technologies_left").style.width = "30%";
    document.querySelector(".our_technologies_right").style.width = "70%";
    document.querySelector(".our_technologies_right__pseudo_left").style.display = "flex";
    document.querySelector(".our_technologies_right__pseudo_right").style.display = "flex";

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

    document.querySelector(".ourTech1").style.transform = "translateX(0vw)";
    document.querySelector(".ourTech2").style.transform = "translateX(0vw)";
  };

  useEffect(() => {
    if (window.innerWidth > 1134) {
      document.querySelector(".ourTech1").style.transform = "translateX(15vw)";
      document.querySelector(".ourTech2").style.transform = "translateX(80vw)";
      document.querySelectorAll(".Image_Tech")[1].style.transform =
        "translateX(25vw) translateY(20vh) scale(0.6)";
      document.querySelectorAll(".Image_Tech")[0].style.transform =
        "translateX(17.5vw) translateY(7vh) scale(1)";
    } else if (window.innerWidth > 720) {
      document.querySelector(".ourTech1").style.transform = "translateX(15vw)";
      document.querySelector(".ourTech2").style.transform = "translateX(50vw)";
      document.querySelectorAll(".Image_Tech")[1].style.transform =
        "translateX(80vw) translateY(10vh) scale(0.45)";
      document.querySelectorAll(".Image_Tech")[0].style.transform =
        "translateX(10vw) translateY(10vh) scale(0.7)";
    } else {
      document.querySelector(".ourTech1").style.transform = "translateX(0vw)";
      document.querySelector(".ourTech2").style.transform = "translateX(30vw)";
      document.querySelectorAll(".Image_Tech")[1].style.transform =
        "translateX(40vw) translateY(17.5vh) scale(0.65)";
      document.querySelectorAll(".Image_Tech")[0].style.transform =
        "translateX(25vw) translateY(10vh) scale(1.2)";
    }
  }, []);

  return (
    <section
      className="our_technologies section"
      id="our_technologies"
      data-section-name="our_technologies_section"
    >
      <div className="our_technologies_block element-animation">
        <div className="our_technologies_left" style={{ width: "40%" }}>
          <div className="our_technologies_title" style={{ display: "block" }}>
            {parse(t("our_technologies.our_technologies_title1"))}
          </div>
          <div
            className="our_technologies_perhaps"
            style={{ display: "block" }}
          >
            {parse(t("our_technologies.our_technologies_perhaps1"))}
          </div>
          <div
            className="our_technologies_title fonttitleTech"
            style={{ display: "none" }}
          >
            {parse(t("our_technologies.our_technologies_title2"))}
          </div>
          <div className="our_technologies_perhaps" style={{ display: "none" }}>
            {parse(t("our_technologies.our_technologies_perhaps2"))}
          </div>
          <div
            className="our_technologies_title fonttitleTech"
            style={{ display: "none" }}
          >
            {parse(t("our_technologies.our_technologies_title3"))}
          </div>
          <div className="our_technologies_perhaps" style={{ display: "none" }}>
            {parse(t("our_technologies.our_technologies_perhaps3"))}
          </div>
          <div
            className="our_technologies_title fonttitleTech"
            style={{ display: "none" }}
          >
            {parse(t("our_technologies.our_technologies_title4"))}
          </div>
          <div className="our_technologies_perhaps" style={{ display: "none" }}>
            {parse(t("our_technologies.our_technologies_perhaps4"))}
          </div>
          <div
            className="our_technologies_title fonttitleTech"
            style={{ display: "none" }}
          >
            {parse(t("our_technologies.our_technologies_title5"))}
          </div>
          <div className="our_technologies_perhaps" style={{ display: "none" }}>
            {parse(t("our_technologies.our_technologies_perhaps5"))}
          </div>
          <div
            className="our_technologies_title fonttitleTech"
            style={{ display: "none" }}
          >
            {parse(t("our_technologies.our_technologies_title6"))}
          </div>
          <div className="our_technologies_perhaps" style={{ display: "none" }}>
            {parse(t("our_technologies.our_technologies_perhaps6"))}
          </div>
          <div
            className="our_technologies_title fonttitleTech"
            style={{ display: "none" }}
          >
            {parse(t("our_technologies.our_technologies_title7"))}
          </div>
          <div className="our_technologies_perhaps" style={{ display: "none" }}>
            {parse(t("our_technologies.our_technologies_perhaps7"))}
          </div>
          <div
            className="our_technologies_title fonttitleTech"
            style={{ display: "none" }}
          >
            {parse(t("our_technologies.our_technologies_title8"))}
          </div>
          <div className="our_technologies_perhaps" style={{ display: "none" }}>
            {parse(t("our_technologies.our_technologies_perhaps8"))}
          </div>
          <div
            className="our_technologies_title fonttitleTech"
            style={{ display: "none" }}
          >
            {parse(t("our_technologies.our_technologies_title9"))}
          </div>
          <div className="our_technologies_perhaps" style={{ display: "none" }}>
            {parse(t("our_technologies.our_technologies_perhaps9"))}
          </div>
          <div
            className="our_technologies_title fonttitleTech"
            style={{ display: "none" }}
          >
            {parse(t("our_technologies.our_technologies_title3_2"))}
          </div>
          <div className="our_technologies_perhaps" style={{ display: "none" }}>
            {parse(t("our_technologies.our_technologies_perhaps3_2"))}
          </div>
          <div
            className="circleButton"
            onClick={checkTech}
            style={{ display: "flex" }}
          >
            {parse(t("our_technologies.circleButton"))}
            <div
              className="our_technologies_right_left"
            >
              <div
                className="number_hopeful_models_block"
                style={{ opacity: 1 }}
              >
                <div className="number_hopeful_models_block_number PoppinsLight fontweight300">
                  8
                </div>
                <div className="number_hopeful_models_block_title">
                  {parse(
                    t("our_technologies.number_hopeful_models_block_title")
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="our_technologies_right" style={{ width: "60%" }}>
          <div
            className="our_technologies_right__pseudo_left"
            style={{ display: "none", pointerEvents: "none" }}
            onClick={leftTech}
          ></div>
          <div
            className="our_technologies_right__pseudo_right"
            style={{ display: "none", pointerEvents: "none" }}
            onClick={rightTech}
          ></div>
          <img
            src={ourTechBack1}
            alt=""
            className="ourTech1"
            style={{ transform: "translateX(30vw)" }}
          />
          <img
            src={ourTechBack2}
            alt=""
            className="ourTech2"
            style={{ transform: "translateX(80vw)" }}
          />
          <div
            className="our_technologies_right_right"
          >
            <div
              className="Image_Tech"
              style={{
                transform: "translateX(30vw) translateY(0vh) scale(1)",
                opacity: 1,
                filter: "blur(0px)",
              }}
            >
              <img src={ourTech1} alt="" />
            </div>
            <div
              className="Image_Tech"
              style={{
                transform: "translateX(70vw) translateY(20vh) scale(0.6)",
                opacity: 1,
                filter: "blur(0px)",
              }}
            >
              <img src={ourTech2} alt="" />
            </div>
            <div
              className="Image_Tech"
              style={{
                transform: "translateX(180vw) translateY(10vh) scale(0.6)",
                opacity: 0,
                filter: "blur(0px)",
              }}
            >
              <img src={ourTech3} alt="" />
            </div>
            <div
              className="Image_Tech"
              style={{
                transform: "translateX(-180vw) translateY(50vh) scale(0.6)",
                opacity: 0,
                filter: "blur(0px)",
              }}
            >
              <img src={ourTech4} alt="" />
            </div>
            <div
              className="Image_Tech"
              style={{
                transform: "translateX(-180vw) translateY(50vh) scale(0.6)",
                opacity: 0,
                filter: "blur(0px)",
              }}
            >
              <img src={ourTech5} alt="" />
            </div>
            <div
              className="Image_Tech"
              style={{
                transform: "translateX(-180vw) translateY(50vh) scale(0.6)",
                opacity: 0,
                filter: "blur(0px)",
              }}
            >
              <img src={ourTech6} alt="" />
            </div>
            <div
              className="Image_Tech"
              style={{
                transform: "translateX(-180vw) translateY(50vh) scale(0.6)",
                opacity: 0,
                filter: "blur(0px)",
              }}
            >
              <img src={ourTech7} alt="" />
            </div>
            <div
              className="Image_Tech"
              style={{
                transform: "translateX(-100vw) translateY(10vh) scale(0.6)",
                opacity: 0,
                filter: "blur(0px)",
              }}
            >
              <img src={ourTech8} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Our_technologies;
