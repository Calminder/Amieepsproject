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
                        Arts and Mindfulness in Education, SPOC
                    </div>
                    <div className = {styles.full}>
                        <p>We created a Udemy-course, a free Short Personal Online Course, yet we seem to have trouble getting it published.
                        Here you soon will find a link to our course.</p>
                        <p><i>30/01/2024</i></p>
                        <p>This is a course about Arts and Mindfulness in Education, shortened as AMiE (which means ‘friend’ in French). 
                        It is a concise beginners' course for everyone who wants to learn how to incorporate using the arts 
                        as a starting point for a broader and more engaging approach of mindful awareness training for young children. </p>
                        <p>You don't need to know anything about mindfulness, and, you need not know anything about art. Knowing something about
                         both may be helpful, yet we created the course with an absolute beginner in mind. </p>
                        <p>We tailored our course in such a way that one can use it with an individual child 
                        or with different sizes of groups of children. Also we tried to keep it open to all ages,
                        even though we ourselves experimented mostly with younger children.</p>
                        <p>We kept this course sweet and short, starting with the focus on “What is art-based mindfulness?”, then we help you get
                        to become a bit more mindful yourself. Next, we focus on our own AMiE-framework (and how you can use it), and 
                        we give some more input on how to work with this Calminder-website. </p>
                        <p>Will you become our next ‘amie’ ?</p>
                    </div>
                </section>
            </div>
        </div>
    )
};