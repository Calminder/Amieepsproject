import React from 'react';
import styles from './framework.module.scss';

import Header from './header'

export const Framework = () =>
{

    return (
        <div>
            <Header>
            </Header>
            <div className={styles.wrapper}>
                <section className={styles.first_screen}>
                    <div className = {styles.title}>
                        Framework
                    </div>
                    <div className = {styles.full}>
                        <p>Hello there!</p>
                        <p>To help you bring arts and mindfulness in education we have designed a simple pedagogical framework.</p>
                        <p>You can find the AMiE pedagogical framework via the following link: <a href = "https://drive.google.com/file/d/1kJGF5icOZkMZHrcRpDdckz5XhHr9xsB7/view?usp=sharing" target = "_blank" >A.M.i.E. Pedagogical Framework</a></p>
                        <p>If you want to know more about how you can use this framework make sure to follow the free AMiE online course (available on Udemy)</p>
                    </div>
                </section>
            </div>
        </div>
    )
};