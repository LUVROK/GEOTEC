import './aboutUs.css';

const AboutUs = () => {
    return (
        <div className="AboutUs">
            <div className='CompanyBar'>
                <span className='logo_CompanyBar'>GEOTEC -&nbsp;</span>это геодезичекие изыскания под ключ
                <div className='perhaps_logo_companyBar'>Наша компания активно работает в следующих областях:</div>
            </div>
            <div className='researchs_block'>
                <div className='researchs_block_elem'>Конкретные Изыскания
                    <div className='borderbottom'></div>
                    <svg width="45" height="24" viewBox="0 0 45 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L22.2132 22.2132L43.4264 1" stroke="black" strokeWidth="2" />
                    </svg>
                </div>
                <div className='researchs_block_elem'>Топографо-Геодезические Изыскания
                    <div className='borderbottom'></div>
                    <svg width="45" height="24" viewBox="0 0 45 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L22.2132 22.2132L43.4264 1" stroke="black" strokeWidth="2" />
                    </svg>
                </div>
                <div className='researchs_block_elem'>Проектирование
                    <div className='borderbottom'></div>
                    <svg width="45" height="24" viewBox="0 0 45 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L22.2132 22.2132L43.4264 1" stroke="black" strokeWidth="2" />
                    </svg>
                </div>
                <div className='researchs_block_elem'>Гидрографические, геологические и геофизические изыскания
                    <div className='borderbottom'></div>
                    <svg width="45" height="24" viewBox="0 0 45 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L22.2132 22.2132L43.4264 1" stroke="black" strokeWidth="2" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
