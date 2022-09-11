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
        const textBlockAll = document.querySelectorAll('.textBlock');
        let indexEl = null;

        function secondEl() {
            for (let i = 0; i < massElements.length; i++) {
                massElements[i].classList.forEach(element => element === 'active' ? [setActiveTime(i), indexEl = i] : null);
            }

            if(textBlockAll[indexEl + 1]) {
                textBlockAll[indexEl].style.transform = 'translateY(-880px)';
                textBlockAll[indexEl + 1].style.transform = 'translateY(0px)';
            }
            else {
                textBlockAll[indexEl].style.transform = 'translateY(-880px)';
                textBlockAll[0].style.transform = 'translateY(0px)';
            }

            if (massElements[indexEl + 1]) {
                massElements[indexEl].classList.remove('active');
                massElements[indexEl + 1].classList.add('active');
            }
            else {
                massElements[indexEl].classList.remove('active');
                massElements[0].classList.add('active');
            }

            if (indexEl === 1) {
                textBlockAll[9].style.transition = 'all 1s cubic-bezier(0,.11,.29,1)';
                textBlockAll[10].style.transition = '0s';
                textBlockAll[10].style.transform = 'translateY(880px)';
            }
            if (indexEl === 2) {
                textBlockAll[10].style.transition = 'all 1s cubic-bezier(0,.11,.29,1)';
                textBlockAll[0].style.transition = '0s';
                textBlockAll[0].style.transform = 'translateY(880px)';
            }
            if (indexEl === 3) {
                textBlockAll[0].style.transition = 'all 1s cubic-bezier(0,.11,.29,1)';
                textBlockAll[1].style.transition = '0s';
                textBlockAll[1].style.transform = 'translateY(880px)';
            }
            if (indexEl === 4) {
                textBlockAll[1].style.transition = 'all 1s cubic-bezier(0,.11,.29,1)';
                textBlockAll[2].style.transition = '0s';
                textBlockAll[2].style.transform = 'translateY(880px)';
            }
            if (indexEl === 5) {
                textBlockAll[2].style.transition = 'all 1s cubic-bezier(0,.11,.29,1)';
                textBlockAll[3].style.transition = '0s';
                textBlockAll[3].style.transform = 'translateY(880px)';
            }
            if (indexEl === 6) {
                textBlockAll[3].style.transition = 'all 1s cubic-bezier(0,.11,.29,1)';
                textBlockAll[4].style.transition = '0s';
                textBlockAll[4].style.transform = 'translateY(880px)';
            }
            if (indexEl === 7) {
                textBlockAll[4].style.transition = 'all 1s cubic-bezier(0,.11,.29,1)';
                textBlockAll[5].style.transition = '0s';
                textBlockAll[5].style.transform = 'translateY(880px)';
            }
            if (indexEl === 8) {
                textBlockAll[5].style.transition = 'all 1s cubic-bezier(0,.11,.29,1)';
                textBlockAll[6].style.transition = '0s';
                textBlockAll[6].style.transform = 'translateY(880px)';
            }
            if (indexEl === 9) {
                textBlockAll[6].style.transition = 'all 1s cubic-bezier(0,.11,.29,1)';
                textBlockAll[7].style.transition = '0s';
                textBlockAll[7].style.transform = 'translateY(880px)';
            }
            if (indexEl === 10) {
                textBlockAll[7].style.transition = 'all 1s cubic-bezier(0,.11,.29,1)';
                textBlockAll[8].style.transition = '0s';
                textBlockAll[8].style.transform = 'translateY(880px)';
            }
            if (indexEl === 0) {
                textBlockAll[8].style.transition = 'all 1s cubic-bezier(0,.11,.29,1)';
                textBlockAll[9].style.transition = '0s';
                textBlockAll[9].style.transform = 'translateY(880px)';
            }

            setTimeout(() => { k = false }, 1000);
        }

        function secondEl2() {
            for (let i = 0; i < massElements.length; i++) {
                massElements[i].classList.forEach(element => element === 'active' ? [setActiveTime(i), indexEl = i] : null);
            }

            if(textBlockAll[indexEl - 1]) {
                textBlockAll[indexEl].style.transform = 'translateY(880px)';
                textBlockAll[indexEl - 1].style.transform = 'translateY(0px)';
            }
            else {
                textBlockAll[indexEl].style.transform = 'translateY(880px)';
                textBlockAll[10].style.transform = 'translateY(0px)';
            }

            if (massElements[indexEl - 1]) {
                massElements[indexEl].classList.remove('active');
                massElements[indexEl - 1].classList.add('active');
            }
            else {
                massElements[indexEl].classList.remove('active');
                massElements[10].classList.add('active');
            }

            if (indexEl === 1) {
                textBlockAll[8].style.transition = 'all 1s cubic-bezier(0,.11,.29,1)';
                textBlockAll[9].style.transition = '0s';
                textBlockAll[9].style.transform = 'translateY(-880px)';
            }
            if (indexEl === 2) {
                textBlockAll[9].style.transition = 'all 1s cubic-bezier(0,.11,.29,1)';
                textBlockAll[10].style.transition = '0s';
                textBlockAll[10].style.transform = 'translateY(-880px)';
            }
            if (indexEl === 3) {
                textBlockAll[10].style.transition = 'all 1s cubic-bezier(0,.11,.29,1)';
                textBlockAll[0].style.transition = '0s';
                textBlockAll[0].style.transform = 'translateY(-880px)';
            }
            if (indexEl === 4) {
                textBlockAll[0].style.transition = 'all 1s cubic-bezier(0,.11,.29,1)';
                textBlockAll[1].style.transition = '0s';
                textBlockAll[1].style.transform = 'translateY(-880px)';
            }
            if (indexEl === 5) {
                textBlockAll[1].style.transition = 'all 1s cubic-bezier(0,.11,.29,1)';
                textBlockAll[2].style.transition = '0s';
                textBlockAll[2].style.transform = 'translateY(-880px)';
            }
            if (indexEl === 6) {
                textBlockAll[2].style.transition = 'all 1s cubic-bezier(0,.11,.29,1)';
                textBlockAll[3].style.transition = '0s';
                textBlockAll[3].style.transform = 'translateY(-880px)';
            }
            if (indexEl === 7) {
                textBlockAll[3].style.transition = 'all 1s cubic-bezier(0,.11,.29,1)';
                textBlockAll[4].style.transition = '0s';
                textBlockAll[4].style.transform = 'translateY(-880px)';
            }
            if (indexEl === 8) {
                textBlockAll[4].style.transition = 'all 1s cubic-bezier(0,.11,.29,1)';
                textBlockAll[5].style.transition = '0s';
                textBlockAll[5].style.transform = 'translateY(-880px)';
            }
            if (indexEl === 9) {
                textBlockAll[5].style.transition = 'all 1s cubic-bezier(0,.11,.29,1)';
                textBlockAll[6].style.transition = '0s';
                textBlockAll[6].style.transform = 'translateY(-880px)';
            }
            if (indexEl === 10) {
                textBlockAll[6].style.transition = 'all 1s cubic-bezier(0,.11,.29,1)';
                textBlockAll[7].style.transition = '0s';
                textBlockAll[7].style.transform = 'translateY(-880px)';
            }
            if (indexEl === 0) {
                textBlockAll[7].style.transition = 'all 1s cubic-bezier(0,.11,.29,1)';
                textBlockAll[8].style.transition = '0s';
                textBlockAll[8].style.transform = 'translateY(-880px)';
            }

            setTimeout(() => { k = false }, 1000);
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
        <div className="History section sec2">
            <div className='History_block'>
                <h2>История</h2>
                <div className='textBlock textBlock_first active' style={{ transform: 'translateY(0px)', transition: 'all 1s cubic-bezier(0,.11,.29,1)' }}>
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
                <div className='textBlock textBlock_second active' style={{ transform: 'translateY(880px)', transition: 'all 1s cubic-bezier(0,.11,.29,1)' }}>
                    <div className='textBlock_text'>
                        Первый проект  <span className="textBlock_textPopins">GEOTEC</span>
                    </div>
                    <div className='textBlock_text_content'>
                        <span className="textBlock_textPopins">GEOTEC</span> получил первый проект в Тенгизе от ТШО
                    </div>
                    <div className='ImageBack'>
                        <img src={history1Block} alt=""></img>
                    </div>
                </div>
                <div className='textBlock textBlock_third active' style={{ transform: 'translateY(880px)', transition: 'all 1s cubic-bezier(0,.11,.29,1)' }}>
                    <div className='textBlock_text'>
                        Расширение в Казахстане
                    </div>
                    <div className='textBlock_text_content'>
                        Выполнен один из самых сложных проектов в Алматинской гондоле
                    </div>
                    <div className='ImageBack'>
                        <img src={history1Block} alt=""></img>
                    </div>
                </div>
                <div className='textBlock textBlock_fourth active' style={{ transform: 'translateY(880px)', transition: 'all 1s cubic-bezier(0,.11,.29,1)' }}>
                    <div className='textBlock_text'>
                        Партнерство с ТШО
                    </div>
                    <div className='textBlock_text_content'>
                        ТШО подписал Генеральный Контракт на 7 лет
                    </div>
                    <div className='ImageBack'>
                        <img src={history1Block} alt=""></img>
                    </div>
                </div>
                <div className='textBlock textBlock_fifth active' style={{ transform: 'translateY(880px)', transition: 'all 1s cubic-bezier(0,.11,.29,1)' }}>
                    <div className='textBlock_text'>
                        Самое высокое здание в Казахстане
                    </div>
                    <div className='textBlock_text_content'>
                        <span className="textBlock_textPopins">GEOTEC</span> выполнял изыскательские работы в г.Алматы
                    </div>
                    <div className='ImageBack'>
                        <img src={history1Block} alt=""></img>
                    </div>
                </div>
                <div className='textBlock textBlock_fifth active' style={{ transform: 'translateY(880px)', transition: 'all 1s cubic-bezier(0,.11,.29,1)' }}>
                    <div className='textBlock_text'>
                        Проект ветровой электростанции
                    </div>
                    <div className='textBlock_text_content'>
                        Изыскательские работы выполнялись в тяжелых зимних условиях в Северном Казахстане
                    </div>
                    <div className='ImageBack'>
                        <img src={history1Block} alt=""></img>
                    </div>
                </div>
                <div className='textBlock textBlock_fifth active' style={{ transform: 'translateY(880px)', transition: 'all 1s cubic-bezier(0,.11,.29,1)' }}>
                    <div className='textBlock_text'>
                        Проект по <span className="textBlock_textPopins">3D</span> измерению&геофизическое исследование
                    </div>
                    <div className='textBlock_text_content'>
                        <span className="textBlock_textPopins">GEOTEC</span> расширяет свои услуги с использованием <span className="textBlock_textPopins">3D</span> измерения и георадара <span className="textBlock_textPopins">(GPR)</span>
                    </div>
                    <div className='ImageBack'>
                        <img src={history1Block} alt=""></img>
                    </div>
                </div>
                <div className='textBlock textBlock_fifth active' style={{ transform: 'translateY(880px)', transition: 'all 1s cubic-bezier(0,.11,.29,1)' }}>
                    <div className='textBlock_text'>
                        Сертификация <span className="textBlock_textPopins">ISO 9001 and OHSAS 18001</span>
                    </div>
                    <div className='textBlock_text_content'>
                        Сертифицирован компанией <span className="textBlock_textPopins">Bureau Veritas</span> по <span className="textBlock_textPopins">ISO 9001</span> и <span className="textBlock_textPopins">OHSAS 18001</span>
                    </div>
                    <div className='ImageBack'>
                        <img src={history1Block} alt=""></img>
                    </div>
                </div>
                <div className='textBlock textBlock_fifth active' style={{ transform: 'translateY(880px)', transition: 'all 1s cubic-bezier(0,.11,.29,1)' }}>
                    <div className='textBlock_text'>
                        Проект по модульному контролю ТШО
                    </div>
                    <div className='textBlock_text_content'>
                        По поручению ТШО <span className="textBlock_textPopins">GEOTEC</span> выполняет работу по модульному контролю размеров
                    </div>
                    <div className='ImageBack'>
                        <img src={history1Block} alt=""></img>
                    </div>
                </div>
                <div className='textBlock textBlock_fifth active' style={{ transform: 'translateY(880px)', transition: 'all 1s cubic-bezier(0,.11,.29,1)' }}>
                    <div className='textBlock_text'>
                        <span className="textBlock_textPopins">3D</span> моделирование <span className="textBlock_textPopins">IGCC</span>
                    </div>
                    <div className='textBlock_text_content'>
                        По поручению <span className="textBlock_textPopins">KPI GEOTEC</span> выполнит лазерное сканировние в период строительства для создания исполнительной <span className="textBlock_textPopins">BIM</span>-модели Интегрированного газохимического комплекса
                    </div>
                    <div className='ImageBack'>
                        <img src={history1Block} alt=""></img>
                    </div>
                </div>
                <div className='textBlock textBlock_fifth active' style={{ transform: 'translateY(880px)', transition: 'all 1s cubic-bezier(0,.11,.29,1)' }}>
                    <div className='textBlock_text'>
                        Цель стать самым крупным подрядчиком в своей сфере
                    </div>
                    <div className='textBlock_text_content'>

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
