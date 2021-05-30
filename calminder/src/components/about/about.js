import React from 'react';
import styles from './about.module.css';
import one_leaf from '../../resources/Artboard1leaf.png';
import four_leaf from '../../resources/Artboard1leaf 4.png';
import six_leaf from '../../resources/Artboard1leaf 6.png';
import seven_leaf from '../../resources/Artboard1leaf 7.png';
import eight_leaf from '../../resources/Artboard1leaf 8.png';
import nine_leaf from '../../resources/Artboard1leaf 9.png';
import ten_leaf from '../../resources/Artboard1leaf10.png';
import artboard67 from '../../resources/Artboard67pingppongcharacters.png';
import artboard68 from '../../resources/Artboard68pingppongcharacters.png';
import artboard78 from '../../resources/Artboard78pingppongcharacters.png';
import artboard69 from '../../resources/Artboard78pingppongcharacters.png';

export const About =() =>{


    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <h1> Why mindfulness in education?</h1>
            </div>
            <div className={styles.content}>
                <div className={styles.left1}>
                    Mindfulness is the ability to be aware of
                    what is happening in the present
                    moment,without any judgement.It is a
                    basic human ability that everyone has,
                    that we can cultivate and train by prac-
                    tice.During mindfulness exercises,we
                    are invited to pay attention to thoughts,
                    sounds,smell,observations,emotions,
                    parts of the body or the sensations of
                    breathing, and to bring our attention
                    back to the object of focus whenever the
                    mind starts to wander.Another form of
                    exercise is not using a specific focus yet
                    training to stay aware of where the at-
                    tention moves to.A third group of exer-
                    cises are often called 'informal exercis-
                    es':we train ourselves by paying more
                    attention to specific actions, situations
                    and interactions in our daily lives.For
                    example, we drink tea, brush our hair, or
                    walk to the next room with our full
                    awareness.

                    With guidance and training, mindfulness
                    can develop into a way of living that
                    brings greater focus and effectiveness as
                    well as kindness and caring in everything
                    we do.

                    Childhood is an important formative and
                    developmental stage that lays the foun-
                    dation for well-being and mental health
                    in later years and adulthood.The
                    number of school-based programmes
                    that aim to promote well-being and
                    mindfulness, support emotional and
                    social learning and prevent mental
                    health problems in adulthood,is growing.
                </div>
                <div className={styles.richt1}>
                    <img src={artboard69} />
                        <img src={nine_leaf} />
                            <img src={eight_leaf} />
                                <img src={six_leaf} />
                                    <img src={four_leaf} />
                                        <img src={one_leaf}/>
                </div>

                <div className={styles.left2}>
                    <img src={artboard67} />
                </div>
                <div className={styles.right2}>
                    <h1>About the A.M.I.E. Project</h1>
                    Arts and Mindfulness in Education
                    (A.M.i.E.) is an international project, imple-
                    mented in partnership with the Erasmus+
                    programme. The aim of the project is to
                    provide teachers worldwide with inspira-
                    tional, innovative and supportive tools
                    aiding the integration of mindfulness in
                    primary and pre-primary curricula in an
                    easy, fun and sustainable way.

                    The unique feature of the A.M.i.E. project
                    is the fact that it uses the power of the
                    arts and creative processes to cultivate
                    mindfulness in primary and pre-primary
                    school environments.

                </div>

                <div className={styles.container2}>
                    <img src={artboard68} />
                        <div className={styles.wh}>
                            <h1>What is Calminder?</h1>

                            The name "Calminder" shows the different
                            elements of the project.You can recognize
                            the words:calendar, mind and calm,
                            which all are related to mindfulness and
                            the A.M.i.E. project itself.

                            Calminder is an innovative and interactive
                            web-based application that serves as an
                            inspirational tool for teachers in pre-pri-
                            mary and primary education for introduc-
                            ing mindfulness through arts in their daily
                            educational contexts in the form of a
                            weekly calendar containing 'ready-to-go'
                            exercises.

                            Interdisciplinary and internationally com-
                            posed student teams developed this
                            multi-year-based project website under
                            the guidance of Irma Smegen, founder of
                            the company Speel je wijs.Mindfulness
                            training sessions were held with the stu-
                            dents, for a more in-depth perspective
                            about how mindfulness works. These
                            trainings were guided by specialised
                            mindfulness trainers.

                            More information, tools and exercises can
                            be found in Irma Smegen's books which
                            will be published the coming years.

                            (Maybe you can add a link to 'mindful at
                            school' here? www.mindfulatschool.com
                            and make it workable for us so we can add
                            book titles as soon as they are available.)
                        </div>

                        <img src={artboard78} />

                </div>
            </div>
        </div>
);

};