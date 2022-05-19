import { Fragment, useState } from 'react'
import cp0 from '../assets/cp0.jpeg'
import cp1 from '../assets/cp1.jpeg'
import cp2 from '../assets/cp2.jpeg'
import cp3 from '../assets/cp3.jpg'
import cp4 from '../assets/cp4.jpeg'
import cp5 from '../assets/cp5.jpeg'
import classes from './Slider.module.css'

const imagesArray = [cp0, cp1, cp2, cp3, cp4, cp5];

const Slider = () => {
    const [initIndex, setInitIndex] = useState(0);

    const currentSlideHandler = (prop) => {
        let value = prop.target.getAttribute('value');

        switch (value) {
            case 'desc':
                value = initIndex === 0 ? imagesArray.length - 1 : initIndex - 1;
                break;
            case 'asc':
                value = initIndex === imagesArray.length - 1 ? 0 : initIndex + 1
                break
            default:
                value = parseInt(value)
        }
        setInitIndex(value);
    }

    return (
        <Fragment>
            <div className={classes.slideshowContainer}>
                {imagesArray.map((elem, index) => (
                    <div className={`${index !== initIndex ? classes.mySlides : ''} ${classes.fade} ${classes.imgWrapper}`} key={index} value={initIndex}>
                        <img src={elem} alt='' />
                    </div>
                ))}

                <div className={classes.prev} value='desc' onClick={currentSlideHandler}>❮</div>
                <div className={classes.next} value='asc' onClick={currentSlideHandler}>❯</div>

            </div >
            <br />

            <div className='centered'>
                {imagesArray.map((elem, index) => (
                    <span className={`${classes.dot} ${index === initIndex ? classes.active : ''}`} onClick={currentSlideHandler} key={index} value={index}></span>
                ))}
            </div>

        </Fragment >
    );
};

export default Slider;