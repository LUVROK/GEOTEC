import "./projects.scss";
import { useState, useEffect } from "react";
import parse from "html-react-parser";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import project1 from "../../media/Geology-01_2021-04-07.webp";
import project2 from "../../media/projects_1.webp";
import project3 from "../../media/projects_2.webp";
import project4 from "../../media/projects_3.webp";
import project5 from "../../media/projects_4.webp";
import project6 from "../../media/projects_5.webp";
import project7 from "../../media/projects_6.webp";
import project8 from "../../media/projects_7.webp";
import project9 from "../../media/projects_8.webp";
import project10 from "../../media/projects_9.webp";
import project11 from "../../media/projects_10.webp";
import project12 from "../../media/projects_11.webp";

const Projects = () => {
  const { t, i18n } = useTranslation();

  const [active, setActive] = useState(0);
  const [activePrev, setActivePrev] = useState(11);
  const [activePrev2, setActivePrev2] = useState(10);
  const [activeSec, setActiveSec] = useState(1);
  const [activeSec2, setActiveSec2] = useState(2);
  const [activeSec3, setActiveSec3] = useState(3);
  const [activeSec4, setActiveSec4] = useState(4);
  const [MassImagesBlockOverflow, setMassImagesBlockOverflow] = useState();
  const [MassDiscriptionBlockOverflow, setMassDiscriptionBlockOverflow] =
    useState();
  const [MasshiddenOverflowBlockOverflow, setMasshiddenOverflowBlockOverflow] =
    useState();

  const pageFunctionto = (value) => {
    switch (value) {
      case 0:
        document.querySelector(".btnBefore").style.pointerEvents = "none";
        setActivePrev((prev) => (prev <= 0 ? 11 : prev - 1));
        setActivePrev2((prev) => (prev <= 0 ? 11 : prev - 1));
        setActiveSec((prev) => (prev <= 0 ? 11 : prev - 1));
        setActiveSec2((prev) => (prev <= 0 ? 11 : prev - 1));
        setActiveSec3((prev) => (prev <= 0 ? 11 : prev - 1));
        setActiveSec4((prev) => (prev <= 0 ? 11 : prev - 1));
        setActive((prev) => (prev <= 0 ? 11 : prev - 1));
        setTimeout(() => {
          document.querySelector(".btnBefore").style.pointerEvents = "all";
        }, 600);
        break;
      case 1:
        document.querySelector(".btnAfter").style.pointerEvents = "none";
        setActive((prev) => (prev >= 11 ? 0 : prev + 1));
        setActivePrev((prev) => (prev >= 11 ? 0 : prev + 1));
        setActivePrev2((prev) => (prev >= 11 ? 0 : prev + 1));
        setActiveSec((prev) => (prev >= 11 ? 0 : prev + 1));
        setActiveSec2((prev) => (prev >= 11 ? 0 : prev + 1));
        setActiveSec3((prev) => (prev >= 11 ? 0 : prev + 1));
        setActiveSec4((prev) => (prev >= 11 ? 0 : prev + 1));
        setTimeout(() => {
          document.querySelector(".btnAfter").style.pointerEvents = "all";
        }, 600);
        break;
    }
  };

  useEffect(() => {
    setMassImagesBlockOverflow(
      document.querySelectorAll(".ImagesBlockOverflow")
    );
    if (window.innerWidth > 910) {
      setMassDiscriptionBlockOverflow(
        document.querySelectorAll(".Projects_blockDesktop .textDesc_block")
      );
    } else {
      setMassDiscriptionBlockOverflow(
        document.querySelectorAll(".Projects_blockMobile .textDesc_block")
      );
    }
    setMasshiddenOverflowBlockOverflow(
      document.querySelectorAll(".hiddenOverflowProject")
    );
  }, []);

  useEffect(() => {
    if (MassImagesBlockOverflow !== undefined) {
      MassImagesBlockOverflow[activePrev].classList.remove("active");
      MassImagesBlockOverflow[active].classList.add("active");
      MassImagesBlockOverflow[activeSec].classList.remove("active");

      MassImagesBlockOverflow[activePrev2].style.opacity = "0";
      MassImagesBlockOverflow[activePrev].style.opacity = "1";
      MassImagesBlockOverflow[activePrev2].style.transform =
        "translateX(-160%)";
      MassImagesBlockOverflow[activePrev].style.transform = "translateX(-160%)";
      MassImagesBlockOverflow[activeSec3].style.opacity = "1";
      MassImagesBlockOverflow[activeSec3].style.transform = "translateX(370%)";
      MassImagesBlockOverflow[activeSec4].style.opacity = "0";
      MassImagesBlockOverflow[activeSec4].style.transform = "translateX(370%)";
      MassImagesBlockOverflow[activeSec].style.opacity = "1";
      MassImagesBlockOverflow[activeSec2].style.opacity = "1";
      MassImagesBlockOverflow[activeSec].style.transform = "translateX(160%)";
      MassImagesBlockOverflow[activeSec2].style.transform = "translateX(270%)";
      MassImagesBlockOverflow[active].style.opacity = "1";
      MassImagesBlockOverflow[active].style.transform = "translateX(0%)";

      MassDiscriptionBlockOverflow[activePrev].style.display = "none";
      MassDiscriptionBlockOverflow[active].style.display = "block";
      MassDiscriptionBlockOverflow[activeSec].style.display = "none";

      MasshiddenOverflowBlockOverflow[activePrev].style.display = "none";
      MasshiddenOverflowBlockOverflow[active].style.display = "block";
      MasshiddenOverflowBlockOverflow[activeSec].style.display = "none";
    }
  }, [active]);

  const closeMoreInfo = () => {
    const el = document.querySelector(".Projects_Text_desc");
    el.style.transform = "translateX(-100%)";
  };

  const opanMoreInfo = () => {
    const el = document.querySelector(".Projects_Text_desc");
    console.log(el);
    el.style.transform = "translateX(0%)";
  };

  const opanMoreInfoMobile = () => {
    const el = document.querySelector(
      ".Projects_blockMobile .Projects_Text_desc"
    );
    console.log(el);
    el.style.transform = "translateX(0%)";
  };

  const closeMoreInfoMobile = () => {
    const el = document.querySelector(
      ".Projects_blockMobile .Projects_Text_desc"
    );
    el.style.transform = "translateX(-100%)";
  };

  const swipe = (swiper) => {
    const prev = swiper.activeIndex === 0 ? 11 : swiper.activeIndex - 1;
    const sec = swiper.activeIndex === 11 ? 0 : swiper.activeIndex + 1;
    if (MassDiscriptionBlockOverflow !== undefined) {
      MassDiscriptionBlockOverflow[prev].style.display = "none";
      MassDiscriptionBlockOverflow[swiper.activeIndex].style.display = "block";
      MassDiscriptionBlockOverflow[sec].style.display = "none";

      MassDiscriptionBlockOverflow[prev].style.display = "none";
      MassDiscriptionBlockOverflow[swiper.activeIndex].style.display = "block";
      MassDiscriptionBlockOverflow[sec].style.display = "none";
    }
  };

  return (
    <section
      className="Projects Projects_section sec2 section"
      id="projects"
      data-section-name="projects_section"
    >
      <div className="Projects_blockDesktop element-animation">
        <div
          className="Projects_Text_desc"
          style={{ transform: "translateX(-100%)" }}
        >
          <svg
            className="svgcloseprojects"
            onClick={closeMoreInfo}
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
                <feGaussianBlur
                  in="BackgroundImageFix"
                  stdDeviation="27.1828"
                />
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
          <div className="Projects_Text_desc_text">
            <div className="Projects_Text_desc_text_title">
              {parse(t("projects.Projects_Text_desc_text_title"))}
            </div>
            <div className="Projects_Text_desc_text_discription">
              <span className="textDesc_block" style={{ display: "block" }}>
                {parse(t("projects.Projects_Text_desc_text_discription1"))}
              </span>
              <span className="textDesc_block" style={{ display: "none" }}>
                {parse(t("projects.Projects_Text_desc_text_discription2"))}
              </span>
              <span className="textDesc_block" style={{ display: "none" }}>
                {parse(t("projects.Projects_Text_desc_text_discription3"))}
              </span>
              <span className="textDesc_block" style={{ display: "none" }}>
                {parse(t("projects.Projects_Text_desc_text_discription4"))}
              </span>
              <span className="textDesc_block" style={{ display: "none" }}>
                {parse(t("projects.Projects_Text_desc_text_discription5"))}
              </span>
              <span className="textDesc_block" style={{ display: "none" }}>
                {parse(t("projects.Projects_Text_desc_text_discription6"))}
              </span>
              <span className="textDesc_block" style={{ display: "none" }}>
                {parse(t("projects.Projects_Text_desc_text_discription7"))}
              </span>
              <span className="textDesc_block" style={{ display: "none" }}>
                {parse(t("projects.Projects_Text_desc_text_discription8"))}
              </span>
              <span className="textDesc_block" style={{ display: "none" }}>
                {parse(t("projects.Projects_Text_desc_text_discription9"))}
              </span>
              <span className="textDesc_block" style={{ display: "none" }}>
                {parse(t("projects.Projects_Text_desc_text_discription10"))}
              </span>
              <span className="textDesc_block" style={{ display: "none" }}>
                {parse(t("projects.Projects_Text_desc_text_discription11"))}
              </span>
              <span className="textDesc_block" style={{ display: "none" }}>
                {parse(t("projects.Projects_Text_desc_text_discription12"))}
              </span>
            </div>
          </div>
        </div>
        <div className="Projects_block element-animation">
          <div
            className="hiddenOverflow hiddenOverflowProject"
            style={{ display: "block" }}
          >
            {parse(t("projects.title"))}
            <div
              className="textBlockpr textBlock_first active"
              id="first"
              style={{
                transform: "translateY(0px)",
                transition: "all 1s cubic-bezier(0,.11,.29,1)",
              }}
            >
              <div className="textBlock_text projectTextBlock">
                {parse(t("projects.textBlock_text1"))}
              </div>
              <div className="textBlock_text_content">
                {parse(t("projects.textBlock_text_location1"))}
                <br />
                {parse(t("projects.textBlock_text_client1"))}
              </div>
              <div className="Button_Learn_More" onClick={opanMoreInfo}>
                <div className="title">
                  {parse(t("projects.Button_Learn_More"))}
                </div>
                <div>
                  <svg
                    width="29"
                    height="19"
                    viewBox="0 0 29 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.1562 0C20.1562 4.83249 24.0738 8.75 28.9062 8.75V9.75C24.0738 9.75 20.1562 13.6675 20.1562 18.5H19.1562C19.1562 14.661 21.375 11.3402 24.6001 9.75H0V8.75H24.6001C21.375 7.15981 19.1562 3.83901 19.1562 0H20.1562Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            className="hiddenOverflow hiddenOverflowProject"
            style={{ display: "none" }}
          >
            {parse(t("projects.title"))}
            <div
              className="textBlockpr textBlock_first active"
              id="first"
              style={{
                transform: "translateY(0px)",
                transition: "all 1s cubic-bezier(0,.11,.29,1)",
              }}
            >
              <div className="textBlock_text projectTextBlock">
                {parse(t("projects.textBlock_text2"))}
              </div>
              <div className="textBlock_text_content">
                {parse(t("projects.textBlock_text_location2"))}
                <br />
                {parse(t("projects.textBlock_text_client2"))}
              </div>
              <div className="Button_Learn_More" onClick={opanMoreInfo}>
                <div className="title">
                  {parse(t("projects.Button_Learn_More"))}
                </div>
                <div>
                  <svg
                    width="29"
                    height="19"
                    viewBox="0 0 29 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.1562 0C20.1562 4.83249 24.0738 8.75 28.9062 8.75V9.75C24.0738 9.75 20.1562 13.6675 20.1562 18.5H19.1562C19.1562 14.661 21.375 11.3402 24.6001 9.75H0V8.75H24.6001C21.375 7.15981 19.1562 3.83901 19.1562 0H20.1562Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            className="hiddenOverflow hiddenOverflowProject"
            style={{ display: "none" }}
          >
            {parse(t("projects.title"))}
            <div
              className="textBlockpr textBlock_first active"
              id="first"
              style={{
                transform: "translateY(0px)",
                transition: "all 1s cubic-bezier(0,.11,.29,1)",
              }}
            >
              <div className="textBlock_text projectTextBlock">
                {parse(t("projects.textBlock_text3"))}
              </div>
              <div className="textBlock_text_content">
                {parse(t("projects.textBlock_text_location3"))}
                <br />
                {parse(t("projects.textBlock_text_client3"))}
              </div>
              <div className="Button_Learn_More" onClick={opanMoreInfo}>
                <div className="title">
                  {parse(t("projects.Button_Learn_More"))}
                </div>
                <div>
                  <svg
                    width="29"
                    height="19"
                    viewBox="0 0 29 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.1562 0C20.1562 4.83249 24.0738 8.75 28.9062 8.75V9.75C24.0738 9.75 20.1562 13.6675 20.1562 18.5H19.1562C19.1562 14.661 21.375 11.3402 24.6001 9.75H0V8.75H24.6001C21.375 7.15981 19.1562 3.83901 19.1562 0H20.1562Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            className="hiddenOverflow hiddenOverflowProject"
            style={{ display: "none" }}
          >
            {parse(t("projects.title"))}
            <div
              className="textBlockpr textBlock_first active"
              id="first"
              style={{
                transform: "translateY(0px)",
                transition: "all 1s cubic-bezier(0,.11,.29,1)",
              }}
            >
              <div className="textBlock_text projectTextBlock">
                {parse(t("projects.textBlock_text4"))}
              </div>
              <div className="textBlock_text_content">
                {parse(t("projects.textBlock_text_location4"))}
                <br />
                {parse(t("projects.textBlock_text_client4"))}
              </div>
              <div className="Button_Learn_More" onClick={opanMoreInfo}>
                <div className="title">
                  {parse(t("projects.Button_Learn_More"))}
                </div>
                <div>
                  <svg
                    width="29"
                    height="19"
                    viewBox="0 0 29 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.1562 0C20.1562 4.83249 24.0738 8.75 28.9062 8.75V9.75C24.0738 9.75 20.1562 13.6675 20.1562 18.5H19.1562C19.1562 14.661 21.375 11.3402 24.6001 9.75H0V8.75H24.6001C21.375 7.15981 19.1562 3.83901 19.1562 0H20.1562Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            className="hiddenOverflow hiddenOverflowProject"
            style={{ display: "none" }}
          >
            {parse(t("projects.title"))}
            <div
              className="textBlockpr textBlock_first active"
              id="first"
              style={{
                transform: "translateY(0px)",
                transition: "all 1s cubic-bezier(0,.11,.29,1)",
              }}
            >
              <div className="textBlock_text projectTextBlock">
                {parse(t("projects.textBlock_text5"))}
              </div>
              <div className="textBlock_text_content">
                {parse(t("projects.textBlock_text_location5"))}
                <br />
                {parse(t("projects.textBlock_text_client5"))}
              </div>
              <div className="Button_Learn_More" onClick={opanMoreInfo}>
                <div className="title">
                  {parse(t("projects.Button_Learn_More"))}
                </div>
                <div>
                  <svg
                    width="29"
                    height="19"
                    viewBox="0 0 29 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.1562 0C20.1562 4.83249 24.0738 8.75 28.9062 8.75V9.75C24.0738 9.75 20.1562 13.6675 20.1562 18.5H19.1562C19.1562 14.661 21.375 11.3402 24.6001 9.75H0V8.75H24.6001C21.375 7.15981 19.1562 3.83901 19.1562 0H20.1562Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            className="hiddenOverflow hiddenOverflowProject"
            style={{ display: "none" }}
          >
            {parse(t("projects.title"))}
            <div
              className="textBlockpr textBlock_first active"
              id="first"
              style={{
                transform: "translateY(0px)",
                transition: "all 1s cubic-bezier(0,.11,.29,1)",
              }}
            >
              <div className="textBlock_text projectTextBlock">
                {parse(t("projects.textBlock_text6"))}
              </div>
              <div className="textBlock_text_content">
                {parse(t("projects.textBlock_text_location6"))}
                <br />
                {parse(t("projects.textBlock_text_client6"))}
              </div>
              <div className="Button_Learn_More" onClick={opanMoreInfo}>
                <div className="title">
                  {parse(t("projects.Button_Learn_More"))}
                </div>
                <div>
                  <svg
                    width="29"
                    height="19"
                    viewBox="0 0 29 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.1562 0C20.1562 4.83249 24.0738 8.75 28.9062 8.75V9.75C24.0738 9.75 20.1562 13.6675 20.1562 18.5H19.1562C19.1562 14.661 21.375 11.3402 24.6001 9.75H0V8.75H24.6001C21.375 7.15981 19.1562 3.83901 19.1562 0H20.1562Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            className="hiddenOverflow hiddenOverflowProject"
            style={{ display: "none" }}
          >
            {parse(t("projects.title"))}
            <div
              className="textBlockpr textBlock_first active"
              id="first"
              style={{
                transform: "translateY(0px)",
                transition: "all 1s cubic-bezier(0,.11,.29,1)",
              }}
            >
              <div className="textBlock_text projectTextBlock">
                {parse(t("projects.textBlock_text7"))}
              </div>
              <div className="textBlock_text_content">
                {parse(t("projects.textBlock_text_location7"))}
                <br />
                {parse(t("projects.textBlock_text_client7"))}
              </div>
              <div className="Button_Learn_More" onClick={opanMoreInfo}>
                <div className="title">
                  {parse(t("projects.Button_Learn_More"))}
                </div>
                <div>
                  <svg
                    width="29"
                    height="19"
                    viewBox="0 0 29 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.1562 0C20.1562 4.83249 24.0738 8.75 28.9062 8.75V9.75C24.0738 9.75 20.1562 13.6675 20.1562 18.5H19.1562C19.1562 14.661 21.375 11.3402 24.6001 9.75H0V8.75H24.6001C21.375 7.15981 19.1562 3.83901 19.1562 0H20.1562Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            className="hiddenOverflow hiddenOverflowProject"
            style={{ display: "none" }}
          >
            {parse(t("projects.title"))}
            <div
              className="textBlockpr textBlock_first active"
              id="first"
              style={{
                transform: "translateY(0px)",
                transition: "all 1s cubic-bezier(0,.11,.29,1)",
              }}
            >
              <div className="textBlock_text projectTextBlock">
                {parse(t("projects.textBlock_text8"))}
              </div>
              <div className="textBlock_text_content">
                {parse(t("projects.textBlock_text_location8"))}
                <br />
                {parse(t("projects.textBlock_text_client8"))}
              </div>
              <div className="Button_Learn_More" onClick={opanMoreInfo}>
                <div className="title">
                  {parse(t("projects.Button_Learn_More"))}
                </div>
                <div>
                  <svg
                    width="29"
                    height="19"
                    viewBox="0 0 29 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.1562 0C20.1562 4.83249 24.0738 8.75 28.9062 8.75V9.75C24.0738 9.75 20.1562 13.6675 20.1562 18.5H19.1562C19.1562 14.661 21.375 11.3402 24.6001 9.75H0V8.75H24.6001C21.375 7.15981 19.1562 3.83901 19.1562 0H20.1562Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            className="hiddenOverflow hiddenOverflowProject"
            style={{ display: "none" }}
          >
            {parse(t("projects.title"))}
            <div
              className="textBlockpr textBlock_first active"
              id="first"
              style={{
                transform: "translateY(0px)",
                transition: "all 1s cubic-bezier(0,.11,.29,1)",
              }}
            >
              <div className="textBlock_text projectTextBlock">
                {parse(t("projects.textBlock_text9"))}
              </div>
              <div className="textBlock_text_content">
                {parse(t("projects.textBlock_text_location9"))}
                <br />
                {parse(t("projects.textBlock_text_client9"))}
              </div>
              <div className="Button_Learn_More" onClick={opanMoreInfo}>
                <div className="title">
                  {parse(t("projects.Button_Learn_More"))}
                </div>
                <div>
                  <svg
                    width="29"
                    height="19"
                    viewBox="0 0 29 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.1562 0C20.1562 4.83249 24.0738 8.75 28.9062 8.75V9.75C24.0738 9.75 20.1562 13.6675 20.1562 18.5H19.1562C19.1562 14.661 21.375 11.3402 24.6001 9.75H0V8.75H24.6001C21.375 7.15981 19.1562 3.83901 19.1562 0H20.1562Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            className="hiddenOverflow hiddenOverflowProject"
            style={{ display: "none" }}
          >
            {parse(t("projects.title"))}
            <div
              className="textBlockpr textBlock_first active"
              id="first"
              style={{
                transform: "translateY(0px)",
                transition: "all 1s cubic-bezier(0,.11,.29,1)",
              }}
            >
              <div className="textBlock_text projectTextBlock">
                {parse(t("projects.textBlock_text10"))}
              </div>
              <div className="textBlock_text_content">
                {parse(t("projects.textBlock_text_location10"))}
                <br />
                {parse(t("projects.textBlock_text_client10"))}
              </div>
              <div className="Button_Learn_More" onClick={opanMoreInfo}>
                <div className="title">
                  {parse(t("projects.Button_Learn_More"))}
                </div>
                <div>
                  <svg
                    width="29"
                    height="19"
                    viewBox="0 0 29 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.1562 0C20.1562 4.83249 24.0738 8.75 28.9062 8.75V9.75C24.0738 9.75 20.1562 13.6675 20.1562 18.5H19.1562C19.1562 14.661 21.375 11.3402 24.6001 9.75H0V8.75H24.6001C21.375 7.15981 19.1562 3.83901 19.1562 0H20.1562Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            className="hiddenOverflow hiddenOverflowProject"
            style={{ display: "none" }}
          >
            {parse(t("projects.title"))}
            <div
              className="textBlockpr textBlock_first active"
              id="first"
              style={{
                transform: "translateY(0px)",
                transition: "all 1s cubic-bezier(0,.11,.29,1)",
              }}
            >
              <div className="textBlock_text projectTextBlock">
                {parse(t("projects.textBlock_text11"))}
              </div>
              <div className="textBlock_text_content">
                {parse(t("projects.textBlock_text_location11"))}
                <br />
                {parse(t("projects.textBlock_text_client11"))}
              </div>
              <div className="Button_Learn_More" onClick={opanMoreInfo}>
                <div className="title">
                  {parse(t("projects.Button_Learn_More"))}
                </div>
                <div>
                  <svg
                    width="29"
                    height="19"
                    viewBox="0 0 29 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.1562 0C20.1562 4.83249 24.0738 8.75 28.9062 8.75V9.75C24.0738 9.75 20.1562 13.6675 20.1562 18.5H19.1562C19.1562 14.661 21.375 11.3402 24.6001 9.75H0V8.75H24.6001C21.375 7.15981 19.1562 3.83901 19.1562 0H20.1562Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            className="hiddenOverflow hiddenOverflowProject"
            style={{ display: "none" }}
          >
            {parse(t("projects.title"))}
            <div
              className="textBlockpr textBlock_first active"
              id="first"
              style={{
                transform: "translateY(0px)",
                transition: "all 1s cubic-bezier(0,.11,.29,1)",
              }}
            >
              <div className="textBlock_text projectTextBlock">
                {parse(t("projects.textBlock_text12"))}
              </div>
              <div className="textBlock_text_content">
                {parse(t("projects.textBlock_text_location12"))}
                <br />
                {parse(t("projects.textBlock_text_client12"))}
              </div>
              <div className="Button_Learn_More" onClick={opanMoreInfo}>
                <div className="title">
                  {parse(t("projects.Button_Learn_More"))}
                </div>
                <div>
                  <svg
                    width="29"
                    height="19"
                    viewBox="0 0 29 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.1562 0C20.1562 4.83249 24.0738 8.75 28.9062 8.75V9.75C24.0738 9.75 20.1562 13.6675 20.1562 18.5H19.1562C19.1562 14.661 21.375 11.3402 24.6001 9.75H0V8.75H24.6001C21.375 7.15981 19.1562 3.83901 19.1562 0H20.1562Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="hiddenOverflow2">
            <div
              className="ImagesBlockOverflow active"
              style={{ transform: "translateX(0%)", opacity: "1" }}
            ></div>
            <div
              className="ImagesBlockOverflow"
              style={{ transform: "translateX(160%)", opacity: "1" }}
            ></div>
            <div
              className="ImagesBlockOverflow"
              style={{ transform: "translateX(270%)", opacity: "1" }}
            ></div>
            <div
              className="ImagesBlockOverflow"
              style={{ transform: "translateX(370%)", opacity: "1" }}
            ></div>
            <div
              className="ImagesBlockOverflow"
              style={{ transform: "translateX(370%)", opacity: "1" }}
            ></div>
            <div
              className="ImagesBlockOverflow"
              style={{ transform: "translateX(370%)", opacity: "1" }}
            ></div>
            <div
              className="ImagesBlockOverflow"
              style={{ transform: "translateX(370%)", opacity: "1" }}
            ></div>
            <div
              className="ImagesBlockOverflow"
              style={{ transform: "translateX(370%)", opacity: "1" }}
            ></div>
            <div
              className="ImagesBlockOverflow"
              style={{ transform: "translateX(370%)", opacity: "1" }}
            ></div>
            <div
              className="ImagesBlockOverflow"
              style={{ transform: "translateX(370%)", opacity: "1" }}
            ></div>
            <div
              className="ImagesBlockOverflow"
              style={{ transform: "translateX(-160%)", opacity: "1" }}
            ></div>
            <div
              className="ImagesBlockOverflow"
              style={{ transform: "translateX(-160%)", opacity: "1" }}
            ></div>
            <div className="buttonsBlock">
              <div
                className="btnBefore btnHoverProjects"
                style={{ pointerEvents: "all" }}
                onClick={() => pageFunctionto(0)}
              >
                <svg
                  width="40%"
                  viewBox="0 0 29 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ transform: "scale(-1,1)" }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.1562 0C20.1562 4.83249 24.0738 8.75 28.9062 8.75V9.75C24.0738 9.75 20.1562 13.6675 20.1562 18.5H19.1562C19.1562 14.661 21.375 11.3402 24.6001 9.75H0V8.75H24.6001C21.375 7.15981 19.1562 3.83901 19.1562 0H20.1562Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div
                className="btnAfter btnHoverProjects"
                style={{ pointerEvents: "all" }}
                onClick={() => pageFunctionto(1)}
              >
                <svg
                  width="40%"
                  viewBox="0 0 29 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ transform: "scale(1,1)" }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.1562 0C20.1562 4.83249 24.0738 8.75 28.9062 8.75V9.75C24.0738 9.75 20.1562 13.6675 20.1562 18.5H19.1562C19.1562 14.661 21.375 11.3402 24.6001 9.75H0V8.75H24.6001C21.375 7.15981 19.1562 3.83901 19.1562 0H20.1562Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className="StatusBar">
              <div className="status">
                {active <= 8 && active >= 0 ? `0${active + 1}` : active + 1}
              </div>
              <div className="lineStatus"></div>
              <div className="allCount">12</div>
            </div>
          </div>
        </div>
      </div>
      <div className="Projects_blockMobile element-animation">
        <div className="MobileTitle">{parse(t("projects.title"))}</div>
        <div
          className="Projects_Text_desc"
          style={{ transform: "translateX(-100%)" }}
        >
          <svg
            className="svgcloseprojects"
            onClick={closeMoreInfoMobile}
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
                <feGaussianBlur
                  in="BackgroundImageFix"
                  stdDeviation="27.1828"
                />
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
          <div className="Projects_Text_desc_text">
            <div className="Projects_Text_desc_text_title">
              {parse(t("projects.Projects_Text_desc_text_title"))}
            </div>
            <div className="Projects_Text_desc_text_discription">
              <span className="textDesc_block" style={{ display: "block" }}>
                {parse(t("projects.Projects_Text_desc_text_discription1"))}
              </span>
              <span className="textDesc_block" style={{ display: "none" }}>
                {parse(t("projects.Projects_Text_desc_text_discription2"))}
              </span>
              <span className="textDesc_block" style={{ display: "none" }}>
                {parse(t("projects.Projects_Text_desc_text_discription3"))}
              </span>
              <span className="textDesc_block" style={{ display: "none" }}>
                {parse(t("projects.Projects_Text_desc_text_discription4"))}
              </span>
              <span className="textDesc_block" style={{ display: "none" }}>
                {parse(t("projects.Projects_Text_desc_text_discription5"))}
              </span>
              <span className="textDesc_block" style={{ display: "none" }}>
                {parse(t("projects.Projects_Text_desc_text_discription6"))}
              </span>
              <span className="textDesc_block" style={{ display: "none" }}>
                {parse(t("projects.Projects_Text_desc_text_discription7"))}
              </span>
              <span className="textDesc_block" style={{ display: "none" }}>
                {parse(t("projects.Projects_Text_desc_text_discription8"))}
              </span>
              <span className="textDesc_block" style={{ display: "none" }}>
                {parse(t("projects.Projects_Text_desc_text_discription9"))}
              </span>
              <span className="textDesc_block" style={{ display: "none" }}>
                {parse(t("projects.Projects_Text_desc_text_discription10"))}
              </span>
              <span className="textDesc_block" style={{ display: "none" }}>
                {parse(t("projects.Projects_Text_desc_text_discription11"))}
              </span>
              <span className="textDesc_block" style={{ display: "none" }}>
                {parse(t("projects.Projects_Text_desc_text_discription12"))}
              </span>
            </div>
          </div>
        </div>
        <div className="blockSwiper">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={(swiper) => swipe(swiper)}
            onSwiper={(swiper) => swipe(swiper)}
          >
            <SwiperSlide>
              <div className="map_item">
                <img src={project1} alt="" className="MobileProjectPhoto" />
                <div className="map_item_h1">
                  {parse(t("projects.textBlock_text1"))}
                </div>
                <p className="yellow map_item_p teme">
                  {parse(t("projects.textBlock_text_location1"))}
                </p>
                <p className="yellow map_item_p teme">
                  {parse(t("projects.textBlock_text_client1"))}
                </p>
                <div className="btnMapItem" onClick={opanMoreInfoMobile}>
                  {parse(t("projects.Button_Learn_More"))}
                  <svg
                    width="29"
                    height="19"
                    viewBox="0 0 29 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.1562 0C20.1562 4.83249 24.0738 8.75 28.9062 8.75V9.75C24.0738 9.75 20.1562 13.6675 20.1562 18.5H19.1562C19.1562 14.661 21.375 11.3402 24.6001 9.75H0V8.75H24.6001C21.375 7.15981 19.1562 3.83901 19.1562 0H20.1562Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="map_item">
                <img src={project2} alt="" className="MobileProjectPhoto" />
                <div className="map_item_h1">
                  {parse(t("projects.textBlock_text2"))}
                </div>
                <p className="yellow map_item_p teme">
                  {parse(t("projects.textBlock_text_location2"))}
                </p>
                <p className="yellow map_item_p teme">
                  {parse(t("projects.textBlock_text_client2"))}
                </p>

                <div className="btnMapItem" onClick={opanMoreInfoMobile}>
                  {parse(t("projects.Button_Learn_More"))}
                  <svg
                    width="29"
                    height="19"
                    viewBox="0 0 29 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.1562 0C20.1562 4.83249 24.0738 8.75 28.9062 8.75V9.75C24.0738 9.75 20.1562 13.6675 20.1562 18.5H19.1562C19.1562 14.661 21.375 11.3402 24.6001 9.75H0V8.75H24.6001C21.375 7.15981 19.1562 3.83901 19.1562 0H20.1562Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="map_item">
                <img src={project3} alt="" className="MobileProjectPhoto" />
                <div className="map_item_h1">
                  {parse(t("projects.textBlock_text3"))}
                </div>
                <p className="yellow map_item_p teme">
                  {parse(t("projects.textBlock_text_location3"))}
                </p>
                <p className="yellow map_item_p teme">
                  {parse(t("projects.textBlock_text_client3"))}
                </p>

                <div className="btnMapItem" onClick={opanMoreInfoMobile}>
                  {parse(t("projects.Button_Learn_More"))}
                  <svg
                    width="29"
                    height="19"
                    viewBox="0 0 29 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.1562 0C20.1562 4.83249 24.0738 8.75 28.9062 8.75V9.75C24.0738 9.75 20.1562 13.6675 20.1562 18.5H19.1562C19.1562 14.661 21.375 11.3402 24.6001 9.75H0V8.75H24.6001C21.375 7.15981 19.1562 3.83901 19.1562 0H20.1562Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="map_item">
                <img src={project4} alt="" className="MobileProjectPhoto" />
                <div className="map_item_h1">
                  {parse(t("projects.textBlock_text4"))}
                </div>
                <p className="yellow map_item_p teme">
                  {parse(t("projects.textBlock_text_location4"))}
                </p>
                <p className="yellow map_item_p teme">
                  {parse(t("projects.textBlock_text_client4"))}
                </p>

                <div className="btnMapItem" onClick={opanMoreInfoMobile}>
                  {parse(t("projects.Button_Learn_More"))}
                  <svg
                    width="29"
                    height="19"
                    viewBox="0 0 29 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.1562 0C20.1562 4.83249 24.0738 8.75 28.9062 8.75V9.75C24.0738 9.75 20.1562 13.6675 20.1562 18.5H19.1562C19.1562 14.661 21.375 11.3402 24.6001 9.75H0V8.75H24.6001C21.375 7.15981 19.1562 3.83901 19.1562 0H20.1562Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="map_item">
                <img src={project5} alt="" className="MobileProjectPhoto" />
                <div className="map_item_h1">
                  {parse(t("projects.textBlock_text5"))}
                </div>
                <p className="yellow map_item_p teme">
                  {parse(t("projects.textBlock_text_location5"))}
                </p>
                <p className="yellow map_item_p teme">
                  {parse(t("projects.textBlock_text_client5"))}
                </p>

                <div className="btnMapItem" onClick={opanMoreInfoMobile}>
                  {parse(t("projects.Button_Learn_More"))}
                  <svg
                    width="29"
                    height="19"
                    viewBox="0 0 29 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.1562 0C20.1562 4.83249 24.0738 8.75 28.9062 8.75V9.75C24.0738 9.75 20.1562 13.6675 20.1562 18.5H19.1562C19.1562 14.661 21.375 11.3402 24.6001 9.75H0V8.75H24.6001C21.375 7.15981 19.1562 3.83901 19.1562 0H20.1562Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="map_item">
                <img src={project6} alt="" className="MobileProjectPhoto" />
                <div className="map_item_h1">
                  {parse(t("projects.textBlock_text6"))}
                </div>
                <p className="yellow map_item_p teme">
                  {parse(t("projects.textBlock_text_location6"))}
                </p>
                <p className="yellow map_item_p teme">
                  {parse(t("projects.textBlock_text_client6"))}
                </p>

                <div className="btnMapItem" onClick={opanMoreInfoMobile}>
                  {parse(t("projects.Button_Learn_More"))}
                  <svg
                    width="29"
                    height="19"
                    viewBox="0 0 29 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.1562 0C20.1562 4.83249 24.0738 8.75 28.9062 8.75V9.75C24.0738 9.75 20.1562 13.6675 20.1562 18.5H19.1562C19.1562 14.661 21.375 11.3402 24.6001 9.75H0V8.75H24.6001C21.375 7.15981 19.1562 3.83901 19.1562 0H20.1562Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="map_item">
                <img src={project7} alt="" className="MobileProjectPhoto" />
                <div className="map_item_h1">
                  {parse(t("projects.textBlock_text7"))}
                </div>
                <p className="yellow map_item_p teme">
                  {parse(t("projects.textBlock_text_location7"))}
                </p>
                <p className="yellow map_item_p teme">
                  {parse(t("projects.textBlock_text_client7"))}
                </p>

                <div className="btnMapItem" onClick={opanMoreInfoMobile}>
                  {parse(t("projects.Button_Learn_More"))}
                  <svg
                    width="29"
                    height="19"
                    viewBox="0 0 29 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.1562 0C20.1562 4.83249 24.0738 8.75 28.9062 8.75V9.75C24.0738 9.75 20.1562 13.6675 20.1562 18.5H19.1562C19.1562 14.661 21.375 11.3402 24.6001 9.75H0V8.75H24.6001C21.375 7.15981 19.1562 3.83901 19.1562 0H20.1562Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="map_item">
                <img src={project8} alt="" className="MobileProjectPhoto" />
                <div className="map_item_h1">
                  {parse(t("projects.textBlock_text8"))}
                </div>
                <p className="yellow map_item_p teme">
                  {parse(t("projects.textBlock_text_location8"))}
                </p>
                <p className="yellow map_item_p teme">
                  {parse(t("projects.textBlock_text_client8"))}
                </p>

                <div className="btnMapItem" onClick={opanMoreInfoMobile}>
                  {parse(t("projects.Button_Learn_More"))}
                  <svg
                    width="29"
                    height="19"
                    viewBox="0 0 29 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.1562 0C20.1562 4.83249 24.0738 8.75 28.9062 8.75V9.75C24.0738 9.75 20.1562 13.6675 20.1562 18.5H19.1562C19.1562 14.661 21.375 11.3402 24.6001 9.75H0V8.75H24.6001C21.375 7.15981 19.1562 3.83901 19.1562 0H20.1562Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="map_item">
                <img src={project9} alt="" className="MobileProjectPhoto" />
                <div className="map_item_h1">
                  {parse(t("projects.textBlock_text9"))}
                </div>
                <p className="yellow map_item_p teme">
                  {parse(t("projects.textBlock_text_location9"))}
                </p>
                <p className="yellow map_item_p teme">
                  {parse(t("projects.textBlock_text_client9"))}
                </p>

                <div className="btnMapItem" onClick={opanMoreInfoMobile}>
                  {parse(t("projects.Button_Learn_More"))}
                  <svg
                    width="29"
                    height="19"
                    viewBox="0 0 29 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.1562 0C20.1562 4.83249 24.0738 8.75 28.9062 8.75V9.75C24.0738 9.75 20.1562 13.6675 20.1562 18.5H19.1562C19.1562 14.661 21.375 11.3402 24.6001 9.75H0V8.75H24.6001C21.375 7.15981 19.1562 3.83901 19.1562 0H20.1562Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="map_item">
                <img src={project10} alt="" className="MobileProjectPhoto" />
                <div className="map_item_h1">
                  {parse(t("projects.textBlock_text10"))}
                </div>
                <p className="yellow map_item_p teme">
                  {parse(t("projects.textBlock_text_location10"))}
                </p>
                <p className="yellow map_item_p teme">
                  {parse(t("projects.textBlock_text_client10"))}
                </p>

                <div className="btnMapItem" onClick={opanMoreInfoMobile}>
                  {parse(t("projects.Button_Learn_More"))}
                  <svg
                    width="29"
                    height="19"
                    viewBox="0 0 29 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.1562 0C20.1562 4.83249 24.0738 8.75 28.9062 8.75V9.75C24.0738 9.75 20.1562 13.6675 20.1562 18.5H19.1562C19.1562 14.661 21.375 11.3402 24.6001 9.75H0V8.75H24.6001C21.375 7.15981 19.1562 3.83901 19.1562 0H20.1562Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="map_item">
                <img src={project11} alt="" className="MobileProjectPhoto" />
                <div className="map_item_h1">
                  {parse(t("projects.textBlock_text11"))}
                </div>
                <p className="yellow map_item_p teme">
                  {parse(t("projects.textBlock_text_location11"))}
                </p>
                <p className="yellow map_item_p teme">
                  {parse(t("projects.textBlock_text_client11"))}
                </p>

                <div className="btnMapItem" onClick={opanMoreInfoMobile}>
                  {parse(t("projects.Button_Learn_More"))}
                  <svg
                    width="29"
                    height="19"
                    viewBox="0 0 29 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.1562 0C20.1562 4.83249 24.0738 8.75 28.9062 8.75V9.75C24.0738 9.75 20.1562 13.6675 20.1562 18.5H19.1562C19.1562 14.661 21.375 11.3402 24.6001 9.75H0V8.75H24.6001C21.375 7.15981 19.1562 3.83901 19.1562 0H20.1562Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="map_item">
                <img src={project12} alt="" className="MobileProjectPhoto" />
                <div className="map_item_h1">
                  {parse(t("projects.textBlock_text12"))}
                </div>
                <p className="yellow map_item_p teme">
                  {parse(t("projects.textBlock_text_location12"))}
                </p>
                <p className="yellow map_item_p teme">
                  {parse(t("projects.textBlock_text_client12"))}
                </p>

                <div className="btnMapItem" onClick={opanMoreInfoMobile}>
                  {parse(t("projects.Button_Learn_More"))}
                  <svg
                    width="29"
                    height="19"
                    viewBox="0 0 29 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.1562 0C20.1562 4.83249 24.0738 8.75 28.9062 8.75V9.75C24.0738 9.75 20.1562 13.6675 20.1562 18.5H19.1562C19.1562 14.661 21.375 11.3402 24.6001 9.75H0V8.75H24.6001C21.375 7.15981 19.1562 3.83901 19.1562 0H20.1562Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
