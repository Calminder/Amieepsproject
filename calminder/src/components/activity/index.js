import { Card } from '../../cards/card';
import styles from './activity.module.css';
import { getCardById } from '../../services/card.service';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { PlayButton, Timer } from 'react-soundplayer/components';
import { withSoundCloudAudio } from 'react-soundplayer/addons';
import { getCards } from "../../services/firebase.service";
import Header from './header';
import Background from '../../resources/sky.jpg';
const clientId = 'c5a171200f3a0a73a523bba14a1e0a29';
// const resolveUrl = 'https://soundcloud.com/qvenaozv6yzq/grapevocal/s-wSrH0TN9QJv?fbclid=IwAR1O9bmVk5v969rAe8tTv0-Njjs4cZgevTXZR9B_CwUhrseD1WzWdgo4NTg';
var testhaha = true;
const Player = withSoundCloudAudio(props =>
{
    let { track, currentTime } = props;

    return (
        <div className={styles.customplayer}>
            <PlayButton
                className={styles.customplayerbtn}
                onPlayClick={() =>
                {

                }}
                {...props} />
            <h2 className={styles.customplayertitle}>
                {track ? track.title : 'Loading...'}
            </h2>
            <Timer
                className={styles.customplayertimer}
                duration={track ? track.duration / 1000 : 0}
                currentTime={currentTime}
                {...props} />
        </div>
    );
});
function Picture(props)
{
    if (props.warn == "")
    {
        testhaha = true;
    }
    else
    {
        testhaha = false;
    }
    return (
        <div></div>
    );

}
export const Activity = () =>
{
    const { id } = useParams();
    const [cardOpened, setCardOpened] = useState(false);

    /*const card = getCardById(id);*/
    const [card, setCard] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(async () =>
    {
        setLoading(true);
        const cards = await getCards();
        setCard(cards[id]);
        setLoading(false)
    }, []);


    /* const { title, duration, requirmens, age, materials, description, goal } = card;*/

    return (

        card ?

            <div className={styles.shadow}>
                <Header></Header>
                <Player
                    clientId={clientId}
                    resolveUrl={card.musicUrl}
                    onReady={() => console.log('') }
                />

                <div className={styles.wrapper}>
                    <div className={cardOpened ? styles.cardActiveWrapper : styles.cardCloseWrapper}>
                        <Picture warn={card.url} />
                        <div className={styles.cardActive}
                            style={{
                                backgroundImage: testhaha ? `url(${Background})` : `url(${(card.url)})`,
                                backgroundSize: "cover",
                                backgroundPosition: 'center'
                            }}
                        >
                            <div className={styles.close} onClick={() => setCardOpened(false)}>X</div>
                            <div className={styles.title}>
                                picture
                            </div>

                            <div className={styles.value}>

                            </div>
                        </div>
                    </div>

                    <div className={styles.goal}>
                        <h1 className={styles.title}>
                            Activity name
                        </h1>
                        <div className={styles.pic}>

                        </div>
                        <div className={styles.title2}>
                            <span className={styles.text2}>
                                Description
                            </span>
                        </div>
                        <section className={styles.value}>
                            {card.description}
                        </section>

                        <div className={styles.title2}>
                            <span className={styles.text2}>
                                Instructions
                            </span>

                        </div>
                        <div className={styles.value}>
                            {card.instructions}
                        </div>

                    </div>

                    <section className={styles.card}
                        onClick={() => setCardOpened(true)}
                        style={{
                            backgroundImage: testhaha ? `url(${Background})` : `url(${(card.url)})`,
                            backgroundSize: "cover",
                            backgroundPosition: 'center'

                        }}
                    >
                        <div className={styles.output}>
                            <div className={styles.title}></div>
                            <div className={styles.desc}></div>
                        </div>

                    </section>


                    <div className={styles.info}>
                        <div className={styles.item}>

                            <div className={styles.title}>
                                <span className={styles.text}>
                                    Title
                            </span>

                            </div>
                            <div className={styles.desc}>
                                {card.title}
                            </div>
                        </div>

                        <div className={styles.item}>
                            <div className={styles.title}>
                                <span className={styles.text}>
                                    Duration
                            </span>

                            </div>
                            <div className={styles.desc}>
                                {card.duration}
                            </div>
                        </div>



                        <div className={styles.item}>
                            <div className={styles.title}>
                                <span className={styles.text}>
                                    Age
                                     </span>
                            </div>
                            <div className={styles.desc}>
                                {card.age}
                            </div>
                        </div>

                        <div className={styles.item}>
                            <div className={styles.title}>
                                <span className={styles.text}>
                                    Materials
                                     </span>
                            </div>
                            <div className={styles.desc}>
                                {card.materials}
                            </div>
                        </div>

                        <div className={styles.item}>
                            <div className={styles.title}>
                                <span className={styles.text}>
                                    Extra
                            </span>
                            </div>
                            <div className={styles.desc}>
                                <div className={styles.scrolltext}>
                                    {card.extra}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            : null
    )
}