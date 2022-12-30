import React from "react";
import Preloader from "../Preloader/Preloader";
import "./LICENSES_CERTIFICATION.scss";

import licenses1 from "../../media/licenses1.webp";
import licenses2 from "../../media/licenses2.webp";
import licenses3 from "../../media/licenses3.webp";
import licenses4 from "../../media/licenses4.webp";
import { useNavigate } from "react-router-dom";

import parse from "html-react-parser";
import { useTranslation } from "react-i18next";
import $ from "jquery";

const LICENSES_CERTIFICATION = () => {
  const [isrender, setisrender] = React.useState(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

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
  let elements = document.querySelectorAll(".element-animation34");

  for (let elm of elements) {
    observer.observe(elm);
  }

  React.useEffect(() => {
    setInterval(() => {
      setisrender(true);
    }, 2000);
    $(document.body).scrollTop(0);
    window.$.scrollify.disable();
  }, []);

  React.useEffect(() => {
    if (!isrender) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "hidden scroll";
    }
  }, [isrender]);

  const closelcInfo = () => {
    navigate(-1);
    window.$.scrollify.enable();
  };

  return (
    <div className="App licenses">
      {!isrender && <Preloader />}
      <div className="svgBckdround">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1730 885"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_1226_2944)">
            <path
              d="M1620 571C1169.18 637.617 1002.62 953 530 953C57.3817 953 125.999 933.266 125.999 812.704C125.999 692.142 -102 117 1773.99 210.736C2246.61 210.736 1781.34 484.174 1620 571Z"
              fill="#07D3AF"
              fillOpacity="0.24"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_1226_2944"
              x="-82.7188"
              y="0.458496"
              width="2263"
              height="1152.54"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="100"
                result="effect1_foregroundBlur_1226_2944"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="element-animation34329101">
        <svg
          className="svglcsprojects"
          onClick={closelcInfo}
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
        <div className="titlePage">
          {parse(t("LICENSES_CERTIFICATION.titlePage"))}
        </div>
        <div className="content">
          <div className="firstBlock">
            <div className="img1 imgblock">
              <img src={licenses1} alt="" />
              <div className="firstBlockText">
                {parse(t("LICENSES_CERTIFICATION.firstBlockText1"))}
              </div>
            </div>
            <div className="img2 imgblock imgblockLC2">
              <img src={licenses2} alt="" />
            </div>
          </div>
          <div className="firstBlock secondBlock">
            <div className="img3 imgblock">
              <img src={licenses3} alt="" />
              <div className="firstBlockText">
                {parse(t("LICENSES_CERTIFICATION.firstBlockText2"))}
              </div>
            </div>
            <div className="img4 imgblock imgblockLC2">
              <img src={licenses4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LICENSES_CERTIFICATION;
