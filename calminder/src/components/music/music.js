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
                        <h2>Piano</h2>
                        <ReactPlayer 
                        width='100%'
                        height='5%'
                        controls={true}
                        url='https://soundcloud.com/project-claminder/conv1-miz1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'  
                        />
                        <h2>Bell</h2>
                        <ReactPlayer 
                        width='100%'
                        height='5%'
                        controls={true}
                        url='https://soundcloud.com/project-claminder/bell?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'  
                        />
                        <h2>Birds in forest</h2>
                        <ReactPlayer 
                        width='100%'
                        height='5%'
                        controls={true}
                        url='https://soundcloud.com/project-claminder/birds-in-forest?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'  
                        />
                        <h2>Rain forest</h2>
                        <ReactPlayer 
                        width='100%'
                        height='5%'
                        controls={true}
                        url='https://soundcloud.com/project-claminder/rain-forest?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'  
                        />
                        <h2>American flute</h2>
                        <ReactPlayer 
                        width='100%'
                        height='5%'
                        controls={true}
                        url='https://soundcloud.com/project-claminder/american-flute?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'  
                        />
                        <h2>Charming nature</h2>
                        <ReactPlayer 
                        width='100%'
                        height='5%'
                        controls={true}
                        url='https://soundcloud.com/project-claminder/charming-nature?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'  
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