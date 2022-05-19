import Card from '../UI/Card';
import traditionLogo from '../assets/tradition.png';
import logo2 from '../assets/logo2.png';
import { Fragment } from 'react';
import classes from './CompanyActivity.module.css'

const CompanyActivity = () => {
    return (
        <Fragment>
            <Card>
                <div className='centered'>
                    <img className={classes.traditionLogo} src={traditionLogo} alt='tradition' />
                    <img src={logo2} alt='logo' />
                </div>
            </Card>
            <Card>
                <h1>O nama</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis tellus in metus vulputate. Id interdum velit laoreet id donec ultrices tincidunt. Eleifend donec pretium vulputate sapien nec. Mi tempus imperdiet nulla malesuada pellentesque. Curabitur gravida arcu ac tortor dignissim convallis. Ante in nibh mauris cursus mattis molestie a. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Fermentum dui faucibus in ornare quam viverra orci sagittis eu. Morbi quis commodo odio aenean. Sollicitudin ac orci phasellus egestas. Etiam tempor orci eu lobortis elementum nibh tellus molestie. Eget dolor morbi non arcu risus quis. Congue mauris rhoncus aenean vel elit scelerisque mauris. Imperdiet sed euismod nisi porta lorem mollis. Enim lobortis scelerisque fermentum dui faucibus. Pellentesque id nibh tortor id aliquet lectus proin nibh. Sit amet mauris commodo quis imperdiet massa tincidunt nunc. Sed arcu non odio euismod lacinia at quis risus. Quam pellentesque nec nam aliquam sem.</p>
            </Card>
            <Card>
                <div>
                    <h3>DELATNOST PREDUZEĆA CEMENTNI PROIZVODI</h3>
                    <h4>CEMENTNI PROIZVODI - Proizvodnja - Građevinarstvo</h4>
                    <p>Građevinski fasadni praškasti i pastozni materijali</p>
                    <p>Elementi od prefabrikovanog betona</p>
                    <p>Beton za ugradnju</p>

                    <h4>CEMENTNI PROIZVODI - Servisne usluge - Građevinarstvo</h4>
                    <p>Falcovanje građevinskog izolacionog stiropora</p>
                    <p>Ugradnja sopstvenih proizvoda</p>
                    <p>Transport sopstvenih proizvoda</p>

                    <h4>CEMENTNI PROIZVODI - Trgovina</h4>
                    <p>Prodaja sopstvenih proizvoda na veliko</p>

                </div>
            </Card>
        </Fragment>
    );
};

export default CompanyActivity