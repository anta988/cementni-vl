import { Fragment } from "react";
import Footer from '../Footer/Footer';
import ImageComponent from "../ImageComponent/ImageComponent";
import classes from './Layout.module.css'
import MainNavigation from "./MainNavigation";
import { useSelector } from 'react-redux';

const Layout = (props) => {

    const isImgVisible = useSelector((state) => state.img.imgIsVisible)

    return (
        <Fragment>
            <MainNavigation />
            <main className={classes.main}>
                {props.children}
            </main>
            <Footer />
            {isImgVisible && <ImageComponent />}
        </Fragment>
    )
}

export default Layout;