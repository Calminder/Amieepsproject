import React from 'react';
import styles from './about.module.scss';

import artboard63 from '../../resources/artboard631.jpeg';
import artboard75 from '../../resources/Artboard75AP.png';
import artboard77 from '../../resources/Artboard77AP.png';
import artboard82 from '../../resources/Artboard82AP.png';
import artboard83 from '../../resources/Artboard83AP.png';

import Header from './header'

export const About = () =>
{

    return (
        <div>
        <Header>
        </Header>
    <div className={styles.wrapper}>
        <section className={styles.first_screen}>
            <div className={styles.title}>
                Why mindfulness in education?
            </div>

            <div className={styles.left}>
                <p>Mindfulness is the ability to be aware of
                what is happening in the present
                moment,without any judgement. It is a
                basic human ability that everyone has,
                that we can cultivate and train by prac
                tice. During mindfulness exercises,we
                are invited to pay attention to thoughts,
                sounds,smell,observations,emotions,
                parts of the body or the sensations of
                breathing, and to bring our attention
                back to the object of focus whenever the
                mind starts to wander. Another form of
                exercise is not using a specific focus yet
                training to stay aware of where the attention
                moves to. A third group of exercises
                are often called 'informal exercises':
                we train ourselves by paying more
                attention to specific actions, situations
                and interactions in our daily lives. For
                example, we drink tea, brush our hair, or
                walk to the next room with our full
                awareness.</p>

                <p>With guidance and training, mindfulness
                can develop into a way of living that
                brings greater focus and effectiveness as
                well as kindness and caring in everything
                we do.</p>

                <p>Childhood is an important formative and
                developmental stage that lays the foundation
                for well-being and mental health
                in later years and adulthood. The
                number of school-based programmes
                that aim to promote well-being and
                mindfulness, support emotional and
                social learning and prevent mental
                health problems in adulthood,is growing.</p>
            </div>
            <div className={styles.right}>
                <img src={artboard63} />
                <img src={artboard75} />
            </div>
        </section>
        <section className={styles.second_screen}>
            <div className={styles.title}>
                About the A.M.i.E. Project
            </div>
            <div className={styles.left}>
                <img src={artboard77} />
            </div>
            <div className={styles.right}>
                <p>Arts and Mindfulness in Education
                (A.M.i.E.) is an international project,
                implemented in partnership with the Erasmus+
                programme. The aim of the project is to
                provide teachers worldwide with inspirational,
                innovative and supportive tools
                aiding the integration of mindfulness in
                primary and pre-primary curricula in an
                easy, fun and sustainable way.</p>

                <p>The unique feature of the A.M.i.E. project
                is the fact that it uses the power of the
                arts and creative processes to cultivate
                mindfulness in primary and pre-primary
                    school environments.</p>
            </div>
        </section>
        <section className={styles.three_screen}>
            <div className={styles.title}>
                What is Calminder?
            </div>
            <div className={styles.left}>
                <img src={artboard83}/>
            </div>
            <div className={styles.center}>
                <p>The name "Calminder" shows the different
                elements of the project. You can recognize
                the words:calendar, mind and calm,
                which all are related to mindfulness and
                    the A.M.i.E. project itself.</p>

                <p>Calminder is an innovative and interactive
                web-based application that serves as an
                inspirational tool for teachers in pre-primary
                and primary education for introducing
                mindfulness through arts in their daily
                educational contexts in the form of a
                weekly calendar containing 'ready-to-go'
                exercises.</p>

                <p>Interdisciplinary and internationally
                composed student teams developed this
                multi-year-based project website under
                the guidance of Irma Smegen, founder of
                the company Speel je wijs. Mindfulness
                training sessions were held with the stu-
                dents, for a more in-depth perspective
                about how mindfulness works. These
                trainings were guided by specialised
                    mindfulness trainers.</p>

                <p>More information, tools and exercises can
                be found in Irma Smegen's books which
                    will be published the coming years.</p>

                <p>(Maybe you can add a link to 'mindful at
                school' here? <a target="_blank" href="https://www.irmasmegen.com/en/mindful-at-school/">
                www.mindfulatschool.com </a>
                and make it workable for us so we can add
                    book titles as soon as they are available.)</p>
            </div>
            <div className={styles.right}>
                <img src={artboard82} />
            </div>
        </section>
    </div>
        </div>
    )
};