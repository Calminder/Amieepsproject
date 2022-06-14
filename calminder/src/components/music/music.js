import React from 'react';
import styles from './music.module.scss';
import { useEffect, useState } from 'react';
import { getMusicTracks } from '../../services/firebase.service';
import MusicTrack from './MusicTrack';

import Header from './header'
export const Music = (props) =>
{
    const [musicTracks, setMusicTracks] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(async () =>
    {
        setLoading(true);
        const tracks = await getMusicTracks(); //here is what I need , took from Firebase
        setMusicTracks(tracks);
        setLoading(false);
    }, []);
    /* */
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
                    </div>
                    <div className={styles.musicTracksLayout}>
                    {
                        loading && <div>Loading...</div>
                    }
                    {
                        !loading 
                        && 
                        <div className={styles.musicTracks}>
                        {
                            musicTracks.map((track, index) => (
                                <div key={track.id}>
                                    <MusicTrack 
                                        track={track}
                                        index={index}
                                    />
                                </div>
                            ))
                        }
                        </div>
                    }
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