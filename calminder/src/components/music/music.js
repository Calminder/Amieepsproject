import React from 'react';
import ReactPlayer from 'react-player'
import styles from './music.module.scss';


import Header from './header'
export const Music = () =>
{
    
    return (
        <div>
            <Header>
            </Header>
            <div className={styles.wrapper}>
                <section className={styles.first_screen}>
                    <div className={styles.title}>
                        <h1>Mindfulness Music</h1>
                    </div>
                    <div className={styles.main}>
                        <p>The music is created by professional musicians around Europe who are involved in the AMIE project. The music is often made in co-creation with students with no Background in music.
                            The musicians took mindfulness as the inspiration and main theme for composing or improvising. 
                            <br></br>You can enjoy the music with your students and use it:
                                <ol>
                                    <li>As a mindful listening exercise</li>
                                    <li>As inspiration or an intro for your own musical activities.</li>
                                    <li>As background music while doing other creative and/or mindfulness exercises.</li>
                                </ol>
                        </p>
                        <h3>Piano</h3>
                        <ReactPlayer 
                        width='100%'
                        height='5%'
                        controls={true}
                        url='https://soundcloud.com/project-claminder/conv1-miz1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'  
                        />
                        <h3>Bell</h3>
                        <ReactPlayer 
                        width='100%'
                        height='5%'
                        controls={true}
                        url='https://soundcloud.com/project-claminder/bell?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'  
                        />
                        <h3>Birds in forest</h3>
                        <ReactPlayer 
                        width='100%'
                        height='5%'
                        controls={true}
                        url='https://soundcloud.com/project-claminder/birds-in-forest?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'  
                        />
                        <h3>Rain forest</h3>
                        <ReactPlayer 
                        width='100%'
                        height='5%'
                        controls={true}
                        url='https://soundcloud.com/project-claminder/rain-forest?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'  
                        />
                        <h3>American flute</h3>
                        <ReactPlayer 
                        width='100%'
                        height='5%'
                        controls={true}
                        url='https://soundcloud.com/project-claminder/american-flute?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'  
                        />
                        <h3>Charming nature</h3>
                        <ReactPlayer 
                        width='100%'
                        height='5%'
                        controls={true}
                        url='https://soundcloud.com/project-claminder/charming-nature?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'  
                        />
                        <h3>Impro#2_MASTER - AMIE</h3>
                        <ReactPlayer 
                        width='100%'
                        height='5%'
                        controls={true}
                        url='https://soundcloud.com/project-claminder/impro2_master-amie?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
                        />
                        <h3>Impro #1 for AMIE</h3>
                        <ReactPlayer 
                        width='100%'
                        height='5%'
                        controls={true}
                        url='https://soundcloud.com/project-claminder/impro1-for-amie?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
                        />
                        <h3>Bossa</h3>
                        <ReactPlayer 
                        width='100%'
                        height='5%'
                        controls={true}
                        url='https://soundcloud.com/project-claminder/bossa?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
                        />
                        <h3>Clapping</h3>
                        <ReactPlayer 
                        width='100%'
                        height='5%'
                        controls={true}
                        url='https://soundcloud.com/project-claminder/clapping1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
                        />
                        <h3>Trad</h3>
                        <ReactPlayer 
                        width='100%'
                        height='5%'
                        controls={true}
                        url='https://soundcloud.com/project-claminder/trad?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
                        />
                        <h3>Romance 4 Hands Piano</h3>
                        <ReactPlayer 
                        width='100%'
                        height='5%'
                        controls={true}
                        url='https://soundcloud.com/project-claminder/romance-4-hands-piano?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
                        />
                        <h3>Grieg 4 Hands Piano</h3>
                        <ReactPlayer
                        width='100%'
                        height='5%'
                        controls={true}
                        url='https://soundcloud.com/project-claminder/grieg-four-hands-piano1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
                        />
                        <h3>C. Saint - Saëns – O Cisne - MASTER</h3>
                        <ReactPlayer
                        width='100%'
                        height='5%'
                        controls={true}
                        url='https://soundcloud.com/project-claminder/c-saint-saens-o-cisne-master1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
                        />
                        <h3>J. Sibelius - Valsa Triste Op.44 Nº1 - MASTER</h3>
                        <ReactPlayer
                        width='100%'
                        height='5%'
                        controls={true}
                        url='https://soundcloud.com/project-claminder/j-sibelius-valsa-triste-op44-n1-master1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
                        />
                        <h3>E. Grieg – A Morte De Asus - MASTER</h3>
                        <ReactPlayer
                        width='100%'
                        height='5%'
                        controls={true}
                        url='https://soundcloud.com/project-claminder/e-grieg-a-morte-de-asus-master?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
                        />
                    </div>
                </section>
                <section >
                    <div className={styles.teams}>
                        <p>Created by A.M.i.E. project team</p>
                    </div>
                </section>
            </div>
            
        </div>
    )
};