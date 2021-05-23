import React from "react";


export const Link =({items}) => {

    return(

        <ul>
            {items.map(item =>
                <li>
                    <a href={item.href}>{item.value}</a>
                </li>
            )}
        </ul>

    )
};