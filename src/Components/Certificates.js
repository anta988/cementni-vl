import classes from '../Components/Certificates.module.css'
import dekorit from '../assets/dekorit.jpg';
import mermerplast from '../assets/mermerplast.jpg';
import akrilplast from '../assets/akrilplast.jpg';
import bavalit from '../assets/bavalit.jpg';
import iso9001 from '../assets/iso9001.jpg';
import iso14001 from '../assets/iso14001.jpg';
import animation from '../assets/animation.gif';

const Certificates = () => {
    return (
        <div className={classes.wrapper}>
            <div className={`centered`}>
                <img src={akrilplast} alt='' />
                <img src={bavalit} alt='' />
                <img src={dekorit} alt='' />
                <img src={mermerplast} alt='' />
            </div>
            <div className='centered'>
                <img src={iso9001} alt='iso9001' />
                <img src={animation} alt='animation' />
                <img src={iso14001} alt='iso14001' />
            </div>
        </div>
    );
};

export default Certificates;