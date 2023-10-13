import React, { useState } from 'react';
import styles from './Menu.module.css';
import { Link } from './Link.js';
export const Menu = () =>
{
    const items = [
        {
            value: 'Home',
            href: '/'
        },
        {
            value: 'About',
            href: '/about'
        },
        {
            value: 'FAQ',
            href: '/faq'
        },
        {
           value: 'Music',
           href: '/music'
        },
        {
            value: 'Course',
            href: '/course'
        },
        {
            value: 'Framework',
            href: '/framework'
        }
    ];
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.burgerWrapper}>
            {
                !open &&
                <div className={styles.burgerbtnClose}
                    onClick={() => setOpen((currentOpen) => currentOpen = !currentOpen)}
                >
                    <span class={styles.line_blue}></span>
                    <span class={styles.line_blue}></span>
                    <span class={styles.line_blue}></span>
                </div>

            }
            {
                open &&
                <div className={styles.container}>
                    <div className={styles.burgerbtnWhite}
                            onClick={() => setOpen((currentOpen) => currentOpen = !currentOpen)}
                    >
                        <span class={styles.line}></span>
                        <span class={styles.line}></span>
                        <span class={styles.line}></span>
                    </div>
                    <span class={styles.line_divider}></span>
                    <div className={styles.menu_content} style={{ display: open ? 'block' : 'none' }}>
                        <Link items={items} />
                    </div>
                    
                </div>
            }
        </div>
    )
};