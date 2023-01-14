import { useState } from "react";
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className={styles.nav}>
            <div className={styles.nav_container}>
                <Link to={'/'} className={styles.anchor}>
                    <image src="/logo.jpg" alt="Logo" className={styles.logo_image} width={72} height={16} />
                    <span className={styles.logo_heading}>Pincode India</span>
                </Link>
                <button type="button"
                        className={styles.burger_btn}
                        onClick={() => setOpen(!open)}
                >
                {!open ? <span className={styles.mobile_view_btn} x-show="!expanded" aria-hidden="true">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </span>
                    :
                    <span className={styles.mobile_view_btn} x-show="expanded" aria-hidden="true">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </span>
                }
                </button>
                <div className={`${!open ? styles.hide: styles.show} ${styles.hide_show_div} `} id="navbar-default">
                    <ul className={styles.ul}>
                        <li>
                            <Link to={'/'} className={styles.li_anchor} aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link to={'/about'} className={styles.li_anchor}>
                                About
                            </Link>
                        </li>
                        <li>
                        <Link to="/" className={styles.li_anchor}>Services</Link>
                        </li>
                        <li>
                        <Link to="/" className={styles.li_anchor}>Pricing</Link>
                        </li>
                        <li>
                        <Link to="/" className={styles.li_anchor}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Header;