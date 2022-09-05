import './firstSection.css';

const FirstSection = () => {
    return (
        <div className="firstSection">
            <div className='firstSection_block'>
                <div className='firstSection_block_geotec'>
                    <span className='geotec_title_firstSection bigFontSize'>GEOTEC</span>
                    <svg width="90" height="65" viewBox="0 0 276 255" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M249.75 160.534C252.647 149.88 254.194 138.669 254.194 127.097C254.194 56.9032 197.291 0 127.097 0C56.9032 0 0 56.9032 0 127.097C0 197.291 56.9032 254.194 127.097 254.194C128.956 254.194 130.807 254.154 132.647 254.075C72.3655 251.323 24.3379 201.58 24.3379 140.619C24.3379 77.8926 75.1876 27.0429 137.914 27.0429C200.64 27.0429 251.49 77.8926 251.49 140.619C251.49 147.413 250.893 154.068 249.75 160.534Z" fill="#4A6AD0" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M200.362 53.5887C186.432 45.3139 170.163 40.5623 152.785 40.5623C101.26 40.5623 59.4903 82.3317 59.4903 133.857C59.4903 185.382 101.26 227.151 152.785 227.151C191.711 227.151 225.07 203.311 239.056 169.435C226.036 213.736 185.075 246.08 136.561 246.08C77.568 246.08 29.7451 198.257 29.7451 139.264C29.7451 80.2716 77.568 32.4487 136.561 32.4487C160.478 32.4487 182.559 40.3096 200.362 53.5887Z" fill="#4A6AD0" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M66.4913 129.837C68.4063 140.653 72.5845 151.248 79.1597 160.92C104.082 197.58 154.004 207.096 190.664 182.174C227.324 157.252 236.84 107.329 211.918 70.6691C208.641 65.8485 204.931 61.4973 200.877 57.632C210.517 63.8061 219.094 71.99 225.937 82.0563C253.035 121.917 242.689 176.198 202.828 203.296C162.967 230.394 108.686 220.048 81.5878 180.187C71.1 164.76 66.2211 147.173 66.4913 129.837Z" fill="#4A6AD0" />
                    </svg>
                    основан в <span className="PoppinsFirstSec">2006</span> году и является надежным партнером в области <span className='geotec_title_firstSection'>геодезических изысканий</span> в Казахстане и других странах СНГ.
                </div>
                <div className='firstSection_block_geotec_perhapse'>
                    <span className='firstSection_block_geotec_perhapse_GEOTEC'>GEOTEC</span> на <span className="PoppinsFirstSec">100%</span> местная <span className='italic_geotec_perhapse_firstSection'>казахстанская</span> компания.
                </div>
            </div>
        </div>
    );
}

export default FirstSection;
