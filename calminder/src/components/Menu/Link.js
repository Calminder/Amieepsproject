import React from "react";
import styles from "./Menu.module.css";

export const Link = ({ items }) =>
{

    return (

        <ul>
            {items.map(item =>
                <li className={styles.menuli}>
                    <a href={item.href}>{item.value}</a>
                </li>
            )}
        </ul>

    )
};