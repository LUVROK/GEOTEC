import './our_technologies.css';
import React, { useState } from 'react';

const Our_technologies = () => {

    return (
        <div className="our_technologies">
            <div className='our_technologies_block'>
                <div className='our_technologies_left'>
                    <div className='our_technologies_title'>
                        Наши технологии
                        <br />
                        &mdash; залог качества
                    </div>
                    <div className='our_technologies_perhaps'>
                        <div>GEOTEC предлагает широкий спектр геодезических методов и инструментов для проведения всех видов съемок - от точного геодезического оборудования до компьютерного программного обеспечения.</div><br />
                        <div>GEOTEC остается независимым производителем, выбирая наиболее подходящие программные и аппаратные решения в зависимости от конкретных требований обследования. Наше операционное руководство постоянно анализирует новые технологии и продукты на благо наших клиентов и нашего бизнеса.</div><br />
                        <div>GEOTEC постоянно инвестирует в специализированное оборудование для наших нужд, а также новейшие технологии в области обработки результатов лазерного сканирования, изыскательских работ и инженерных изысканий.</div>
                    </div>
                    <div className='circleButton'>
                        Посмотреть технологии
                    </div>
                </div>
                <div className='our_technologies_right'>

                </div>
            </div>
        </div>
    );
}

export default Our_technologies;
