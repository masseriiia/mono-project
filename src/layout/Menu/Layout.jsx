import { NavLink, Outlet } from "react-router-dom";
import styles from './Layout.module.css';
import { useState } from "react";

const iconsHome = ['/home.svg', '/home-active.svg'];
const iconsProfile = ['/profile.svg', '/profile-active.svg'];

export function Layout() {
    const [activeLink, setActiveLink] = useState('/');

    const getIcon = (path, icons) => {
        return activeLink === path ? icons[1] : icons[0];
    };

    const handleLinkClick = (path) => {
        setActiveLink(path);
    };

    return (
        <div className={styles['layout']}>
            <div className={styles['content']}>
                <Outlet/>
            </div>
            <div className={styles['menu']}>
                <NavLink
                    to='/'
                    className={styles['link']}
                    onClick={() => handleLinkClick('/')}
                >
                    <img src={getIcon('/', iconsHome)} height='35px' width='35px' alt="Home" />
                </NavLink>
                <NavLink
                    to='/profile'
                    className={styles['link']}
                    onClick={() => handleLinkClick('/profile')}
                >
                    <img src={getIcon('/profile', iconsProfile)} height='35px' width='35px' alt="Profile" />
                </NavLink>
            </div>
            
        </div>
    );
}
