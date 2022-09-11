import './firstSection.css';
import licens from '../../media/licens.png';
import customers from '../../media/customers.png';
import './firstSection.scss';
import $ from 'jquery';
import React, { useEffect } from 'react';

const FirstSection = () => {

    // originally forked from https://codepen.io/kkick/pen/oWZMov


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

    $('.btn-6')
        .on('mouseenter', function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({ top: relY, left: relX })
        })
        .on('mouseout', function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({ top: relY, left: relX })
        });
    // $('[href=#]').click(function () { return false });

    return (
        <div className="firstSection section sec1">
            <div className='firstSection_block'>
                <div className='firstSection_block_geotec_block'>
                    <div className='firstSection_block_geotec element-animation'>
                        <span className='geotec_title_firstSection bigFontSize'>GEOTEC</span>
                        <svg width="90" height="65" viewBox="0 0 276 255" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M249.75 160.534C252.647 149.88 254.194 138.669 254.194 127.097C254.194 56.9032 197.291 0 127.097 0C56.9032 0 0 56.9032 0 127.097C0 197.291 56.9032 254.194 127.097 254.194C128.956 254.194 130.807 254.154 132.647 254.075C72.3655 251.323 24.3379 201.58 24.3379 140.619C24.3379 77.8926 75.1876 27.0429 137.914 27.0429C200.64 27.0429 251.49 77.8926 251.49 140.619C251.49 147.413 250.893 154.068 249.75 160.534Z" fill="#4A6AD0" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M200.362 53.5887C186.432 45.3139 170.163 40.5623 152.785 40.5623C101.26 40.5623 59.4903 82.3317 59.4903 133.857C59.4903 185.382 101.26 227.151 152.785 227.151C191.711 227.151 225.07 203.311 239.056 169.435C226.036 213.736 185.075 246.08 136.561 246.08C77.568 246.08 29.7451 198.257 29.7451 139.264C29.7451 80.2716 77.568 32.4487 136.561 32.4487C160.478 32.4487 182.559 40.3096 200.362 53.5887Z" fill="#4A6AD0" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M66.4913 129.837C68.4063 140.653 72.5845 151.248 79.1597 160.92C104.082 197.58 154.004 207.096 190.664 182.174C227.324 157.252 236.84 107.329 211.918 70.6691C208.641 65.8485 204.931 61.4973 200.877 57.632C210.517 63.8061 219.094 71.99 225.937 82.0563C253.035 121.917 242.689 176.198 202.828 203.296C162.967 230.394 108.686 220.048 81.5878 180.187C71.1 164.76 66.2211 147.173 66.4913 129.837Z" fill="#4A6AD0" />
                        </svg>
                        - надежный партнер в области геодезических изысканий в Казахстане
                    </div>
                    <div className='firstSection_block_geotec_perhapse_block element-animation'>
                        <div className='firstSection_block_geotec_perhapse'>
                            <span className='engFont'>TOO «GEOTEC»</span> было основано в <span className='engFont'>2006</span> году с целью работы в области геодезических и проектных работ в Казахстане. На данный момент <span className='engFont'>GEOTEC</span> является надежным партнером, работая с престижными и известными клиентами.
                        </div>
                        <div className='firstSection_block_geotec_perhapse top_sec'>
                            Головной офис <span className='engFont'>TOO «GEOTEC»</span> был перенесен в Астану из Актобе в <span className='engFont'>2016</span> году. Остальные офисы расположены в Актобе и Тенгизе, Атырау. <span className='engFont'>GEOTEC</span> выполняет проекты в Казахстане и других странах СНГ. <span className='engFont'>GEOTEC 100%</span> местная казахстанская компания. Достижение местного контента составляет <span className='engFont'>95%</span>.
                        </div>
                    </div>
                </div>
                <div className='blockCont_block element-animation'>
                    <div className="centerer">
                        <div className="wrap">
                            <div className='blockCont btn-6'>
                                <img src={customers} alt="" className='' />
                                <div className='blockCont_text'>Сертификаты&Лицензии</div>
                                <svg width="29" height="19" viewBox="0 0 29 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M20.1562 0C20.1562 4.83249 24.0738 8.75 28.9062 8.75V9.75C24.0738 9.75 20.1562 13.6675 20.1562 18.5H19.1562C19.1562 14.661 21.375 11.3402 24.6001 9.75H0V8.75H24.6001C21.375 7.15981 19.1562 3.83901 19.1562 0H20.1562Z" fill="white" />
                                </svg>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div className="centerer">
                        <div className="wrap">
                            <div className='blockCont btn-6'>
                                <img src={licens} alt="" className='' />
                                <div className='blockCont_text'>Заказчики</div>
                                <svg width="29" height="19" viewBox="0 0 29 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M20.1562 0C20.1562 4.83249 24.0738 8.75 28.9062 8.75V9.75C24.0738 9.75 20.1562 13.6675 20.1562 18.5H19.1562C19.1562 14.661 21.375 11.3402 24.6001 9.75H0V8.75H24.6001C21.375 7.15981 19.1562 3.83901 19.1562 0H20.1562Z" fill="white" />
                                </svg>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default FirstSection;
