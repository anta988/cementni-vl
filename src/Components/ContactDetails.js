import { Fragment } from "react";
import classes from './ContactDetails.module.css';

const ContactDetails = () => {

    return (
        <Fragment>
            <div className={classes.detail}>
                <label>Zemlja:</label>
                <div><strong>Srbija</strong></div>
            </div>
            <div className={classes.detail}>
                <label>Grad:</label>
                <div><strong>Vlasotince 16210</strong></div>
            </div>
            <div className={classes.detail}>
                <label>Ulica:</label>
                <div><strong>Industrijska zona b.b.</strong></div>
            </div>
            <div className={classes.detail}>
                <label>Telefon / Fax</label>
                <div>
                    <strong>+381(0)16/875-484</strong>
                    <br />
                    <strong>+381(0)16/875-100</strong>
                    <br />
                    <strong>+381(0)16/875-928</strong>
                </div>
            </div>
        </Fragment>
    )

};

export default ContactDetails;