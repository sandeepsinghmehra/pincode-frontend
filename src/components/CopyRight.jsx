import React from 'react';
import styles from './Footer.module.css';
import { AiFillTwitterSquare, AiFillFacebook, AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const CopyRight = () => {
  return (
        <div className={styles.footer}>
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
                        <AiFillGithub size={32} color={'white'}/>
                    </Link>
                </div>
            </div>
        </div>
  )
}

export default CopyRight;