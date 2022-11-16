import "./aboutUs.css";
import React, { useEffect, useState } from "react";

const AboutUs = () => {
  const researchs_block_elemClick = (index) => {
    const researchs_block_elems = document.querySelectorAll(".researchs_block_elem");
    const researchs_block_elem_overflows = document.querySelectorAll(".researchs_block_elem_overflow");
    const researchs_block_elemSVGs = document.querySelectorAll(".researchs_block_elem svg");
    const researchs_block_elem_text_text = document.querySelectorAll(".researchs_block_elem .text");
    if (researchs_block_elemSVGs[index].style.transform === "rotateX(180deg)") {
      researchs_block_elems[index].style.height = "126px";
      researchs_block_elem_overflows[index].style.height = "81px";
      researchs_block_elemSVGs[index].style.transform = "rotateX(0deg)";
      //   researchs_block_elem_text_text[index].style.opacity = 0;
    } else {
      //   setTimeout(() => {
      researchs_block_elem_text_text[index].style.opacity = 1;
      //   }, 300);
      researchs_block_elems[index].style.height = "50vh";
      researchs_block_elem_overflows[index].style.height = "45vh";
      researchs_block_elemSVGs[index].style.transform = "rotateX(180deg)";
    }
  };

  useEffect(() => {
    const textsAboutUs = document.querySelectorAll(".researchs_block_elem_overflow .text");
    const BlocktextsAboutUs = document.querySelectorAll(".researchs_block_elem_overflow");
    const researchs_block_elems = document.querySelectorAll(".researchs_block_elem");
    const mobileTitleAboutUs = document.querySelector(".mobileTitleAboutUs");
    const MobileWhitebottomAboutus = document.querySelector(".MobileWhitebottomAboutus");

    if (window.innerWidth < 1134) {
      textsAboutUs.forEach((el) => (el.style.opacity = 1));
      BlocktextsAboutUs.forEach((el) => (el.style.height = "auto"));
      researchs_block_elems.forEach((el) => (el.style.height = "auto"));
      mobileTitleAboutUs.style.display = "block";
      MobileWhitebottomAboutus.style.display = "block";
    }
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
  let elements = document.querySelectorAll(".element-animation44444");

  for (let elm of elements) {
    observer.observe(elm);
  }

  return (
    <div className="AboutUs">
      <div className="MobileWhitebottomAboutus" style={{ display: "none" }}></div>
      <div className="AboutUs_block element-animation44444">
        <div className="CompanyBar">
          <span className="logo_CompanyBar">GEOTEC -&nbsp;</span>это геодезичекие изыскания под ключ
          <div className="perhaps_logo_companyBar">Наша компания активно работает в следующих областях:</div>
        </div>
        <div className="mobileTitleAboutUs RalewayRegular fontweight300" style={{ display: "none" }}>
          <span className="logo_CompanyBarMobile">
            <span className="PoppinsExtraLight fontweight275 logo_CompanyBarMobileGeotec">
              GEOTEC
              <svg viewBox="0 0 43 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M38.3183 24.6296C38.7628 22.9951 39 21.2753 39 19.5C39 8.73045 30.2696 0 19.5 0C8.73045 0 0 8.73045 0 19.5C0 30.2696 8.73045 39 19.5 39C19.7851 39 20.0687 38.9939 20.3508 38.9818C11.1025 38.5592 3.73411 30.9274 3.73411 21.5747C3.73411 11.9508 11.5358 4.14915 21.1596 4.14915C30.7835 4.14915 38.5852 11.9508 38.5852 21.5747C38.5852 22.6169 38.4937 23.6377 38.3183 24.6296Z" fill="#4A6AD0" />
                <path fillRule="evenodd" clipRule="evenodd" d="M30.7437 8.22208C28.6064 6.95238 26.1102 6.22329 23.4438 6.22329C15.5385 6.22329 9.12995 12.6318 9.12995 20.5371C9.12995 28.4424 15.5385 34.851 23.4438 34.851C29.4167 34.851 34.5351 31.1925 36.6806 25.9943C34.6835 32.792 28.3987 37.7551 20.9547 37.7551C11.9037 37.7551 4.56641 30.4178 4.56641 21.3668C4.56641 12.3158 11.9037 4.97852 20.9547 4.97852C24.6244 4.97852 28.0123 6.18464 30.7437 8.22208Z" fill="#4A6AD0" />
                <path fillRule="evenodd" clipRule="evenodd" d="M10.2028 19.9185C10.4964 21.5784 11.1376 23.2046 12.1467 24.6891C15.9704 30.3137 23.6298 31.7736 29.2545 27.9499C34.8791 24.1262 36.339 16.4668 32.5153 10.8422C32.0128 10.103 31.4441 9.43581 30.8225 8.84305C32.3009 9.79019 33.6163 11.0455 34.6659 12.5894C38.8234 18.7051 37.236 27.0332 31.1203 31.1908C25.0046 35.3484 16.6765 33.761 12.5189 27.6453C10.9095 25.2778 10.1609 22.5788 10.2028 19.9185Z" fill="#2ADEA1" />
              </svg>
            </span>{" "}
            -&nbsp;
          </span>
          это геодезичекие изыскания под ключ
        </div>
        <div className="researchs_block">
          <div className="researchs_block_elem" onClick={() => researchs_block_elemClick(0)} style={{ height: "126px" }}>
            <div className="researchs_block_elem_overflow" style={{ height: "81px" }}>
              <div className="researchs_block_elem_text" style={{ height: "81px" }}>
                Конкретные Изыскания
              </div>
              <div className="text" style={{ height: "auto", opacity: 0 }}>
                - 3D Laser Scanning High-Definition Survey
                <br />
                - БПЛА / Изыскания с помощью беспилотника
                <br />
                - Dimension Control & Deformation Survey
                <br />
                - High-Precision Measurement Survey
                <br />
                - Clash Detection Survey
                <br />- 3D Моделирование
              </div>
            </div>
            <div className="borderbottom"></div>
            <svg width="45" height="24" viewBox="0 0 45 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: "rotateX(0deg)" }}>
              <path d="M1 1L22.2132 22.2132L43.4264 1" stroke="#102876" strokeWidth="2" />
            </svg>
          </div>
          <div className="researchs_block_elem" onClick={() => researchs_block_elemClick(1)} style={{ height: "126px" }}>
            <div className="researchs_block_elem_overflow" style={{ height: "81px" }}>
              <div className="researchs_block_elem_text" style={{ height: "81px" }}>
                Топографо-Геодезические Изыскания
              </div>
              <div className="text" style={{ height: "auto", opacity: 0 }}>
                - GPS съемка (Глобальная система позиционирования)
                <br />
                - Изыскание дорог, железных дорог, мостов и зданий
                <br />
                - Промышленные объекты, Топографические съемки
                <br />
                - Инженерно-строительные изыскания
                <br />- Экстремальные Проектные изыскания, Ветроэнергетические изыскания, Гондола и т.д
              </div>
            </div>
            <div className="borderbottom"></div>
            <svg width="45" height="24" viewBox="0 0 45 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: "rotateX(deg)" }}>
              <path d="M1 1L22.2132 22.2132L43.4264 1" stroke="#102876" strokeWidth="2" />
            </svg>
          </div>
          <div className="researchs_block_elem" onClick={() => researchs_block_elemClick(2)} style={{ height: "126px" }}>
            <div className="researchs_block_elem_overflow" style={{ height: "81px" }}>
              <div className="researchs_block_elem_text" style={{ height: "81px" }}>
                Проектирование
              </div>
              <div className="text" style={{ height: "auto", opacity: 0 }}>
                - Технико-экономическое обоснование железной дороги, Расчет объемов
                <br />
                - Предварительное и подробное воздействие железной дороги на окружающую среду
                <br />
                - Концептуальные чертежи автомобильных и железных дорог
                <br />
                - Разработка технического проекта для железнодорожных перевозок
                <br />- Разработка инженерных проектов автомобильных дорог (всех категорий)
              </div>
            </div>
            <div className="borderbottom"></div>
            <svg width="45" height="24" viewBox="0 0 45 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: "rotateX(deg)" }}>
              <path d="M1 1L22.2132 22.2132L43.4264 1" stroke="#102876" strokeWidth="2" />
            </svg>
          </div>
          <div className="researchs_block_elem" onClick={() => researchs_block_elemClick(3)} style={{ height: "126px" }}>
            <div className="researchs_block_elem_overflow" style={{ height: "81px" }}>
              <div className="researchs_block_elem_text" style={{ height: "81px" }}>
                Гидрографические, геологические и геофизические изыскания
              </div>
              <div className="text" style={{ height: "auto", opacity: 0 }}>
                -Bathymetric Survey
                <br />
                -Ground-Penetrating Radar Services
                <br />
                -Soil Investigation
                <br />
                -Reporting based on ASTM and SNIP_GOST.
              </div>
            </div>
            <div className="borderbottom"></div>
            <svg width="45" height="24" viewBox="0 0 45 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: "rotateX(deg)" }}>
              <path d="M1 1L22.2132 22.2132L43.4264 1" stroke="#102876" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
