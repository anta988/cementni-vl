import { Fragment } from "react";
import Certificates from "../Components/Certificates";
import classes from './Layout.module.css'
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
    return (
        <Fragment>
            <MainNavigation />
            <main className={classes.main}>
                {props.children}
            </main>
            <Certificates />
        </Fragment>
    )
}

export default Layout;