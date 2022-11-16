import './App.css';
import Nav from './components/nav/nav';
import Wrapper from './components/Wrapper/Wrapper';
import AllContentSection from './components/AllContentSection/AllContentSection';
import './fonts/fonts.css';
import Subtract from './media/Subtract.png'
import React, { useState, useEffect, useRef } from 'react';
import History from './components/history/history';
import Whyarewe from './components/whyarewe/whyarewe';
import AboutUs from './components/aboutUs/aboutUs';
import Projects from './components/projects/projects';
import Our_technologies from './components/our_technologies/our_technologies';
import Contacts from './components/contacts/contacts';
import Preloader from './components/Preloader/Preloader';


function MainApp() {

    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('element-show');
            }
        });
    }

    let options = {
        threshold: [0.5]
    };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.element-animation');

    for (let elm of elements) {
        observer.observe(elm);
    }

    const [isrender, setisrender] = useState(false);

    useEffect(() => {

        setInterval(() => {
            setisrender(true);
        }, 2000);

        const Wrapper_block_GEOTEC_block1 = document.querySelector(".Wrapper_block_GEOTEC_block1");
        const Wrapper_block_GEOTEC_block2 = document.querySelector(".Wrapper_block_GEOTEC_block2");
        const Wrapper_block_GEOTEC_block3 = document.querySelector(".Wrapper_block_GEOTEC_block3");

        // window.onload = function () {
        //   setTimeout(() => {
        //     console.log(Wrapper_block_GEOTEC_block1)

        //     // window.scrollTo(0, 0);
        //     Wrapper_block_GEOTEC_block1.style.opacity = 1;
        //     Wrapper_block_GEOTEC_block2.style.opacity = 1;
        //     Wrapper_block_GEOTEC_block3.style.opacity = 1;

        //     Wrapper_block_GEOTEC_block1.style.transform = 'translateY(0px)';
        //     Wrapper_block_GEOTEC_block2.style.transform = 'translateY(0px)';
        //     Wrapper_block_GEOTEC_block3.style.transform = 'translateY(0px)';
        //   }, 2000)

        // }

        // window.addEventListener("scroll", function () {
        // if ($(document).scrollTop() >= $(window).height() * 0.8) {
        //   Wrapper_block_GEOTEC_block1.style.opacity = 0;
        //   Wrapper_block_GEOTEC_block2.style.opacity = 0;
        //   Wrapper_block_GEOTEC_block3.style.opacity = 0;
        //   // AllContentSection_block.style.backgroundColor = '#ffffffb9';
        // }
        // else {
        //   Wrapper_block_GEOTEC_block1.style.opacity = 1;
        //   Wrapper_block_GEOTEC_block2.style.opacity = 1;
        //   Wrapper_block_GEOTEC_block3.style.opacity = 1;
        //   // AllContentSection_block.style.backgroundColor = '#ffffffb0';
        // }
        // })


    }, [])

    useEffect(() => {
        if (!isrender) {
            // document.getElementById("App").style = "background: #FFFFFF;";
            document.body.style.overflow = "hidden";
        } else {
            // Scrollbar.init(document.body);

            // document.getElementById("App").style = "background: #FFFFFF;";
            // document.getElementById("block_All").style = "opacity: 1";
            document.body.style.overflow = "scroll";
            document.body.style.overflowX = "hidden";

            const Wrapper_block_GEOTEC_block1 = document.querySelector(".Wrapper_block_GEOTEC_block1");
            const Wrapper_block_GEOTEC_block2 = document.querySelector(".Wrapper_block_GEOTEC_block2");
            const Wrapper_block_GEOTEC_block3 = document.querySelector(".Wrapper_block_GEOTEC_block3");

            Wrapper_block_GEOTEC_block1.style.opacity = 1;
            Wrapper_block_GEOTEC_block2.style.opacity = 1;
            Wrapper_block_GEOTEC_block3.style.opacity = 1;

            Wrapper_block_GEOTEC_block1.style.transform = 'translateY(0px)';
            Wrapper_block_GEOTEC_block2.style.transform = 'translateY(0px)';
            Wrapper_block_GEOTEC_block3.style.transform = 'translateY(0px)';
        }
    }, [isrender]);

    const [currentPage, setCurrentPage] = useState(null);
    const handlePageChange = number => {
        setCurrentPage(number);
    };

    return (
        <div className="MainApp" id="App" >
            {
                !isrender &&
                <Preloader />
            }
            <img src={Subtract} alt="" className='Subtract_left'></img>
            <img src={Subtract} alt="" className='Subtract_right'></img>
            {/* <ReactPageScroller pageOnChange={handlePageChange}
          containerWidth={window.innerWidth * 1}
          containerHeight={window.innerHeight - 88}
          customPageNumber={currentPage}> */}
            <Wrapper />
            {/* <div className="block_All" id="block_All"> */}
            <AllContentSection />
            {/* </div> */}
            {/* </Scrollbar> */}
            {/* </div> */}
            <History />
            <Whyarewe />
            <AboutUs />
            <Projects />
            <Our_technologies />
            <Contacts />
        </div>
    );
}

export default MainApp;
