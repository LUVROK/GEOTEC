import "./history.css";
import history1Block from "../../media/history1Block.png";
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
      for (let i = 0; i < els.length; i++) {
        els[i].style.transform = "translateY(0px) translateX(-950px)";
        // els_n[i].style.display = "block";
      }
      for (let i = 0; i < els_n.length; i++) {
        els_n[i].style.display = "none";
      }
      els_n[0].style.display = "block";
      els_n[0].style.marginLeft = "40px";
      els_n[2].style.display = "block";
      els_n[1].style.display = "block";
      els_n[0].style.marginRight = "0px";
      els_n[2].style.marginRight = "40px";
      els[0].style.transform = "translateY(0px) translateX(0px)";
    }
  }, []);

  const currentCorrectActive = (newActive, newActiveTime, activeel) => {
    const massElements = document.querySelectorAll(".TimeHistoryBox_element");
    const textBlockAll = document.querySelectorAll(".textBlock");
    const els_n = document.querySelectorAll(".TimeHistoryBox_element");

    const newActiveEl = document.getElementById(`${newActive}`);
    const newActiveElmass = document.getElementById(`TimeHistoryBox_element_${newActiveTime}`);

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
      let letprevact = activeel !== 0 ? activeel - 1 : 10;
      console.log(letprevact);
      console.log(act);
      console.log(letsecact);

      for (let i = 0; i < els_n.length; i++) {
        if (i !== letprevact && i !== letsecact && i !== act) {
          els_n[i].style.display = "none";
        }
        else {

        }
      }

      if (act !== 10 && act !== 0) {
        els_n[act].style.marginLeft = "0px";
        els_n[act].style.marginRight = "0px";
        els_n[letprevact].style.marginLeft = "40px";
        els_n[letsecact].style.marginRight = "40px";

        els_n[letprevact].style.display = "block";
        els_n[act].style.display = "block";
        els_n[letsecact].style.display = "block";
      } else {
        if (act === 10) {
          els_n[act].style.marginLeft = "0px";
          els_n[act].style.marginRight = "20px";
          els_n[letprevact].style.marginLeft = "0px";
          els_n[letprevact].style.marginRight = "0px";
          els_n[8].style.marginLeft = "40px";
          els_n[8].style.marginRight = "0px";
          els_n[letsecact].style.marginLeft = "0px";
          els_n[letsecact].style.marginRight = "0px";

          els_n[letprevact - 1].style.display = "block";
          els_n[letprevact].style.display = "block";
          els_n[act].style.display = "block";
        }
        if (act === 0) {
          els_n[act].style.marginLeft = "20px";
          els_n[act].style.marginRight = "0px";
          els_n[letprevact].style.marginLeft = "0px";
          els_n[letprevact].style.marginRight = "0px";
          els_n[letsecact].style.marginLeft = "0px";
          els_n[letsecact].style.marginRight = "0px";
          els_n[letsecact + 1].style.marginLeft = "0px";
          els_n[letsecact + 1].style.marginRight = "40px";

          els_n[act].style.display = "block";
          els_n[letsecact].style.display = "block";
          els_n[letsecact + 1].style.display = "block";

        }
      }

      for (let i = 0; i < massElements.length; i++) {
        textBlockAll[i].style.transition = "0s";
        textBlockAll[i].style.transform = "translateY(0px) translateX(-950px) ";
      }

      textBlockAll[indexEl].style.transition = "all 1s ease-out";
      textBlockAll[indexEl].style.transform = "translateY(0px) translateX(880px)";
      newActiveEl.style.transition = "all 1s ease-out";
      newActiveEl.style.transform = "translateY(0px) translateX(0px)";
    }
  };

  return (
    <div className="History section sec2">
      <div className="History_block element-animation">
        <h2 className="History_blockTitle">История</h2>
        <div className="hiddenOverflow">
          <div className="textBlock textBlock_first active" id="first" style={{ transform: "translateY(0px)", transition: "all 1s cubic-bezier(0,.11,.29,1)" }}>
            <div className="textBlock_text">{parse(t("History.textBlock_text1"))}</div>
            <div className="textBlock_text_content">
              <span className="fontweight275 PoppinsExtraLight">GEOTEC</span> был основан в 2006 году
            </div>
            <div className="ImageBack">
              <img src={history1Block} alt=""></img>
            </div>
          </div>
          <div className="textBlock textBlock_second" id="second" style={{ transform: "translateY(-950px)", transition: "all 1s cubic-bezier(0,.11,.29,1)" }}>
            <div className="textBlock_text">{parse(t("History.textBlock_text2"))}</div>
            <div className="textBlock_text_content">
              <span className="textBlock_textPopins">GEOTEC</span> получил первый проект в Тенгизе от ТШО
            </div>
            <div className="ImageBack">
              <img src={history1Block} alt=""></img>
            </div>
          </div>
          <div className="textBlock textBlock_third" id="third" style={{ transform: "translateY(-950px)", transition: "all 1s cubic-bezier(0,.11,.29,1)" }}>
            <div className="textBlock_text">{parse(t("History.textBlock_text3"))}</div>
            <div className="textBlock_text_content">Выполнен один из самых сложных проектов в Алматинской гондоле</div>
            <div className="ImageBack">
              <img src={history1Block} alt=""></img>
            </div>
          </div>
          <div className="textBlock textBlock_fourth" id="fourth" style={{ transform: "translateY(-950px)", transition: "all 1s cubic-bezier(0,.11,.29,1)" }}>
            <div className="textBlock_text">{parse(t("History.textBlock_text4"))}</div>
            <div className="textBlock_text_content">ТШО подписал Генеральный Контракт на 7 лет</div>
            <div className="ImageBack">
              <img src={history1Block} alt=""></img>
            </div>
          </div>
          <div className="textBlock textBlock_fifth" id="fifth" style={{ transform: "translateY(-950px)", transition: "all 1s cubic-bezier(0,.11,.29,1)" }}>
            <div className="textBlock_text">{parse(t("History.textBlock_text5"))}</div>
            <div className="textBlock_text_content">
              <span className="textBlock_textPopins">GEOTEC</span> выполнял изыскательские работы в г.Алматы
            </div>
            <div className="ImageBack">
              <img src={history1Block} alt=""></img>
            </div>
          </div>
          <div className="textBlock textBlock_sixth" id="sixth" style={{ transform: "translateY(-950px)", transition: "all 1s cubic-bezier(0,.11,.29,1)" }}>
            <div className="textBlock_text">{parse(t("History.textBlock_text6"))}</div>
            <div className="textBlock_text_content">Изыскательские работы выполнялись в тяжелых зимних условиях в Северном Казахстане</div>
            <div className="ImageBack">
              <img src={history1Block} alt=""></img>
            </div>
          </div>
          <div className="textBlock textBlock_seventh" id="seventh" style={{ transform: "translateY(-950px)", transition: "all 1s cubic-bezier(0,.11,.29,1)" }}>
            <div className="textBlock_text">{parse(t("History.textBlock_text7"))}</div>
            <div className="textBlock_text_content">
              <span className="textBlock_textPopins">GEOTEC</span> расширяет свои услуги с использованием <span className="textBlock_textPopins">3D</span> измерения и георадара <span className="textBlock_textPopins">(GPR)</span>
            </div>
            <div className="ImageBack">
              <img src={history1Block} alt=""></img>
            </div>
          </div>
          <div className="textBlock textBlock_eight" id="eight" style={{ transform: "translateY(-950px)", transition: "all 1s cubic-bezier(0,.11,.29,1)" }}>
            <div className="textBlock_text">{parse(t("History.textBlock_text8"))}</div>
            <div className="textBlock_text_content">
              Сертифицирован компанией <span className="textBlock_textPopins">Bureau Veritas</span> по <span className="textBlock_textPopins">ISO 9001</span> и <span className="textBlock_textPopins">OHSAS 18001</span>
            </div>
            <div className="ImageBack">
              <img src={history1Block} alt=""></img>
            </div>
          </div>
          <div className="textBlock textBlock_tenth" id="tenth" style={{ transform: "translateY(-950px)", transition: "all 1s cubic-bezier(0,.11,.29,1)" }}>
            <div className="textBlock_text">{parse(t("History.textBlock_text9"))}</div>
            <div className="textBlock_text_content">
              По поручению ТШО <span className="textBlock_textPopins">GEOTEC</span> выполняет работу по модульному контролю размеров
            </div>
            <div className="ImageBack">
              <img src={history1Block} alt=""></img>
            </div>
          </div>
          <div className="textBlock textBlock_eleventh" id="eleventh" style={{ transform: "translateY(-950px)", transition: "all 1s cubic-bezier(0,.11,.29,1)" }}>
            <div className="textBlock_text">{parse(t("History.textBlock_text10"))}</div>
            <div className="textBlock_text_content">
              По поручению <span className="textBlock_textPopins">KPI GEOTEC</span> выполнит лазерное сканировние в период строительства для создания исполнительной <span className="textBlock_textPopins">BIM</span>-модели Интегрированного газохимического комплекса
            </div>
            <div className="ImageBack">
              <img src={history1Block} alt=""></img>
            </div>
          </div>
          <div className="textBlock textBlock_twelveth" id="twelveth" style={{ transform: "translateY(-950px)", transition: "all 1s cubic-bezier(0,.11,.29,1)" }}>
            <div className="textBlock_text lasttextBlock_text">{parse(t("History.textBlock_text11"))}</div>
            <div className="textBlock_text_content"></div>
            <div className="ImageBack">
              <img src={history1Block} alt=""></img>
            </div>
          </div>
        </div>
      </div>
      <div className="TimeHistoryBox" id="TimeHistoryBox">
        <div className="TimeHistoryBox_block">
          <div className="TimeHistoryBox_element active" id="TimeHistoryBox_element_2006" style={{ display: "block" }} onClick={() => currentCorrectActive("first", 2006, 0)}>
            2006
          </div>
          <div className="TimeHistoryBox_element" id="TimeHistoryBox_element_2007" style={{ display: "block" }} onClick={() => currentCorrectActive("second", 2007, 1)}>
            2007
          </div>
          <div className="TimeHistoryBox_element" id="TimeHistoryBox_element_2009" style={{ display: "block" }} onClick={() => currentCorrectActive("third", 2009, 2)}>
            2009
          </div>
          <div className="TimeHistoryBox_element" id="TimeHistoryBox_element_2011" style={{ display: "block" }} onClick={() => currentCorrectActive("fourth", 2011, 3)}>
            2011
          </div>
          <div className="TimeHistoryBox_element" id="TimeHistoryBox_element_2012" style={{ display: "block" }} onClick={() => currentCorrectActive("fifth", 2012, 4)}>
            2012
          </div>
          <div className="TimeHistoryBox_element" id="TimeHistoryBox_element_2014" style={{ display: "block" }} onClick={() => currentCorrectActive("sixth", 2014, 5)}>
            2014
          </div>
          <div className="TimeHistoryBox_element" id="TimeHistoryBox_element_2014_2" style={{ display: "block" }} onClick={() => currentCorrectActive("seventh", "2014_2", 6)}>
            2014
          </div>
          <div className="TimeHistoryBox_element" id="TimeHistoryBox_element_2015" style={{ display: "block" }} onClick={() => currentCorrectActive("eight", 2015, 7)}>
            2015
          </div>
          <div className="TimeHistoryBox_element" id="TimeHistoryBox_element_2016" style={{ display: "block" }} onClick={() => currentCorrectActive("tenth", 2016, 8)}>
            2016
          </div>
          <div className="TimeHistoryBox_element" id="TimeHistoryBox_element_2020" style={{ display: "block" }} onClick={() => currentCorrectActive("eleventh", 2020, 9)}>
            2020
          </div>
          <div className="TimeHistoryBox_element lastTimeHistoryBox_element " style={{ display: "block" }} id="TimeHistoryBox_element_2023" onClick={() => currentCorrectActive("twelveth", 2023, 10)}>
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
    </div>
  );
};

export default History;
