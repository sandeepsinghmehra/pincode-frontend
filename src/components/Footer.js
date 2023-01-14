import React from 'react';
import styles from './Footer.module.css';
import { AiFillTwitterSquare, AiFillFacebook, AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
        <footer className={styles.footer}>
            <div className={styles.footer_card}>
                <div className={styles.footer_logo_card}>
                    <Link to="/" className={styles.flex_center}>
                        <image src="/logo.jpg" alt="Logo" className={styles.footer_logo} width={72} height={16} />
                        <span className={styles.footer_logo_name}>Pincode India</span>
                    </Link>
                </div>
                <div className={styles.footer_section}>
                    <div>
                        <h2 className={styles.footer_sub_heading}>Resources</h2>
                        <ul className={styles.footer_ul}>
                            <li className="mb-4">
                                <Link to="https://flowbite.com/" className={styles.underline_hover}>Flowbite</Link>
                            </li>
                            <li>
                                <Link to="https://tailwindcss.com/" className={styles.underline_hover}>Tailwind CSS</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className={styles.footer_sub_heading}>Follow us</h2>
                        <ul className={styles.footer_ul}>
                            <li className="mb-4">
                                <Link to="https://github.com/themesberg/flowbite" className={styles.underline_hover}>Github</Link>
                            </li>
                            <li>
                                <Link to="https://discord.gg/4eeurUVvTy" className={styles.underline_hover}>Discord</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className={styles.footer_sub_heading}>Legal</h2>
                        <ul className={styles.footer_ul}>
                            <li className="mb-4">
                                <Link to={"/privacy-policy"} className={styles.underline_hover}>Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to={"/term&condition"} className={styles.underline_hover}>Terms &amp; Conditions</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className={styles.hr} />
            <div className={styles.social_icon_container}>
                <span className={styles.copyright}>© 2022 <Link to="/" className={styles.underline_hover}>Pincode India</Link>. All Rights Reserved.
                </span>
                <div className={styles.icon_container}>
                    <Link to="#" className={styles.icon_container_anchor}>
                        <AiFillFacebook size={32} color={'blue'} />
                    </Link>
                    <Link to="#" className={styles.icon_container_anchor}>
                        <AiFillInstagram size={32} color={'red'} />
                    </Link>
                    <Link to="#" className={styles.icon_container_anchor}>
                        <AiFillTwitterSquare size={32} color={'blue'} />
                    </Link>
                    <Link to="#" className={styles.icon_container_anchor}>
                        <AiFillGithub size={32} color={'black'}/>
                    </Link>
                </div>
            </div>
        </footer>
  )
}

export default Footer;