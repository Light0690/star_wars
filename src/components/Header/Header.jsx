import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useTheme,THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from '@context/ThemeProvider';

import Favorite from '@components/Favorite';

import  imgDroid from './img/droid.png';
import  imgLightSaber from './img/lightsaber.png';
import  imgSpaceStation  from './img/spaceStation.png';

import styles from './Header.module.css';


const Header = () => {
    const [icon, setIcon] = useState(imgDroid);
    const isTheme = useTheme();
    
    useEffect(() => {
        switch(isTheme.theme) {
            case THEME_LIGHT : setIcon(imgLightSaber); break;
            case THEME_DARK : setIcon(imgSpaceStation); break;
            case THEME_NEITRAL : setIcon(imgDroid); break;
            default : setIcon(imgDroid);
        }
    },[isTheme])

    return (
        <div className={styles.container}>
            <img src={icon}
                 alt="Star Wars"
                 className={styles.logo} 
            />
            <ul className={styles.list__container}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/people/?page=1">People</NavLink></li>
                <li><NavLink to="/not-found">Not Found</NavLink></li>
                <li><NavLink to="/search">Search</NavLink></li>
                <li><NavLink to="/fail">Fail</NavLink></li>
            </ul>
            <Favorite />
        </div>
    )
}

export default Header;
