import "./contacts.css";
import React from "react";
import parse from "html-react-parser";
import { useTranslation } from "react-i18next";

const Contacts = () => {
  const { t, i18n } = useTranslation();

  return (
    <section
      className="contacts section"
      id="contacts"
      data-section-name="contacts"
    >
      <div className="contact_title element-animation">
        {parse(t("contacts.contact_title"))}
      </div>
      <div className="contact_contacts element-animation">
        <div className="contact_contacts_element">
          <svg
            viewBox="0 0 46 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.570312"
              y="1.10156"
              width="44.9192"
              height="31.9042"
              rx="2.5"
              stroke="#4A6AD0"
            />
            <path
              d="M1.57031 31.4062L16.0578 17.0544M43.9072 31.4062L30.3346 17.0544"
              stroke="#4A6AD0"
            />
            <path
              d="M43.897 2.70164L26.683 21.178C24.7058 23.3001 21.3436 23.3001 19.3664 21.178L2.15234 2.70164"
              stroke="#4A6AD0"
            />
          </svg>
          <div className="perhaps_contacts_element">info@geotec.kz</div>
        </div>
        <div className="contact_contacts_element">
          <svg
            viewBox="0 0 31 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.7831 15.8256C29.7831 20.479 27.4334 25.8169 24.5533 30.5289C21.6824 35.2259 18.3337 39.2223 16.436 41.1723C16.0656 41.5529 15.6931 41.6647 15.3491 41.626C14.9865 41.5853 14.5766 41.3673 14.1815 40.937C12.3145 38.9035 8.93286 34.9905 6.02097 30.3869C3.0989 25.7672 0.699219 20.5278 0.699219 15.8256C0.699219 7.63963 7.21806 1.01855 15.2411 1.01855C23.2642 1.01855 29.7831 7.63963 29.7831 15.8256Z"
              stroke="#4A6AD0"
            />
            <path
              d="M22.6552 15.4133C22.6552 19.3724 19.5036 22.5668 15.6342 22.5668C11.7649 22.5668 8.61328 19.3724 8.61328 15.4133C8.61328 11.4542 11.7649 8.25977 15.6342 8.25977C19.5036 8.25977 22.6552 11.4542 22.6552 15.4133Z"
              stroke="#4A6AD0"
            />
          </svg>
          <div className="perhaps_contacts_element">
            {parse(t("contacts.address"))}
          </div>
        </div>
        <div className="contact_contacts_element">
          <svg
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.077 22.4278C20.0046 24.513 22.1049 26.2427 23.4492 27.2742C24.3069 27.9322 25.4574 28.0111 26.4265 27.5324L28.282 26.6159C29.257 26.1343 30.4162 26.2181 31.3119 26.8347L37.3962 31.0239C38.877 32.0435 39.1347 34.1276 37.9468 35.4771L35.1207 38.6877C34.3858 39.5225 33.2451 39.8948 32.1842 39.5608C23.6068 36.8606 15.8557 29.8449 12.627 26.3765"
              stroke="#4A6AD0"
            />
            <path
              d="M18.3813 22.6904C16.4372 20.7672 14.7512 18.6691 13.7287 17.3205C13.0696 16.4512 12.9893 15.2889 13.4763 14.3127L14.3912 12.4791C14.8808 11.4977 14.7959 10.3273 14.1697 9.42687L9.91364 3.30715C8.89379 1.8407 6.82637 1.58479 5.47974 2.75832L2.19469 5.62108C1.35028 6.35695 0.974599 7.50586 1.30486 8.57612C3.91172 17.024 9.98334 23.7919 13.4862 27.289"
              stroke="#4A6AD0"
            />
          </svg>
          <a href="tel:+7 (7172) 79 29 38" className="perhaps_contacts_element">
            +7 (7172) 79 29 38
          </a>
        </div>
      </div>
      <a
        target={"_blank"}
        href="https://2gis.kz/nur_sultan/inside/9570784907573361/firm/70000001028804385?m=71.409757%2C51.144517%2F16.72"
        className="map_btn"
      >
        <div className="title_map_btn">
          {parse(t("contacts.title_map_btn"))}
        </div>
        <svg
          width="22.2"
          height="14.55"
          viewBox="0 0 29 19"
          fill="#102876"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.1562 0C20.1562 4.83249 24.0738 8.75 28.9062 8.75V9.75C24.0738 9.75 20.1562 13.6675 20.1562 18.5H19.1562C19.1562 14.661 21.375 11.3402 24.6001 9.75H0V8.75H24.6001C21.375 7.15981 19.1562 3.83901 19.1562 0H20.1562Z"
            fill="#102876"
          />
        </svg>
      </a>
    </section>
  );
};

export default Contacts;
