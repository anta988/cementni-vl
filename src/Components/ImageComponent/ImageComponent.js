import classes from './ImageComponent.module.css';
import { imgAction } from '../../store/img-slice';
import { useDispatch, useSelector } from 'react-redux';


const ImageComponent = (props) => {
    const dispatch = useDispatch()

    const imageUlr = useSelector(state => state.img.imgURL);

    const imageClickHandler = (event) => {
        event.preventDefault();
        dispatch(imgAction.hideImage())
    }
    return (
        <div className={`${classes.imageWrapper}`} onClick={imageClickHandler}>
            <img src={imageUlr} alt='Not found!' />

        </div>
    )
}

export default ImageComponent;