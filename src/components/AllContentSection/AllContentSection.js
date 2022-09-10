import './AllContentSection.css';
import FirstSection from '../firstSection/firstSection.js';
import Whyarewe from '../whyarewe/whyarewe';
import AboutUs from '../aboutUs/aboutUs';
import History from '../history/history';
import Projects from '../projects/projects';

const AllContentSection = () => {
    return (
        <div className="AllContentSection">
            <div className='AllContentSection_block' style={{ backgroundColor: '#ffffffb0' }}>
                <FirstSection />
                <History />
                <Whyarewe />
                {/* <AboutUs />
                <Projects /> */}
            </div>
        </div>
    );
}

export default AllContentSection;
