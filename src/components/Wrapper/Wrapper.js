import './Wrapper.css';
import Scroll from '../SmothScroll';
// import wrapper_btn from '../../media/wrapper_btn.png'

const Wrapper = () => {

    return (
        <div className="Wrapper">
            {/* <Scroll /> */}

            {/* <img src={ImageBackground} className="Wrapper_image" alt=''></img> */}
            <div className="Wrapper_image"></div>
            <div className='Wrapper_block_GEOTEC'>
                <div className='Wrapper_block_GEOTEC_block1' style={{ opacity: 0, transform: 'translateY(90px)' }}>
                    <div className='Wrapper_block_GEOTEC_title'>
                        geotec
                    </div>
                    <div className='Wrapper_block_GEOTEC_logo'>
                        <svg width="110" height="100" viewBox="0 0 111 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M100.073 64.3185C101.233 60.0511 101.852 55.5608 101.852 50.926C101.852 22.8003 79.0516 0 50.926 0C22.8003 0 0 22.8003 0 50.926C0 79.0516 22.8003 101.852 50.926 101.852C51.6721 101.852 52.4146 101.836 53.1529 101.804C28.9979 100.703 9.75241 80.7708 9.75241 56.3438C9.75241 31.2102 30.1272 10.8354 55.2607 10.8354C80.3942 10.8354 100.769 31.2102 100.769 56.3438C100.769 59.0644 100.53 61.7292 100.073 64.3185Z" fill="url(#paint0_linear_220_133)" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M80.2811 21.4715C74.6998 18.1565 68.1818 16.253 61.2192 16.253C40.5738 16.253 23.8374 32.9895 23.8374 53.6349C23.8374 74.2803 40.5738 91.0167 61.2192 91.0167C76.815 91.0167 90.1801 81.4661 95.7851 67.8945C90.5669 85.6432 74.1557 98.6009 54.7179 98.6009C31.0804 98.6009 11.9185 79.4389 11.9185 55.8014C11.9185 32.1639 31.0804 13.002 54.7179 13.002C64.3008 13.002 73.148 16.1513 80.2811 21.4715Z" fill="url(#paint1_linear_220_133)" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M26.6413 52.0203C27.4084 56.3552 29.0827 60.6018 31.718 64.4783C41.704 79.1675 61.7071 82.9802 76.3963 72.9943C91.0855 63.0083 94.8982 43.0051 84.9123 28.3159C83.5993 26.3846 82.1132 24.6413 80.4888 23.0927C84.351 25.5665 87.7872 28.8454 90.5289 32.8784C101.387 48.8501 97.2411 70.5997 81.2694 81.4576C65.2977 92.3154 43.5481 88.1698 32.6902 72.1981C28.4873 66.0157 26.5324 58.9674 26.6413 52.0203Z" fill="url(#paint2_linear_220_133)" />
                            <defs>
                                <linearGradient id="paint0_linear_220_133" x1="18.9618" y1="98.0596" x2="145" y2="-4" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#3757BC" />
                                    <stop offset="1" stopColor="white" stopOpacity="0" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_220_133" x1="69.5" y1="98.9999" x2="78.0005" y2="-28.5001" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#3856B5" />
                                    <stop offset="1" stopColor="white" stopOpacity="0" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_220_133" x1="99.8033" y1="36.6759" x2="-30.6713" y2="78.5401" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#3856B5" />
                                    <stop offset="1" stopColor="white" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className='Wrapper_block_GEOTEC_block2' style={{ opacity: 0, transform: 'translateY(180px)' }}>
                    <div className='Wrapper_block_GEOTEC_block2_title'>TOO Geotec</div>
                    <div className='Wrapper_block_GEOTEC_block2_description'>Местная изыскательная компания</div>
                </div>
                <div className='Wrapper_block_GEOTEC_block3' style={{ opacity: 0, transform: 'translateY(360px)' }}>
                    <div className='Wrapper_block_GEOTEC_block2_description'>Посмотреть услуги</div>
                    <div className='Wrapper_block_GEOTEC_block2_button'>
                        <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M38 76C58.9868 76 76 58.9868 76 38C76 17.0132 58.9868 0 38 0C17.0132 0 0 17.0132 0 38C0 58.9868 17.0132 76 38 76ZM52.9062 37.75C48.0738 37.75 44.1562 33.8325 44.1562 29H43.1562C43.1562 32.839 45.375 36.1598 48.6001 37.75H24V38.75H48.6001C45.375 40.3402 43.1562 43.661 43.1562 47.5H44.1562C44.1562 42.6675 48.0738 38.75 52.9062 38.75V37.75Z" fill="#4A6AD0" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Wrapper;
