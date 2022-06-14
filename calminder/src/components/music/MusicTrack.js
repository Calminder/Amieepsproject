import React from 'react';
import ReactPlayer from 'react-player';
import styles from './music.module.scss';
import { useEffect, useState } from 'react';

function MusicTrack(props) {
    const [musicTrack, setMusicTrack] = useState([]);
    const [index] = useState(props.index);
    ////////////////////////////////////////
    useEffect(() => {
        setMusicTrack(props.track);
    }, []);

    return (

        <div
            className={musicTrack}
            key={index}
        >

            <div className={styles.trackTitle}>
                {musicTrack.title}
            </div>
            <div className={styles.trackPlayer}> {
                <ReactPlayer 
                width='100%'
                height='100%'
                controls={true}
                url={musicTrack.link}  
                />
            }
            </div>
        </div>
    )
};


    export default MusicTrack;
