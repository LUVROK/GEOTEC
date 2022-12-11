import "./history.css";
import history1Block from "../../media/history1Block.webp";
import history2Block from "../../media/history2Block.webp";
import history3Block from "../../media/history3Block.webp";
import history4Block from "../../media/history4Block.webp";
import history5Block from "../../media/history5Block.webp";
import history6Block from "../../media/history6Block.webp";
import history7Block from "../../media/history7Block.webp";
import history8Block from "../../media/history8Block.webp";
import history9Block from "../../media/history9Block.webp";
import history10Block from "../../media/history10Block.webp";
import history11Block from "../../media/history11Block.webp";
import React, { useEffect, useState } from "react";
import $, { event } from "jquery";
import parse from "html-react-parser";
import { useTranslation } from "react-i18next";

const History = () => {
  const { t, i18n } = useTranslation();
  const [TimeHistoryBox_elements, setTimeHistoryBox_element] = useState();



  const [active, setActive] = useState(0);

  useEffect(() => {
    const els = document.querySelectorAll(".textBlock");
    const els_n = document.querySelectorAll(".TimeHistoryBox_element");
    if (window.innerWidth > 720) {
      for (let i = 0; i < els.length; i++) {
        els[i].style.transform = "translateX(0px) translateY(-950px)";
      }
      els[0].style.transform = "translateX(0px) translateY(0px)";
    } else {
      document.querySelector(".History_block").addEventListener("touchstart", handleTouchStart, false);
      document.querySelector(".History_block").addEventListener("touchmove", handleTouchMove, false);

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
            // rightTech();
            /* right swipe */

            const massElements = document.querySelectorAll(".TimeHistoryBox_element");
            const textBlockAll = document.querySelectorAll(".textBlock");
            const els_n = document.querySelectorAll(".TimeHistoryBox_element");
            const activeEl = document.querySelectorAll(".TimeHistoryBox_element");
            let activeElem;
            let indexEl, indexElSec, indexElSec2, indexElPrev, indexElPrev2;
            activeEl.forEach((el) => (el.style.transform === "translateX(0%)" ? (activeElem = el) : console.log("none")));

            for (let i = 0; i < massElements.length; i++) {
              massElements[i].classList.forEach((el) => {
                if (el === "active") {
                  console.log("good");
                  indexEl = i;
                  indexElSec = indexEl !== 10 ? indexEl + 1 : 0;
                  indexElSec2 = indexEl !== 9 ? indexEl + 2 : 0;
                  indexElPrev = indexEl !== 0 ? indexEl - 1 : 10;
                  indexElPrev2 = indexEl !== 1 ? indexEl - 2 : 10;
                }
              });
              // massElements[i].classList.forEach((element) => (element === "active" ? (indexEl = i) : null));
            }
            console.log(textBlockAll[indexElSec].id);
            console.log(els_n[indexElSec].id);
            console.log(indexEl);

            if (indexEl !== 10) {
              currentCorrectActive(textBlockAll[indexElSec].id, els_n[indexElSec].id, indexEl + 1);
            } else {
              currentCorrectActive(textBlockAll[indexElSec].id, els_n[indexElSec].id, 0);
            }

            // currentCorrectActive("first", 2006, 0)

            // if (indexEl !== 10 && indexEl !== 0) {
            //   els_n[indexElPrev2].style.display = "block";
            //   els_n[indexElPrev2].style.transform = "translateX(-125%)";
            //   els_n[indexElPrev].style.display = "block";
            //   els_n[indexElPrev].style.transform = "translateX(-37.5%)";
            //   els_n[indexElPrev].style.zIndex = "101";
            //   els_n[indexEl].style.zIndex = "100";
            //   els_n[indexEl].style.display = "block";
            //   els_n[indexEl].style.transform = "translateX(0%)";
            //   els_n[indexElSec].style.display = "block";
            //   els_n[indexElSec].style.transform = "translateX(37.5%)";
            //   els_n[indexElSec].style.zIndex = "101";
            //   els_n[indexElSec2].style.display = "block";
            //   els_n[indexElSec2].style.transform = "translateX(175%)";
            // } else {
            //   if (indexEl === 10) {
            //     els_n[8].style.display = "block";
            //     els_n[8].style.transform = "translateX(-125%)";
            //     els_n[9].style.display = "block";
            //     els_n[9].style.transform = "translateX(-37.5%)";
            //     els_n[9].style.zIndex = "101";
            //     els_n[10].style.zIndex = "100";
            //     els_n[10].style.display = "block";
            //     els_n[10].style.transform = "translateX(0%)";
            //     els_n[0].style.display = "block";
            //     els_n[0].style.transform = "translateX(37.5%)";
            //     els_n[0].style.zIndex = "101";
            //     els_n[1].style.display = "block";
            //     els_n[1].style.transform = "translateX(175%)";
            //   }
            //   if (indexEl === 0) {
            //     els_n[10].style.display = "block";
            //     els_n[10].style.transform = "translateX(-125%)";
            //     els_n[0].style.display = "block";
            //     els_n[0].style.transform = "translateX(-37.5%)";
            //     els_n[0].style.zIndex = "101";
            //     els_n[1].style.zIndex = "100";
            //     els_n[1].style.display = "block";
            //     els_n[1].style.transform = "translateX(0%)";
            //     els_n[2].style.display = "block";
            //     els_n[2].style.transform = "translateX(37.5%)";
            //     els_n[2].style.zIndex = "101";
            //     els_n[3].style.display = "block";
            //     els_n[3].style.transform = "translateX(175%)";
            //   }
            // }

            // for (let i = 0; i < massElements.length; i++) {
            //   textBlockAll[i].style.transition = "0s";
            //   textBlockAll[i].style.transform = "translateY(0px) translateX(-950px) ";
            // }

            // textBlockAll[indexEl].style.transition = "all 1s ease-out";
            // textBlockAll[indexEl].style.transform = "translateY(0px) translateX(880px)";
            // massElements[indexElSec].style.transition = "all 1s ease-out";
            // massElements[indexElSec].style.transform = "translateY(0px) translateX(0px)";

            // massElements[indexEl].classList.remove("active");
            // newActiveElmass.classList.add("active");
          } else {
            /* left swipe */
            // leftTech();
            const massElements = document.querySelectorAll(".TimeHistoryBox_element");
            const textBlockAll = document.querySelectorAll(".textBlock");
            const els_n = document.querySelectorAll(".TimeHistoryBox_element");
            const activeEl = document.querySelectorAll(".TimeHistoryBox_element");
            let activeElem;
            let indexEl, indexElSec, indexElSec2, indexElPrev, indexElPrev2;
            activeEl.forEach((el) => (el.style.transform === "translateX(0%)" ? (activeElem = el) : console.log("none")));

            for (let i = 0; i < massElements.length; i++) {
              massElements[i].classList.forEach((el) => {
                if (el === "active") {
                  console.log("good");
                  indexEl = i;
                  indexElSec = indexEl !== 10 ? indexEl + 1 : 0;
                  indexElSec2 = indexEl !== 9 ? indexEl + 2 : 0;
                  indexElPrev = indexEl !== 0 ? indexEl - 1 : 10;
                  indexElPrev2 = indexEl !== 1 ? indexEl - 2 : 10;
                }
              });
              // massElements[i].classList.forEach((element) => (element === "active" ? (indexEl = i) : null));
            }
            console.log(textBlockAll[indexElSec].id);
            console.log(els_n[indexElSec].id);
            console.log(indexEl);

            if (indexEl !== 0) {
              currentCorrectActive(textBlockAll[indexElPrev].id, els_n[indexElPrev].id, indexEl - 1, true);
            } else {
              currentCorrectActive(textBlockAll[indexElPrev].id, els_n[indexElPrev].id, 10, true);
            }

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

      for (let i = 0; i < els.length; i++) {
        els[i].style.transform = "translateY(0px) translateX(880px)";
        // els_n[i].style.display = "block";
      }
      // els[10].style.transform = "translateX(-950px) translateY(0px)";
      // els[9].style.transform = "translateX(-950px) translateY(0px)";

      for (let i = 0; i < els_n.length; i++) {
        els_n[i].style.display = "none";
      }

      els_n[9].style.display = "block";
      els_n[9].style.transform = "translateX(-125%)";
      els_n[10].style.display = "block";
      els_n[10].style.transform = "translateX(-37.5%)";
      els_n[10].style.zIndex = "101";
      els_n[0].style.zIndex = "100";
      els_n[0].style.display = "block";
      els_n[0].style.transform = "translateX(0%)";
      els_n[1].style.display = "block";
      els_n[1].style.transform = "translateX(37.5%)";
      els_n[1].style.zIndex = "101";
      els_n[2].style.display = "block";
      els_n[2].style.transform = "translateX(175%)";

      els[0].style.transform = "translateY(0px) translateX(0px)";
    }
  }, []);

  const currentCorrectActive = (newActive, newActiveTime, activeel, leftQ) => {
    const massElements = document.querySelectorAll(".TimeHistoryBox_element");
    const textBlockAll = document.querySelectorAll(".textBlock");
    const els_n = document.querySelectorAll(".TimeHistoryBox_element");

    const newActiveEl = document.getElementById(`${newActive}`);
    const newActiveElmass = document.getElementById(`${newActiveTime}`);

    let indexEl = null;

    for (let i = 0; i < massElements.length; i++) {
      massElements[i].classList.forEach((element) => (element === "active" ? (indexEl = i) : null));
    }

    massElements[indexEl].classList.remove("active");
    newActiveElmass.classList.add("active");

    if (window.innerWidth > 720) {
      for (let i = 0; i < massElements.length; i++) {
        textBlockAll[i].style.transition = "0s";
        textBlockAll[i].style.transform = "translateX(0px) translateY(-950px)";
      }

      textBlockAll[indexEl].style.transition = "all 1s ease-out";
      textBlockAll[indexEl].style.transform = "translateX(0px) translateY(880px)";
      newActiveEl.style.transition = "all 1s ease-out";
      newActiveEl.style.transform = "translateX(0px) translateY(0px)";
    } else {
      let act = activeel;
      let letsecact = activeel !== 10 ? activeel + 1 : 0;
      let letsec2act = activeel !== 9 ? activeel + 2 : 0;
      let letprevact = activeel !== 0 ? activeel - 1 : 10;
      let letprev2act = activeel !== 1 ? activeel - 2 : 10;

      // for (let i = 0; i < els_n.length; i++) {
      //   if (i !== letprevact && i !== letsecact && i !== act) {
      //     els_n[i].style.display = "none";
      //   }
      //   else {

      //   }
      // }

      for (let i = 0; i < els_n.length; i++) {
        if (i !== act && i !== letsecact && i !== letsec2act && i !== letprevact && i !== letprev2act) {
          els_n[i].style.display = "none";
        }
      }

      if (act !== 10 && act !== 0) {
        els_n[letprev2act].style.display = "block";
        els_n[letprev2act].style.transform = "translateX(-125%)";
        els_n[letprevact].style.display = "block";
        els_n[letprevact].style.transform = "translateX(-37.5%)";
        els_n[letprevact].style.zIndex = "101";
        els_n[act].style.zIndex = "100";
        els_n[act].style.display = "block";
        els_n[act].style.transform = "translateX(0%)";
        els_n[letsecact].style.display = "block";
        els_n[letsecact].style.transform = "translateX(37.5%)";
        els_n[letsecact].style.zIndex = "101";
        els_n[letsec2act].style.display = "block";
        els_n[letsec2act].style.transform = "translateX(175%)";
      } else {
        if (act === 10) {
          els_n[8].style.display = "block";
          els_n[8].style.transform = "translateX(-125%)";
          els_n[9].style.display = "block";
          els_n[9].style.transform = "translateX(-37.5%)";
          els_n[9].style.zIndex = "101";
          els_n[10].style.zIndex = "100";
          els_n[10].style.display = "block";
          els_n[10].style.transform = "translateX(0%)";
          els_n[0].style.display = "block";
          els_n[0].style.transform = "translateX(37.5%)";
          els_n[0].style.zIndex = "101";
          els_n[1].style.display = "block";
          els_n[1].style.transform = "translateX(175%)";
        }
        if (act === 0) {
          els_n[9].style.display = "block";
          els_n[9].style.transform = "translateX(-125%)";
          els_n[10].style.display = "block";
          els_n[10].style.transform = "translateX(-37.5%)";
          els_n[10].style.zIndex = "101";
          els_n[0].style.zIndex = "100";
          els_n[0].style.display = "block";
          els_n[0].style.transform = "translateX(0%)";
          els_n[1].style.display = "block";
          els_n[1].style.transform = "translateX(37.5%)";
          els_n[1].style.zIndex = "101";
          els_n[2].style.display = "block";
          els_n[2].style.transform = "translateX(175%)";
        }
      }

      for (let i = 0; i < massElements.length; i++) {
        textBlockAll[i].style.transition = "0s";
        if(leftQ === true) {
          textBlockAll[i].style.transform = "translateY(0px) translateX(-950px) ";

        }
        else {
          textBlockAll[i].style.transform = "translateY(0px) translateX(880px) ";
        }
      }

      textBlockAll[indexEl].style.transition = "all 1s ease-out";
      if(leftQ === true) {
        textBlockAll[indexEl].style.transform = "translateY(0px) translateX(880px)";
      }
      else {
        textBlockAll[indexEl].style.transform = "translateY(0px) translateX(-950px)";
      }
      newActiveEl.style.transition = "all 1s ease-out";
      newActiveEl.style.transform = "translateY(0px) translateX(0px)";
    }
  };

  return (
    <section className="History section sec2">
      <div className="History_block element-animation">
        <h2 className="History_blockTitle">История</h2>
        <div className="hiddenOverflow">
          <div className="textBlock textBlock_first active" id="first" style={{ transform: "translateY(0px)", transition: "all 1s cubic-bezier(0,.11,.29,1)" }}>
            <div className="textBlock_text">{parse(t("History.textBlock_text1"))}</div>
            <div className="textBlock_text_content">{parse(t("History.textBlock_text_content1"))}</div>
            <div className="ImageBack">
              <img src={history1Block} alt=""></img>
            </div>
          </div>
          <div className="textBlock textBlock_second" id="second" style={{ transform: "translateY(-950px)", transition: "all 1s cubic-bezier(0,.11,.29,1)" }}>
            <div className="textBlock_text">{parse(t("History.textBlock_text2"))}</div>
            <div className="textBlock_text_content">{parse(t("History.textBlock_text_content2"))}</div>
            <div className="ImageBack">
              <img src={history2Block} alt=""></img>
            </div>
          </div>
          <div className="textBlock textBlock_third" id="third" style={{ transform: "translateY(-950px)", transition: "all 1s cubic-bezier(0,.11,.29,1)" }}>
            <div className="textBlock_text">{parse(t("History.textBlock_text3"))}</div>
            <div className="textBlock_text_content">{parse(t("History.textBlock_text_content3"))}</div>
            <div className="ImageBack">
              <img src={history3Block} alt=""></img>
            </div>
          </div>
          <div className="textBlock textBlock_fourth" id="fourth" style={{ transform: "translateY(-950px)", transition: "all 1s cubic-bezier(0,.11,.29,1)" }}>
            <div className="textBlock_text">{parse(t("History.textBlock_text4"))}</div>
            <div className="textBlock_text_content">{parse(t("History.textBlock_text_content4"))}</div>
            <div className="ImageBack">
              <img src={history4Block} alt=""></img>
            </div>
          </div>
          <div className="textBlock textBlock_fifth" id="fifth" style={{ transform: "translateY(-950px)", transition: "all 1s cubic-bezier(0,.11,.29,1)" }}>
            <div className="textBlock_text">{parse(t("History.textBlock_text5"))}</div>
            <div className="textBlock_text_content">
              <span className="textBlock_textPopins">{parse(t("History.textBlock_text_content5"))}</span>
            </div>
            <div className="ImageBack">
              <img src={history5Block} alt=""></img>
            </div>
          </div>
          <div className="textBlock textBlock_sixth" id="sixth" style={{ transform: "translateY(-950px)", transition: "all 1s cubic-bezier(0,.11,.29,1)" }}>
            <div className="textBlock_text">{parse(t("History.textBlock_text6"))}</div>
            <div className="textBlock_text_content">{parse(t("History.textBlock_text_content6"))}</div>
            <div className="ImageBack">
              <img src={history6Block} alt=""></img>
            </div>
          </div>
          <div className="textBlock textBlock_seventh" id="seventh" style={{ transform: "translateY(-950px)", transition: "all 1s cubic-bezier(0,.11,.29,1)" }}>
            <div className="textBlock_text">{parse(t("History.textBlock_text7"))}</div>
            <div className="textBlock_text_content">
              <span className="textBlock_textPopins">{parse(t("History.textBlock_text_content7"))}</span>
            </div>
            <div className="ImageBack">
              <img src={history7Block} alt=""></img>
            </div>
          </div>
          <div className="textBlock textBlock_eight" id="eight" style={{ transform: "translateY(-950px)", transition: "all 1s cubic-bezier(0,.11,.29,1)" }}>
            <div className="textBlock_text">{parse(t("History.textBlock_text8"))}</div>
            <div className="textBlock_text_content">{parse(t("History.textBlock_text_content8"))}</div>
            <div className="ImageBack">
              <img src={history8Block} alt=""></img>
            </div>
          </div>
          <div className="textBlock textBlock_tenth" id="tenth" style={{ transform: "translateY(-950px)", transition: "all 1s cubic-bezier(0,.11,.29,1)" }}>
            <div className="textBlock_text">{parse(t("History.textBlock_text9"))}</div>
            <div className="textBlock_text_content">{parse(t("History.textBlock_text_content9"))}</div>
            <div className="ImageBack">
              <img src={history9Block} alt=""></img>
            </div>
          </div>
          <div className="textBlock textBlock_eleventh" id="eleventh" style={{ transform: "translateY(-950px)", transition: "all 1s cubic-bezier(0,.11,.29,1)" }}>
            <div className="textBlock_text">{parse(t("History.textBlock_text10"))}</div>
            <div className="textBlock_text_content">{parse(t("History.textBlock_text_content10"))}</div>
            <div className="ImageBack">
              <img src={history10Block} alt=""></img>
            </div>
          </div>
          <div className="textBlock textBlock_twelveth" id="twelveth" style={{ transform: "translateY(-950px)", transition: "all 1s cubic-bezier(0,.11,.29,1)" }}>
            <div className="textBlock_text lasttextBlock_text">{parse(t("History.textBlock_text11"))}</div>
            <div className="textBlock_text_content"></div>
            <div className="ImageBack">
              <img src={history11Block} alt=""></img>
            </div>
          </div>
        </div>
      </div>
      <div className="TimeHistoryBox" id="TimeHistoryBox">
        <div className="TimeHistoryBox_block">
          <div className="TimeHistoryBox_element active" id="TimeHistoryBox_element_2006" style={{ display: "block" }} onClick={() => currentCorrectActive("first", "TimeHistoryBox_element_2006", 0)}>
            2006
          </div>
          <div className="TimeHistoryBox_element" id="TimeHistoryBox_element_2007" style={{ display: "block" }} onClick={() => currentCorrectActive("second", "TimeHistoryBox_element_2007", 1)}>
            2007
          </div>
          <div className="TimeHistoryBox_element" id="TimeHistoryBox_element_2009" style={{ display: "block" }} onClick={() => currentCorrectActive("third", "TimeHistoryBox_element_2009", 2)}>
            2009
          </div>
          <div className="TimeHistoryBox_element" id="TimeHistoryBox_element_2011" style={{ display: "block" }} onClick={() => currentCorrectActive("fourth", "TimeHistoryBox_element_2011", 3)}>
            2011
          </div>
          <div className="TimeHistoryBox_element" id="TimeHistoryBox_element_2012" style={{ display: "block" }} onClick={() => currentCorrectActive("fifth", "TimeHistoryBox_element_2012", 4)}>
            2012
          </div>
          <div className="TimeHistoryBox_element" id="TimeHistoryBox_element_2014" style={{ display: "block" }} onClick={() => currentCorrectActive("sixth", "TimeHistoryBox_element_2014", 5)}>
            2014
          </div>
          <div className="TimeHistoryBox_element" id="TimeHistoryBox_element_2014_2" style={{ display: "block" }} onClick={() => currentCorrectActive("seventh", "TimeHistoryBox_element_2014_2", 6)}>
            2014
          </div>
          <div className="TimeHistoryBox_element" id="TimeHistoryBox_element_2015" style={{ display: "block" }} onClick={() => currentCorrectActive("eight", "TimeHistoryBox_element_2015", 7)}>
            2015
          </div>
          <div className="TimeHistoryBox_element" id="TimeHistoryBox_element_2016" style={{ display: "block" }} onClick={() => currentCorrectActive("tenth", "TimeHistoryBox_element_2016", 8)}>
            2016
          </div>
          <div className="TimeHistoryBox_element" id="TimeHistoryBox_element_2020" style={{ display: "block" }} onClick={() => currentCorrectActive("eleventh", "TimeHistoryBox_element_2020", 9)}>
            2020
          </div>
          <div className="TimeHistoryBox_element lastTimeHistoryBox_element " style={{ display: "block" }} id="TimeHistoryBox_element_2023" onClick={() => currentCorrectActive("twelveth", "TimeHistoryBox_element_2023", 10)}>
            2023
          </div>
        </div>
      </div>
      <div className="backgroundHistorySvg">
        <svg width="544" height="500" viewBox="0 0 544 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="290.5" cy="247.5" r="247.5" fill="url(#paint0_radial_774_382)" />
          <rect width="310" height="209" rx="20" transform="matrix(-1 0 0 1 310 118)" fill="url(#pattern0)" />
          <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlinkHref="#image0_774_382" transform="translate(-0.0967965) scale(0.000932495 0.00138313)" />
            </pattern>
            <defs>
              <radialGradient id="paint0_radial_774_382" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(290.5 247.5) rotate(90) scale(247.5)">
                <stop stopColor="#83E6DB" stopOpacity="0.59" />
                <stop offset="0.739583" stopColor="#CAF5F0" stopOpacity="0.207083" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
            </defs>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default History;
