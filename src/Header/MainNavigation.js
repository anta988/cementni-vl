import classes from './MainNavigation.module.css'
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import logoImage from '../assets/logoBGR.png';

const MainNavigation = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const logoClickHandler = () => {
        navigate('/', { replace: true })
    }
    return (
        <header className={classes.header}>
            <div className={classes.logo} onClick={logoClickHandler}>
                <img src={logoImage} alt='cementniVL' />
            </div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink className={(navData) => navData.isActive ? classes.active : ''} to='/about-us'>O nama</NavLink>
                    </li>
                    <li>
                        <NavLink className={(navData) => navData.isActive ? classes.active : ''} to='/products'>Proizvodi</NavLink>
                    </li>
                    <li>
                        <NavLink className={(navData) => navData.isActive ? classes.active : ''} to='/contact'>Kontakt</NavLink>
                    </li>
                </ul>

            </nav>
        </header>
    );
}
export default MainNavigation;