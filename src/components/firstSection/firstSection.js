import "./firstSection.css";
import licens from "../../media/licens.webp";
import customers from "../../media/customers.webp";
import "./firstSection.scss";
import $ from "jquery";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { useTranslation } from "react-i18next";

const FirstSection = () => {
  const { t, i18n } = useTranslation();

  $(".btn-6")
    .on("mouseenter", function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find("span").css({ top: relY, left: relX });
    })
    .on("mouseout", function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find("span").css({ top: relY, left: relX });
    });

  return (
    <div className="firstSection sec1" id="firstSection">
      <div className="firstSection_block element-animation">
        <div className="firstSection_block_geotec_block">
          <div className="firstSection_block_geotec">
            <span className="geotec_title_firstSection bigFontSize">GEOTEC</span>
            <svg viewBox="0 0 43 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M38.3183 24.6296C38.7628 22.9951 39 21.2753 39 19.5C39 8.73045 30.2696 0 19.5 0C8.73045 0 0 8.73045 0 19.5C0 30.2696 8.73045 39 19.5 39C19.7851 39 20.0687 38.9939 20.3508 38.9818C11.1025 38.5592 3.73411 30.9274 3.73411 21.5747C3.73411 11.9508 11.5358 4.14915 21.1596 4.14915C30.7835 4.14915 38.5852 11.9508 38.5852 21.5747C38.5852 22.6169 38.4937 23.6377 38.3183 24.6296Z" fill="#4A6AD0" />
              <path fillRule="evenodd" clipRule="evenodd" d="M30.7437 8.22208C28.6064 6.95238 26.1102 6.22329 23.4438 6.22329C15.5385 6.22329 9.12995 12.6318 9.12995 20.5371C9.12995 28.4424 15.5385 34.851 23.4438 34.851C29.4167 34.851 34.5351 31.1925 36.6806 25.9943C34.6835 32.792 28.3987 37.7551 20.9547 37.7551C11.9037 37.7551 4.56641 30.4178 4.56641 21.3668C4.56641 12.3158 11.9037 4.97852 20.9547 4.97852C24.6244 4.97852 28.0123 6.18464 30.7437 8.22208Z" fill="#4A6AD0" />
              <path fillRule="evenodd" clipRule="evenodd" d="M10.2028 19.9185C10.4964 21.5784 11.1376 23.2046 12.1467 24.6891C15.9704 30.3137 23.6298 31.7736 29.2545 27.9499C34.8791 24.1262 36.339 16.4668 32.5153 10.8422C32.0128 10.103 31.4441 9.43581 30.8225 8.84305C32.3009 9.79019 33.6163 11.0455 34.6659 12.5894C38.8234 18.7051 37.236 27.0332 31.1203 31.1908C25.0046 35.3484 16.6765 33.761 12.5189 27.6453C10.9095 25.2778 10.1609 22.5788 10.2028 19.9185Z" fill="#2ADEA1" />
            </svg>
            {parse(t("firstSection.firstSection_block_geotec"))}
          </div>
          <div className="firstSection_block_geotec_perhapse_block">
            <div className="firstSection_block_geotec_perhapse">{parse(t("firstSection.firstSection_block_geotec_perhapse"))}</div>
            <div className="firstSection_block_geotec_perhapse top_sec">{parse(t("firstSection.firstSection_block_geotec_perhapse_top_sec"))}</div>
          </div>
        </div>
        <div className="blockCont_block">
          <Link to="/licenses" className="centerer">
            <div className="wrap">
              <div className="blockCont btn-6">
                <img src={customers} alt="" className="" />
                <div className="blockCont_text">{parse(t("firstSection.Certificates_Licenses"))}</div>
                <svg width="29" height="19" viewBox="0 0 29 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M20.1562 0C20.1562 4.83249 24.0738 8.75 28.9062 8.75V9.75C24.0738 9.75 20.1562 13.6675 20.1562 18.5H19.1562C19.1562 14.661 21.375 11.3402 24.6001 9.75H0V8.75H24.6001C21.375 7.15981 19.1562 3.83901 19.1562 0H20.1562Z" fill="white" />
                </svg>
                <span className="circlebtn"></span>
              </div>
            </div>
          </Link>
          <Link to="/clients" className="centerer">
            <div className="wrap">
              <div className="blockCont btn-6">
                <img src={licens} alt="" className="" />
                <div className="blockCont_text">{parse(t("firstSection.Customers"))}</div>
                <svg width="29" height="19" viewBox="0 0 29 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M20.1562 0C20.1562 4.83249 24.0738 8.75 28.9062 8.75V9.75C24.0738 9.75 20.1562 13.6675 20.1562 18.5H19.1562C19.1562 14.661 21.375 11.3402 24.6001 9.75H0V8.75H24.6001C21.375 7.15981 19.1562 3.83901 19.1562 0H20.1562Z" fill="white" />
                </svg>
                <span className="circlebtn"></span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
