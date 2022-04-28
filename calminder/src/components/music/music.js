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
                        <h1>SoundCloud Music</h1>
                    </div>
                    <div className={styles.main}>
                        <h4>Here you can find our tracks from SoundCloud to listen to and incorporate into your mindfulness practice. Enjoy!</h4>
                        <h1>Piano</h1>
                        <ReactPlayer 
                        width='100%'
                        height='5%'
                        controls={true}
                        url='https://soundcloud.com/project-claminder/conv1-miz1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'  
                        />
                        <h1>Bell</h1>
                        <ReactPlayer 
                        width='100%'
                        height='5%'
                        controls={true}
                        url='https://soundcloud.com/project-claminder/bell?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'  
                        />
                        <h1>Birds in forest</h1>
                        <ReactPlayer 
                        width='100%'
                        height='5%'
                        controls={true}
                        url='https://soundcloud.com/project-claminder/birds-in-forest?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'  
                        />
                        <h1>Rain forest</h1>
                        <ReactPlayer 
                        width='100%'
                        height='5%'
                        controls={true}
                        url='https://soundcloud.com/project-claminder/rain-forest?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'  
                        />
                        <h1>American flute</h1>
                        <ReactPlayer 
                        width='100%'
                        height='5%'
                        controls={true}
                        url='https://soundcloud.com/project-claminder/american-flute?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'  
                        />
                        <h1>Charming nature</h1>
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