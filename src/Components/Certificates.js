import Card from "../UI/Card";
import classes from '../Components/Certificates.module.css'
import dekorit from '../assets/dekorit.jpg';
import mermerplast from '../assets/mermerplast.jpg';
import akrilplast from '../assets/akrilplast.jpg';
import bavalit from '../assets/bavalit.jpg';
import { Fragment } from "react";

const Certificates = () => {
    return (
        <div className={classes.wrapper}>
            <h2>Sertifikati</h2>
            <div className={`centered`}>
                <img src={akrilplast} alt='' />
                <img src={bavalit} alt='' />
                <img src={dekorit} alt='' />
                <img src={mermerplast} alt='' />
            </div>
        </div>
    );
};

export default Certificates;