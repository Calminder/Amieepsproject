import React from 'react';
import styles from "./header.module.scss";
function Header()
{
    return (
        <header>
            <div className={styles.logo}></div>
            <div className={styles.amielogo}></div>
            <div className={styles.erasmuslogo}></div>
        </header>


    )
}

export default Header;