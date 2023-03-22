import "./aboutUs.scss";
import React, { useEffect, useState } from "react";

import parse from "html-react-parser";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();
  const [activeAboutUsMobile, setActiveAboutUsMobile] = useState(0);

  const researchs_block_elemClick = (index, open) => {
    const researchs_block_elems = document.querySelectorAll(
      ".researchs_block_elem"
    );
    const researchs_block_elem_overflows = document.querySelectorAll(
      ".researchs_block_elem_overflow"
    );
    const researchs_block_elemSVGs = document.querySelectorAll(
      ".researchs_block_elem svg"
    );
    const researchs_block_elem_text_text = document.querySelectorAll(
      ".researchs_block_elem .text"
    );
    const svgblocks = document.querySelectorAll(".svgblock");

    if (
      researchs_block_elemSVGs[index].style.transform === "rotateX(180deg)" &&
      !open
    ) {
      if (window.innerHeight >= 620) {
        researchs_block_elems[index].style.height = "calc(4.5vh + 4.5vw)";
      } else {
        researchs_block_elems[index].style.height = "calc(2.5vh + 2.5vw)";
      }
      if (window.innerHeight > 620) {
        researchs_block_elem_overflows[index].style.height =
          "calc(2.7vh + 2.7vw)";
        svgblocks[index].style.top = "calc(2.7vh + 2.7vw)";
      } else {
        researchs_block_elem_overflows[index].style.height = "46px";
        svgblocks[index].style.top = "46px";
      }
      researchs_block_elemSVGs[index].style.transform = "rotateX(0deg)";
    } else {
      researchs_block_elem_text_text[index].style.opacity = 1;
      researchs_block_elems[index].style.height = "50vh";
      researchs_block_elem_overflows[index].style.height = "50vh";
      svgblocks[index].style.top = "45vh";
      researchs_block_elemSVGs[index].style.transform = "rotateX(180deg)";
    }
  };

  useEffect(() => {
    if (window.innerWidth < 1134) {
      const textsAboutUs = document.querySelectorAll(
        ".researchs_block_elem_overflow .text"
      );
      const BlocktextsAboutUs = document.querySelectorAll(
        ".researchs_block_elem_overflow"
      );
      const researchs_block_elems = document.querySelectorAll(
        ".researchs_block_elem"
      );
      const mobileTitleAboutUs = document.querySelector(".mobileTitleAboutUs");
      const MobileWhitebottomAboutus = document.querySelector(
        ".MobileWhitebottomAboutus"
      );

      textsAboutUs.forEach((el) => (el.style.opacity = 1));
      BlocktextsAboutUs.forEach((el) => (el.style.height = "auto"));
      researchs_block_elems.forEach(
        (el) => ((el.style.height = "auto"), el.classList.add("section6666"))
      );
      mobileTitleAboutUs.style.display = "block";
      MobileWhitebottomAboutus.style.display = "block";

      document
        .querySelector(".researchs_block")
        .addEventListener("touchstart", handleTouchStart, false);
      document
        .querySelector(".researchs_block")
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
          if (xDiff > 0) {
            if (window.innerWidth <= 1134) {
              rightaboutUs();
            }
          } else {
            if (window.innerWidth <= 1134) {
              leftaboutUs();
            }
          }
        }

        xDown = null;
        yDown = null;
      }
    } else {
      const researchs_block_elems = document.querySelectorAll(
        ".researchs_block_elem"
      );
      researchs_block_elems.forEach((data, index) =>
        data.addEventListener("mouseover", function (e) {
          console.log(index);
          setActiveAboutUsMobile(index);
        })
      );
    }
  }, []);

  const leftaboutUs = () => {
    document.querySelector(".researchs_block").style.pointerEvents = "none";
    setActiveAboutUsMobile((prev) => (prev <= 0 ? 3 : prev - 1));
    setTimeout(() => {
      document.querySelector(".researchs_block").style.pointerEvents = "all";
    }, 600);
  };

  const rightaboutUs = () => {
    document.querySelector(".researchs_block").style.pointerEvents = "none";
    setActiveAboutUsMobile((prev) => (prev >= 3 ? 0 : prev + 1));
    setTimeout(() => {
      document.querySelector(".researchs_block").style.pointerEvents = "all";
    }, 600);
  };

  useEffect(() => {
    if (window.innerWidth <= 1134) {
      const prev1 = activeAboutUsMobile === 0 ? 3 : activeAboutUsMobile - 1;
      const sec1 = activeAboutUsMobile === 3 ? 0 : activeAboutUsMobile + 1;
      const sec2 =
        activeAboutUsMobile === 2
          ? 0
          : activeAboutUsMobile === 3
          ? 1
          : activeAboutUsMobile + 2;

      const elems = document.querySelectorAll(".researchs_block_elem");
      elems[activeAboutUsMobile].style.transform = "translateX(0px)";
      elems[activeAboutUsMobile].style.opacity = 1;
      elems[prev1].style.transform = "translateX(-505px)";
      elems[prev1].style.opacity = 0;
      elems[sec1].style.opacity = 0;
      elems[sec2].style.opacity = 0;
      elems[sec1].style.transform = "translateX(505px)";
      elems[sec2].style.transform = "translateX(505px)";

      const dotselems = document.querySelectorAll(".dots span");
      dotselems[activeAboutUsMobile].style.transform = "scale(1.4)";
      dotselems[prev1].style.transform = "scale(1)";
      dotselems[sec1].style.transform = "scale(1)";
      dotselems[sec2].style.transform = "scale(1)";
    } else {
      researchs_block_elemClick(activeAboutUsMobile, true);
    }
  }, [activeAboutUsMobile]);

  return (
    <section
      className="AboutUs section"
      id="aboutUs"
      data-section-name="aboutUs_section"
    >
      <div
        className="MobileWhitebottomAboutus"
        style={{ display: "none" }}
      ></div>
      <div className="AboutUs_block element-animation">
        <div className="CompanyBar">
          <span className="logo_CompanyBar">GEOTEC -&nbsp;</span>
          {parse(t("aboutUs.logo_CompanyBar"))}
          <div className="perhaps_logo_companyBar">
            {parse(t("aboutUs.perhaps_logo_companyBar"))}
          </div>
        </div>
        <div
          className="mobileTitleAboutUs RalewayRegular fontweight300"
          style={{ display: "none" }}
        >
          <span className="logo_CompanyBarMobile">
            <span className="PoppinsExtraLight fontweight275 logo_CompanyBarMobileGeotec">
              GEOTEC
              <svg
                viewBox="0 0 43 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M38.3183 24.6296C38.7628 22.9951 39 21.2753 39 19.5C39 8.73045 30.2696 0 19.5 0C8.73045 0 0 8.73045 0 19.5C0 30.2696 8.73045 39 19.5 39C19.7851 39 20.0687 38.9939 20.3508 38.9818C11.1025 38.5592 3.73411 30.9274 3.73411 21.5747C3.73411 11.9508 11.5358 4.14915 21.1596 4.14915C30.7835 4.14915 38.5852 11.9508 38.5852 21.5747C38.5852 22.6169 38.4937 23.6377 38.3183 24.6296Z"
                  fill="#4A6AD0"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M30.7437 8.22208C28.6064 6.95238 26.1102 6.22329 23.4438 6.22329C15.5385 6.22329 9.12995 12.6318 9.12995 20.5371C9.12995 28.4424 15.5385 34.851 23.4438 34.851C29.4167 34.851 34.5351 31.1925 36.6806 25.9943C34.6835 32.792 28.3987 37.7551 20.9547 37.7551C11.9037 37.7551 4.56641 30.4178 4.56641 21.3668C4.56641 12.3158 11.9037 4.97852 20.9547 4.97852C24.6244 4.97852 28.0123 6.18464 30.7437 8.22208Z"
                  fill="#4A6AD0"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.2028 19.9185C10.4964 21.5784 11.1376 23.2046 12.1467 24.6891C15.9704 30.3137 23.6298 31.7736 29.2545 27.9499C34.8791 24.1262 36.339 16.4668 32.5153 10.8422C32.0128 10.103 31.4441 9.43581 30.8225 8.84305C32.3009 9.79019 33.6163 11.0455 34.6659 12.5894C38.8234 18.7051 37.236 27.0332 31.1203 31.1908C25.0046 35.3484 16.6765 33.761 12.5189 27.6453C10.9095 25.2778 10.1609 22.5788 10.2028 19.9185Z"
                  fill="#2ADEA1"
                />
              </svg>
            </span>{" "}
            -&nbsp;
          </span>
          {parse(t("aboutUs.mobileTitleAboutUsTitle"))}
        </div>
        <div className="researchs_block" style={{ pointerEvents: "all" }}>
          <div
            className="researchs_block_elem"
            onClick={() => researchs_block_elemClick(0)}
            style={
              (window.innerWidth <= 1134
                ? {
                    transform: "translateX(0px)",
                    opacity: 1,
                  }
                : {},
              window.innerHeight < 620
                ? { height: "calc(2.5vh + 2.5vw)" }
                : { height: "calc(4.2vh + 4.2vw)" })
            }
          >
            <div
              className="researchs_block_elem_overflow"
              style={
                window.innerHeight > 620
                  ? { height: "calc(2.7vh + 2.7vw)" }
                  : { height: "46px" }
              }
            >
              <div
                className="researchs_block_elem_text"
                style={
                  window.innerHeight > 620
                    ? { height: "calc(2.7vh + 2.7vw)" }
                    : { height: "46px" }
                }
              >
                {parse(t("aboutUs.researchs_block_elem_text1"))}
              </div>
              <div className="text" style={{ height: "auto", opacity: 0 }}>
                {parse(t("aboutUs.text1"))}
              </div>
            </div>
            {/* <div className="borderbottom" style={{ bottom: "0px" }}></div> */}
            <div
              className="svgblock"
              style={
                window.innerHeight > 620
                  ? { top: "calc(2.7vh + 2.7vw)" }
                  : { top: "46px" }
              }
            >
              <svg
                viewBox="0 0 45 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ transform: "rotateX(0deg)" }}
              >
                <path
                  d="M1 1L22.2132 22.2132L43.4264 1"
                  stroke="#102876"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
          <div
            className="researchs_block_elem"
            onClick={() => researchs_block_elemClick(1)}
            style={
              (window.innerWidth <= 1134
                ? {
                    transform: "translateX(505px)",
                    opacity: 1,
                  }
                : {},
              window.innerHeight < 620
                ? { height: "calc(2.5vh + 2.5vw)" }
                : { height: "calc(4.2vh + 4.2vw)" })
            }
          >
            <div
              className="researchs_block_elem_overflow"
              style={
                window.innerHeight > 620
                  ? { height: "calc(2.7vh + 2.7vw)" }
                  : { height: "46px" }
              }
            >
              <div
                className="researchs_block_elem_text"
                style={
                  window.innerHeight > 620
                    ? { height: "calc(2.7vh + 2.7vw)" }
                    : { height: "46px" }
                }
              >
                {parse(t("aboutUs.researchs_block_elem_text2"))}
              </div>
              <div className="text" style={{ height: "auto", opacity: 0 }}>
                {parse(t("aboutUs.text2"))}
              </div>
            </div>
            {/* <div className="borderbottom" style={{ bottom: "0px" }}></div> */}
            <div
              className="svgblock"
              style={
                window.innerHeight > 620
                  ? { top: "calc(2.7vh + 2.7vw)" }
                  : { top: "46px" }
              }
            >
              <svg
                viewBox="0 0 45 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ transform: "rotateX(deg)" }}
              >
                <path
                  d="M1 1L22.2132 22.2132L43.4264 1"
                  stroke="#102876"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
          <div
            className="researchs_block_elem"
            onClick={() => researchs_block_elemClick(2)}
            style={
              (window.innerWidth <= 1134
                ? {
                    transform: "translateX(505px)",
                    opacity: 1,
                  }
                : {},
              window.innerHeight < 620
                ? { height: "calc(2.5vh + 2.5vw)" }
                : { height: "calc(4.2vh + 4.2vw)" })
            }
          >
            <div
              className="researchs_block_elem_overflow"
              style={
                window.innerHeight > 620
                  ? { height: "calc(2.7vh + 2.7vw)" }
                  : { height: "46px" }
              }
            >
              <div
                className="researchs_block_elem_text"
                style={
                  window.innerHeight > 620
                    ? { height: "calc(2.7vh + 2.7vw)" }
                    : { height: "46px" }
                }
              >
                {parse(t("aboutUs.researchs_block_elem_text3"))}
              </div>
              <div className="text" style={{ height: "auto", opacity: 0 }}>
                {parse(t("aboutUs.text3"))}
              </div>
            </div>
            {/* <div className="borderbottom" style={{ bottom: "0px" }}></div> */}
            <div
              className="svgblock"
              style={
                window.innerHeight > 620
                  ? { top: "calc(2.7vh + 2.7vw)" }
                  : { top: "46px" }
              }
            >
              <svg
                viewBox="0 0 45 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ transform: "rotateX(deg)" }}
              >
                <path
                  d="M1 1L22.2132 22.2132L43.4264 1"
                  stroke="#102876"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
          <div
            className="researchs_block_elem"
            onClick={() => researchs_block_elemClick(3)}
            style={
              (window.innerWidth <= 1134
                ? {
                    transform: "translateX(-505px)",
                    opacity: 1,
                  }
                : {},
              window.innerHeight < 620
                ? { height: "calc(2.5vh + 2.5vw)" }
                : { height: "calc(4.2vh + 4.2vw)" })
            }
          >
            <div
              className="researchs_block_elem_overflow"
              style={
                window.innerHeight > 620
                  ? { height: "calc(2.7vh + 2.7vw)" }
                  : { height: "46px" }
              }
            >
              <div
                className="researchs_block_elem_text"
                style={
                  window.innerHeight > 620
                    ? { height: "calc(2.7vh + 2.7vw)" }
                    : { height: "46px" }
                }
              >
                {parse(t("aboutUs.researchs_block_elem_text4"))}
              </div>
              <div className="text" style={{ height: "auto", opacity: 0 }}>
                {parse(t("aboutUs.text4"))}
              </div>
            </div>
            {/* <div className="borderbottom" style={{ bottom: "0px" }}></div> */}
            <div
              className="svgblock"
              style={
                window.innerHeight > 620
                  ? { top: "calc(2.7vh + 2.7vw)" }
                  : { top: "46px" }
              }
            >
              <svg
                viewBox="0 0 45 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ transform: "rotateX(deg)" }}
              >
                <path
                  d="M1 1L22.2132 22.2132L43.4264 1"
                  stroke="#102876"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
          <div className="dots">
            <span style={{ transform: "scale(1.2)" }}>.</span>
            <span style={{ transform: "scale(1)" }}>.</span>
            <span style={{ transform: "scale(1)" }}>.</span>
            <span style={{ transform: "scale(1)" }}>.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
