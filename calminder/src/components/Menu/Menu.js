import React, { useState } from 'react';
import styles from './Menu.module.css';
import { Link } from './Link.js';
export const Menu = () =>
{
    const items = [
        {
            value: 'Home',
            href: '/',
        },
        {
            value: 'About',
            href: '/about',
        },
        {
            value: 'FAQ',
            href: '/faq',
        }
    ];
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <div className={styles.container}>
            <div className={styles.closeIcon} >X</div>
            <div className={styles.menu}>
                <nav>
                    <div className={styles.burgerbtn} onClick={handleClick}>
                        <div className={click ? 'menuOpen' : 'menuClose'}>
                        <span></span>
                            </div>
                    </div>
                </nav>

                <div >
                    <Link items={items} />
                </div>
            </div>
        </div>


    )
};