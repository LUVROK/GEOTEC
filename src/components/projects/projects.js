import './projects.css';

const Projects = () => {

    return (
        <div className="Projects Projects_section sec2">
            <div className='Projects_block element-animation'>
                <div className='hiddenOverflow'>
                    <h2 className=''>Проекты</h2>
                    <div className='textBlock textBlock_first active' id="first" style={{ transform: 'translateY(0px)', transition: 'all 1s cubic-bezier(0,.11,.29,1)' }}>
                        <div className='textBlock_text'>
                            ИНТЕГРИРОВАННЫЙ ГАЗОХИМИЧЕСКИЙ КОМПЛЕКС (ИГХК)
                        </div>
                        <div className='textBlock_text_content'>
                            Локация: Атырау, Казахстан<br />
                            Заказчик: ТОО Казахстан Петрокемикал Индастриз ИнкI
                        </div>
                        <div className='Button_Learn_More'>
                            <div className='title'>Узнать больше</div>
                            <div>
                                <svg width="29" height="19" viewBox="0 0 29 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.1562 0C20.1562 4.83249 24.0738 8.75 28.9062 8.75V9.75C24.0738 9.75 20.1562 13.6675 20.1562 18.5H19.1562C19.1562 14.661 21.375 11.3402 24.6001 9.75H0V8.75H24.6001C21.375 7.15981 19.1562 3.83901 19.1562 0H20.1562Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hiddenOverflow2'>
                    <div className='ImagesBlockOverflow active' style={{ transform: 'translateX(0%)' }}></div>
                    <div className='ImagesBlockOverflow' style={{ transform: 'translateX(135%)' }}></div>
                    <div className='ImagesBlockOverflow' style={{ transform: 'translateX(248%)' }}></div>
                    <div className='ImagesBlockOverflow' style={{ transform: 'translateX(370%)' }}></div>
                    <div className='ImagesBlockOverflow' style={{ transform: 'translateX(370%)' }}></div>
                    <div className='ImagesBlockOverflow' style={{ transform: 'translateX(370%)' }}></div>
                    <div className='ImagesBlockOverflow' style={{ transform: 'translateX(370%)' }}></div>
                    <div className='ImagesBlockOverflow' style={{ transform: 'translateX(370%)' }}></div>
                    <div className='ImagesBlockOverflow' style={{ transform: 'translateX(370%)' }}></div>
                    <div className='ImagesBlockOverflow' style={{ transform: 'translateX(370%)' }}></div>
                    <div className='ImagesBlockOverflow' style={{ transform: 'translateX(370%)' }}></div>
                    <div className='ImagesBlockOverflow' style={{ transform: 'translateX(370%)' }}></div>
                    <div className='buttonsBlock'>
                        <div className='btnBefore'>
                            <svg width="29" height="19" viewBox="0 0 29 19" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'scale(-1,1)' }}>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.1562 0C20.1562 4.83249 24.0738 8.75 28.9062 8.75V9.75C24.0738 9.75 20.1562 13.6675 20.1562 18.5H19.1562C19.1562 14.661 21.375 11.3402 24.6001 9.75H0V8.75H24.6001C21.375 7.15981 19.1562 3.83901 19.1562 0H20.1562Z" fill="white" />
                            </svg>
                        </div>
                        <div className='btnAfter'>
                            <svg width="29" height="19" viewBox="0 0 29 19" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'scale(1,1)' }}>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.1562 0C20.1562 4.83249 24.0738 8.75 28.9062 8.75V9.75C24.0738 9.75 20.1562 13.6675 20.1562 18.5H19.1562C19.1562 14.661 21.375 11.3402 24.6001 9.75H0V8.75H24.6001C21.375 7.15981 19.1562 3.83901 19.1562 0H20.1562Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                    <div className='StatusBar'>
                        <div className='status'>01</div>
                        <div className='lineStatus'></div>
                        <div className='allCount'>12</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
