import './history.css';
import history1Block from '../../media/history1Block.png';
import React, { useEffect, useState } from 'react';
import $, { event } from 'jquery';

const History = () => {
    const [activeTime, setActiveTime] = useState(null);
    let k = false;

    useEffect(() => {

        $(function () {
            $('.TimeHistoryBox').on('DOMMouseScroll mousewheel', function (ev) {
                var $this = $(this),
                    scrollTop = this.scrollTop,
                    scrollHeight = this.scrollHeight,
                    height = $this.height(),
                    delta = (ev.type == 'DOMMouseScroll'
                        ? ev.originalEvent.detail * -40
                        : ev.originalEvent.wheelDelta),
                    up = delta > 0;

                var prevent = function () {
                    // console.log(1)
                    ev.stopPropagation();
                    ev.preventDefault();
                    ev.returnValue = false;
                    return false;
                }

                if (!up && -delta > scrollHeight - height - scrollTop) {
                    // Scrolling down, but this will take us past the bottom.
                    $this.scrollTop(scrollHeight);
                    if (k === false) {
                        secondEl();
                        k = true;
                    }
                    return prevent();
                } else if (up && delta > scrollTop) {
                    // Scrolling up, but this will take us past the top.
                    if (k === false) {
                        secondEl2();
                        k = true;
                    }
                    $this.scrollTop(0);
                    return prevent();
                }

            });
        });

        const massElements = document.querySelectorAll('.TimeHistoryBox_element');
        let indexEl = null;

        function secondEl() {
            for (let i = 0; i < massElements.length; i++) {
                massElements[i].classList.forEach(element => element === 'active' ? [setActiveTime(i), indexEl = i] : null);
            }

            if (massElements[indexEl + 1]) {
                massElements[indexEl].classList.remove('active');
                massElements[indexEl + 1].classList.add('active');
            }
            else {
                massElements[indexEl].classList.remove('active');
                massElements[0].classList.add('active');
            }
            setTimeout(() => { k = false }, 500);
        }

        function secondEl2() {
            for (let i = 0; i < massElements.length; i++) {
                massElements[i].classList.forEach(element => element === 'active' ? [setActiveTime(i), indexEl = i] : null);
            }

            if (massElements[indexEl - 1]) {
                massElements[indexEl].classList.remove('active');
                massElements[indexEl - 1].classList.add('active');
            }
            else {
                massElements[indexEl].classList.remove('active');
                massElements[10].classList.add('active');
            }
            setTimeout(() => { k = false }, 500);
        }

    }, [])

    const currentCorrectActive = (newActive) => {
        const massElements = document.querySelectorAll('.TimeHistoryBox_element');
        const newActiveEl = document.getElementById(`TimeHistoryBox_element_${newActive}`);
        console.log(newActiveEl)
        console.log(massElements)
        let indexEl = null;

        for (let i = 0; i < massElements.length; i++) {
            massElements[i].classList.forEach(element => element === 'active' ? [setActiveTime(i), indexEl = i] : null);
        }

        massElements[indexEl].classList.remove('active');
        newActiveEl.classList.add('active');
    }

    return (
        <div className="History">
            <div className='History_block'>
                <h2>История</h2>
                <div className='textBlock active'>
                    <div className='textBlock_text'>
                        основание <span className="textBlock_textPopins">GEOTEC</span>
                    </div>
                    <div className='textBlock_text_content'>
                        <span className="textBlock_textPopins">GEOTEC</span> был основан в 2006 году
                    </div>
                    <div className='ImageBack'>
                        <img src={history1Block} alt=""></img>
                    </div>
                </div>
            </div>
            <div className='backgroundHistorySvg'>
                <svg width="544" height="400" viewBox="0 0 544 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="272" cy="200" rx="272" ry="200" fill="url(#paint0_radial_657_937)" />
                    <defs>
                        <radialGradient id="paint0_radial_657_937" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(272 200) rotate(90) scale(200 272)">
                            <stop stopColor="#819CF1" stopOpacity="0.72" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
            <div className='TimeHistoryBox' id="TimeHistoryBox">
                <div className='TimeHistoryBox_block'>
                    <div className='TimeHistoryBox_element active' id="TimeHistoryBox_element_2006" onClick={() => currentCorrectActive(2006)}>2006</div>
                    <div className='TimeHistoryBox_element' id="TimeHistoryBox_element_2007" onClick={() => currentCorrectActive(2007)}>2007</div>
                    <div className='TimeHistoryBox_element' id="TimeHistoryBox_element_2009" onClick={() => currentCorrectActive(2009)}>2009</div>
                    <div className='TimeHistoryBox_element' id="TimeHistoryBox_element_2011" onClick={() => currentCorrectActive(2011)}>2011</div>
                    <div className='TimeHistoryBox_element' id="TimeHistoryBox_element_2012" onClick={() => currentCorrectActive(2012)}>2012</div>
                    <div className='TimeHistoryBox_element' id="TimeHistoryBox_element_2014" onClick={() => currentCorrectActive(2014)}>2014</div>
                    <div className='TimeHistoryBox_element' id="TimeHistoryBox_element_2014_2" onClick={() => currentCorrectActive('2014_2')}>2014</div>
                    <div className='TimeHistoryBox_element' id="TimeHistoryBox_element_2015" onClick={() => currentCorrectActive(2015)}>2015</div>
                    <div className='TimeHistoryBox_element' id="TimeHistoryBox_element_2016" onClick={() => currentCorrectActive(2016)}>2016</div>
                    <div className='TimeHistoryBox_element' id="TimeHistoryBox_element_2020" onClick={() => currentCorrectActive(2020)}>2020</div>
                    <div className='TimeHistoryBox_element' id="TimeHistoryBox_element_2023" onClick={() => currentCorrectActive(2023)}>2023</div>
                </div>
            </div>
        </div>
    );
}

export default History;
