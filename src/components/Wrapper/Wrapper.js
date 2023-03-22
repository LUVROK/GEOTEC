import "./Wrapper.scss";
import React from "react";
import { useTranslation } from "react-i18next";
import fontFamilycorrect from "../../fontFamilyFunc";
import parse from "html-react-parser";
import backImage from "../../media/mountains_wrapper.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import $ from "jquery";

const Wrapper = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="Wrapper section" id="Wrapper" data-section-name="wrapper">
      <div className="Wrapper_image">
        <LazyLoadImage
          alt={""}
          effect="blur"
          src={backImage}
          className="background_image"
        />
      </div>
      <div className="Wrapper_block_GEOTEC">
        <div
          className="Wrapper_block_GEOTEC_block1"
          style={{ opacity: 0, transform: "translateY(90px)" }}
        >
          <h1 style={{ display: "none" }}>GEOTEC</h1>
          <div className="Wrapper_block_GEOTEC_title">
            <span>ge</span>
            <span>
              <div className="Wrapper_block_GEOTEC_logo">
                <svg
                  viewBox="0 0 111 102"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="url(#a)"
                    className="logo_path_1"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M100.073 64.3185C101.233 60.0511 101.852 55.5608 101.852 50.926C101.852 22.8003 79.0516 0 50.926 0C22.8003 0 0 22.8003 0 50.926C0 79.0516 22.8003 101.852 50.926 101.852C51.6721 101.852 52.4146 101.836 53.1529 101.804C28.9979 100.703 9.75241 80.7708 9.75241 56.3438C9.75241 31.2102 30.1272 10.8354 55.2607 10.8354C80.3942 10.8354 100.769 31.2102 100.769 56.3438C100.769 59.0644 100.53 61.7292 100.073 64.3185Z"
                  />
                  <path
                    fill="url(#b)"
                    className="logo_path_2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M80.2811 21.4715C74.6998 18.1565 68.1818 16.253 61.2192 16.253C40.5738 16.253 23.8374 32.9895 23.8374 53.6349C23.8374 74.2803 40.5738 91.0167 61.2192 91.0167C76.815 91.0167 90.1801 81.4661 95.7851 67.8945C90.5669 85.6432 74.1557 98.6009 54.7179 98.6009C31.0804 98.6009 11.9185 79.4389 11.9185 55.8014C11.9185 32.1639 31.0804 13.002 54.7179 13.002C64.3008 13.002 73.148 16.1513 80.2811 21.4715Z"
                  />
                  <path
                    fill="url(#c)"
                    className="logo_path_3"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M26.6413 52.0203C27.4084 56.3552 29.0827 60.6018 31.718 64.4783C41.704 79.1675 61.7071 82.9802 76.3963 72.9943C91.0855 63.0083 94.8982 43.0051 84.9123 28.3159C83.5993 26.3846 82.1132 24.6413 80.4888 23.0927C84.351 25.5665 87.7872 28.8454 90.5289 32.8784C101.387 48.8501 97.2411 70.5997 81.2694 81.4576C65.2977 92.3154 43.5481 88.1698 32.6902 72.1981C28.4873 66.0157 26.5324 58.9674 26.6413 52.0203Z"
                  />
                  <defs>
                    <linearGradient
                      id="a"
                      gradientUnits="objectBoundingBox"
                      x1="0"
                      y1="1"
                      x2="1"
                      y2="1"
                    >
                      <stop offset="0" stopColor="#4762B9" stopOpacity="0.8">
                        <animate
                          attributeName="stopColor"
                          values="#3ED4A9;#3ED4A9;#3ED4A9;#4762B9;#3ED4A9;#3ED4A9;#3ED4A9"
                          dur="2s"
                          repeatCount="indefinite"
                        ></animate>
                      </stop>
                      <stop offset="0.7" stopColor="#4762B9" stopOpacity="0.8">
                        <animate
                          attributeName="stopColor"
                          values="#3ED4A9;#3ED4A9;#3ED4A9;#4762B9;#3ED4A9;#3ED4A9;#3ED4A9"
                          dur="5s"
                          repeatCount="indefinite"
                        ></animate>
                      </stop>
                      <stop offset="1" stopColor="#3ED4A9" stopOpacity="1">
                        <animate
                          attributeName="stopColor"
                          values="#3ED4A9;#3ED4A9;#3ED4A9;#2ADEA1;#3ED4A9;#3ED4A9;#3ED4A9;"
                          dur="5s"
                          repeatCount="indefinite"
                        ></animate>
                      </stop>
                      <animateTransform
                        attributeName="gradientTransform"
                        type="rotate"
                        values="360 .5 .5;0 .5 .5"
                        className="ignore"
                        dur="5s"
                        repeatCount="indefinite"
                      />
                    </linearGradient>
                    <linearGradient
                      id="b"
                      gradientUnits="objectBoundingBox"
                      x1="0"
                      y1="1"
                      x2="1"
                      y2="1"
                    >
                      <stop offset="0" stopColor="#4762B9" stopOpacity="0.8">
                        <animate
                          attributeName="stopColor"
                          values="#3ED4A9;#3ED4A9;#3ED4A9;#4762B9;#3ED4A9;#3ED4A9;#3ED4A9"
                          dur="6s"
                          repeatCount="indefinite"
                        ></animate>
                      </stop>
                      <stop offset="0.7" stopColor="#4762B9" stopOpacity="0.8">
                        <animate
                          attributeName="stopColor"
                          values="#3ED4A9;#3ED4A9;#3ED4A9;#4762B9;#3ED4A9;#3ED4A9;#3ED4A9"
                          dur="10s"
                          repeatCount="indefinite"
                        ></animate>
                      </stop>
                      <stop offset="1" stopColor="#3ED4A9" stopOpacity="1">
                        <animate
                          attributeName="stopColor"
                          values="#3ED4A9;#3ED4A9;#3ED4A9;#2ADEA1;#3ED4A9;#3ED4A9;#3ED4A9;"
                          dur="10s"
                          repeatCount="indefinite"
                        ></animate>
                      </stop>
                      <animateTransform
                        attributeName="gradientTransform"
                        type="rotate"
                        values="360 .5 .5;0 .5 .5"
                        className="ignore"
                        dur="5s"
                        repeatCount="indefinite"
                      />
                    </linearGradient>
                    <linearGradient
                      id="c"
                      gradientUnits="objectBoundingBox"
                      x1="0"
                      y1="1"
                      x2="1"
                      y2="1"
                    >
                      <stop offset="0" stopColor="#4762B9" stopOpacity="0.8">
                        <animate
                          attributeName="stopColor"
                          values="#3ED4A9;#3ED4A9;#3ED4A9;#2ADEA1;#3ED4A9;#3ED4A9;#3ED4A9;"
                          dur="11s"
                          repeatCount="indefinite"
                        ></animate>
                      </stop>
                      <stop offset="0.7" stopColor="#4762B9" stopOpacity="0.8">
                        <animate
                          attributeName="stopColor"
                          values="#3ED4A9;#3ED4A9;#3ED4A9;#2ADEA1;#3ED4A9;#3ED4A9;#3ED4A9;"
                          dur="15s"
                          repeatCount="indefinite"
                        ></animate>
                      </stop>
                      <stop offset="1" stopColor="#3ED4A9" stopOpacity="1">
                        <animate
                          attributeName="stopColor"
                          values="#3ED4A9;#3ED4A9;#3ED4A9;#4762B9;#3ED4A9;#3ED4A9;#3ED4A9"
                          dur="15s"
                          repeatCount="indefinite"
                        ></animate>
                      </stop>
                      <animateTransform
                        attributeName="gradientTransform"
                        type="rotate"
                        values="360 .5 .5;0 .5 .5"
                        className="ignore"
                        dur="5s"
                        repeatCount="indefinite"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </span>
            <span>tec</span>
          </div>
        </div>
        <div
          className="Wrapper_block_GEOTEC_block2"
          style={{ opacity: 0, transform: "translateY(180px)" }}
        >
          <div
            className="Wrapper_block_GEOTEC_block2_title"
            style={{ fontFamily: fontFamilycorrect("en", "Light") }}
          >
            {parse(t("Wrapper.title"))}
          </div>
          <div className="Wrapper_block_GEOTEC_block2_description">
            {parse(t("Wrapper.description"))}
          </div>
        </div>
        <div
          className="Wrapper_block_GEOTEC_block3"
          style={{ opacity: 0, transform: "translateY(360px)" }}
        >
          <div className="Wrapper_block_GEOTEC_block2_description">
            {parse(t("Wrapper.ViewServices"))}
          </div>
          <a
            className="Wrapper_block_GEOTEC_block2_button"
            onClick={(e) => {
              $.scrollify.move("#aboutUs_section");
              $.scrollify.disable();
              setTimeout(() => $.scrollify.enable(), 1600);
            }}
          >
            <svg
              viewBox="0 0 76 76"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M38 76C58.9868 76 76 58.9868 76 38C76 17.0132 58.9868 0 38 0C17.0132 0 0 17.0132 0 38C0 58.9868 17.0132 76 38 76ZM52.9062 37.75C48.0738 37.75 44.1562 33.8325 44.1562 29H43.1562C43.1562 32.839 45.375 36.1598 48.6001 37.75H24V38.75H48.6001C45.375 40.3402 43.1562 43.661 43.1562 47.5H44.1562C44.1562 42.6675 48.0738 38.75 52.9062 38.75V37.75Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
