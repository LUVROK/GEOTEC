import "./AllContentSection.scss";
import FirstSection from "../firstSection/firstSection.js";
import React, { useRef } from "react";

const AllContentSection = () => {
  return (
    <section
      className="AllContentSection_scroll section"
      id="FirstSection"
      data-section-name="firstSection_section"
    >
      <div className="AllContentSection">
        <div
          className="AllContentSection_block"
          style={{ backgroundColor: "#ffffffb0" }}
        >
          <div className="AllContentSection_block_background"></div>
          <FirstSection />
        </div>
      </div>
    </section>
  );
};

export default AllContentSection;
