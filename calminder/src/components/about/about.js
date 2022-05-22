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
                        <img src={artboard83} />
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

                        <p>Visit "mindful at school" at <a target="_blank" href="https://www.irmasmegen.com/en/mindful-at-school/">
                            www.mindfulatschool.com </a>
                        </p>


                    </div>

                    <div className={styles.right}>
                        <img style={{
                            "float": "right"
                        }} src={artboard82} />
                    </div>
                </section> */
                <section >
                    <div className={styles.teams}>
                        <h1>A.M.i.E. team 2020/2021</h1>

                        <h3>Wallace Helsen – Teacher/ Research Team</h3>

                        <p>Founder of the name ‘Calminder’ and author of mindfulness explorations.
                            Spokesperson from the group and voice-over in the promo-video.
                            Contact person for teachers and sponsors.</p>
                        <br></br>


                        <h3>Miruna Maidik - Team leader/Text writer</h3>
                        <br></br>


                        <h3>Ayoub Aouraghe - Programmer</h3>

                        <p>As a programmer me and my team provided a platform for children and teachers to explore mindfulness.</p>
                        <br></br>


                        <h3>Amalie Omsland Bakken – Teacher/research team</h3>

                        <p>Responsible for the website's pedagogical perspective, the design of the explorations and collecting and answering FAQs.

                            Contact person for teachers and test group.</p>
                        <br></br>

                        <h3>Alexander Aleksidze - UI/UX Designer/ Graphic designer</h3>

                        <p>As a UI/UX designer responsible for the visual style and the user friendliness of the website

                            As a Graphic Designer responsible for the presentation, brandbook and the promo video visual style.</p>
                        <br></br>




                        <h3>Yaroslav Taran – music creator</h3>

                        <p>The creator of musical compositions and music for individual exercises.</p>
                        <br></br>

                        <h3>Yeva Bielinska - Programmer.</h3>
                        <p>Responsible for the development of the functionally of the front-end part of the site</p>


                        <br></br>
                        <br></br>
                        <br></br>
                        <h1>A.M.i.E. team 2021/2022</h1>

                        <h3>Indy Sluijs - Team leader/Text writer</h3>
                        <br></br>


                        <h3>Yurii Herasin - Programmer and UI/UX Designer</h3>

                        <p>As a programmer me and my team provided a platform for children and teachers to explore mindfulness. As a Graphic Designer responsible for the visual style of website</p>
                        <br></br>


                        <h3>Ana Vilaplana Brotons and Maria del Mar Rodriguez – Teacher/research team</h3>

                        <p>Responsible for the website's pedagogical perspective, the design of the explorations, collecting and answering FAQs.</p>
                        <br></br>


                        <h3>Levi Meskens - Contact Person</h3>
                        <p>Contact person for coaches, teachers and test group.</p>
                        
                        <br></br>


                    </div>
                </section>
            </div>
        </div>
    )
};