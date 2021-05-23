import React,{ useState } from 'react';
import styles from './Menu.module.css';
import { Link } from './Link.js';
export const Menu =() => {
    const items = [
        {
            value:'Home',
            href:'/',
        },
        {
            value:'About',
            href:'/about',
        },
        {
            value:'FAQ',
            href:'/faq',
        }
    ];
    const [open, setOpen]= useState (true);

    return(
        // <div className={styles.container}>
        //     <div className={styles.closeIcon} >X</div>
        //     <div className={styles.menu}>
        //         <nav>
        //             <div className={styles.burgerbtn} onClick={() => setOpen((currentOpen) => currentOpen = !currentOpen)}>
        //                 <span></span>
        //             </div>
        //         </nav>

        //         <div className={styles.menu_content} style={{ display:  open ? 'block' : 'none' }}>
        //             <Link items={items} />
        //         </div>
        //     </div>
        // </div>
        <div></div>

    )
};