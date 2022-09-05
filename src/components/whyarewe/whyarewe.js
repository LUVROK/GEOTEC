import './whyarewe.css';
import React, { useState } from 'react';

const Whyarewe = () => {
    const [activelistLogo, setActivelistLogo] = useState(null)

    const listLogoClick = () => {
        const el = document.getElementById('Whyarewe_1th');
        const elActive = document.querySelector('.active');
        const elAll = document.querySelectorAll('.Whyarewe_block_Content_first');

        let indexEl = null;

        for (let i = 0; i < elAll.length; i++) {
            elAll[i].classList.forEach(element => element === 'active' ? [setActivelistLogo(i), indexEl = i] : null);
        }


        elAll[indexEl].style.transform = 'translateX(-1680px)';
        elAll[indexEl + 1].style.transform = 'translateX(0px)';

        //settimeout для опарсити и для пролистывания
        
    }

    return (
        <div className="Whyarewe">
            <div className='Whyarewe_block'>
                <div className='Whyarewe_block_title'>
                    <div className='Whyarewe_block_title_text'>Почему Выбирают Нас?</div>
                </div>
                <div className='Whyarewe_block_Content'>
                    <div className='Whyarewe_block_Content_first active' style={{ transform: 'translateX(0px)' }} id="Whyarewe_1th">
                        <div className='Whyarewe_block_Content_first_title'>
                            Cотрудники
                        </div>
                        <div className='Whyarewe_block_Content_first_text'>
                            Наши сотрудники - пример креативности, опыта и мотивации.<br /><br />Поддержание слогана <br />«Безопасность- превыше всего!» и обеспечение здоровой производственной среды
                        </div>
                        <div className='Whyarewe_block_Content_first_text_Gear_Wheel'>
                            <svg width="312" height="310" viewBox="0 0 312 310" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M308.763 0C309.844 0 310.922 0.0055464 312 0.0166123V161.861C310.924 161.837 309.845 161.826 308.764 161.826C227.613 161.826 161.826 227.612 161.826 308.763C161.826 308.965 161.827 309.166 161.828 309.367H0.000577432C0.000192536 309.166 0 308.965 0 308.763C0 288.938 1.86859 269.548 5.43926 250.762C8.33654 251.114 11.2865 251.295 14.2788 251.295C54.3393 251.295 86.8148 218.819 86.8148 178.759C86.8148 156.758 77.0197 137.045 61.5525 123.742C84.3285 93.3593 112.575 67.3134 144.83 47.0654C158.078 61.3561 177.013 70.3003 198.036 70.3003C236.554 70.3003 268.06 40.2774 270.429 2.35637C282.989 0.801033 295.783 0 308.763 0Z" fill="#F0F1F8" />
                            </svg>
                        </div>
                    </div>
                    <div className='Whyarewe_block_Content_first' style={{ transform: 'translateX(1680px)' }} id="Whyarewe_2th">
                        <div className='Whyarewe_block_Content_first_title'>
                            Устойчивое развитие
                        </div>
                        <div className='Whyarewe_block_Content_first_text'>
                            Мы добиваемся устойчивого развития и осведомлённостив области окружающей средыМы хотим получить всенародное признание какизвестная устойчивая компания
                        </div>
                        <div className='Whyarewe_block_Content_first_text_Gear_Wheel'>
                            <svg width="312" height="310" viewBox="0 0 312 310" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M308.763 0C309.844 0 310.922 0.0055464 312 0.0166123V161.861C310.924 161.837 309.845 161.826 308.764 161.826C227.613 161.826 161.826 227.612 161.826 308.763C161.826 308.965 161.827 309.166 161.828 309.367H0.000577432C0.000192536 309.166 0 308.965 0 308.763C0 288.938 1.86859 269.548 5.43926 250.762C8.33654 251.114 11.2865 251.295 14.2788 251.295C54.3393 251.295 86.8148 218.819 86.8148 178.759C86.8148 156.758 77.0197 137.045 61.5525 123.742C84.3285 93.3593 112.575 67.3134 144.83 47.0654C158.078 61.3561 177.013 70.3003 198.036 70.3003C236.554 70.3003 268.06 40.2774 270.429 2.35637C282.989 0.801033 295.783 0 308.763 0Z" fill="#F0F1F8" />
                            </svg>
                        </div>
                    </div>
                    <svg width="108" height="108" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg" className='listLogo' onClick={listLogoClick}>
                        <path fillRule="evenodd" clipRule="evenodd" d="M80.6102 80.6103C95.4501 65.7704 95.4501 41.7101 80.6102 26.8702C65.7702 12.0303 41.71 12.0303 26.8701 26.8702C12.0301 41.7101 12.0301 65.7704 26.8701 80.6103C41.71 95.4502 65.7702 95.4502 80.6102 80.6103ZM64.1036 43.0231C60.6866 46.4402 55.1464 46.4402 51.7293 43.0231L51.0222 43.7303C53.7368 46.4448 57.6538 47.2241 61.0588 46.068L43.6638 63.463L44.3709 64.1701L61.7659 46.7751C60.6098 50.1801 61.3891 54.0971 64.1036 56.8117L64.8108 56.1046C61.3937 52.6875 61.3937 47.1473 64.8108 43.7303L64.1036 43.0231Z" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Whyarewe;
