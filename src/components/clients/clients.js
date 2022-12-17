import React from "react";
import "./clients.css";
import onhp from "../../media/onhp.webp";
import img2 from "../../media/img2.webp";
import enka from "../../media/enka.webp";
import jgc from "../../media/jgc.webp";
import img5 from "../../media/img5.webp";
import ALARKO from "../../media/ALARKO.webp";

import img7 from "../../media/img7.webp";
import img8 from "../../media/img8.webp";
import img9 from "../../media/img9.webp";
import img10 from "../../media/img10.webp";
import img11 from "../../media/img11.webp";
import img12 from "../../media/img12.webp";

import Preloader from "../Preloader/Preloader";
import { useNavigate } from "react-router-dom";

import parse from "html-react-parser";
import { useTranslation } from "react-i18next";

const Clients = () => {
  const [isrender, setisrender] = React.useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

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
  let elements = document.querySelectorAll(".element-animation23");

  for (let elm of elements) {
    observer.observe(elm);
  }

  React.useEffect(() => {
    setInterval(() => {
      setisrender(true);
    }, 2000);
    window.scrollTo(0, 0);
    window.$.scrollify.disable();
    // console.log(i18n.language);
  }, []);

  React.useEffect(() => {
    if (!isrender) {
      document.body.style.overflow = "hidden";
    } else {
    }
  }, [isrender]);

  const closeClientsInfo = () => {
    navigate(-1);
    window.$.scrollify.enable();
  };

  return (
    <div className="App clients">
      {!isrender && <Preloader />}
      <div className="element-animation2329181">
        <svg
          className="svgclientsprojects"
          onClick={closeClientsInfo}
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_b_1243_2378)">
            <rect
              width="46"
              height="46"
              rx="23"
              fill="#F9F9F9"
              fillOpacity="0.78"
            />
            <path
              d="M15.407 29.4109C14.9301 29.8879 14.9203 30.7346 15.4167 31.231C15.9229 31.7274 16.7696 31.7177 17.2368 31.2505L22.9988 25.4885L28.751 31.2408C29.2377 31.7274 30.0747 31.7274 30.5711 31.231C31.0675 30.7249 31.0675 29.8976 30.5809 29.4109L24.8286 23.6587L30.5809 17.8967C31.0675 17.4101 31.0772 16.573 30.5711 16.0766C30.0747 15.5803 29.2377 15.5803 28.751 16.0669L22.9988 21.8192L17.2368 16.0669C16.7696 15.59 15.9131 15.5705 15.4167 16.0766C14.9203 16.573 14.9301 17.4295 15.407 17.8967L21.1592 23.6587L15.407 29.4109Z"
              fill="#3C3C43"
              fillOpacity="0.6"
            />
          </g>
          <defs>
            <filter
              id="filter0_b_1243_2378"
              x="-54.3656"
              y="-54.3656"
              width="154.731"
              height="154.731"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="27.1828" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_1243_2378"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_1243_2378"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        <div className="titlePage">{parse(t("clients.title"))}</div>
        <div className="firstBlock">
          <div className="img1">
            <img src={onhp} alt="" />
          </div>
          <div className="img2">
            <img src={img2} alt="" />
          </div>
          <div className="img3">
            <img src={enka} alt="" />
          </div>
          <div className="img4">
            <img src={jgc} alt="" />
          </div>
          <div className="img5">
            <img src={img5} alt="" />
          </div>
          <div className="img6">
            <img src={ALARKO} alt="" />
          </div>
        </div>
        <div className="firstBlock secondBlock">
          <div className="img7">
            <img src={img7} alt="" />
          </div>
          <div className="img8">
            <img src={img8} alt="" />
          </div>
          <div className="img9">
            <img src={img9} alt="" />
          </div>
          <div className="img10">
            <img src={img10} alt="" />
          </div>
          <div className="img11">
            <img src={img11} alt="" />
          </div>
          <div className="img12">
            <img src={img12} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Clients;
