import React from 'react';
import styles from "./header.module.css";
function Header()
{
    return (
        <header>
            <div className={styles.logo}></div>
            <div className={styles.amielogo}></div>
            <div className={styles.social_media_links_first}>
                <a href = "https://www.youtube.com/@ArtsandMindfulnessinEducation" 
                target = "_blank">
                    <div className={styles.youtube}></div> 
                </a>
                <a href = "https://www.instagram.com/artsandmindfulness/"
                target = "_blank">
                    <div className={styles.instagram}></div>
                </a>
            </div>
            <div className={styles.erasmuslogo}></div>
            <div className={styles.social_media_links_last}>
                <a href = "https://www.facebook.com/groups/www.speleninstilte.nl/"
                target = "_blank">
                    <div className={styles.facebook}></div> 
                </a>
                <a href = "https://www.irmasmegen.com/en/"
                target = "_blank">
                    <div className={styles.website}></div>
                </a>
            </div>
        </header>


    )
}

export default Header;