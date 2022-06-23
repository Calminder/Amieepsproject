import React from 'react';
import styles from './about.module.scss';

import artboard63 from '../../resources/artboard631.jpeg';
import artboard75 from '../../resources/Artboard75AP.png';
import artboard77 from '../../resources/Artboard77AP.png';
import artboard82 from '../../resources/Artboard82AP.png';
import artboard83 from '../../resources/Artboard83AP.png';

import ap_hogeschool_antwerpen from '../../resources/AP_Hogeschool_Antwerpen.png';
import curso_de_musica from '../../resources/Curso_de_Musica.png';
import dundalk_institute from '../../resources/Dundalk_Institute_of_Technology.jpg';
import speel_je_wijs from '../../resources/Speel je wijs.jpg';
import wnu from '../../resources/WNU.jpg';
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
                           what is happening in the present moment,
                           without any judgement. It is a basic human
                           ability that everyone has, that we can cultivate and train by practice.
                           During mindfulness exercises, we are invited to
                           pay attention to thoughts, sounds, smell, observations,
                           emotions, parts of the body or the sensations of breathing,
                           and to bring our attention back to the object of focus whenever the mind starts to wander.
                           Another form of exercise is not using a specific focus yet training to stay aware of where the
                            attention moves to. A third group of exercises are often called 'informal exercises':
                           we train ourselves by paying more attention to specific actions, situations and interactions in our daily lives.
                           For example, we drink tea, brush our hair, or walk to the next room with our full awareness. </p>

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
                        <div className = {styles.leaves}>
                            <img src={artboard75} />
                        </div>
                    </div>
                </section>
                <section className={styles.second_screen}>
                    <div className={styles.title}>
                        A.M.i.E. Project
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
                <section className={styles.third_screen}>
                    <div className={styles.title}>
                        The different schools that participated in the A.M.i.E. project  
                    </div>
                    <div className = {styles.organisation}>
                        <div className={styles.left}>
                            <img src={ap_hogeschool_antwerpen}/>
                        </div>
                        <div className={styles.right}>
                            <h1>AP University of Applied Sciences and Arts Antwerp, Belgium </h1>
                            <p>A university college in Belgium that offers
                            trainings in many different directions.
                            One of the directions being specialised in teaching primary
                            school children. Most of the students who participated
                            in the AMIE project are from this division.</p>
                        </div>
                        <div className={styles.left}>
                            <img src={curso_de_musica}/>
                        </div>
                        <div className={styles.right}>
                            <h1>Curso de Música Silva Monteiro Porto, Portugal  </h1>
                            <p>A private music school in Porto that offers training courses
                            at the level of Pre-School, First Cycle, Basic Course of Music,
                            Secondary Course of Instrument and Music Training</p>
                        </div>
                        <div className={styles.left}>
                            <img src={dundalk_institute}/>
                        </div>
                        <div className={styles.right}> 
                            <h1>Dundalk Institute of Technology, Ireland</h1>
                            <p>A school in Ireland that is specialised
                            in research and technology. Most of the students
                            who participated in the project are specialised
                            in camera technology and filming.</p>
                        </div>
                        <div className={styles.left}>
                            <img src={speel_je_wijs}/>
                        </div>
                        <div className={styles.right}> 
                            <h1>Speel je Wijs</h1>
                            <p>A one-woman company specialised
                            in STEAM, playful learning and mindfulness
                            in an educational context.</p>
                        </div>
                        <div className={styles.left}>
                            <img src={wnu}/>
                        </div>
                        <div className={styles.right}> 
                            <h1>Western Norway University of Applied Sciences, Norway</h1>
                            <p>A public school in Norway that offers trainings
                            in many different directions. One of the directions
                            being specialised in teaching primary school children.
                            Most of the students who participated in the AMIE project
                            had this speciality.</p>
                        </div>
                    </div>
                </section>
                <section className={styles.fourth_screen}>
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

                        <p>Visit "mindful at school" at <a target="_blank" href="https://www.irmasmegen.com/en/mindful-at-school/"> www.mindfulatschool.com </a>
                        </p>


                    </div>

                    <div className={styles.right}>
                        <img style={{
                            "float": "right"
                        }} src={artboard82} />
                    </div>
                </section> 
                <section >
                    <div className={styles.teams}>
                        <h1>A.M.i.E. team 2020/2021</h1>
                        
                        <h3>Wallace Helsen — Teacher/ Research Team</h3>
                        <p>Primary education teacher in training (Belgium) </p>
                        <p>Founder of the name ‘Calminder’ and author of mindfulness explorations.
                            Spokesperson from the group and voice-over in the promo-video.
                            Contact person for teachers and sponsors.</p>
                        <br></br>


                        <h3>Miruna Maidik — Team leader/Text writer</h3>
                        <p>Advertising student (Romania)</p>
                        <p>The text writer responsible for writing and revising the text of the different exercises.</p>
                        <br></br>


                        <h3>Ayoub Aouraghe — Programmer</h3>
                        <p>Elektronica-ICT Cloud applications student (Belgium)</p>
                        <p>Starting up and programming a platform for children and teachers to explore mindfulness.</p>
                        <br></br>


                        <h3>Amalie Omsland Bakken — Teacher/research team</h3>
                        <p>Primary and lowser secondary education teacher in training (Norway)</p>
                        <p>Responsible for the website's pedagogical perspective, the design of the explorations and collecting and answering FAQs.</p>
                        <br></br>

                        <h3>Alexander Aleksidze — UI/UX Designer/ Graphic designer</h3>
                        <p>Media Arts student (Georgia)</p>
                        <p>The UI/UX designer is responsible for the visual style
                           and the user friendliness of the website. The Graphic Designer is responsible
                            for the presentation, brand book and the promo video. </p>
                        <br></br>

                        <h3>Yaroslav Taran — Music creator</h3>
                        <p>Computer science student (Ukraine)</p>
                        <p>The creator of musical compositions and music for individual exercises.</p>
                        <br></br>

                        <h3>Yeva Bielinska — Programmer</h3>
                        <p>Intelligent technologies of micro- and nanoelectronics (Ukraine)</p>
                        <p>Responsible for the development of the functionally of the front-end part of the site</p>


                        <br></br>
                        <br></br>
                        <br></br>
                        <h1>A.M.i.E. team 2021/2022</h1>

                        <h3>Indy Sluijs — Team leader/Text writer</h3>
                        <p>Communication student (The Netherlands)  </p>
                        <p>The text writer is responsible of revising and rewriting the exercises. The researcher made sure the right researching techniques were used.</p>
                        <br></br>


                        <h3>Yurii Herasin — Programmer and UI/UX Designer</h3>
                        <p>Computer engineering student (Ukraine) </p>
                        <p>The programmer provided a platform for children and teachers to explore mindfulness. The UI/UX designer is responsible for the visual style and the user friendliness of the website.</p>
                        <br></br>


                        <h3>Ana Vilaplana Brotons — Teacher/team leader</h3>
                        <p>Primary education teacher training student (Spain)</p>
                        <p>Responsible for the website's pedagogical perspective, the design of the explorations, collecting and answering FAQs. Leader of the team during meetings and groupwork together with Maria.</p>
                        <br></br>

                        <h3>Maria del Mar Rodriguez — Teacher/team leader</h3>
                        <p>Primary education teacher training student (Spain)</p>
                        <p>Responsible for the website's pedagogical perspective, the design of the explorations, collecting and answering FAQs. Leader of the team during meetings and groupwork together with Ana.</p>
                        <br></br>

                        <h3>Levi Meskens — Contact person</h3>
                        <p>Occupational therapy student (Belgium)  </p>
                        <p>Responsible for creating new exercises and researching teachers' opinions. During the project responsible for keeping in contact with the coaches and the team.</p>


                    </div>
                </section>
            </div>
        </div>
    )
};