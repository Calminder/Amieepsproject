import React from 'react';
import styles from './about.module.scss';

import artboard63 from '../../resources/artboard631.jpeg';
import artboard75 from '../../resources/Artboard75AP.png';
import artboard77 from '../../resources/Artboard77AP.png';
import artboard82 from '../../resources/Artboard82AP.png';
import artboard83 from '../../resources/Artboard83AP.png';

import ap_university_antwerp from "../../resources/AP_University_Antwerp.png";
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
                        The different schools & teachers that participated in the A.M.i.E. project  
                    </div>
                    <div className = {styles.organisation}>
                        <div className={styles.left}>
                            <img src={ap_university_antwerp}/>
                        </div>
                        <div className={styles.right}>
                            <h1>AP University of Applied Sciences and Arts Antwerp, Belgium </h1>
                            <p>A university college in Belgium that offers
                            trainings in many different directions.
                            One of the directions being specialised in teaching primary
                            school children. Most of the students who participated
                            in the AMIE project are from this division.</p>
                        </div>
                        <div className = {styles.educators}>
                            <h2>Teachers</h2>
                            <h1>Lieven Vercauteren</h1>
                            <h1>Jeroen Crobeck</h1>
                            <p>Jeroen’s personal experience with mindfulness during his bio-engineering studies inspired him
                            to follow a different professional path. With the intention of bringing mindfulness in education
                            he went on to become a science teacher. Now he teaches both science and mindfulness to students,
                            children and his fellow teachers.</p>
                            <p>Lieven’s long-life interest in personal growth combined with a fascination for the human mind,
                            brought him via psychology to mindfulness as a basic building block on which to build any and
                            all other competences. Currently teaching and coaching students, and offering psychotherapy,
                            he keeps looking for growth opportunities for himself and others.</p>
                            <p>Together they offered both physical and online mindfulness training for the AMIE teachers
                            and students throughout the project and shared their knowledge and experience in many ways.
                            They coordinated the development of this calminder website, the FAQ and the SPOC on the Udemy platform
                            in co-creation with European student teams Furthermore they were responsible for the organisation of the last IP and AMIE conference in Antwerp, Belgium.</p>
                            <div className = {styles.separator}></div>
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
                        <div className = {styles.educators}>
                            <h2>Teachers</h2>
                            <h1>Luisa Caiano</h1>
                            <p>Luisa is a pianist and director of Curso de Música Silva Monteiro.
                            In the AMiE Project she was internal coordinator of the Portuguese team for the project
                            and also coordinated the project from July to October 2022. She participated in all project
                            activities delivering workshops and working on the outputs. </p>
                            <h1>André Ramos</h1>
                            <p>André is composer and flute teacher in CMSM.
                            He was coordinating the output “pedagogical framework”. He also composed music
                            specially for the output “Mindful music making”, recorded and edited the Portuguese
                            video lessons and contributed for the other outputs. He participated in all project activities.</p>
                            <h1>Andreia Volta e Sousa</h1>
                            <p>Andreia is a soprano and choir teacher in CMSM. She worked mainly
                            on the “pedagogical framework” output, recorded video lessons with her classes
                            and music for the “mindful music making” output. She participated in all IP’s delivering workshops and
                            working on the project outputs.</p>
                            <h1>Teresa Seiça</h1>
                            <p>Teresa is a music education and choir teacher in CMSM. She worked mainly
                            on the “pedagogical framework” output and recorded music for the “mindful music making”
                            with her classes. She participated in all IP’s delivering workshops and working on the project outputs.</p>
                            <h1>Rita Barbosa</h1>
                            <p>Rita is a guitar teacher in CMSM. She volunteered in working with the refugees in Bosnia
                            with the AMiE team, for the Drop in the Ocean institution. She participated in 2 IP’s delivering workshops
                            and worked on the project outputs.</p>
                            <h1>Maria José Barros</h1>
                            <p>Maria is a music education teacher for children from 4 to 9 years.
                            In this project she wrote some songs and experiment exercices with her students.
                            She has also participated in two IP delivering workhops. She also worked on project outputs.</p>
                            <h1>Liliana Rocha</h1>
                            <p>Liliana is music education and choir teacher in CMSM. In this project she participated
                            in two IP delivering workhops. She also worked on project outputs.</p>
                            <div className = {styles.separator}></div>
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
                        <div className = {styles.educators}>
                            <h2>Teachers</h2>
                            <h1>Dr Jemma McGourty</h1>
                            <p>Jemma is a chartered psychologist and lectures in Dundalk Institute of Technology in Ireland.
                            Jemma teaches on the Early Childhood Studies degree with an expertise in child development and psychological wellbeing
                            and mental health.</p>
                            <h1>Mr Noel Smyth</h1>
                            <p>As a Digital Media Lecturer at Dundalk Institute of Technology in Ireland, Noel brings a wealth of knowledge
                            and experience in all stages of film and TV production. With a strong background in the industry,
                            Noel is equipped to provide students with valuable insights and the practical skills necessary for success
                            in the ever-evolving world of digital media.</p>
                            <h1>Annalisa Monticelli</h1>
                            <p>Annalisa is a pianist, singer, conductor, and researcher. She is a highly sought-after musician
                            who has performed, taught, and recorded in Europe, Asia, North, and South America as a soloist
                            and with a variety of ensembles. Annalisa brings her broad expertise to a variety of subjects and programmes
                            in DkIT and is Programme Director for the Musical Theatre Programme.</p>
                            <h1>Teresa Seiça</h1>
                            <p>Teresa is a music education and choir teacher in CMSM. She worked mainly
                            on the “pedagogical framework” output and recorded music for the “mindful music making”
                            with her classes. She participated in all IP’s delivering workshops and working on the project outputs.</p>
                            <h1>Rita Barbosa</h1>
                            <p>Rita is a guitar teacher in CMSM. She volunteered in working with the refugees in Bosnia
                            with the AMiE team, for the Drop in the Ocean institution. She participated in 2 IP’s delivering workshops
                            and worked on the project outputs.</p>
                            <h1>Maria José Barros</h1>
                            <p>Maria is a music education teacher for children from 4 to 9 years.
                            In this project she wrote some songs and experiment exercices with her students.
                            She has also participated in two IP delivering workhops. She also worked on project outputs.</p>
                            <h1>Liliana Rocha</h1>
                            <p>Liliana is music education and choir teacher in CMSM. In this project she participated
                            in two IP delivering workhops. She also worked on project outputs.</p>
                            <div className = {styles.separator}></div>
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
                        <div className = {styles.educators}>
                            <h2>Teachers</h2>
                            <h1>Irma Smegen</h1>
                            <p>Irma Smegen is a mindfulness and compassion trainer, with a background in pre-primary,
                             primary and arts- education. She has been working with children her entire life. Along the way,
                             she has balanced various roles: as a primary school and kindergarten teacher, day care leader and drama teacher.
                             For eighteen years, she was a lecturer of drama, arts & culture at the Education department of Stenden University.
                             Now she writes educational books, designs learning tools and is a guest
                             on many conferences and events where she speaks about her methods and the positive effects
                             of it on learning. Playing and playful learning are important ingredients of her work.
                            </p>
                            <a href = "https://www.irmasmegen.com/en/" target = "_blank">
                                https://www.irmasmegen.com/en/
                            </a>
                            <div className = {styles.separator}></div>
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
                        <div className = {styles.educators}>
                            <h2>Teachers</h2>
                            <h1>Jonas Selås Olsen</h1>
                            <p>Jonas is an “all genres” guitarist and musician, working at the Department of Arts Education,
                             Western Norway University of Applied Sciences (HVL). His subjects include ensemble,
                             studio and music technology, pedagogy, music theory and performance. He is currently project coordinator
                             for AMIE (Arts and Mindfulness in Education) and was part of the SPACE Erasmus+ project,
                             but also projects such as «Write a Science Opera» and «Global Science Opera» where he has been
                             a workshop leader in many different countries.</p>
                            <h1>Frode Hammersland</h1>
                            <p>Frode is a bass player and associate professor, working
                             at the Department of Arts Education, Western Norway University of Applied Sciences (HVL).
                             He holds a master in music performance, is an active musician and works
                             mainly with composition, music theory and performance.
                             He takes part in both the WASO project and IMTE project. His study on improvisation
                             focuses on how improvisation can be used as a mediating tool for the integration of performance and music theory.
                             Frode has composed music for the mindful music output and been doing workshops throughout the project.</p>
                            <h1>Marte Aadland Simonsen</h1>
                            <p>Marte is an assistant professor in the arts and crafts education
                             at Western Norway University of Applied Sciences (HVL) and teaches mainly
                             within the kindergarten teacher education. Her educational background
                             includes teacher education in practical and aesthetic subjects, early
                             education pedagogy as well as a master’s degree in Creative subjects and Learning processes (MACREL).
                             Marte brings valuable experience and knowledge to the project and has been especially involved
                             in the creation of sensory rooms and how we can use the materials available physical/digital tools
                             in a creative way that safeguards children’s natural, playful and physical behavior,
                             and that promotes interaction and inclusion.</p>
                            <h1>Anne-Beate Ulveseth Lilletvedt </h1>
                            <p>Anne-Beate is an assistant professor in drama at HVL, Stord,
                             and is also working as a dance pedagogy in the course activities
                             at Spinae Company/Foreininga Spinae Sunnhordland. She has a varying daily life
                             working and teaching the arts dance and drama, both with kids and adults.
                             She is also writing scripts and is active in a local impro-theatre group at Stord (#Småsceneri).
                             At HVL, Anne-Beate is involved in many international art research projects.
                             She is always interested to see how both dance and drama can be combined with pedagogy
                             and the creative way of working which makes it holistic and united for students and children to grasp.</p>
                            <div className = {styles.separator}></div>
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
                        <h1>A.M.i.E. team 2019/2020</h1>
                        
                        <h3>Carmen Segura Jerez — Teacher/research team</h3>
                        <p>Preschool Educator (Spain)</p>
                        <p>Creation of mindful activities and methodology.</p>
                        <br></br>


                        <h3>Marina Vida Sánchez — Teacher/research team</h3>
                        <p>Preschool Educator (Spain)</p>
                        <p>Creation of mindful activities and methodology.</p>
                        <br></br>


                        <h3>Karla Petković — Teacher/research team</h3>
                        <p>Primary Teacher Education (Spain)</p>
                        <p>Creation of mindful activities and methodology.</p>
                        <br></br>


                        <h3>Philipp Proff — Programmer</h3>
                        <p>Print and Media technology (Germany)</p>
                        <p>Building of website prototype.</p>
                        <br></br>

                        <h3>Lynn Theuns — Designer</h3>
                        <p>Graphic and Digital media (Belgium)</p>
                        <p>Responsible for the illustrations of cards and design of the website prototype.</p>
                        
                        <br></br>
                        <br></br>
                        <br></br>
                        
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
                        
                        <br></br>
                        <br></br>
                        <br></br>

                        <h1>A.M.i.E. team 2022/2023</h1>

                        <h3>Aitor Carazo — Social Innovator</h3>
                        <p>Communication student (Spain)</p>
                        <p>Aitor has been mostly helping the team with the organisational aspect,
                        taking into account that through his studies he has worked with event and
                        team organisation he has helped and taught the team members how to lead the project. 
                        He has also helped in the audiovisual aspect of the project, due to his abilities
                        on video editing and audiovisual communication. 
                        </p>
                        <br></br>


                        <h3>Alba Oliveira — Teacher</h3>
                        <p>Primary education teacher training student (Spain)</p>
                        <p>Alba acted for the Calminder videos and also took pictures and
                        did interviews during the AMiE final congress.
                        </p>
                        <br></br>


                        <h3>Amal Geel — European Studies</h3>
                        <p>European Studies student (The Netherlands)</p>
                        <p>Amal finalised the FAQ of the website. Amal thought about what
                        could be useful for people who want to make use of arts and mindfulness in education.
                        This was an interesting task, because it made Amal think about all the different kind of questions.
                        </p>
                        <br></br>

                        <h3>Claudia Alcaide — Teacher</h3>
                        <p>Primary education teacher training student (Spain)</p>
                        <p>Claudia was in charge of taking pictures during the final congress
                         as well as acting in the explanatory videos of the Calminder website.
                        </p>
                        <br></br>

                        <h3>Laura Rühling — Teacher</h3>
                        <p>Special needs education student (Germany)</p>
                        <p>Laura helped the trainers to create 
                        the AMiE SPOC (small private online course) on the Udemy platform.</p>

                    </div>
                </section>
            </div>
        </div>
    )
};