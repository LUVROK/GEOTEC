import "../../App.css";
import "./nav.css";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import parse from "html-react-parser";
import $ from "jquery";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [language_select, setlanguage_select] = useState("ru");
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const [visibilityMenuLang, setVisibilityMenuLang] = useState(false);

  useEffect(() => {
    setVisibilityMenuLang(false);
  }, [language_select]);

  useEffect(() => {
    const elem = document.querySelector(".selectorBlock");
    elem.addEventListener("mouseleave", function () {
      elem.style.opacity = "0";
      elem.style.marginTop = "12px";
      setVisibilityMenuLang(false);
    });
  }, []);

  useEffect(() => {
    const elem = document.querySelector(".selectorBlock");
    if (visibilityMenuLang === true) {
      elem.style.opacity = "1";
      elem.style.marginTop = "15px";
    } else {
      elem.style.opacity = "0";
      elem.style.marginTop = "12px";
    }
  }, [visibilityMenuLang]);

  useEffect(() => {
    changeLanguage(language_select);
  }, [language_select]);

  const navigate = useNavigate();

  const fiji = () => {
    if (
      document.querySelector(".licenses") ||
      document.querySelector(".clients")
    ) {
      navigate(-1);
      window.$.scrollify.enable();
    } else {
      $.scrollify.move("#wrapper");
    }
  };

  return (
    <nav className="Nav_Block box">
      <div className="Nav_BlockCenter">
        <div className="Nav_Block_right">
          <div
            onClick={() => fiji()}
            className="Nav_Block_right_a a_style_none js-scrollify-move"
          >
            <div className="Nav_Block_right_a_svg">
              <svg
                width="31"
                height="28"
                viewBox="0 0 111 102"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M100.073 64.3185C101.233 60.0511 101.852 55.5608 101.852 50.926C101.852 22.8003 79.0516 0 50.926 0C22.8003 0 0 22.8003 0 50.926C0 79.0516 22.8003 101.852 50.926 101.852C51.6721 101.852 52.4146 101.836 53.1529 101.804C28.9979 100.703 9.75241 80.7708 9.75241 56.3438C9.75241 31.2102 30.1272 10.8354 55.2607 10.8354C80.3942 10.8354 100.769 31.2102 100.769 56.3438C100.769 59.0644 100.53 61.7292 100.073 64.3185Z"
                  fill="url(#paint0_linear_220_133)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M80.2811 21.4715C74.6998 18.1565 68.1818 16.253 61.2192 16.253C40.5738 16.253 23.8374 32.9895 23.8374 53.6349C23.8374 74.2803 40.5738 91.0167 61.2192 91.0167C76.815 91.0167 90.1801 81.4661 95.7851 67.8945C90.5669 85.6432 74.1557 98.6009 54.7179 98.6009C31.0804 98.6009 11.9185 79.4389 11.9185 55.8014C11.9185 32.1639 31.0804 13.002 54.7179 13.002C64.3008 13.002 73.148 16.1513 80.2811 21.4715Z"
                  fill="url(#paint1_linear_220_133)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M26.6413 52.0203C27.4084 56.3552 29.0827 60.6018 31.718 64.4783C41.704 79.1675 61.7071 82.9802 76.3963 72.9943C91.0855 63.0083 94.8982 43.0051 84.9123 28.3159C83.5993 26.3846 82.1132 24.6413 80.4888 23.0927C84.351 25.5665 87.7872 28.8454 90.5289 32.8784C101.387 48.8501 97.2411 70.5997 81.2694 81.4576C65.2977 92.3154 43.5481 88.1698 32.6902 72.1981C28.4873 66.0157 26.5324 58.9674 26.6413 52.0203Z"
                  fill="url(#paint2_linear_220_133)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_220_133"
                    x1="18.9618"
                    y1="98.0596"
                    x2="145"
                    y2="-4"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#3757BC" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_220_133"
                    x1="69.5"
                    y1="98.9999"
                    x2="78.0005"
                    y2="-28.5001"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#3856B5" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_220_133"
                    x1="99.8033"
                    y1="36.6759"
                    x2="-30.6713"
                    y2="78.5401"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#3856B5" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="Nav_Block_right_a_title">GEOTEC</div>
          </div>
        </div>
        <div className="Nav_Block_left">
          <div
            // href="#firstSection"
            className="Nav_Block_left_a a_style_none"
            // onClick={() => $.scrollify("move", "#firstSection")}
            onClick={() => $.scrollify.move("#firstSection")}
          >
            {parse(t("description.Nav1"))}
          </div>
          <div
            // href="#AboutUs"
            className="Nav_Block_left_a a_style_none"
            // onClick={() => $.scrollify("move", "#AboutUs")}
            onClick={() => $.scrollify.move("#aboutUs")}
          >
            {parse(t("description.Nav2"))}
          </div>
          <div
            // href="#projects"
            className="Nav_Block_left_a a_style_none"
            // onClick={() => $.scrollify("move", "#projects")}
            onClick={() => $.scrollify.move("#projects")}
          >
            {parse(t("description.Nav3"))}
          </div>
          <div
            className="Nav_Block_left_a a_style_none"
            // onClick={() => $.scrollify("move", "#our_technologies")}
            onClick={() => $.scrollify.move("#our_technologies")}
          >
            {parse(t("description.Nav4"))}
          </div>
          <div
            className="Nav_Block_left_a a_style_none"
            // onClick={() =>
            //   setTimeout(() => $.scrollify("move", "#contacts"), 1000)
            // }
            onClick={() => $.scrollify.move("#contacts")}
          >
            {parse(t("description.Nav5"))}
          </div>
          {/* <div class="sel sel--black-panther"> */}
          <div id="select-language" className="selectLANG">
            <div
              className="Active_Select_lang"
              onClick={() => setVisibilityMenuLang((prev) => !prev)}
            >
              {language_select === "ru"
                ? parse(t("description.ru"))
                : parse(t("description.en"))}
            </div>
            <div
              className="selectorBlock"
              style={{ marginTop: "12px", opacity: 0 }}
            >
              <div
                onClick={(e) => [setlanguage_select("ru")]}
                className="selectorblockone"
              >
                {parse(t("description.ru"))}
              </div>
              <div
                onClick={(e) => [setlanguage_select("en")]}
                className="selectorblockone"
              >
                {parse(t("description.en"))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
