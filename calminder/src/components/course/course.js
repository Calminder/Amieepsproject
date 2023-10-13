import React from 'react';
import styles from './course.module.scss';

import Header from './header'

export const Course = () =>
{

    return (
        <div>
            <Header>
            </Header>
            <div className={styles.wrapper}>
                <section className={styles.first_screen}>
                    <div className = {styles.title}>
                        Course Description
                    </div>
                    <div className = {styles.full}>
                        <p>Here should be a course description</p>
                    </div>
                </section>
            </div>
        </div>
    )
};