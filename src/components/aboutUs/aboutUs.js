import './aboutUs.css';
import React, { useEffect, useState } from 'react';

const AboutUs = () => {

    const researchs_block_elemClick = (index) => {
        const researchs_block_elems = document.querySelectorAll('.researchs_block_elem');
        const researchs_block_elemSVGs = document.querySelectorAll('.researchs_block_elem svg');
        const researchs_block_elem_text_text = document.querySelectorAll('.researchs_block_elem .text');
        if (researchs_block_elemSVGs[index].style.transform === 'rotateX(180deg)') {
            researchs_block_elems[index].style.height = '126px';
            researchs_block_elemSVGs[index].style.transform = 'rotateX(0deg)';
            researchs_block_elem_text_text[index].style.opacity = 0;
        }
        else {
            researchs_block_elem_text_text[index].style.opacity = 1;
            researchs_block_elems[index].style.height = '50vh';
            researchs_block_elemSVGs[index].style.transform = 'rotateX(180deg)';
        }
    }

    return (
        <div className="AboutUs">
            <div className="AboutUs_block">
                <div className='CompanyBar'>
                    <span className='logo_CompanyBar'>GEOTEC -&nbsp;</span>это геодезичекие изыскания под ключ
                    <div className='perhaps_logo_companyBar'>Наша компания активно работает в следующих областях:</div>
                </div>
                <div className='researchs_block'>
                    <div className='researchs_block_elem' onClick={() => researchs_block_elemClick(0)} style={{ height: '126px' }}>
                        <div className='researchs_block_elem_text' style={{ height: '81px' }}>
                            Конкретные Изыскания
                        </div>
                        <div className='text' style={{ height: 'auto', opacity: 0 }}>
                            - 3D Laser Scanning High-Definition Survey<br />
                            - БПЛА / Изыскания с помощью беспилотника<br />
                            - Dimension Control & Deformation Survey<br />
                            - High-Precision Measurement Survey<br />
                            - Clash Detection Survey<br />
                            - 3D Моделирование
                        </div>
                        <div className='borderbottom'></div>
                        <svg width="45" height="24" viewBox="0 0 45 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotateX(0deg)' }}>
                            <path d="M1 1L22.2132 22.2132L43.4264 1" stroke="#102876" strokeWidth="2" />
                        </svg>
                    </div>
                    <div className='researchs_block_elem' onClick={() => researchs_block_elemClick(1)} style={{ height: '126px' }}>
                        <div className='researchs_block_elem_text' style={{ height: '81px' }}>
                            Топографо-Геодезические Изыскания
                        </div>
                        <div className='text' style={{ height: 'auto', opacity: 0 }}>
                            - GPS съемка (Глобальная система
                            позиционирования)<br />
                            - Изыскание дорог, железных дорог,
                            мостов и зданий<br />
                            - Промышленные объекты, Топографические
                            съемки<br />
                            - Инженерно-строительные изыскания<br />
                            - Экстремальные Проектные изыскания,
                            Ветроэнергетические изыскания, Гондола
                            и т.д
                        </div>
                        <div className='borderbottom'></div>
                        <svg width="45" height="24" viewBox="0 0 45 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotateX(deg)' }}>
                            <path d="M1 1L22.2132 22.2132L43.4264 1" stroke="#102876" strokeWidth="2" />
                        </svg>
                    </div>
                    <div className='researchs_block_elem' onClick={() => researchs_block_elemClick(2)} style={{ height: '126px' }}>
                        <div className='researchs_block_elem_text' style={{ height: '81px' }}>
                            Проектирование
                        </div>
                        <div className='text' style={{ height: 'auto', opacity: 0 }}>
                            - Технико-экономическое обоснование железной дороги, Расчет объемов<br />
                            - Предварительное и подробное воздействие железной дороги
                            на окружающую среду<br />
                            - Концептуальные чертежи автомобильных и железных дорог<br />
                            - Разработка технического проекта для железнодорожных перевозок<br />
                            - Разработка инженерных проектов автомобильных дорог (всех категорий)
                        </div>
                        <div className='borderbottom'></div>
                        <svg width="45" height="24" viewBox="0 0 45 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotateX(deg)' }}>
                            <path d="M1 1L22.2132 22.2132L43.4264 1" stroke="#102876" strokeWidth="2" />
                        </svg>
                    </div>
                    <div className='researchs_block_elem' onClick={() => researchs_block_elemClick(3)} style={{ height: '126px' }}>
                        <div className='researchs_block_elem_text' style={{ height: '81px' }}>
                            Гидрографические, геологические и геофизические изыскания
                        </div>
                        <div className='text' style={{ height: 'auto', opacity: 0 }}>
                            -Bathymetric Survey<br />
                            -Ground-Penetrating Radar Services<br />
                            -Soil Investigation<br />
                            -Reporting based on ASTM and SNIP_GOST.
                        </div>
                        <div className='borderbottom'></div>
                        <svg width="45" height="24" viewBox="0 0 45 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotateX(deg)' }}>
                            <path d="M1 1L22.2132 22.2132L43.4264 1" stroke="#102876" strokeWidth="2" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
