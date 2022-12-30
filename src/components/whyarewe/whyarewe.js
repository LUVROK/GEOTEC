import "./whyarewe.scss";
import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import { useTranslation } from "react-i18next";

const Whyarewe = () => {
  const { t } = useTranslation();

  const [stateClientHeightY, setStateClientHeightY] = useState(0);

  useEffect(() => {
    window.innerHeight < 1120 && window.innerHeight >= 920
      ? setStateClientHeightY(10)
      : window.innerHeight < 920 && window.innerHeight >= 720
      ? setStateClientHeightY(0)
      : window.innerHeight < 720 && window.innerHeight >= 600
      ? setStateClientHeightY(5)
      : window.innerHeight < 600
      ? setStateClientHeightY(-40)
      : setStateClientHeightY(0);
  }, []);

  const listLogoClick = () => {
    document.querySelector(".listLogo").style.pointerEvents = "none";
    const elAll = document.querySelectorAll(
      ".Whyarewe_block_Content_first_transform"
    );
    const elAllgearwhell = document.querySelectorAll(
      ".Whyarewe_block_Content_first_text_Gear_Wheel"
    );

    let indexEl = null;
    let indexEl2 = null;

    for (let i = 0; i < elAll.length; i++) {
      elAll[i].classList.forEach((element) =>
        element === "active" ? [(indexEl = i)] : null
      );
      elAllgearwhell[i].classList.forEach((element) =>
        element === "active" ? [(indexEl2 = i)] : null
      );
    }

    if (indexEl === 1) {
      elAllgearwhell[3].style.transition = "1s";
      elAllgearwhell[0].style.transition = "0s";
      elAllgearwhell[0].style.transform = "translateY(155vh)";
    }
    if (indexEl === 2) {
      elAllgearwhell[0].style.transition = "1s";
      elAllgearwhell[1].style.transition = "0s";
      elAllgearwhell[1].style.transform = "translateY(155vh)";
    }
    if (indexEl === 3) {
      elAllgearwhell[1].style.transition = "1s";
      elAllgearwhell[2].style.transition = "0s";
      elAllgearwhell[2].style.transform = "translateY(155vh)";
    }
    if (indexEl === 0) {
      elAllgearwhell[2].style.transition = "1s";
      elAllgearwhell[3].style.transition = "0s";
      elAllgearwhell[3].style.transform = "translateY(155vh)";
    }

    elAll[indexEl].style.transform = "translateX(-155vh)";
    elAll[indexEl].classList.remove("active");

    elAllgearwhell[indexEl2].style.transform = "translateY(-155vh)";
    elAllgearwhell[indexEl2].classList.remove("active");

    if (elAll[indexEl + 1]) {
      elAll[indexEl + 1].style.transform = "translateX(0px)";
      elAll[indexEl + 1].classList.add("active");

      if (window.innerWidth < 720) {
        elAllgearwhell[indexEl2 + 1].style.transform = `translateY(${
          indexEl + 1 !== 3 ? stateClientHeightY + 70 : stateClientHeightY + 20
        }%)`;
      } else {
        elAllgearwhell[indexEl2 + 1].style.transform = `translateY(${
          stateClientHeightY + 10
        }%)`;
      }
      elAllgearwhell[indexEl2 + 1].classList.add("active");
    } else {
      elAll[0].style.transform = "translateX(0px)";
      elAll[0].classList.add("active");

      elAllgearwhell[0].style.transform = `translateY(${stateClientHeightY}%)`;
      elAllgearwhell[0].classList.add("active");
    }
    setTimeout(() => {
      document.querySelector(".listLogo").style.pointerEvents = "all";
    }, 1000);
  };

  return (
    <section
      className="Whyarewe section sec3"
      id="Whyarewe"
      data-section-name="Whyarewe_section"
    >
      <div className="Whyarewe_block element-animation">
        <div className="Whyarewe_block_title">
          <div className="Whyarewe_block_title_text">
            {parse(t("whyarewe.title"))}
          </div>
        </div>
        <div className="Whyarewe_block_Content">
          <div className="Whyarewe_block_Content_first">
            <div
              className="Whyarewe_block_Content_first_transform active"
              style={{
                transform: "translateX(0px)",
                position: "relative",
                width: "100%",
                height: "100%",
                transition: "1s",
              }}
              id="Whyarewe_1th"
            >
              <div className="Whyarewe_block_Content_first_title Whyarewe_block_Content_first_title_64text">
                {parse(t("whyarewe.Whyarewe_block_Content_first_title1"))}
              </div>
              <div className="Whyarewe_block_Content_first_text">
                {parse(t("whyarewe.Whyarewe_block_Content_first_text1"))}
              </div>
            </div>
            <div
              className="Whyarewe_block_Content_first_text_Gear_Wheel active Gear_Wheel_first"
              style={{
                transform: `translateY(${stateClientHeightY}%)`,
                transition: "1s",
              }}
              id="Whyarewe_1thSvg"
            >
              <svg
                viewBox="0 0 214 475"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M213.098 0C141.377 0.321096 83.3341 58.827 83.3341 130.951C83.3341 203.076 141.377 261.582 213.098 261.903V0ZM0 431.904C0 338.016 76.1116 261.904 170 261.904H213.096V475H0V431.904Z"
                  fill="#F0F1F8"
                />
              </svg>
            </div>
          </div>
          <div className="Whyarewe_block_Content_first">
            <div
              className="Whyarewe_block_Content_first_transform"
              style={{
                transform: "translateX(-155vh)",
                position: "relative",
                width: "100%",
                height: "100%",
                transition: "1s",
              }}
              id="Whyarewe_2th"
            >
              <div className="Whyarewe_block_Content_first_title">
                {parse(t("whyarewe.Whyarewe_block_Content_first_title2"))}
              </div>
              <div className="Whyarewe_block_Content_first_text">
                {parse(t("whyarewe.Whyarewe_block_Content_first_text2"))}
              </div>
            </div>
            <div
              className="Whyarewe_block_Content_first_text_Gear_Wheel Gear_Wheel_second"
              style={{ transform: "translateY(155vh)", transition: "1s" }}
              id="Whyarewe_2thSvg"
            >
              <svg
                viewBox="0 0 380 381"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 281C154.497 281 280 155.335 280 0H380C380 210.278 210.011 381 0 381V281Z"
                  fill="#F0F1F8"
                />
              </svg>
            </div>
          </div>
          <div className="Whyarewe_block_Content_first">
            <div
              className="Whyarewe_block_Content_first_transform"
              style={{
                transform: "translateX(-155vh)",
                position: "relative",
                width: "100%",
                height: "100%",
                transition: "1s",
              }}
              id="Whyarewe_3th"
            >
              <div className="Whyarewe_block_Content_first_title">
                {parse(t("whyarewe.Whyarewe_block_Content_first_title3"))}
              </div>
              <div className="Whyarewe_block_Content_first_text">
                {parse(t("whyarewe.Whyarewe_block_Content_first_text3"))}
              </div>
            </div>
            <div
              className="Whyarewe_block_Content_first_text_Gear_Wheel Gear_Wheel_third"
              style={{ transform: "translateY(155vh)", transition: "1s" }}
              id="Whyarewe_3thSvg"
            >
              <svg
                viewBox="0 0 312 310"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M308.763 0C309.844 0 310.922 0.0055464 312 0.0166123V161.861C310.924 161.837 309.845 161.826 308.764 161.826C227.613 161.826 161.826 227.612 161.826 308.763C161.826 308.965 161.827 309.166 161.828 309.367H0.000577432C0.000192536 309.166 0 308.965 0 308.763C0 288.938 1.86859 269.548 5.43926 250.762C8.33654 251.114 11.2865 251.295 14.2788 251.295C54.3393 251.295 86.8148 218.819 86.8148 178.759C86.8148 156.758 77.0197 137.045 61.5525 123.742C84.3285 93.3593 112.575 67.3134 144.83 47.0654C158.078 61.3561 177.013 70.3003 198.036 70.3003C236.554 70.3003 268.06 40.2774 270.429 2.35637C282.989 0.801033 295.783 0 308.763 0Z"
                  fill="#F0F1F8"
                />
              </svg>
            </div>
          </div>
          <div className="Whyarewe_block_Content_first">
            <div
              className="Whyarewe_block_Content_first_transform"
              style={{
                transform: "translateX(-155vh)",
                position: "relative",
                width: "100%",
                height: "100%",
                transition: "1s",
              }}
              id="Whyarewe_2th"
            >
              <div className="Whyarewe_block_Content_first_title">
                {parse(t("whyarewe.Whyarewe_block_Content_first_title4"))}
              </div>
              <div className="Whyarewe_block_Content_first_text">
                {parse(t("whyarewe.Whyarewe_block_Content_first_text4"))}
              </div>
            </div>
            <div
              className="Whyarewe_block_Content_first_text_Gear_Wheel Gear_Wheel_fourth"
              style={{ transform: "translateY(155vh)", transition: "1s" }}
              id="Whyarewe_2thSvg"
            >
              <svg
                viewBox="0 0 265 475"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M214.638 0H265V198.28V434.842V474.842H225H164.276H40C17.9086 474.842 0 456.933 0 434.842V198.281C0 176.189 17.9086 158.281 40 158.281H164.276V81.2792L214.638 0Z"
                  fill="#F0F1F8"
                />
              </svg>
            </div>
          </div>
          <svg
            stroke="1"
            viewBox="0 0 108 108"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="listLogo"
            onClick={listLogoClick}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M80.6102 80.6103C95.4501 65.7704 95.4501 41.7101 80.6102 26.8702C65.7702 12.0303 41.71 12.0303 26.8701 26.8702C12.0301 41.7101 12.0301 65.7704 26.8701 80.6103C41.71 95.4502 65.7702 95.4502 80.6102 80.6103ZM64.1036 43.0231C60.6866 46.4402 55.1464 46.4402 51.7293 43.0231L51.0222 43.7303C53.7368 46.4448 57.6538 47.2241 61.0588 46.068L43.6638 63.463L44.3709 64.1701L61.7659 46.7751C60.6098 50.1801 61.3891 54.0971 64.1036 56.8117L64.8108 56.1046C61.3937 52.6875 61.3937 47.1473 64.8108 43.7303L64.1036 43.0231Z"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Whyarewe;
