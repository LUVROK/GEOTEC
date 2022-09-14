import './AllContentSection.css';
import FirstSection from '../firstSection/firstSection.js';
import Whyarewe from '../whyarewe/whyarewe';
import AboutUs from '../aboutUs/aboutUs';
import History from '../history/history';
import Projects from '../projects/projects';
import React, { useEffect, useRef } from 'react';
import ScrollBar from 'smooth-scrollbar';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AllContentSection = () => {
    const scroller = useRef();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const scroller = document.querySelector(".scroller");
        const bodyScrollBar = ScrollBar.init(scroller, { duration: 0.02 });

        ScrollTrigger.scrollerProxy(scroller, {
            scrollTop(value) {
                if (arguments.length) {
                    bodyScrollBar.scrollTop = value;
                }
                return bodyScrollBar.scrollTop;
            }
        });

        bodyScrollBar.addListener(ScrollTrigger.update);

        // gsap.to(document.querySelector("#box"), {
        //   duration: 4,
        //   scrollTrigger: {
        //     trigger: document.querySelector("#box"),
        //     // start: "top 80%",
        //     markers: true,
        //     scroller: scroller,
        //     pin: true
        //   }
        // });

        // This part is only neccessary if you're using ScrollTrigger's markers for testing:
        // if (document.querySelector(".gsap-marker-scroller-start")) {
        //   const markers = gsap.utils.toArray('[class *= "gsap-marker"]');
        //   bodyScrollBar.addListener(({ offset }) =>
        //     gsap.set(markers, { marginTop: -offset.y })
        //   );
        // }
    }, []);

    return (
        <div className="AllContentSection_scroll scroller" ref={scroller}>
            <div className="AllContentSection">
                <div className='AllContentSection_block' style={{ backgroundColor: '#ffffffb0' }}>
                    <FirstSection />
                    <History />
                    <Whyarewe />
                    {/* <AboutUs />
                <Projects /> */}
                </div>
            </div>
        </div>
    );
}

export default AllContentSection;
